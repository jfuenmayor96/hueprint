import React, { PropTypes } from 'react'
import "./Footer.css"

class Footer extends React.Component {
  render () {
    return(
      <div className="row burbujas">
        <footer>
            {/* Conócenos */}
            <div className="col-lg-3 col-md-3 col-sm-6 hidden-xs">
              <h3>Conócenos</h3>
              <h4>Acerca de nosotros</h4>
              <h4>Nuestro impulso</h4>
              <h4>Cómo trabajamos</h4>
            </div>
            {/* Servicios */}
            <div className="col-lg-3 col-md-3 col-sm-6 hidden-xs">
              <h3>Servicios</h3>
              <h4>Alojamiento web</h4>
              <h4>Productos y servicios clasificados</h4>
              <h4>Publicidad en Redes Sociales</h4>
            </div>
            {/* Ayuda */}
            <div className="col-lg-3 col-md-3 col-sm-6 hidden-xs">
              <h3>Ayuda</h3>
              <h4>Preguntas frecuentes</h4>
            </div>
            {/* Socializa con nosotros */}
            <div className="col-lg-3 col-md-3 col-sm-6 hidden-xs">
              <h3>Socializa con nosotros</h3>
              <h4><i className="fa fa-instagram" aria-hidden="true"></i> @hueprint</h4>
              <h4><i className="fa fa-twitter" aria-hidden="true"></i> @hueprint</h4>
              <h4><i className="fa fa-facebook-official" aria-hidden="true"></i> @hueprinten</h4>
              <h4><i className="fa fa-pinterest" aria-hidden="true"></i> Hueprint</h4>
              <h4><i className="fa fa-envelope-open" aria-hidden="true"></i> hueprintinc@gmail.com</h4>
            </div>
            {/*Socializa con nosotros versión móviles*/}
            <div className="col-xs-12 visible-xs" style={{textAlign: "center"}}>
              <i style={{paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}} className="fa fa-2x fa-instagram" aria-hidden="true"></i>
              <i style={{paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}} className="fa fa-2x fa-twitter" aria-hidden="true"></i>
              <i style={{paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}} className="fa fa-2x fa-facebook-official" aria-hidden="true"></i>
              <i style={{paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}} className="fa fa-2x fa-pinterest" aria-hidden="true"></i>
              <i style={{paddingLeft: "5px", paddingRight: "5px", paddingTop: "5px", paddingBottom: "5px"}} className="fa fa-2x fa-envelope-open" aria-hidden="true"></i>
            </div>
            <h5 style={{textAlign: "center"}}>Hueprint 2017. Todos los derechos reservados.</h5>
        </footer>
      </div>
    );
  }
}

export default Footer;
