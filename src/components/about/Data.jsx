import React from 'react'

function Data() {
  return (
    <div className="about__info grid">
        <div className="about__box">
           <i class='bx  bx-medal-star-alt about__icon ' ></i> 
            <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">4 Years working</span>
            

        </div> 

        <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
            <h3 className="about__title">Completed </h3>
                <span className="about__subtitle">20+ Projects</span>
           

        </div>

        <div className="about__box">
            <i class='bx  bx-message-bubble-exclamation about__icon'  ></i> 
            <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Online 24/7</span>
            

        </div>
    </div>
  )
}

export default Data
