import { React, useEffect } from "react";

import './workpage.css';
import WorkCard from "../../Components/WorkCard/workcard";
import { Data } from "../../Data/data";

const WorkPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="sliderpage"></div>
      <div className="workpage-maincontainer">
        <div className="titlecontainer">
          <h1>MY <span className="orangecolor">PORTFOLIO</span></h1>
          <span className="title-background">WORKS</span>
        </div>
        <div className="workpage-workcontainer">
          {Data.map((data) => <WorkCard data={data} />)}
        </div>
      </div>
    </>
  );
}

export default WorkPage;
