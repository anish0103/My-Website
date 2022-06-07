import React from "react";

import './CSS/card.css'

const Card = (Probs) => {
    return (
        <div className='card-maincontainer'>
            <div className='card-content'>
                <h2>{Probs.name}</h2>
            </div>
        </div>
    );
}

export default Card;