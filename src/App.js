import React, { Component } from 'react';
import './App.css';
import Container from './Container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            CMS
          </p>
        </header>
        <Container />
      </div>
    );
  }
}

export default App;
