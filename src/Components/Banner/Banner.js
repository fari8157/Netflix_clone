import React, { useEffect, useState } from 'react'
import "./Banner.css"
import axios from '../../axios'
import { Api_key } from '../constant/contant'
import { imageUral } from '../constant/contant'
function Banner() {
    const [movie,setMovie]=useState()
    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * 19)
        console.log( randomIndex );
    axios.get(`trending/all/week?api_key=${Api_key}&language=en-US`).then((response)=>{
       
       
        setMovie(response.data.results[randomIndex])
    })
    },[])
  return (
      <div 
      style={{backgroundImage:`url(${movie ? imageUral+ movie.backdrop_path :""})`}}
         className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ""}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ""}</h1>
            </div>
        <div className="fade_bottom"></div>
       
        </div>

    )
}

export default Banner
