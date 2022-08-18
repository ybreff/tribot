import React, { Component } from "react";
import { connect } from "react-redux"
import SignLayout from "../components/layout/sign";
import InputField from "../components/input";
import Button from "../components/button";
import cube from "../assets/images/icons/cube1.png";
import Link from 'next/link'

class Restore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmpassword: "",
      password: "",
      formErrors: { confirmpassword: "", password: "" },
      confirmpasswordValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleconfirmpasswordInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  isEmpty(str){
    return str == ""
  }
  

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let confirmpasswordValid = this.state.confirmpasswordValid;
    let passwordValid = this.state.passwordValid;
    const confirmpassword = this.state.confirmpassword;
    const pass = this.state.password;

    switch (fieldName) {
      case "confirmpassword":
        confirmpasswordValid = confirmpassword === pass;
        fieldValidationErrors.confirmpassword = this.isEmpty(confirmpassword)? "Campo requerido" : confirmpasswordValid ? "" : " Las contraseñas no coinciden";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = this.isEmpty(pass)? "Campo requerido" : passwordValid ? "" : "La contraseña es muy corta" 
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        confirmpasswordValid: confirmpasswordValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.confirmpasswordValid && this.state.passwordValid,
    });
  }


  render() {
    let fieldValidationErrors = this.state.formErrors;
    return (
      <SignLayout>
        <form method="POST">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="flex flex-col justify-center items-center">
              <img className="h-12 w-auto" src={cube.src} />
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Tribot</h2>
              <h2 className="mt-3 text-base font-bold text-gray-900">
                Recupera tu contraseña
              </h2>
              <h2 className="mt-0 text-sm font-normal text-gray-900">
                Por favor, llena los datos para asignar una nueva contraseña
              </h2>
            </div>
            <div className="mt-6">
              <InputField
                type="password"
                heading="Nueva contraseña"
                name="password"
                id="password"
                autocomplete="off"
                required
                valErrors={fieldValidationErrors.password}
                onChange={(event) => this.handleconfirmpasswordInput(event)}
              />
              <InputField
                type="password"
                heading="Confirmar nueva contraseña"
                name="confirmpassword"
                id="confirmpassword"
                autocomplete="off"
                required
                value={this.state.confirmpassword}
                valErrors={fieldValidationErrors.confirmpassword}
                onChange={(event) => this.handleconfirmpasswordInput(event)}
              />
            </div>
            <div className="mt-8">
              <Button type="submit" label="Registrar nueva contraseña" primary onClick />
            </div>
            <div className="space-y-6 mt-8">
              <div className="flex flex-col justify-center items-center">
              <Link href="/login">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">Regresar</a>
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
 
 export default connect(mapStateToProps, mapDispatchToProps)(Restore)
