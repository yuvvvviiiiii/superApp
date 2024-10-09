import React, { useEffect, useState } from 'react';
import fetchNews from '../api/fetchNewsApi';
import formatDateAndTime from '../utils/formatDateAndTime';

const NewsWidget = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    fetchNews().then((data) => {
      if(data.status === 'ok'){
        const randomIndex = Math.floor(Math.random() * data.articles.length)
        setNews(data.articles[randomIndex]);
      }
    })
  }, []);

  const renderPublishedAt = (timestamp) => {
    const { date, time } = formatDateAndTime(timestamp);
    return `${date} || ${time}`;
  }

  return (
    <div className='container'>
      
      <>
        <div className='h-full'>
         <div className='imageContainer'>
         <img className='bg-cover rounded-xl newsImage' src={news?.urlToImage} alt="News Image" />
          <div className="newstitle">
          <p className='text-white text-lg font-bold p-2'>{news?.title}</p>
          <p className='text-white text-xs font-medium p-2'>{renderPublishedAt(news?.publishedAt)}</p>
          </div>
         </div>
          <div className='bg-white rounded-b-xl min-h-36'>
            <p className=' rounded-lg p-2 font-medium'>{news?.description}</p>
          </div>
          
        </div>
        
      </>
    </div>
  )
}

export default NewsWidget
