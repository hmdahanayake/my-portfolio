import React from 'react'
import './Footer.css'

function Footer() {
  return (
   <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Test Name</h1>

        <ul className="footer__list">
           <li>
            <a href="#about" className="footer__link">About</a>
           </li> 

            <li>
            <a href="#projects" className="footer__link">Projects</a>
           </li>

            <li>
            <a href="#testimonials" className="footer__link">Testimonials</a>
           </li>
        </ul>

        <div className="footer__social">
            <a href='https://www.instagram.com/' className='footer__social-icon' target='_blank'>
            <i class='uil uil-instagram'></i>
        </a>
        <a href='https://www.github.com/' className='footer__social-icon' target='_blank'>
            <i class='uil uil-github-alt'></i>
        </a>
       <a href='https://www.instagram.com/' className='footer__social-icon' target='_blank'>
            <i class='uil uil-instagram'></i>
        </a>
        <a href='https://www.github.com/' className='footer__social-icon' target='_blank'>
            <i class='uil uil-github-alt'></i>
        </a>
        </div>
        <span className='footer__copy'>&#169; Test Name. All rights reserved.</span>
    </div>
   </footer>
  )
}

export default Footer
