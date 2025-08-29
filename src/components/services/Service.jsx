import React, { useState } from 'react'
import './Service.css'

function Service() {
       const [toggleState , setToggleState] = useState(0);
       const toggleTab = (index) =>{
        setToggleState(index);
       };

  return (
 
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I Offer</span>

        <div className="services__container container grid">
            <div className="services_content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Frontend <br/> Development</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i></span>
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services modal-title">Frontend Developer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing quality work to clients & companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I develop responsive and interactive user interfaces.
                                </p>
                            </li> 

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I create clean, maintainable web page code.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                  UX interactions for seamless user experience.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I ensure your brand identity is consistent online.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I deliver modern layouts and design elements for web applications.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div> 
{/*************************************************************** */}
            <div className="services_content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Landing Page Design <br/> & UI/UX</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>View More
                    <i className="uil uil-arrow-right services__button-icon"></i></span>
                 <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                       <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services modal-title">UI/UX Designer</h3>
                        <p className="services__modal-description">
                            Service with more than 3 years of experience. Providing quality work to clients & companies.
                        </p>
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I craft intuitive user interfaces for landing pages and web apps.
                                </p>
                            </li> 

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   Design wireframes & mockups for better visualization.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I enhance UX elements to improve user engagement.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I maintain brand consistency across all designs.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I create interactive and visually appealing layouts.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
     {/************************************************ */} 
     <div className="services_content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Fullstack <br/>Web Development </h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>View More 
                    <i className="uil uil-arrow-right services__button-icon"></i></span>
                 <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)}className="uil uil-times services__modal-close"></i>
                        <h3 className="services modal-title">Fullstack Developer</h3>
                        <p className="services__modal-description">
                           Service with more than 3 years of experience. Providing quality work to clients & companies.
                        </p> 
                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   I develop end-to-end web applications.
                                </p>
                            </li> 

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                    I integrate frontend and backend seamlessly.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                 I ensure responsive and optimized performance.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                   Implement db and API solutions for functionality.
                                </p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">
                                  I provide maintainable code and scalable solutions.
                                </p>
                            </li>


                        </ul>
                    </div>
                </div>
            </div>
            {/****************************************** */}      
        </div>
    </section>
  )
}

export default Service
