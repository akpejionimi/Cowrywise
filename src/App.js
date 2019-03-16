import React, { Component } from 'react';
import Navbar from './component/Navbar/Navbar.jsx'
import Smart from './component/Smart/Smart'
import Media from './component/Mediashow/Media'
import Savings from './component/Savings/Savings'
import Cowrydesc from './component/Cowrydesc/Cowrydesc'
import Safe from './component/Safe/Safe'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
      <Smart/>
      <Media/>
      <Savings/>
      <Cowrydesc/>
      <Safe/>
      </div>
    );
  }
}

export default App;
