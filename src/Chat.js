import React from 'react';
import './Chat.css';
function renderNonMessage(participant,type,timestamp) {
    let chatEvent = '';
    switch(type) {

        case 'thumbs-up':
            chatEvent = ' gave a thumbs-up';
            break;
        case 'thumbs-down':
            chatEvent = ' gave a thumbs-down';
            break;
        case 'raise-hand':
            chatEvent = ' raised their hand';
            break;
        case 'clap':
            chatEvent = ' clapped';
            break;
        case 'join':
                chatEvent = ' joined';
            break;
        case 'leave':
                chatEvent = ' left';
            break;
        case 'join-stage':
                chatEvent = ' joined the staged';
            break;
        case 'leave-stage':
                chatEvent = ' left the staged';
            break;
        
        default:
            console.log('No type');
    }
}

function Chat(props) {

    let chatEvents = ''; // NOT SURE IF JSX IS A STRING
    chatEvents = props;
    console.log(chatEvents);
    
    return ( 
        // REMINDER: sort elements by timestamp

        <div className="Chat-entries">
            {/* <p>{chatEvents}</p> */}
        </div>

    );
};

export default Chat;