import React, { PropTypes } from 'react';
import "./Registro.css";

class Registro extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
   event.preventDefault();
   fetch('/api/registro', {
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
       switch(res.constraint) {
         case "usuario_pkey":
          alert("El usuario ingresado ya existe");
          break;
         default:
          alert("Usuario creado exitosamente")
          break;
       }
     })
     .catch(err => console.log(err));
  };

  render () {
    return(
      <div>
        <div className="row burbujas" style={{height: "100vh", display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
          <div className="loginForm">
            <h2>Registro de usuario</h2><br/>
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
                <center><button type="submit" onClick={this.handleSubmit} className="btn btn-default">Submit</button></center>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
