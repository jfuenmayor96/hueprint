import React, { PropTypes } from 'react'
import "./Footer.css"

class Footer extends React.Component {
  render () {
    return(
      <div className="row burbujas">
        <footer>
            {/* Conócenos */}
            <div className="col-lg-3">
              <h3>Conócenos</h3>
              <h4>Acerca de nosotros</h4>
              <h4>Nuestro impulso</h4>
              <h4>Cómo trabajamos</h4>
            </div>
            {/* Servicios */}
            <div className="col-lg-3">
              <h3>Servicios</h3>
              <h4>Alojamiento web</h4>
              <h4>Productos y servicios clasificados</h4>
              <h4>Publicidad en Redes Sociales</h4>
            </div>
            {/* Ayuda */}
            <div className="col-lg-3">
              <h3>Ayuda</h3>
              <h4>Preguntas frecuentes</h4>
            </div>
            {/* Socializa con nosotros */}
            <div className="col-lg-3">
              <h3>Socializa con nosotros</h3>
              <h4>@hueprint</h4>
              <h4>@hueprint</h4>
              <h4>@hueprinten</h4>
              <h4>Hueprint</h4>
              <h4>hueprintinc@gmail.com</h4>
            </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
