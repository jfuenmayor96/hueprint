import React, { PropTypes } from 'react';
import "./Registro.css";
import { Redirect, withRouter } from "react-router-dom";


class Registro extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
   event.preventDefault();
   fetch('https://hueprint.herokuapp.com/api/registro', {
   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "email": document.getElementById("email").value,
     "password": document.getElementById("pwd").value,
     "huella": document.getElementById("huella").value
   })
   })
     .then(response => response.json())
     .then(res => {
       console.log(res);
      if(res.constraint) {
        switch(res.constraint) {
          case "usuario_pkey":
           alert("El usuario ingresado ya existe");
           break;
          default:
           alert("Error. Contacte a un administrador para mas información.");
           break;
        }
      }
      else {
        alert("Usuario creado exitosamente");
        this.props.history.push("/hueprint/usuario");
      }

     })
     .catch(err => console.log(err));
  };

  render () {
    return(
      <div>
        <div className="row burbujas" style={{height: "100vh", display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
          <div className="loginForm">
            <h2 className="registro">Registro de usuario</h2><br/>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Contraseña:</label>
                  <input type="password" className="form-control" id="pwd"/>
                </div>
                <div className="form-group">
                  <label htmlFor="huella">Huella:</label>
                  <input type="huella" className="form-control" id="huella"/>
                </div>
                <center><button type="submit" onClick={this.handleSubmit} className="btn btn-default">Crear usuario</button></center>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

const ShowTheLocationWithRouter = withRouter(Registro);
export default Registro;
