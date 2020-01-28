import React from 'react';
import './App.css';
import Participant from './Participant';
import Stage from './Stage';
import Chat from './Chat';

function App(props) {
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
        {/* Make JSX for the little avatar guy below here */}
      </div>

      </div>
  );
}

export default App;
