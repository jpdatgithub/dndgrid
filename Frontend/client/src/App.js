import React from 'react';
import Chat from './Chat/Chat';
import Game from './Game/Game'

function App() {
  return (
    <div className="base-structure">
        <Game />
        <Chat />
        <div className="panel">

        </div>
        <div className="tools">

        </div>
      </div>
  );
}

export default App;
