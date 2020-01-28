import React from 'react';
import './App.css';
import Participant from './Participant';
function App(props) {
  return (
    <div className="App">
      <div className="Participant-list">
        {console.log(props.store)}
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

      

      </div>
  );
}

export default App;
