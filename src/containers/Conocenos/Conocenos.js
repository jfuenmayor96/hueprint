import React, { PropTypes } from 'react'

class Conocenos extends React.Component {
  render () {
    return(
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="main col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div style={{ paddingTop: "25px" }}>
                        <img className="img-responsive" src={require("../../assets/Main/bolsa.png")} alt="" />
                    </div>
                    <div style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
                        <h2 style={{ marginTop: "0px"}}>Impulsa tu marca siendo parte de esta gran comunidad para comercializar, innovar e interactuar</h2>
                    </div>
                </div>
            </div>
        </div>
      </div>

    );
  }
}

export default Conocenos;
