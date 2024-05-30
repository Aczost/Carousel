import React from 'react';
import logo from '../assets/cd.png';

const Header = () => {
  return (
    <div className=' flex items-center gap-5 bg-[whitesmoke] px-10'>
      <img src={logo} alt="Logo" width={100} height={5}/>
      <p className='text-xl'>Amit ka project</p>
    </div>
  );
}

export default Header;
