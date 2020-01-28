import React from 'react';
import './App.css';
import Participant from './Participant';
function App(props) {
  return (
    <div className="App">
      <div className="Participant-list">
        {props.STORE.participants.map(item => {
          return <Participant key={item.id} name={item.name} avatar={item.avatar} inSession={item.inSession} onStage={item.onStage} />;
        })}
      </div>

      

      </div>
  );
}

export default App;
