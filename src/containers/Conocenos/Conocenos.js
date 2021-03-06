import React, { PropTypes } from 'react'
import "./Conocenos.css";

class Conocenos extends React.Component {
  render () {
    return(
      <div>
        {/*Seccion principal con el logo de HPT*/}
        <div className="container-fluid">
            <div className="row" style={{marginRight: "0px", marginLeft: "0px"}}>
                <div className="main col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div style={{ paddingTop: "25px" }}>
                        <img className="img-responsive" height="90%" src={require("../../assets/Main/bolsa.png")} alt="Logo de Hueprint" />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
                        <h2 style={{ marginTop: "0px", color: "#282929"}}>COMERCIALIZA <span>●</span> INNOVA <span>●</span> INTERACTUA</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="row burbujas" style={{display: "table"}}>
            {/*Seccion Sobre nosotros*/}
            <div style={{display: "table-row", background: "rgba(0,0,0, 0.2)"}}>
              <div className="col-lg-5 col-md-5 visible-lg visible-md" style={{paddingRight: "30px"}}>
                <div style={{height: "inherit", display: "flex", flexDirection: "column", alignItems: "stretch",paddingRight: "10px", marginTop: "30px", borderRight: "3px solid #24FF00"}}>
                  <p className="titulo" style={{fontSize: "48px", textAlign: "right", marginBottom: "0px", color: "#ff5400"}}>Sobre</p>
                  <p className="titulo" style={{fontSize: "56px", textAlign: "right", color: "#24FF00"}}>Nosotros</p>
                </div>
              </div>
              <div className="col-sm-12 col-xs-12 visible-sm visible-xs" style={{paddingTop: "30px", paddingRight: "30px"}}>
                <div style={{paddingRight: "10px", borderBottom: "3px solid #24FF00", textAlign: "center"}}>
                  <p className="titulo" style={{fontSize: "48px", marginBottom: "0px", color: "#ff5400"}}>Sobre</p>
                  <p className="titulo" style={{fontSize: "56px", color: "#24FF00"}}>Nosotros</p>
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                <p style={{textAlign: "justify", paddingRight: "15px", paddingLeft: "15px", paddingTop: "30px", paddingBottom: "20px", marginBottom: "0px"}}>Somos una website dedicada al comercio electrónico y marketing. C ser una herramienta que brinde soluciones en Venezuela para todas aquellas personas que deseen expandir su empresa o negocio, encontrar diversos productos y/o servicios, cursos, empleos, comparando calidad, ubicación y marcas. Ofrecemos publicidad a pymes, tiendas virtuales y emprendedores para que logren materializar sus objetivos sin dejar de interactuar con el mundo.</p>
              </div>
            </div>
            <br/>
            {/*Seccion Cómo trabajamos*/}
            <div style={{display: "table-row", background: "rgba(0,0,0, 0.2)"}}>
              {/*Vistas lg y md*/}
              <div className="col-lg-5 col-md-5 visible-lg visible-md" style={{paddingRight: "30px"}}>
                <div>
                  <p className="titulo" style={{fontSize: "48px", marginBottom: "0px", textAlign: "center", color: "#ff5400"}}>Cómo</p>
                  <p className="titulo" style={{fontSize: "56px", textAlign: "center", color: "#24FF00"}}>Trabajamos</p>
                </div>
                <p style={{textAlign: "justify", paddingBottom: "20px", marginBottom: "0px"}}>Las labores de Hueprint se centran en el Estado Anzoátegui y Distrito Capital-Caracas, haciendo uso de la tecnología actual para mantener una comunicación sin obstáculos y poder garantizar un trabajo óptimo y de calidad.</p>
              </div>
              {/*Vistas sm y xs*/}
              <div className="col-sm-12 col-xs-12 visible-xs visible-sm">
                <div style={{borderBottom: "3px solid #24FF00"}}>
                  <p className="titulo" style={{fontSize: "48px", marginBottom: "0px", textAlign: "center", color: "#ff5400"}}>Cómo</p>
                  <p className="titulo" style={{fontSize: "56px", textAlign: "center", color: "#24FF00"}}>Trabajamos</p>
                </div>
                <p style={{textAlign: "justify", paddingRight: "15px", paddingLeft: "15px", paddingTop: "30px"}}>Las labores de Hueprint se centran en el Estado Anzoátegui y Distrito Capital-Caracas, haciendo uso de la tecnología actual para mantener una comunicación sin obstáculos y poder garantizar un trabajo óptimo y de calidad.</p>
              </div>
              <div className="col-lg-7 col-md-7">
                <p style={{textAlign: "justify", paddingLeft: "15px", paddingRight: "15px", paddingTop: "20px"}}>Nuestro equipo trabaja constantemente por establecer una conexión entre todas aquellas huellas (empresas – tiendas virtuales – el resto de la población), para que lo ofrecido tenga un mayor valor y auge, para que lo comprado haya sido por medio de una búsqueda eficaz y segura. Cada individuo irá marcando su estadía en el servicio comercial y social que ofrecemos, creando una conexión entre compradores/ vendedores e ir impulsando negocios y satisfacción de necesidades.</p>
              </div>
              <p className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{textAlign: "center"}}>¡Estamos atentos ante cualquier solicitud, reclamo o sugerencia, visto como una forma para seguir avanzando hacia el éxito!</p>
            </div>
            <br/>
            {/*Seccion Nuestro impulso*/}
            <div style={{display: "table-row", background: "rgba(0,0,0, 0.2)", paddingBottom: "30px"}}>
              {/*Vistas sm y xs*/}
              <div className="col-sm-12 col-xs-12 visible-sm visible-xs" style={{borderBottom: "3px solid #24FF00"}}>
                <p className="titulo" style={{fontSize: "48px", marginBottom: "0px", textAlign: "center", color: "#ff5400"}}>Nuestro</p>
                <p className="titulo" style={{fontSize: "56px", textAlign: "center", color: "#24FF00"}}>Impulso</p>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p style={{textAlign: "justify", paddingRight: "15px", paddingLeft: "15px", paddingTop: "20px", paddingBottom: "20px", marginBottom: "0px"}}>Ofrecer una vía de comercialización como apoyo a empresas y tiendas virtuales para ofrecer productos y/o servicios, cursos, empleos mientras dejan huella en el mercado. Así mismo, brindar al resto de la población otra forma para encontrar aquello que requieran con un sistema más dinámico e interactivo, brindando mayor confianza hasta crear una comunidad virtual.</p>
              </div>
              {/*Vistas lg y md*/}
              <div className="col-lg-4 col-md-4 visible-lg visible-md" style={{paddingLeft: "30px", borderLeft: "3px solid #24FF00", marginTop: "30px", marginBottom: "30px"}}>
                <p className="titulo" style={{fontSize: "48px", marginBottom: "0px", textAlign: "left", color: "#ff5400"}}>Nuestro</p>
                <p className="titulo" style={{fontSize: "56px", textAlign: "left", color: "#24FF00"}}>Impulso</p>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Conocenos;
