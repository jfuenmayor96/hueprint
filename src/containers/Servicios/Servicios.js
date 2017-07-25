import React, { PropTypes } from 'react';
import "./Servicios.css";

class Servicios extends React.Component {
  render () {
    return(
      <div>
        <div className="row burbujas">
          <h2 style={{fontFamily: "Fredoka One", fontWeight: "bolder", color: "white", letterSpacing: "2px"}}>TE OFRECEMOS</h2>

            <div className="col-lg-offset-2 col-md-offset-2 col-sm-offset-2 col-xs-offset-1 col-lg-8 col-md-8 col-sm-8 col-xs-10 caracteristicas">
                <div style={{ paddingTop: "15px" }}>
                    <div className="col-lg-4 thumbnail">
                        <img className="img-responsive" src={require("../../assets/Main/alojamiento.png")} alt="Alojamiento" height="120px" width="120px" />
                        <h3>Alojamiento web</h3><br/>
                        <h4>Registrar tu marca en nuestra plataforma</h4>
                        <h4>Creación de website</h4>
                    </div>
                    <div className="col-lg-4 thumbnail">
                        <img className="img-responsive" src={require("../../assets/Main/prodyserv.png")} height="120px" width="120px" alt="Prods y servs" />
                        <h3>Productos y servicios clasificados</h3>
                        <h4>Encontrar productos y servicios en toda Venezuela</h4>
                        <h4>Conocer a detalle las marcas registradas</h4>
                        <h4>Interactuar</h4>
                    </div>
                    <div className="col-lg-4 thumbnail">
                        <img className="img-responsive" src={require("../../assets/Main/publicidad.png")} alt="Publicidad" height="120px" width="120px" />
                        <h3>Publicidad en Redes Sociales</h3>
                        <h4>Online</h4>
                        <h4>Redes sociales</h4>
                        <h4>Diseño publicitario</h4>
                    </div>
                </div>
            </div>
        </div>

        <div className="row" style={{paddingTop: "30px", paddingBottom: "30px", marginLeft: "0px", marginRight: "0px"}}>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{paddingLeft: "0px", paddingRight: "0px"}}>
            <h2 style={{fontFamily: "Fredoka One", fontWeight: "bold", letterSpacing: "2px"}}>PAGOS</h2>
            <p style={{fontSize: "18px", textAlign: "center"}}>Depósito Bancario o Transferencia</p>
            <ol style={{fontSize: "18px", fontWeight: "normal"}}>
              <li>Por privacidad: Solicitar los datos para el pago directamente con nuestro equipo.</li>
              <li>Realice el depósito o transferencia en uno de los banco señalados.</li>
              <li>Enviar una foto del comprobante (voucher) de pago o una captura de pantalla de la operación al correo electrónico hueprintinc@gmail.com</li>
            </ol>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign: "center", paddingLeft: "0px", paddingRight: "0px", paddingTop: "15px"}}>
            <img className="img-responsive pagos" src={require("../../assets/Main/bancaribe.jpg")} alt="Bancaribe"/>
            <img className="img-responsive pagos" src={require("../../assets/Main/mercantil.jpg")} alt="Banco Mercantil"/>
            <img className="img-responsive pagos" src={require("../../assets/Main/venezuela.jpg")} alt="Banco de Venezuela"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Servicios;
