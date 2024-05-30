import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/carousel.css'; // Ensure this line imports your custom CSS
// import MusicPlayer from './music-player';

const Carousel = ({ data, setTrack }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const handleClick = (d) => {
    setTrack(d);
  }
  return (
    <div className='px-20 m-auto'>
      <div className="mt-20">
        {data.length > 0 && (
          <Slider {...settings}>
            {data.map((d) => (
              <div key={d.name} className="bg-[black]  text-white rounded-xl">
                <div className='h-80 flex justify-center items-center rounded-t-xl overflow-hidden'>
                  {/* <img src={d.img} alt="" className="relative object-cover h-full w-full" /> */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center filter blur-lg "
                      style={{ backgroundImage: `url(${d.img})` }}
                    ></div>
                    {/* Foreground Image */}
                    <img src={d.img} alt={d.name} className="relative z-10 max-w-full max-h-full p-2  rounded-md transform transition-transform duration-300 hover:scale-110" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold">{d.name}</p>
                  <p> {d.desc}</p>
                  <button onClick={() => { handleClick(d) }} className='bg-red-500 text-[whitesmoke] text-lg px-6 py-1 rounded-xl'>Play</button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default Carousel;
