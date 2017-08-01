import React, { PropTypes } from 'react';
import {Link} from 'react-router-dom';
import "./Categoria.css";

class Categoria extends React.Component {
  constructor(props) {
    super(props);
    this.fetchInfo = this.fetchInfo.bind(this);
    //this.state = {query: []}
    this.query = [];
  }

  fetchInfo(categoria) {
   if(categoria) {
     fetch('https://hueprint.herokuapp.com/api/huellas/' + categoria)
       .then(res => res.json())
         .then(query => {
           this.query = query;
           this.forceUpdate();
         })
       .catch(err => console.log(err.stack) );
   }
   else {
     fetch('https://hueprint.herokuapp.com/api/mostrarHuellas')
       .then(res => res.json())
         .then(query => {
           this.query = query;
           console.log(query);
           this.forceUpdate();
         })
       .catch(err => console.log(err.stack) );
   }

  }


  componentWillReceiveProps(nextProps) {
    //console.log("next props: ");
    //console.log(nextProps.match.params.categoria);
    //nextProps.match.params.categoria
    this.fetchInfo(nextProps.match.params.categoria);
    this.forceUpdate();
    //this.setState(this.state);
  }


  render () {
    return(
      <div style={{backgroundColor: "white"}}>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h1>{this.props.match.params.categoria ? this.props.match.params.categoria : "Selecciona una categoría" }</h1>

        </div>
        {this.query.map(huella => {
          return(
            <div className="col-lg-4  col-md-4 col-sm-6 col-xs-12" key={huella.nombre}>
              <Link to="#" className="thumbnail">
                <img className="publicacion" src={huella.logo} alt="Imagen publicacion" height="300px" width="300px"/>
                <div style={{textAlign: "center"}}>
                  <p>{huella.nombre}</p>
                  <p>{huella.estado}</p>
                  <p>{huella.clasificacion}</p>
                </div>
              </Link>
            </div>
          );
        })}
        {/*}<div className="col-lg-4  col-md-4 col-sm-6 col-xs-12">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/jf.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>JF Web Designs</p>
              <p>Ubicación: Caracas</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/jf.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>JF Web Designs</p>
              <p>Ubicación: Caracas</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <Link to="#" className="thumbnail">
            <img className="publicacion" src={require("../../assets/Huellas/kratos2.png")} alt="Imagen publicacion" height="300px" width="300px"/>
            <div style={{textAlign: "center"}}>
              <p>Kratos Technology</p>
              <p>Ubicación: Colombia</p>
              <p>Área: diseño web</p>
            </div>
          </Link>
        </div>*/}
      </div>

    );
  }
}

export default Categoria;
