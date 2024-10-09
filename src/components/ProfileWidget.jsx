import React, { useEffect, useState } from 'react';
import imageProfile from '../assets/image14.png';

const ProfileWidget = () => {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGeneres, setSelectedGeneres] = useState([]);

  useEffect(() => {
    const currUser = JSON.parse(localStorage.getItem("user")) || [];
    const selectedGeneres = JSON.parse(localStorage.getItem("selectedMovies")) || [];

    const getUser = () => {
      const userData = {
        name: currUser.name || "Name",
        username: currUser.username || "UserName",
        email: currUser.email || "Email",
        selectedMovies: selectedGeneres
      };
      setUser(userData);
      setSelectedGeneres(selectedGeneres);
      setIsLoading(false);
    }
    console.log(selectedGeneres.slice(0,4));
    getUser();
  }, [])

  return (
    (<div className='flex'>
      <div className='avatar p-2'>
        <img src={imageProfile} alt="User Avatar" className='avatarImg'/>
      </div>
      <div className='text-white p-2 ml-4 text-start'>
        <p className='text-4xl my-2'>{user?.name}</p>
        <p className='font-3xl  my-1'>{user?.email}</p>
        <p className='text-5xl'>{user?.username}</p>

        <div className='grid grid-cols-2 gap-x-20 gap-y-5 my-6 w-60'>
        {selectedGeneres.slice(0, 4).map((genere, index) => (
            <button
              key={index}
              className=' bg-violet-400 text-white h-8 w-36 rounded-full text-xl '
            >
              {genere.movie}
            </button>
          ))}
          {/* {selectedGeneres.slice(0,4).map((genere, index) => {
            <di key={index} className=' bg-green-500 text-white h-7 w-28 rounded-full'>
              {genere.movie}
            </di>
          })} */}
        </div>
      </div>
    </div>)
  )
}

export default ProfileWidget
