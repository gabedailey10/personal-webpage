import React from 'react'
import './Footer.css'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer>
      <SocialIcon url='https://github.com/gabedailey10' className='icon'/>
      <SocialIcon url='https://www.linkedin.com/in/gabe-dailey-7932a2126/' className='icon'/>
      <SocialIcon url='https://leetcode.com/gab223/' className='icon'/>
      <SocialIcon url='https://www.instagram.com/gabe_dailey/' className='icon'/>
    </footer>
  )
}

export default Footer
