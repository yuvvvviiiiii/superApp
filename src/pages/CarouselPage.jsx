import React from 'react'
import NewsWidget from '../components/NewsWidget'
import WeatherWidget from '../components/WeatherWidget';
import ProfileWidget from '../components/ProfileWidget';

const CarouselPage = () => {
  return (
    <div className='bg-black flex min-h-screen min-w-screen'>
      {/* left portion */}
      <div className='w-[1038px] h- flex'>
        <div className='w-[507px]'>
          <div className='bg-indigo-600 flex my-5 ml-10 rounded-3xl'>
            <ProfileWidget/>
          </div >
          <div className='text-white rounded-xl ml-10 items-center text-center'>
            <WeatherWidget/>
          </div>
        </div>
        <div className='bg-yellow-400 h-[480px] my-5 w-[470px] rounded-2xl ml-6'>
        notepad
        </div>
      </div>
      {/* right portion */}
      <div className='w-[464px] my-5 ml-auto mr-10 rounded-xl items-center border-4 border-transparent transition-transform transform hover:scale-105'>
      <NewsWidget/>
      </div>
    </div>
  )
}

export default CarouselPage;
