import React, { Component } from "react";
import { connect } from "react-redux"
import SignLayout from "../components/layout/sign";
import InputField from "../components/input";
// import AlertModal from "../components/modal";
import Button from "../components/button";
import cube from "../assets/images/icons/cube1.png";
import Link from 'next/link'
import { actionLogin } from "../store/actions/LoginActions";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      formErrors: { user: "", password: "" },
      userValid: false,
      passwordValid: false,
      formValid: false,
      showModal: false
    };
  }

  componentDidMount = () => {
    if (this.props.oUserSession.bStatus){
      this.props.history.push('/');
    }
  }

  componentDidUpdate = () => {
    if (this.props.oUserSession.bStatus){
      this.props.history.push('/');
    }
  };


  login = () => {
    this.props.login(this.state.user, this.state.password);
  };

  accessKey = (event) => {
    if(event.charCode === 13 && this.state.user!=='' ) {
        this.login();
      }
  };

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  setShowModal(s){
    this.setState({
      showModal: s,
    });
  }

  isEmpty(str){
    return str == ""
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let userValid = this.state.userValid;
    let passwordValid = this.state.passwordValid;
    const user = this.state.user;
    const pass = this.state.password;

    switch (fieldName) {
      case "user":
        userValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.user = this.isEmpty(user)? "Campo requerido" : userValid ? "" : " El usuario no es valido";
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
        userValid: userValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.userValid && this.state.passwordValid,
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
                Ingresa tus datos para inicar sesión
              </h2>
            </div>
            <div className="mt-6">
              <InputField
                type="text"
                heading="Usuario"
                name="user"
                id="user"
                autocomplete="off"
                required
                value={this.state.user}
                valErrors={fieldValidationErrors.user}
                onChange={(event) => this.handleUserInput(event)}
              />
              <InputField
                type="password"
                heading="Contraseña"
                name="password"
                id="password"
                autocomplete="off"
                required
                valErrors={fieldValidationErrors.password}
                onKeyPress={this.accessKey}  
                onChange={(event) => this.handleUserInput(event)}
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <a className="font-medium text-indigo-600 hover:text-indigo-500">¿Olvidaste la contraseña?</a>
            </div>
            <div className="mt-8">
              <Button type="submit" label="Ingresar" primary onClick={() => this.login()}  />
            </div>
            <div className="mt-8">
              <Link href="/registro">
                <a className="bg-gray-700 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2">Crea tu cuenta</a>
              </Link>
            </div>
          </div>
        </form>
      </SignLayout>
    );
  }
}



const mapStateToProps = state => ({
  oUserSession: state.loginReducer,
})

const mapDispatchToProps = dispatch => ({
  login: (sEmail, sPassword) => {
    dispatch(actionLogin(sEmail, sPassword));
  },
})
 
 export default connect(mapStateToProps, mapDispatchToProps)(Login)
