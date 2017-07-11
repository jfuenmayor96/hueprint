import React, { Component } from 'react';
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
                        <div className="collapse navbar-collapse navbar-inner text-center" id="myNavbar">
                            <ul className="nav navbar-nav text-center" id="elements">
                                <li><a href="#">CONÓCENOS</a></li>
                                <li><a href="#">HUELLAS</a></li>
                                <li><a href="#">SERVICIOS</a></li> 
                                <li><a href="#">AYUDA</a></li> 
                            </ul>
                            <ul className="nav navbar-nav navbar-right text-center hidden-xs">
                                <li  style={{clear: "both"}}><a href="#"><img src={require('../../assets/Navbar/lupa.png')}  height="25px" width="25px" alt="Buscar"/></a></li>
                               <li><a href="#"><img src={require('../../assets/Navbar/planeta.png')}  height="25px" width="25px" alt="Buscar"/></a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right text-center visible-xs">
                                <li><a href="#"><img src={require('../../assets/Navbar/lupa.png')}  height="25px" width="25px" alt="Buscar"/> BUSCAR</a></li>
                               <li><a href="#"><img src={require('../../assets/Navbar/planeta.png')}  height="25px" width="25px" alt="Traducir"/> TRADUCIR</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}


export default Navbar;  