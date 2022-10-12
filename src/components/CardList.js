import React from 'react';
import Card from './Card';

// Cardlist component that generates multiple Card components each containing robot information
const CardList = ({robots}) => {
    return (
        // it is necessary to define key for each Card Component created so that Virtual Dom can keep track of it
        robots.map((robot,i) => {
            return <Card key={i} id={robot.id} name={robot.name} email={robot.email}/>
        })
    );
}

export default CardList;