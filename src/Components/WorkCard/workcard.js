import React from "react";

import './workcard.css'

const WorkCard = (props) => {
    const workdata = props.data;
    return (
        <a href={workdata.link} rel="noreferrer" target="_blank" className="workcard-maincontainer">
            <img className="workpage-image" src={workdata.imageurl} alt={workdata.title} />
            <div className="workcard-contentcontainer">
                <h2>{workdata.title}</h2>
                {workdata.langauges.map((data)=> <h3>{data}</h3>)}
            </div>
        </a>
    );
}

export default WorkCard;