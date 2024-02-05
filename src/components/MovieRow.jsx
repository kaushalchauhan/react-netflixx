import axios from "axios";
import { useEffect, useState } from "react"
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'


const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const rowId = Math.floor(Math.random() * 1000)
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results)
    })
  }, [url])

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId)
    slider.scrollLeft += offset;
  }

  return (
    <>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft onClick={() => slide(-500)} className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
        <div id={`slider` + rowId} className="h-full w-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight onClick={() => slide(500)} className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer" size={40} />
      </div>
    </>
  )
}

export default MovieRow