import React, { useEffect, useState } from 'react';
import formatDateAndTime from '../utils/formatDateAndTime';
import fetchWeather from '../api/fetchWeatherApi';
import { FiWind } from "react-icons/fi";
import { BsDropletHalf } from "react-icons/bs";
import { BsThermometerHalf } from "react-icons/bs";

const WeatherWidget = () => {

  const [weatherData, setWeatherData] = useState();
  const [dateTime, setDateTime] = useState();

  useEffect(() => {
    fetchWeather().then((data) => {
      const { temp_c, condition, pressure_mb, wind_kph, humidity } = data.current;
      console.log(condition.text);
      setWeatherData({
        temperature: temp_c,
        condition: condition.text,
        thumbnail: condition.icon,
        pressure: pressure_mb,
        wind: wind_kph,
        humidity,
      });
      
      console.log(data);
    });
    // formating date and time to human readable form,func defined inside the utils folder
    const { date, time } = formatDateAndTime();
    setDateTime({ date, time });
  }, [])

  return (
    <div className=''>
      <div className='bg-pink-500 h-7 flex justify-between p-1 bg-cover rounded-t-2xl'>
        { dateTime && (
          <>
            <p className='font-bold'>{dateTime.date}</p>
            <p className='font-bold'>{dateTime.time}</p>
          </>
        )}
      </div>
        <div className='flex justify-between p-1 bg-blue-950 rounded-b-2xl mb-0'>
          { weatherData ? (
            <>
              <div className='max-w-12 items-center ml-3 text-center my-4'>
                <img src={weatherData.thumbnail} alt="ThumbNail" className='h-10'/>
                <p className='text-xl'>{weatherData.condition}</p>
                </div>

                <div className='text-7xl text-slate-500 my-4 font-thin'>|</div>

                <div className='items-center my-4'>
                  <div className='font-semibold text-4xl'>{weatherData.temperature}°C</div>
                  <div className='my-4 flex text-center items-center mb-0'>
                    <div className='text-3xl'>
                      <BsThermometerHalf />
                    </div>
                    <div className='text-sm'>
                      {weatherData.pressure} mb
                      <p>Pressure</p>
                    </div>
                  </div>
                </div>

                <div className='text-7xl text-slate-500 my-4 font-thin'>|</div>

                <div className='my-4'>
                  <div className='flex text-center items-center mr-2'>
                    <div className='mr-2 text-3xl'>
                      <FiWind />
                    </div>
                    <div className='text-sm'>
                      {weatherData.wind} km/h
                      <p>Wind</p>
                    </div>
                  </div>
                  <div className='flex my-4 mr-2 text-center items-center'>
                    <div className='mr-2 text-3xl'>
                      <BsDropletHalf />
                    </div>
                    <div className='text-sm'>
                      {weatherData.humidity}%
                      <p>Humidity</p>
                    </div>
                  </div>
                </div>
            </>
          ) : (
            <div>loading...</div>
          )}
        </div>
      
    </div>
  )
}

export default WeatherWidget
