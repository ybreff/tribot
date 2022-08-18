import { setEmptyTokenLocalStorange, setTokenLocalStorange } from '../services/StorageServices';
import { CONSTANTS_ACTIONS } from '../../constants/ConstantsActions';
import { actionActiveLoading, actionDesactiveLoading, actionDispatch, actionMessage } from './SharedActions';
import { Login, Logout } from '../services/LoginServices';

/**
 * Funcion que realiza el login en el sistema, envia los datos al API y actualiza el estado de la aplicacion.
 * 
 * @param {string} sEmail Email del usuario que desea ingresar al sistema
 * @param {string} sPassword Password del usuario que desea ingresar al sistema
 * 
 * @author Yasmany Breff
 */
export const actionLogin = (sEmail, sPassword) => {
    return dispatch => {
        dispatch(actionActiveLoading());
        Login(sEmail, sPassword).then(async oSuccess => {
            // Esta linea setea el token de autorizacion en la sesion del navegador, 
            //luego se tomara para todas las solicitudes
            await setTokenLocalStorange(oSuccess.data.data.token);
            dispatch(actionDispatch(CONSTANTS_ACTIONS.LOGIN, oSuccess.data));
        }).catch(() => {
            let sMessage = "Credenciales Incorrectas";
            let type = 'error';
            dispatch(actionMessage(sMessage,type));
        }).finally(() => { dispatch(actionDesactiveLoading()); });
    }
};

export const actionLogout = () => {
    return dispatch => {
        dispatch(actionActiveLoading());
        Logout().then(() => {
        }).catch(() => {
        }).finally(async() => { 
            await setEmptyTokenLocalStorange();
            dispatch(actionDispatch(CONSTANTS_ACTIONS.LOGOUT));
            dispatch(actionDesactiveLoading());
         });
    }
};
