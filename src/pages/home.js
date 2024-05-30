import React, { useState } from 'react'
// import Header from '../components/header'
import Carousel from '../components/carousel'
import { data } from '../enum/data/music'
import MusicPlayer from '../components/music-player'

import YouTube from 'react-youtube';


const Home = () => {
  const [track, setTrack] = useState(null);
  return (
    <div className='h-screen'>
      {/* <Header/> */}
      <Carousel data={data} setTrack={setTrack}/>
      <div className='fixed bottom-0 w-full'>
      <MusicPlayer track={track}/> 
      </div>
      
    </div>
  )
}

export default Home