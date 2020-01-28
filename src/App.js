import React from 'react';
import './App.css';
import Participant from './Participant';
function App(props) {
  return (
    <div className="App">
    <div className="Participant.list">
      {props.STORE.participants.map(item => {
        return <Participant />
      </div>

      

      </div>
  );
}

export default App;
