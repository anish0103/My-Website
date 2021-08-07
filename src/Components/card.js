import React from "react";

import './CSS/card.css'

const Card = (Probs) => {
    return (
        <div className='main-card-container'>
            <div className='card-image'>
                {Probs.src && <img src={Probs.src} alt={Probs.alt} />}
                <h2>{Probs.name}</h2>
            </div>
            <div className='card-content'>
                {Probs.children}
            </div>
        </div>
    );
}

export default Card;