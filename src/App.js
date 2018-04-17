import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hastings Spirits</h1>
        <p>
          <div>Waterfront Beer Garden</div>
          <div>Hastings on Hudson, NY</div>
          <div>Spring 2019</div>
        </p>
        <p>
          <div className='logo'>
            <img src='HS2.png' alt='logo'/>
          </div>
        </p>
      </div>
    );
  }
}

export default App;
