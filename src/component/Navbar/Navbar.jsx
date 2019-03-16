import React, { Component } from 'react';
import Logo from './logo'
import Menu from './Menu/Menu'

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
        <div className="Navbar">
        <div className="nav">
        <div className="logo">
           <Logo/>
        </div>
        <div className="menu">
           <Menu/>
        </div>
    </div>
    </div>
    );
  }
}

export default Navbar;




