import React from 'react';
import './Chat.css';
import ChatNonMessage from './ChatNonMessage';


function Chat(props) {

    // let chatId = props.participantId
    // let chatName = props.participants[chatId].name;
    // This doesnt work for some reason
    // chatName prints to the console, but no matter how we try to pass
    // it to ChatNonMessage, React always breaks by saying its undefined or an object
    // console.log(chatName);
    if(props.type !== 'message') {
        return <ChatNonMessage key={props.timestamp} name='Steve' type={props.type} />
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