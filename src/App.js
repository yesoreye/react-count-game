import React, { Component } from 'react';
import Logo from './components/Logo';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo></Logo>
        <Board></Board>
      </div>
    );
  }
}

export default App;
