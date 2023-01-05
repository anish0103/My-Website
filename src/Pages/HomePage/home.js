import { React } from "react";
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

import SEO from '../../Components/SEO/SEO'
import ProfilePhoto from '../images/myimage.png'
import './homepage.css';

const HomePage = () => {
    return (
        <>
            <SEO
                title="Anish Patel"
                description="A Full Stack Developer who specializes in JavaScript Technologies across the whole stack (Node, Express, React, React Native). Experience building complete web and mobile applications with backend API Systems." />
            <div className="sliderpage"></div>
            <div className="homepage-maincontainer">
                <div className="leftsidecontainer"></div>
                <div className="homepage-leftcontainer">
                    <div className="homepage-imagecontainer">
                        <img src={ProfilePhoto} alt="Anish Patel" />
                    </div>
                </div>
                <div className="homepage-rightcontainer">
                    <div className="homepage-namecontainer">
                        <h2 className="orangecolor nameText">I'M ANISH PATEL</h2>
                        <h2><Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('')
                                    .pauseFor(550)
                                    .deleteAll()
                                    .typeString('WEB DEVELOPER')
                                    .pauseFor(2000)
                                    .deleteAll()
                                    .typeString('MERN STACK DEVELOPER')
                                    .pauseFor(250)
                                    .start();
                            }}
                        /></h2>
                    </div>
                    <div className="homepagecontentcontainer">
                        <p>I enjoy taking complex problems and turning them into simple and beautiful interface websites. I also love the logic and structure of coding and always solve to write elegant and efficient code.</p>
                    </div>
                    <div className="homepage-buttoncontainer">
                        <Link to="/about">MORE ABOUT ME<div className="homepage-buttonarrow"><KeyboardArrowRightRoundedIcon /></div></Link>
                    </div>
                </div>
            </div>
        </>
    );
}



export default HomePage;