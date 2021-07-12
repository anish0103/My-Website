import { React, useEffect } from "react";
import AOS from 'aos';
import Typewriter from 'typewriter-effect';

import Image from './images/myimage.jpg'
import './CSS/homepage.css';
import "aos/dist/aos.css";

const HomePage = () => {

    useEffect(() => {
        AOS.init({
            offset: 210,
            delay: 300,
            duration: 1000,
        });
    }, []);

    return (
        <div className='maincontainer'>
            <div className='imgcontainer' data-aos={"fade-right"} >
                <img className='image' src={Image} alt='Anish' />
            </div>
            <div className='contentcontainer'>
                <div className='home-content'>
                    <div data-aos={"fade-up"}>
                        <h3>Hello, my name is</h3>
                    </div>
                    <div data-aos={"fade-up"}>
                        <h1>Anish Patel</h1>
                    </div>
                    <div data-aos={"fade-up"}>
                        <h2><div className='content-padding'>And I'm a</div> <div className='color'><Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('')
                                    .pauseFor(550)
                                    .deleteAll()
                                    .typeString(' Web Developer')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString(' MERN Stack Developer')
                                    .pauseFor(250)
                                    .start();
                            }}
                        /></div></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}



export default HomePage;