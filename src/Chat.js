import React from 'react';
import './Chat.css';
import ChatNonMessage from './ChatNonMessage';


function Chat(props) {

    let chatIndex = props.participantId - 1; // THIS LINE CAUSES THE TESTS TO BREAK
    let chatName = props.participants[chatIndex].name;
    // This doesnt work for some reason
    // chatName prints to the console, but no matter how we try to pass
    // it to ChatNonMessage, React always breaks by saying its undefined or an object
    // console.log(chatName);
    console.log(props);
    
    if(props.type !== 'message') {
        return <ChatNonMessage key={props.timestamp} name={chatName} type={props.type} />
    } else {
        let chatDate = new Date(props.timestamp);

        return (
            <div className="Chat-event">
                <img src="DOESNT WORK EITHER" alt="Not working" />
                <span><strong>{props.name}</strong></span>
                <span>{chatDate.toLocaleTimeString()}</span>
                <p className="Chat-Message">{props.message}</p>

            </div>
        );
    }
    
};

export default Chat;