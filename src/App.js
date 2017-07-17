import React, { Component } from 'react';
import Conocenos from "./containers/Conocenos/Conocenos";
import Footer from "./containers/Footer/Footer";
import Main from "./containers/Main/Main";
import Navbar  from "./containers/Navbar/Navbar";
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* RUTAS */}
        <Switch>
          <Route exact path="/hueprint/" component={Main}/>
          <Route path="/hueprint/conocenos/" component={Conocenos}/>
        </Switch>
        <Footer/>
      </div>

    );
  }
}

export default App;
