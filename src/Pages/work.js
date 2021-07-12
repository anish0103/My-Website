import { React, useEffect } from "react";
import AOS from 'aos';

import './CSS/workpage.css';
import WorkCard from "../Components/workcard";
import { Data } from "../Data/data";
import "aos/dist/aos.css";

const WorkPage = () => {

  useEffect(() => {
    AOS.init({
      offset: 210,
      delay: 300,
      duration: 1000,
    });
  }, []);

  return (
    <div className='work-main-container'>
      <div className='work-text-container'>
        <div data-aos={"fade-right"}>
          <h1>Work done by me</h1>
        </div>
      </div>
      <div data-aos={"fade-up"} className='work-card-container'>
        {Data.map((data) => <WorkCard data={data} src={data.imageurl} />)}
      </div>
    </div>
  );
}

export default WorkPage;
