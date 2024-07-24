import React, { useState } from 'react';
import './Baner.css';
import BanerImg from '../assest/BanerImg.png'; 
import Images from '../assest/images.png'; 

const Baner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [Images, BanerImg]; 

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='banerContainer'>
      <div className='imageWrapper'>
        <img
          src={images[currentIndex]}
          alt="Banner"
          className='fade-in'
        />
      </div>
      <button className='navButton left' onClick={handlePrevious}>‹</button>
      <button className='navButton right' onClick={handleNext}>›</button>
    </div>
  );
}

export default Baner;