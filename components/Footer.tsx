
import React from 'react'
import {FaLinkedin, FaWhatsapp, FaGithub} from "react-icons/fa"
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className='footer'>
                      Dzanibe Media &copy; 2024, All Rights Reserved 
                      <div className='socials'>
                        <a href="https://www.linkedin.com/in/malwande-dzanibe-3550a0261/"  target='_blank'><FaLinkedin className='from-fa'/></a>
                        <a href="https://wa.me/+27748031890" target='_blank'><FaWhatsapp className='from-fa'/></a>
                        <a href="mailto:malwandedza@gmail.com" target='_blank'><SiGmail className='from-fa'/></a>  
                        <a href="https://github.com/Malwande-Dzanibe"target='_blank'><FaGithub className='from-fa'/></a>                                                
                      </div>
    </div>
  )
}

export default Footer