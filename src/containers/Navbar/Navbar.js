import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import "./Navbar.css";

class Navbar extends Component {
    constructor(props) {
      super(props);
      this.cerrarSesion = this.cerrarSesion.bind(this);
    }

    cerrarSesion(e) {
      e.preventDefault();
      alert("entre!");
      fetch("https://hueprint.herokuapp.com/api/logout", {
      method: 'GET',
      credentials: 'include',
      redirect: 'follow',
      agent: null,
      headers: {
          'Content-Type':'application/json'
      },
      timeout: 5000
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);
        if(res === "ok"){
          document.getElementById("usuario").style.display = "none";
          document.getElementById("logout").style.display = "none";
          document.getElementById("login").style.display = "inline-block";
          document.getElementById("registro").style.display = "inline-block";
          this.props.history.push("/hueprint/");
        }
      })
      .catch(err => console.log(err));
    };


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
                        <Link className="navbar-brand" to="/hueprint/">
                            <img src={require("../../assets/Navbar/logo.png")} alt="Hueprint logo" height="32px" width="32px"/>
                        </Link>
                        </div>
                        <div className="collapse navbar-collapse navbar-inner text-center navbar-right" id="myNavbar">
                            <ul className="nav navbar-nav text-center" id="elements">
                                <li><Link to="/hueprint/conocenos/">CONÓCENOS</Link></li>
                                <li><Link to="/hueprint/huellas">HUELLAS</Link></li>
                                <li><Link to="/hueprint/servicios">PLANES Y TARIFAS</Link></li>
                                <li id="login" style={{display: "inline-block"}}><Link to="/hueprint/login">INICIAR SESIÓN</Link></li>
                                <li id="registro" style={{display: "inline-block"}}><Link to="/hueprint/registro/">REGISTRARSE</Link></li>
                                <li id="usuario" style={{display: "none"}}><Link to="/hueprint/usuario">ADMINISTRAR CUENTA</Link></li>
                                <li id="logout" style={{display: "none"}} onClick={this.cerrarSesion}><Link to="/hueprint/">CERRAR SESIÓN</Link></li>
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

const ShowTheLocationWithRouter = withRouter(Navbar);
export default Navbar;
