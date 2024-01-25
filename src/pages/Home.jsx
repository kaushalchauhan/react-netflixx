import React from 'react'
import Hero from '../components/Hero'
import MovieRow from '../components/MovieRow';
import endPoints from '../services/movieServices';

const Home = () => {
  return (
    <>
        <Hero />
        <MovieRow title="upcoming" url={endPoints.upcoming}/>
        <MovieRow title="trending" url={endPoints.trending}/>
        <MovieRow title="top rated" url={endPoints.topRated}/>
        <MovieRow title="comedy" url={endPoints.comedy}/>
        <MovieRow title="popular" url={endPoints.popular}/>

    </>
  )
}

export default Home;