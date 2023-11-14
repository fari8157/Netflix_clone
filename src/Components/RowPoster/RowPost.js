import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import "./RowPost.css"
import axios from '../../axios'
import { imageUral, Api_key } from '../constant/contant'
import toast, { Toaster } from 'react-hot-toast'
function RowPost(props) {
  const [pop, setPop] = useState(false);

  const [movie, setMovie] = useState([]);
  const [urlId, sateUrlId] = useState("")
  useEffect(() => {
    axios.get(props.url).then(response => {
      setMovie(response.data.results)
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };


  const handleMovie = (id) => {

    axios.get(`/movie/${id}/videos?api_key=${Api_key}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        sateUrlId(response.data.results[0])
        setPop(true);

      } else {
        // alert("no trailer available")
        toast.error("no trailer available")
      }

    }).catch((e) => {
      console.log(e.message);
      //  alert("no trailer available")
      toast.error("no trailer available")

    })
  }
  const closeVideo = () => {
    setPop(false)
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {movie.map((obj) =>

          <img onClick={() => { handleMovie(obj.id) }} className={props.isSmall ? "smallPoster" : 'poster'} alt='poster' src={`${imageUral + obj.backdrop_path}`} />
        )}
        <Toaster />
      </div>
      {pop &&

        <div className="video-popup">
          <button className="close-button" onClick={closeVideo}>
            X
          </button>
          <div className="video-content">

            < Youtube videoId={urlId.key} opts={opts} />
            <h2 className='video-title'>{urlId.name}</h2>

          </div>
        </div>}

      {/* { urlId && <Youtube  opts={opts} videoId={urlId.key} />} */}
    </div>
  )
}

export default RowPost
