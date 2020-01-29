import React from 'react';
import './App.css';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

function App(props) {

  // counter to get a different ID for each element in Chat
  let counter = 0;
  return (
    <div className="App">
      <div className="Participant-list">
        {props.store.participants.map(item => {
          return <Participant key={item.id} name={item.name} avatar={item.avatar} inSession={item.inSession} onStage={item.onStage} />;})
        .sort(function(a, b){
          let personA = a.props.inSession;
          let personB = b.props.inSession;
          if (personA < personB) {
            
            return 1;
          }
          if (personA > personB) {
            return -1;
          }
          return 0;
        })}

      </div>
      <div className="Stage-elements">
        {props.store.participants.map(item => {
          return <Stage key={item.id} name={item.name} avatar={item.avatar} onStage={item.onStage}/>;
        })}
        <div> 
            <div className ="stage-volume indicator"> </div> 
            <img src={props.store.participants[0].avatar} alt= 'avatar'></img>
        </div>

      </div>
      
      <div className="Chat-elements">
        <div>
          {props.store.chatEvents.map(item => {
            // passing through props.store.participants (THE WHOLE ARRAY) is not very efficient, but it works without needing to refactor right now
              return <Chat key={counter++} participantId={item.participantId} type={item.type} message={item.message} time={item.time} timestamp={item.timestamp} participants={props.store.participants} />;
            })}
          <label htmlFor="chat-input"></label>
          <input id="chat-input" name="chat-input" type="text" placeholder="Chat" />
        </div>
      </div>
      </div>
  );
}

export default App;
