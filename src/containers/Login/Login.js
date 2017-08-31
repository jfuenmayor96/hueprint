import React, { PropTypes } from 'react';
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.recuperarClave = this.recuperarClave.bind(this);
  }

  handleSubmit(event){
   event.preventDefault();
   fetch('https://hueprint.herokuapp.com/api/login', {
   method: 'post',
   credentials: 'include',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "email": document.getElementById("email").value,
     "password": document.getElementById("pwd").value
   })
   })
     .then(response => response.json())
     .then(res => {
       //console.log(res);
       if(res.isLoggedIn){
         //alert("Signed in");
         this.props.history.push("/hueprint/usuario");
       }
       else{
         alert("Usuario o contraseña inválida");
       }
     })
     .catch(err => console.log(err));
  };

  recuperarClave(e) {
    e.preventDefault();
    if(document.getElementById("email").value === "" || document.getElementById("email").value === undefined){
      alert("Introduzca un correo electrónico válido en el campo de Correo electrónico");
      document.getElementById("labelCorreo").style.color =  "#FFF800";
    }
    else{
      fetch('https://hueprint.herokuapp.com/api/recuperarClave', {
      method: 'post',
      credentials: 'include',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        "email": document.getElementById("email").value
      })
      })
        .then(response => response.json())
        .then(res => {
          switch (res) {
            case "ok":
              alert("Contraseña enviada al correo electrónico " + document.getElementById("email").value);
              break;
            case "usuario no encontrado":
              alert("Usuario no registrado en el sistema.");
              break;
            default:
              alert("Ha ocurrido un error. Póngase en contacto con un administrador.");
              break;
          }
        })
        .catch(err => console.log(err));
     };
    }

    componentDidMount(){
      /*Obtiene la información de la sesión del usuario*/
      fetch("https://hueprint.herokuapp.com/api/sessions", {
      method: 'GET',
      credentials: 'include',
      redirect: 'follow',
      agent: null,
      headers: {
          'Content-Type':'application/json'
      },
      timeout: 5000
    })
      .then(response => response.json())
      .then(res => {
        this.setState({"email": res.email, "huella": res.huella});

        if(res.isLoggedIn != undefined){
          this.props.history.push("/hueprint/");

        }
      })
      .catch(err => console.log(err));
    }

  render () {
    return(
      <div>
        <div className="row burbujas" style={{height: "100vh", display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
          <div className="loginForm">
            <h2>Iniciar sesión</h2><br/>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label id="labelCorreo" htmlFor="email">Correo electrónico:</label>
                  <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Contraseña:</label>
                  <input type="password" className="form-control" id="pwd" name="password"/>
                </div>
                <center><button type="submit" className="btn btn-default">Submit</button></center>
              </form>
              <center><span onClick={this.recuperarClave} style={{display: "block", color: "white", paddingTop: "10px", cursor: "pointer"}}>Olvidé mi contraseña</span></center>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
