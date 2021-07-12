import { React, useEffect } from "react";
import AOS from 'aos';

import './CSS/aboutpage.css';
import Image from './images/aboutimage.jpeg';
import Card from "../Components/card";
import Html from './images/html.png';
import Css from './images/css.png';
import Js from './images/js.png';
import Reactimg from './images/react.png';
import ReactNative from './images/react.png';
import Node from './images/node.png';
import Express from './images/express.png';
import Mongo from './images/mongo.png';
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
                  <a href="https://drive.google.com/file/d/17zppPjDZh9PzoQTmqz93qy89cJQceOkI/view?usp=sharing" rel="noreferrer" target='_blank'>VIEW CV</a>
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
          <Card src={Html} alt='Html logo' >HTML</Card>
          <Card src={Css} alt='Html logo' >CSS</Card>
          <Card src={Js} alt='Html logo' >JS</Card>
          <Card src={Reactimg} alt='Html logo' >REACT JS</Card>
          <Card src={ReactNative} alt='Html logo' >REACTNATIVE</Card>
          <Card src={Node} alt='Html logo' >NODE JS</Card>
          <Card src={Express} alt='Html logo' >EXPRESS JS</Card>
          <Card src={Mongo} alt='Html logo' >MONGO DB</Card>

        </div>

      </section>
    </section>
  );
}

export default AboutPage;
