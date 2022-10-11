import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='Robot' src={`https://robohash.org/${1}?200x200`}></img> 
            <div className='tc'>
                <h2>Hero</h2>
                <p>Zero</p>
            </div>
        </div>
    );
}

export default Card;
