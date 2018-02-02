import React, { Component } from 'react';
import './App.css';
import you from './you.svg';
import Youtube from './Youtube';

class App extends Component {
  render() {
    return (
      <div className="slice">
        <div className="slice-head">
          <img src={you} className="slice-you" alt="logo" />
          <h2>Welcome to Youtube API Page in React</h2>
          </div>
        <Youtube />
      </div>
    );
  }
}

export default App;
