import axios from "axios";
import React, { useEffect, useState } from "react";
import endPoints, { createImgURL } from "../services/movieServices";
const Hero = () => {
    const [movie, setmovie ] = useState({});
    useEffect(()=>{
        axios.get(endPoints.popular).then((res)=>{
            const movies = res.data.results;
            // console.log(movies);
            const randomMovie = movies[Math.floor(Math.random() * movies.length)]
            setmovie(randomMovie)
        })
    },[])


    if(!movie){
        return <div>fetching movie...</div>
    }

    const elipss = (str, len)=>{
        if(!str) return "";
        return str.length > len ? str.slice(0, len) + "..." : str;
    }

    const {backdrop_path,overview ,release_date,title} = movie;
  return (
    <div className="w-full h-[550px] lg:h-[850px]">
        <div className="h-full w-full">
            <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
            <img className="w-full h-full object-cover object-top" src={`${createImgURL(backdrop_path,'original')}`} alt={title} />

            <div className="absolute w-full top-[15%] lg:top-[35%] p-4 md:p-8">
                <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
                <div className="mt-8 mb-4">
                    <button className="capitalize border bg-gray-300 rounded py-2 px-5 text-black hover:bg-gray-500 hover:border-gray-500 transition-all duration-300">play</button>
                    <button className="capitalize border border-gray-300 hover:bg-red-600 hover:border-red-600 py-2 px-5 ml-4 rounded transition-all duration-300">watch later</button>
                </div>
                <p className="text-gray-400 text-sm">{release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">{elipss(overview,165)}</p>
            </div>

        </div>
    </div>
  )
}

export default Hero;