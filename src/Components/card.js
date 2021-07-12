import React from "react";

import './CSS/card.css'

const Card = (Probs) => {
    return (
        <div className='main-card-container'>
            <div className='card-image'>
                <img src={Probs.src} alt={Probs.alt} />
            </div>
            <div className='card-content'>
                {Probs.children}
            </div>
        </div>
    );
}

export default Card;