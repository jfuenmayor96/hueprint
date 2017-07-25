import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import "./Categoria.css";

class Categoria extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render () {
    return(
      <div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1>{this.props.match.params.categoria}</h1>
        </div>

        <div className="col-lg-4">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/jf.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>JF Web Designs</p>
              <p>Ubicación: Caracas</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/jf.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>JF Web Designs</p>
              <p>Ubicación: Caracas</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/kratos2.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>Kratos Technology</p>
              <p>Ubicación: Colombia</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>
      </div>

    );
  }
}

export default Categoria;
