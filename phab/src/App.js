import React from "react";
import PressHold from './containers/PressHold';
import Nav from './containers/Nav';

function App() {
  return (
      <>
        <div className="App">
            <header className="App-header">
            <title>PHAB</title>
            </header>
        </div>
        <PressHold/>
        <Nav/>
      </>
  );
}

export default App;
