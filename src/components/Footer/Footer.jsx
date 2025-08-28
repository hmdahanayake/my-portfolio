import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Hasini Dahanayake</h1>

        <ul className="footer__list">
           <li>
            <a href="#about" className="footer__link">About</a>
           </li> 

            <li>
            <a href="#portfolio" className="footer__link">Portfolio</a>
           </li>

            <li>
            <a href="#skills" className="footer__link">Skills</a>
           </li>
        </ul>

        <div className="footer__social">
           <a href='https://www.youtube.com/@Coding_With_Nexus' className='home__social-icon' target='_blank'>
            <i class='uil uil-youtube'></i>
        </a>
        <a href='https://www.github.com/' className='home__social-icon' target='_blank'>
            <i class='uil uil-github-alt'></i>
        </a>
       <a href='https://www.instagram.com/' className='home__social-icon' target='_blank'>
            <i class='uil uil-instagram'></i>
        </a>
        <a href='https://www.tiktok.com/@coding.with.nexus' className='home__social-icon' target='_blank'>
            <i class='uil uil-tiktok'></i>
        </a>
        </div>
        <span className='footer__copy'>&#169; Hasini Dahanayake. All rights reserved.</span>
    </div>
   </footer>
  )
}

export default Footer
