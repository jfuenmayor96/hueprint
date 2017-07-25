import React, { Component } from 'react';
import Conocenos from "./containers/Conocenos/Conocenos";
import Footer from "./containers/Footer/Footer";
import Huellas from "./containers/Huellas/Huellas";
import Main from "./containers/Main/Main";
import Navbar  from "./containers/Navbar/Navbar";
import {Route, Switch} from 'react-router-dom';
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
          <Route path="/hueprint/huellas" component={Huellas}/>
        </Switch>
        <Footer/>
      </div>

    );
  }
}

export default App;
