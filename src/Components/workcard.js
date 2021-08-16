import React from "react";

import './CSS/workcard.css'

const WorkCard = (Probs) => {
    const workdata = Probs.data;
    return (
        <div className='main-workcard-container'>
            <div className="workcard-title">
                <div><h3>{workdata.title}</h3></div>
            </div>
            <div className='workcard-image'>
                <a href={workdata.link} target='_blank' ><img src={Probs.src} alt={workdata.title} /></a>
            </div>
            <div className='workcard-content'>
                <ul className='workcard-ul'>
                {workdata.langauges.map((data)=> <li className='workcard-li'>{data}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default WorkCard;