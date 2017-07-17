import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{paddingLeft: "0px", paddingRight: "0px"}}>
                    <div className="row" style={{marginRight: "0px", marginLeft: "0px"}}>
                        <div className="main col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div style={{ paddingTop: "25px",  marginRight: "0px" }}>
                                <img className="img-responsive" height="90%" src={require("../../assets/Main/bolsa.png")} alt="Logo de Hueprint" />
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
                                <h2 style={{ marginTop: "0px"}}>Impulsa tu marca siendo parte de esta gran comunidad para comercializar, innovar e interactuar</h2>
                            </div>
                        </div>
                    </div>

                    {/*Seccion "Te ofrecemos"*/}
                    <div className="row burbujas">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-1 publicidad"></div>

                        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-10 caracteristicas">
                            <h2>TE OFRECEMOS</h2>
                            <div style={{ paddingTop: "15px" }}>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/alojamiento.png")} alt="Alojamiento" height="120px" width="120px" />
                                    <h3>Alojamiento web</h3>
                                </div>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/prodyserv.png")} height="120px" width="120px" alt="Prods y servs" />
                                    <h3>Productos y servicios clasificados</h3>
                                </div>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/publicidad.png")} alt="Publicidad" height="120px" width="120px" />
                                    <h3>Publicidad en Redes Sociales</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-1 publicidad"></div>
                    </div>

                    {/*Seccion "Trabajamos con"*/}
                    <div className="row burbujas">
                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-1 publicidad"></div>

                        <div className="col-lg-8 col-md-8 col-sm-6 col-xs-10 caracteristicas">
                            <h2>TRABAJAMOS CON</h2>
                            <div style={{ paddingTop: "15px" }}>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/ecommerce.png")} alt="Ecommerce" height="120px" width="120px" />
                                    <h3>E-commerce</h3>
                                </div>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/marketingdigital.png")} height="120px" width="120px" alt="Marketing digital" />
                                    <h3>Marketing Digital</h3>
                                </div>
                                <div className="col-lg-4 thumbnail">
                                    <img className="img-responsive" src={require("../../assets/Main/marketingcontenidos.png")} alt="Marketing de Contenidos" height="120px" width="120px" />
                                    <h3>Marketing de Contenidos</h3>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3 col-xs-1 publicidad"></div>
                    </div>

                    {/*Huellas y quote*/}
                    <div className="row huellas">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 style={{ color: "white" }}>"En el mundo de los negocios puedes tener 1 gran oportunidad, pero si estás en Internet podrás tener 10."</h2>
                            <h3 style={{ color: "white", textAlign: "right", fontFamily: "Alegreya Small Caps", fontWeight: "bold" }}>-HuePrint-</h3>

                            <h3 style={{ color: "white" }}>Conoce nuestras huellas y marca la tuya en esta comunidad virtual</h3>

                            <span className="boton"> <a href="#">HUELLAS</a> </span>
                        </div>
                    </div>

                    <div className="row testimonio">


                      <p className="col-lg-3 col-md-12 col-sm-12 col-xs-12 testimonio">Testimonios</p>
                      <img className="col-lg-4 col-md-12 col-sm-12 col-xs-12 testimonio img-responsive text-center" height="200px" width="200px" src={require("../../assets/Main/burbuja.png")} alt="" />
                      <img className="col-lg-4 col-md-12 col-sm-12 col-xs-12 testimonio img-responsive text-center" height="200px" width="200px" src={require("../../assets/Main/burbuja.png")} alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
