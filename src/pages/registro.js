import React, { Component } from "react";
import { connect } from "react-redux"
import SignLayout from "../components/layout/sign";
import InputField from "../components/input";
import Datepicker from "../components/datepicker";
import Button from "../components/button";
import cube from "../assets/images/icons/cube1.png";
import Link from 'next/link'
import Script from 'next/script'


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
      ruc: "",
      dv: "",
      celular: "",
      password: "",
      confirmpassword: "",
      formErrors: { 
          email: "",
          nombre: "",
          apellido: "",
          fecha_nacimiento: "",
          ruc: "",
          dv: "",
          celular: "",
          password: "",
          confirmpassword: ""
       },
      emailValid: false,
      nombreValid: false,
      apellidoValid: false,
      fecha_nacimientoValid: false,
      rucValid: false,
      dvValid: false,
      celularValid: false,
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false,
    };
  }

  handleInputs(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  changeDate(newDate) {
    this.setState({
      fecha_nacimiento: newDate,
    });
  }

  isEmpty(str){
    return str == ""
  }


  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let state = this.state;
    let fieldvalid = state[fieldName + "Valid"];
    const field = state[fieldName];

    switch (fieldName) {
      case "email":
        fieldvalid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = this.isEmpty(field)? "Campo requerido" : fieldvalid ? "" : " El usuario no es valido";
        break;
      case "password":
        fieldvalid = value.length >= 6;
        fieldValidationErrors.password = this.isEmpty(field)? "Campo requerido" : fieldvalid ? "" : "La contraseña es muy corta" 
        break;
      case "confirmpassword":
        fieldvalid = field === state["password"];
        fieldValidationErrors.confirmpassword = this.isEmpty(field)? "Campo requerido" : fieldvalid ? "" : " Las contraseñas no coinciden";
        break;  
      default:        
        fieldvalid = this.isEmpty(field);
        fieldValidationErrors[fieldName] = this.isEmpty(field)? "Campo requerido" : "" ;
        break;
    }

    state["formErrors"] = fieldValidationErrors;
    state[fieldName + "Valid"] = fieldvalid;

    this.setState(
      state,
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid  && this.state.confirmpasswordValid,
    });
  }

  render() {
    let fieldValidationErrors = this.state.formErrors;
    return (
      <SignLayout>
        <Script src="https://unpkg.com/flowbite@1.4.5/dist/datepicker.js"></Script>
        <form method="POST">
          <div className="mx-auto w-full max-w-sm lg:w-96 mt-52">
            <div className="flex flex-col justify-center items-center">
              <img className="h-12 w-auto mt-32" src={cube.src} />
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Tribot</h2>
              <h2 className="mt-3 text-base font-bold text-gray-900">
                Ingresa tus datos para inicar sesión
              </h2>
            </div>
            <div className="mt-6">
              <InputField
                type="email"
                heading="Correo electrónico"
                name="email"
                id="email"
                autocomplete="off"
                required
                value={this.state.email}
                valErrors={fieldValidationErrors.email}
                onChange={(event) => this.handleInputs(event)}
              />
              <InputField
                type="text"
                heading="Nombre"
                name="nombre"
                id="nombre"
                autocomplete="off"
                required
                value={this.state.nombre}
                valErrors={fieldValidationErrors.nombre}
                onChange={(event) => this.handleInputs(event)}
              />
              <InputField
                type="text"
                heading="Apellidos"
                name="apellido"
                id="apellido"
                autocomplete="off"
                required
                value={this.state.apellido}
                valErrors={fieldValidationErrors.apellido}
                onChange={(event) => this.handleInputs(event)}
              />
              <Datepicker
                value={this.state.fecha_nacimiento}
                onChange={(event) => this.changeDate(event)}
                heading="Fecha de nacimiento(dd/mm/aaaa)"
                id="fecha_nacimiento"
                name="fecha_nacimiento"
                valErrors={fieldValidationErrors.fecha_nacimiento}
                required
              />
              <InputField
                type="number"
                heading="RUC"
                name="ruc"
                id="ruc"
                autocomplete="off"
                required
                value={this.state.ruc}
                valErrors={fieldValidationErrors.ruc}
                onChange={(event) => this.handleInputs(event)}
              />
              <InputField
                type="number"
                heading="DV(Dígito verificador)"
                name="dv"
                id="dv"
                autocomplete="off"
                required
                value={this.state.dv}
                valErrors={fieldValidationErrors.dv}
                onChange={(event) => this.handleInputs(event)}
              />
              <InputField
                type="number"
                heading="Número de ceular"
                name="celular"
                id="celular"
                autocomplete="off"
                required
                value={this.state.celular}
                valErrors={fieldValidationErrors.celular}
                onChange={(event) => this.handleInputs(event)}
              />
              <InputField
                type="password"
                heading="Contraseña"
                name="password"
                id="password"
                autocomplete="off"
                required
                valErrors={fieldValidationErrors.password}
                onChange={(event) => this.handleInputs(event)}
              />
               <InputField
                type="password"
                heading="Confirmar contraseña"
                name="confirmpassword"
                id="confirmpassword"
                autocomplete="off"
                required
                value={this.state.confirmpassword}
                valErrors={fieldValidationErrors.confirmpassword}
                onChange={(event) => this.handleInputs(event)}
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" id="terminos" name="terminos" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                <label className="ml-2 block text-sm text-gray-900">
                  Acepto los 
                  <a className="underline text-blue-700 hover:text-blue-500"> Términos y condiciones</a>
                </label>
              </div>
            </div>
            <div className="mt-8">
              <Button type="submit" label="Crear Cuenta de usuario" primary onClick />
            </div>
            <div className="space-y-6 mt-6">
              <div className="flex flex-col justify-center items-center">
                    ¿Ya tienes una cuenta?
                    <Link href="/login">
                      <a className="underline text-blue-700 hover:text-blue-500 mt-2">Ingresa aquí</a>
                    </Link>
              </div>
            </div>
          </div>
        </form>
      </SignLayout>
    );
  }
}



const mapStateToProps = state => ({

})
 
 const mapDispatchToProps = dispatch => ({
   
 })
 
 export default connect(mapStateToProps, mapDispatchToProps)(Register)
