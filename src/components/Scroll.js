import React from 'react';

// scroll component to scroll the robots and still have the ability to search robots  
const Scroll = (props) => {
    return (
        // added internal css for ScrollBar instead of creating another external css
        <div style={{margintop:'5px', paddingbottom:'5px', overflowY: 'scroll',height: '800px' ,borderTop: '5px solid #0ccac4'}}>
            {props.children}
        </div>
    )
}   

export default Scroll;