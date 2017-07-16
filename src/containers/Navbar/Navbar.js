import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default center">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src={require("../../assets/Navbar/logo.png")} alt="Hueprint logo" height="32px" width="32px"/>
                        </a>
                        </div>
                        <div className="collapse navbar-collapse navbar-inner text-center navbar-right" id="myNavbar">
                            <ul className="nav navbar-nav text-center" id="elements">
                                <li><Link to="/conocenos">CONÓCENOS</Link></li>
                                <li><Link to="/huellas">HUELLAS</Link></li>
                                <li><Link to="/servicios">SERVICIOS</Link></li>
                                <li><Link to="/ayuda">AYUDA</Link></li>
                                <li><Link to="/buscar"><img src={require('../../assets/Navbar/lupa.png')}  height="25px" width="25px" alt="Buscar"/> BUSCAR</Link></li>
                                <li><Link to="/traducir"><img src={require('../../assets/Navbar/planeta.png')}  height="25px" width="25px" alt="Traducir"/> TRADUCIR</Link></li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;
