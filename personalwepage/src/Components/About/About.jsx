import React from 'react'
import './About.css'
import thoImage from '../../images/tho.PNG';
import three from '../../images/three.jpg'
;

const About = () => {
  return (
    <div className='container'>
      <div className='pics'>
      <img src={thoImage} alt='' className='img-style'/>
      <img src={three} alt='' className='img-style'/>
      </div>
      <div className='bio'>
      <p>Front-End Developer specializing in HTML, CSS, JavaScript, and React. BS Administration at NCSU.</p>
      </div>
    </div>
  )
}

export default About
