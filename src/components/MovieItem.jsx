import { useState } from "react";
import { createImgURL } from "../services/movieServices";
import {FaHeart, FaRegHeart} from 'react-icons/fa'

const MovieItem = ({movie}) => {
    const {backdrop_path,title,poster_path} = movie;
    const [like,setLike] = useState(false);
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 ">
        <img title={title} className="w-full h-40 block object-cover object-top" src={createImgURL(backdrop_path ?? poster_path,"w500")} alt={title} />
        <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100 transition-all duration-300">
            <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">{title}</p>
            <p>{like? (<FaHeart size={20}className="absolute top-2 left-2 text-gray-300"/>) : (<FaRegHeart  size={20}className="absolute top-2 left-2 text-gray-300"/>)}</p>
        </div>
    </div>
  )
}

export default MovieItem;