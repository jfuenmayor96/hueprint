import React, { PropTypes } from 'react'
import { Link, Switch, Route } from 'react-router-dom';

import "./Huellas.css";

class Huellas extends React.Component {
  render () {
    return(
      <div className="burbujas">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 categorias">
                <ul>
                  <li><Link to="#">Academias</Link></li>
                  <li><Link to="#">Artes</Link></li>
                  <li><Link to="#">Belleza y Salud</Link></li>
                  <li><Link to="#">Carros</Link></li>
                  <li><Link to="#">Cursos</Link></li>
                </ul>
                <ul>
                  <li><Link to="#">Deportes</Link></li>
                  <li><Link to="#">Empleos</Link></li>
                  <li><Link to="#">Entretenimiento</Link></li>
                  <li><Link to="#">Gastronomía</Link></li>
                  <li><Link to="#">Inmuebles</Link></li>
                </ul>
                <ul>
                  <li><Link to="#">Moda</Link></li>
                  <li><Link to="#">Profesionales</Link></li>
                  <li><Link to="#">Proyectos</Link></li>
                  <li><Link to="#">Servicios</Link></li>
                  <li><Link to="#">Tecnología</Link></li>
                </ul>
              </div>
            </div>

            <div className="row publicaciones" style={{paddingTop: "30px", paddingBottom: "30px"}}>
              <div className="col-lg-10 contenedor">
                <Switch>
                  <Route path="/huellas/academias" />
                </Switch>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>


      </div>
    );
  }
}

export default Huellas;
