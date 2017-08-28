import React, { PropTypes } from 'react';
import "./Login.css";

class Login extends React.Component {
  constructor(props){
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
   event.preventDefault();
   fetch('/api/login', {
   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: JSON.stringify({
     "email": document.getElementById("email").value,
     "password": document.getElementById("pwd").value
   })
   })
     .then(response => response.json())
     .then(res => {
        switch (res) {
          case "clave invalida":
            alert("clave invalida");
            break;
          case "ok":
            alert("sesion iniciada");
            break;
         default:
           alert("sesion iniciada");
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
            <h2>Iniciar sesión</h2><br/>
              <form>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="pwd">Password:</label>
                  <input type="password" className="form-control" id="pwd"/>
                </div>
                <center><button type="submit" onClick={this.handleSubmit} className="btn btn-default">Submit</button></center>
              </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
