import React from 'react';
import './Chat.css';

function ChatNonMessage(props) {
    let chatEvent = '';
    switch(props.type) {

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
                chatEvent = ' joined the stage';
            break;
        case 'leave-stage':
                chatEvent = ' left the stage';
            break;
        
        default:
            console.log('No type');
    }

    return (
        <div className="Chat-event">
            <strong>{props.name}</strong>{chatEvent}
        </div>
    );
}

export default ChatNonMessage;