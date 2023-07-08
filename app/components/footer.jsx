import React from 'react'
import { AiFillLinkedin , AiOutlineGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container' >
      <p>2023 Shayan All Rights Reserved</p>
      <p className='icons' >
        <AiFillLinkedin />
        <AiOutlineGithub />
      </p>
    </div>
  )
}

export default Footer