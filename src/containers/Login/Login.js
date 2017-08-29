import React, { PropTypes } from 'react';
import { Redirect } from "react-router-dom";
import "./Login.css";

class Login extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
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

  render () {
    return(
      <div>
        <div className="row burbujas" style={{height: "100vh", display: "flex", flexFlow: "row wrap", justifyContent: "center", alignItems: "center"}}>
          <div className="loginForm">
            <h2>Iniciar sesión</h2><br/>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Correo electrónico:</label>
                  <input type="email" className="form-control" id="email" name="email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Contraseña:</label>
                  <input type="password" className="form-control" id="pwd" name="password"/>
                </div>
                <center><button type="submit" className="btn btn-default">Submit</button></center>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
