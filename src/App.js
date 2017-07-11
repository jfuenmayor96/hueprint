import React, { Component } from 'react';
import './App.css';
import Navbar  from "./containers/Navbar/Navbar";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
      </div>
      
    );
  }
}

export default App;
