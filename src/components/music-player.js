import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
// import YouTube from 'react-youtube';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = ({ track }) => {
  // const handleClickNext = () => {
  //   console.log('click next')
  //     // setTrackIndex((currentTrack) =>
  //     //     currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
  //     // );
  // };
  // const handleEnd = () => {
  //   console.log('end')
  //   setTrackIndex((currentTrack) =>
  //           currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
  //       );
  // }
  return (
    <div className=''>
      {
        track &&
        <AudioPlayer
          header={track.name}
          src={track.track}
          volume={0.5}
        />
      }
    </div>
  )
  // const videoId = track.split('v=')[1];

  // const opts = {
  //   height: '390',
  //   width: '640',
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  // return <YouTube videoId={videoId} opts={opts} />;
}

export default MusicPlayer