import React, { Component } from 'react';
import './App.css';
import Prueba from './Prueba';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Link to="/prueba">Link!</Link>
        <Switch>
            <Route path="/prueba" component={Prueba}/>
        </Switch>

      </div>
      
    );
  }
}

export default App;
