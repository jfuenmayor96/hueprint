import React, { PropTypes } from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import Categoria from "./Categoria";

import "./Huellas.css";

class Huellas extends React.Component {
  render () {
    return(
      <div className="burbujas">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 categorias">
                <ul>
                  <li><Link to={`${this.props.match.url}/Academias`}>Academias</Link></li>
                  <li><Link to={`${this.props.match.url}/Artes`}>Artes</Link></li>
                  <li><Link to={`${this.props.match.url}/Belleza y Salud`}>Belleza y Salud</Link></li>
                  <li><Link to={`${this.props.match.url}/Carros`}>Carros</Link></li>
                  <li><Link to={`${this.props.match.url}/Cursos`}>Cursos</Link></li>
                </ul>
                <ul>
                  <li><Link to={`${this.props.match.url}/Deportes`}>Deportes</Link></li>
                  <li><Link to={`${this.props.match.url}/Empleos`}>Empleos</Link></li>
                  <li><Link to={`${this.props.match.url}/Entretenimiento`}>Entretenimiento</Link></li>
                  <li><Link to={`${this.props.match.url}/Gastronomía`}>Gastronomía</Link></li>
                  <li><Link to={`${this.props.match.url}/Inmuebles`}>Inmuebles</Link></li>
                </ul>
                <ul>
                  <li><Link to={`${this.props.match.url}/Moda`}>Moda</Link></li>
                  <li><Link to={`${this.props.match.url}/Profesionales`}>Profesionales</Link></li>
                  <li><Link to={`${this.props.match.url}/Proyectos`}>Proyectos</Link></li>
                  <li><Link to={`${this.props.match.url}/Servicios`}>Servicios</Link></li>
                  <li><Link to={`${this.props.match.url}/Tecnología`}>Tecnología</Link></li>
                </ul>
              </div>
            </div>

            <div className="row publicaciones" style={{paddingTop: "30px", paddingBottom: "30px"}}>
              <div className="col-lg-10 contenedor">
                <Switch>
                  <Route path={`${this.props.match.url}/:categoria`} component={Categoria}/>
                </Switch>
              </div>
              <div className="col-lg-2" style={{backgroundColor: "white", height: "417px"}}></div>
            </div>
          </div>


      </div>
    );
  }
}

export default Huellas;
