import React, { Component } from 'react';
import './App.css';
import Navbar  from "./containers/Navbar/Navbar";
import Main from "./containers/Main/Main";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
      
    );
  }
}

export default App;
