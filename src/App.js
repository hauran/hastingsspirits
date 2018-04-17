import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
          <div className='logo'>
            <img src='HS2.png' alt='logo'/>
          </div>
        </p>
        <p>
          <div style={{fontSize:'1.5em', fontWeight:'bold'}}>Waterfront Beer Garden</div>
          <div style={{color:'#666', marginTop:20}}>Hastings on Hudson, NY</div>
          <div style={{fontSize:'0.9em',color:'#666'}}>Spring 2019</div>
        </p>
      </div>
    );
  }
}
export default App;
