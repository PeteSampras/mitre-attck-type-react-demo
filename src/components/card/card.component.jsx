import React from 'react';
import './card.styles.css'

export const Card = (props) => (
    (props.monster.type==='attack-pattern' &&
    <div className="card-container">

        {/* <img alt="monster" src={`https://robohash.org/${Math.floor(Math.random()*10)}?set=set2&size=180x180`}/> */}
        <h2>{props.monster.name}</h2>
        <p>{props.monster.id}</p>
        <p>{props.monster.description}</p>
        <p>{props.monster.external_references[0]['external_id']}</p>
    </div>
    )
);
