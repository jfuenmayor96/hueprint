import React, { Component } from 'react';
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import Navbar  from "./containers/Navbar/Navbar";
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
        <Footer/>
      </div>

    );
  }
}

export default App;
