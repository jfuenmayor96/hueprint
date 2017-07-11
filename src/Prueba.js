import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Prueba2 from './Prueba2';

class Prueba extends Component {
    render() {
        return (
            <div>
                <h2>prueba1</h2>
                <Link to="/prueba/prueba1">LInk!!!</Link>
                <div style={{float: "right", width: "400px", height: "400px", backgroundColor: "yellow"}}>
                    <Switch>
                        <Route path="/prueba/prueba1" component={Prueba2}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default Prueba;
