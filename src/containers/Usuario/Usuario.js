import React from "react";
import "./Usuario.css";
import estados from '../../assets/estados';

class Usuario extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      "email": "",
      "huella": ""
    };
    this.query = undefined;
    this.categorias = ["Academias", "Artes", "Belleza y Salud", "Carros", "Cursos", "Deportes", "Empleos", "Entretenimiento", "Gastronomia", "Inmuebles", "Moda", "Profesionales", "Proyectos", "Servicios", "Tecnología"];
    this.ciudades = [];
  }

  componentWillMount(){
    /*Obtiene la información de la sesión del usuario*/
    fetch("http://localhost:5000/api/sessions", {
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
    })
    .catch(err => console.log(err));

    /*Descarga la información del usuario de la base de datos*/
    fetch("https://hueprint.herokuapp.com/api/usuario", {
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
        /*Comprueba que se haya iniciado sesión*/
        if (res == "sesión no iniciada") {
          this.props.history.push("/hueprint/login");
        }
        else{
          if(res){
            this.query = res;
            console.log(this.query);
            document.getElementById("logo").value = res.logo;
            document.getElementById("categoria").value = res.categoria;
            document.getElementById("descripcion").value = res.descripcion;
            document.getElementById("direccion").value = res.direccion;
            document.getElementById("telefono").value = res.telefono;
            document.getElementById("twitter").value = res.twitter;
            document.getElementById("instagram").value = res.instagram;
            document.getElementById("pinterest").value = res.pinterest;
            document.getElementById("facebook").value = res.facebook;
            document.getElementById("estado").value = res.estado;
            document.getElementById("ciudad").value = res.ciudad;
          }
        }
      })
      .catch(err => console.log(err));

      /*Obtiene y ordena la lista de ciudades*/
      estados.map(estado => {
      estado.ciudades.map(ciudad => this.ciudades.push(ciudad))});
      this.ciudades.sort();

  }


  render(){
    return(
      <div className="container-fluid">
        <div className="row-fluid">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="usuario">Página de Administración de {this.state.huella}</h2>
            <h3 className="usuario">Bienvenido {this.state.email}</h3>
            <p style={{textAlign: "center", paddingBottom: "30px"}}>En esta sección podrás editar los detalles de tu publicación</p>
          </div>
        </div>

        <div className="row-fluid">
          <form onSubmit={this.handleSubmit} style={{padding: "30px 0px"}}>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="nombre">Nombre:</label>
              <input className="form-control usuario" id="nombre" name="nombre" value={this.state.huella}/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="logo">Link al logo de la tienda:</label>
              <input className="form-control usuario" id="logo" name="logo" placeholder="http://i.imgur.com/LEXhV2L.jpg"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="categoria">Categoría:</label>
              <select className="form-control usuario" id="categoria" name="categoria">
                {this.categorias.map(categoria => {
                  return(
                    <option value={categoria}>{categoria}</option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="descripcion">Descripción:</label>
              <textarea className="form-control usuario" id="descripcion" name="descripcion"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="direccion">Dirección:</label>
              <input className="form-control usuario" id="direccion" name="direccion"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="telefono">Teléfono(s):</label>
              <input className="form-control usuario" id="telefono" name="telefono"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="twitter">Twitter:</label>
              <input className="form-control usuario" id="twitter" name="twitter" placeholder="@cuenta"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="instagram">Instagram:</label>
              <input className="form-control usuario" id="instagram" name="instagram" placeholder="@cuenta"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="pinterest">Pinterest:</label>
              <input className="form-control usuario" id="pinterest" name="pinterest" placeholder="@cuenta"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="facebook">Facebook:</label>
              <input className="form-control usuario" id="facebook" name="facebook"/>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="estado">Estado:</label>
              <select className="form-control usuario" id="estado" name="estado">
                {estados.map(estado => {
                  return(
                    <option value={estado.estado}>{estado.estado}</option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <label htmlFor="ciudad">Ciudad:</label>
              <select className="form-control usuario" id="ciudad" name="ciudad" >
                {this.ciudades.map(ciudad => {
                  return(
                    <option value={ciudad}>{ciudad}</option>
                  );
                })}
              </select>
            </div>
            <center><button type="submit" className="btn btn-default">Guardar</button></center>
          </form>
        </div>
      </div>
    );
  }
}

export default Usuario;
