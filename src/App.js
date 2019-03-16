import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar.jsx'
import Smart from './component/Smart/Smart'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
      <Smart/>
      </div>
    );
  }
}

export default App;
