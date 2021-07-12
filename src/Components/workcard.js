import React from "react";

import './CSS/workcard.css'

const WorkCard = (Probs) => {
    const workdata = Probs.data;
    return (
        <div className='main-workcard-container'>
            <div className='workcard-image'>
                <img src={Probs.src} alt={Probs.alt} />
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