import React, { PropTypes } from 'react'
import "./Conocenos.css";

class Conocenos extends React.Component {
  render () {
    return(
      <div>
        <div className="container-fluid">
            <div className="row">
                <div className="main col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div style={{ paddingTop: "25px" }}>
                        <img className="img-responsive" height="90%" src={require("../../assets/Main/bolsa.png")} alt="" />
                    </div>
                    <div className="col-lg-12" style={{backgroundColor: "rgba(255, 255, 255, 0.8)"}}>
                        <h2 style={{ marginTop: "0px", color: "black"}}>COMERCIALIZA <span>●</span> INNOVA <span>●</span> INTERACTUA</h2>
                    </div>
                </div>
            </div>
          </div>
      </div>

    );
  }
}

export default Conocenos;
