import { React, useEffect } from "react";
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ProfilePhoto from '../images/myimage.png'
import Resume from './Resume.pdf'
import SEO from "../../Components/SEO/SEO";
import { LanguagesKnown } from "../../Data/data";
import Card from "../../Components/LanguagesCard/card";
import './aboutpage.css';

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <SEO
        title="About Anish Patel"
        description="A Full Stack Developer who specializes in JavaScript Technologies across the whole stack (Node, Express, React, React Native). Experience building complete web and mobile applications with backend API Systems." />
      <div className="sliderpage"></div>
      <div className="aboutpage-maincontainer">
        <div className="titlecontainer">
          <h1>ABOUT <span className="orangecolor">ME</span></h1>
          <span className="title-background">RESUME</span>
        </div>
        <h3>PERSONAL INFOS</h3>
        <div className="aboutpage-personcontainer">
          <div className="aboutpage-personleftcontainer">
            <div className="aboutpage-imagecontainer">
              <img src={ProfilePhoto} alt="Anish Patel" />
            </div>
          </div>
          <div className="aboutpage-personrightcontainer">
            <div className="aboutpage-personalinner">
              <div>
                <h4><span>First Name:</span> Anish</h4>
                <h4><span>Age:</span> 22</h4>
                <h4><span>Freelance:</span> Available</h4>
                <h4><span>Phone:</span> +91 7433027995</h4>
              </div>
              <div>
                <h4><span>Last Name:</span> Patel</h4>
                <h4><span>Nationality:</span> Indian</h4>
                <h4><span>Languages:</span> English, Hindi, Gujarati</h4>
                <h4><span>Email:</span> anishpatel1031@gmail.com</h4>
              </div>
            </div>
            <div style={{ marginTop: "6%" }} className="homepage-buttoncontainer contactpage-button">
              <a  rel="noreferrer" href={Resume} target="_blank" download="Anish Patel Resume.pdf">DOWNLOAD CV<div className="homepage-buttonarrow"><FileDownloadRoundedIcon /></div></a>
            </div>
          </div>
        </div>
        <hr className="separator" />
        <h3>MY SKILLS</h3>
        <div className="aboutpage-languagescontainer">
          {LanguagesKnown.map((data, index) => <div key={index}><Card id={index} name={data} /></div>)}
        </div>
        <hr className="separator" />
        <h3>EXPERIENCE & EDUCATION</h3>
        <div className="aboutpage-expeducontainer">
          <div className="aboutpage-expeduleftcontainer">
            <VerticalTimeline>
              <VerticalTimelineElement
                icon={<WorkRoundedIcon />}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#ffb400", color: "#fff" }}
              >
                <div className="aboutpage-expedusubcontainer">
                  <span>06/2022 - PRESENT</span>
                  <h5>FULL STACK DEVELOPER <span> - TECH ELECON PVT. LTD.</span></h5>
                  
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline>
              <VerticalTimelineElement
                icon={<WorkRoundedIcon />}
                position={"right"}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#ffb400", color: "#fff" }}
              >
                <div className="aboutpage-expedusubcontainer">
                  <span>03/2022 - 05/2022</span>
                  <h5>PROFESSIONAL FREELANCER <span> - FREELANCER</span></h5>
                  <ul>
                    <li>Made web and mobile applications using react and react native which helps to ease 1000+ people's task.</li>
                    <li>Solved the problems which arrised while developing the applications and ensured everything is done on time and right!</li>
                    <li>I'm one of the developers in the team of three for developing and maintaining the college's new website!</li>
                  </ul>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline>
              <VerticalTimelineElement
                icon={<WorkRoundedIcon />}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#ffb400", color: "#fff" }}
              >
                <div className="aboutpage-expedusubcontainer">
                  <span>12/2021 - 02/2022</span>
                  <h5>FULL STACK DEVELOPER <span> - IEZAL</span></h5>
                  <ul>
                    <li>Designed responsive web application and achieved specific task given by the company in given deadline!</li>
                    <li>Come up with solutions on how to manage things!</li>
                  </ul>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
            <VerticalTimeline>
              <VerticalTimelineElement
                icon={<SchoolRoundedIcon />}
                position={"right"}
                className="vertical-timeline-element--work"
                iconStyle={{ background: "#ffb400", color: "#fff" }}
              >
                <div className="aboutpage-expedusubcontainer">
                  <span>2019 - PRESENT</span>
                  <h5>BACHELOR DEGREE <span> - MBIT</span></h5>
                </div>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
