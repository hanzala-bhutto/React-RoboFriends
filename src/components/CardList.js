import React from 'react';
import Card from './Card';

// Cardlist component that generates multiple Card components including robot information
const CardList = ({robots}) => {
    return (
        robots.map((robot) => {
            return <Card id={robot.id} name={robot.name} email={robot.email}/>
        })
    );
}

export default CardList;