import React from 'react'
import './Baner.css'
import BanerImg from '../assest/BanerImg.png'

const Baner = () => {
  return (
    <div className='banerContainer'>
        <img src={BanerImg} alt="" />
    </div>
  )
}


export default Baner