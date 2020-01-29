import React from 'react';
import './Stage.css';

function Stage(props) {
    // If the participant is not on the stage
    // exit the function
    if(props.onStage === false) {
        return null;
    }
    // If the participant is on the stage
    // create the element
    return ( 
        <div>
            <div className="Stage-user-info">
                <p>{props.name}</p>
                <div className="Stage-volume-indicator"></div>
                <i>Volume Icon here</i>
                <i>Magnifying Icon here</i>
            </div>
            <img src={props.avatar} alt="avatar for the person"/>
        </div>
    );
};

export default Stage;