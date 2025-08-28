import React, { useState } from "react";
import "./qualification.css";

function qualification() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualifications__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() =>toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div    className={
              toggleState === 2
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button button--flex"
            }
            onClick={() =>toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" :
             "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Diploma in IT </h3>
                <span className="qualification__subtitle">University of Colombo School of Computing</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2017 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/***************************** */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web development Short Course</h3>
                <span className="qualification__subtitle">University of Moratuwa</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>
            </div>

            {/************************************ */}
            {/*************************************** */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Diploma in IT</h3>
                <span className="qualification__subtitle">Web development Short Course</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/***************************** */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor Information Technology</h3>
                <span className="qualification__subtitle">University of Colombo School of Computing</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2018 - 2021
                </div>
              </div>
            </div>
          </div>
          {/************** second qulification section  */}
          <div className={toggleState === 2 ? "qualification__content qualification__content-active" :
             "qualification__content" }>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Operator - Postpaid Connections</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">SriLanka Mobitel (Pvt)Ltd
                  <i className="uil uil-calendar-alt"></i>2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/***************************** */}
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Inter Software Engineer</h3>
                <span className="qualification__subtitle">NCINGA</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2023
                </div>
              </div>
            </div>

            {/************************************ */}
            {/*************************************** */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Freelancing</h3>
                <span className="qualification__subtitle"></span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/***************************** */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default qualification;
