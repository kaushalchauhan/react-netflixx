import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { db } from '../services/firebase'
import { createImgURL } from '../services/movieServices'
import { arrayRemove, doc, onSnapshot, updateDoc } from 'firebase/firestore'
import MovieItem from '../components/MovieItem'


const Profile = () => {
  const [movies, setMovies] = useState([])
  const { user } = UserAuth();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, 'users', `${user.email}`), (doc) => {
        if (doc.data()) setMovies(doc.data().favShows)
      })
    }
  }, [user?.email])


  const removeFavShow = async (movieId) => {
    console.log('Removing movie with ID:', movieId);
    try {
      const userDoc = doc(db, 'users', user.email);
      await updateDoc(userDoc, {
        favShows: arrayRemove(movieId)
      });
      console.log('Movie removed successfully');
    } catch (error) {
      console.error('Error removing movie from favorites:', error.message);
    }
  };


  const slide = (offset) => {
    const slider = document.getElementById("slider")
    slider.scrollLeft += offset;
  }
  if (!user) {
    return (
      <>
        loading...
      </>
    )
  }
  const isOnProfilePage = true;
  return (
    <>
      <div>
        <div>
          <img className='block w-full h-[500px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_small.jpg" alt="" />
          <div className='bg-black/60 fixed top-0 left-0 w-full h-[500]' />
        </div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-nsans-bold my-2'>My Fav Shows</h1>
          <p className='font-nsans-light text-gray-400 text-lg'>{user?.email}</p>
        </div>
        {/* movie row */}
        <h2 className="font-nsans-bold md:text-xl p-4 capitalize">favshows</h2>
        {movies.length > 0 ? (
          <p className="font-nsans-bold md:text-xl p-4 capitalize">No fav shows</p>
        ) : (
          <div className="relative flex items-center group">
            <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
            <div id={`slider`} className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
              {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} isLiked={true} onRemove={isOnProfilePage ? () => removeFavShow(movie.id) : undefined} />
              ))}
            </div>
            <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
          </div>
        )}

      </div>
    </>
  )
}

export default Profile