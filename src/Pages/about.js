import { React, useEffect } from "react";
import AOS from 'aos';

import './CSS/aboutpage.css';
import { LanguagesKnown } from "../Data/data";
import Image from './images/aboutimage.jpeg';
import Card from "../Components/card";
import "aos/dist/aos.css";

const AboutPage = () => {

  useEffect(() => {
    AOS.init({
      offset: 210,
      delay: 300,
      duration: 1000,
    });
  }, []);

  return (
    <section className='about-main-container'>
      <section className='about-me-container'>
        <div className='about-me'>
          <div data-aos={"fade-right"} className='about-me-text'>
            <h1>About Me</h1>
          </div>
          <div className='about-me-content-container'>
            <div className='about-image'>
              <div data-aos={"fade-right"} className='circleimage'>
                <img src={Image} alt='My Photo' />
              </div>
            </div>
            <div className='about-content'>
              <div data-aos={"fade-up"} className='content'>
                <h1>I enjoy taking complex problems and turning them into simple and beautifull interface websites. I also love the logic and structure of coding and always solve to write elegant and efficient code. </h1>
                <h1>When Im not coding or pushing pixels, you'll find me in the gym or on the count of shooting some hoops.</h1>
                <div className='about-button'>
                  <a href="https://drive.google.com/file/d/1tAbSXfYlKS6SaYSLHQIGLd1EdzPHxxMs/view?usp=sharing" rel="noreferrer" target='_blank'>VIEW CV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='language-main-container'>
        <div data-aos={"fade-right"} className='laguages-known-text'>
          <div>
            <h1>Languages Known</h1>
          </div>
        </div>
        <div data-aos={"fade-down"} className='langauges-card'>
          {LanguagesKnown.map((data, index) => <div key={index}><Card id={index} name={data} /></div>)}
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
