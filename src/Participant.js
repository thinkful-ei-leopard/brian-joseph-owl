import React from 'react';
import './Participant.css';

function Participant(props) {
    return ( 
        //JSX in here
    //<Participant key={item.id} name={item.name} avatar={item.avatar} inSession={item.inSession} onStage={item.onStage} />;
        <div>
            <img src={props.avatar} alt="the participants avatar"></img>
            <h3>{props.name}</h3>
            {/* If participant is inSession the color should be green
                if they are out of session, the color will be gray */}
            <p></p>
            {/* When you click the "Boot" button the client is kicked from the Session and Stage */}
            <button></button>
        </div>
    );
};

export default Participant;