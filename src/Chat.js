import React from 'react';
import './Chat.css';

function Chat(props) {

    let chatEvents = ''; // NOT SURE IF JSX IS A STRING
    chatEvents = props;
    console.log(chatEvents);
    switch(props.type) {
        case 'message':
            // JSX HERE FOR MESSAGE
            break;
        case 'thumbs-up':
            // JSX HERE
            break;
        case 'thumbs-down':
            // JSX HERE
            break;
        case 'raise-hand':
            // JSX HERE
            break;
        case 'clap':
            // JSX HERE
            break;
        case 'join':
            // THIS IS HARDCODED AND WRONG
            chatEvents = `<p>${props.participants[props.participantId].name}}</p>`;
            console.log(`JOIN CASE HERE: ${chatEvents}`);
            
            // JSX HERE
            break;
        case 'leave':
            // JSX HERE
            break;
        case 'join-stage':
            // JSX here
            break;
        case 'leave-stage':
            // JSX here
            break;
        
        default:
            console.log('No type');
    }
    return ( 
        // REMINDER: sort elements by timestamp

        <div className="Chat-entries">
            {/* <p>{chatEvents}</p> */}
        </div>

    );
};

export default Chat;