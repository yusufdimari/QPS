import React from 'react';
import './Logo.css';
import { logo1 } from '../../assets'; // Update the path to your actual image

const Logo = () => {
  return (
    <div className='logo'>
      <div className="icon__container">
        <img src={logo1} alt="QPseekers Logo" className="logo__image" />
      </div>
      <h1 className="name">QP<span>seekers</span></h1>
    </div>
  );
};

export default Logo;
