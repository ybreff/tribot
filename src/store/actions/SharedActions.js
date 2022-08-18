import { CONSTANTS_ACTIONS } from "../../constants/ConstantsActions";
import { CONSTANTS_MESSAGE } from "../../constants/ConstantsMessages";
import { actionLogout } from "../actions/LoginActions";

/**
 * Funcion que realiza un dispatch global
 *
 * @param {Action} sTypeAction Tipo de accion que se envia
 * @param {Data} oData Datos que se deseean enviar al redux
 *
 * @author Leandro Curbelo
 */
export const actionDispatch = (sTypeAction, oData = null) => ({
  type: sTypeAction,
  data: oData,
});

/**
 * Funcion que activa el mensaje Toast
 *
 * @param {string} sMessage Mensaje que se mostrara en pantalla
 *
 * @author Leandro Curbelo
 */
export const actionMessage = (
  sMessage = CONSTANTS_MESSAGE.DEFAULT_MESSAGE_ERROR,
  sMessageType = CONSTANTS_MESSAGE.TYPE_ERROR,
  bStopLoading = true
) => {
  console.log(sMessage);
  return (dispatch) => {
    dispatch(
      actionDispatch(CONSTANTS_ACTIONS.MESSAGE, {
        sMessage: sMessage,
        sMessageType: sMessageType,
        bStopLoading: bStopLoading,
      })
    );
  };
};

/**
 * Funcion que activa el mensaje Toast
 *
 * @param {string} sMessage Mensaje que se mostrara en pantalla
 *
 * @author Leandro Curbelo
 */
export const actionCleanMessage = () => {
  return (dispatch) => {
    dispatch(actionDispatch(CONSTANTS_ACTIONS.CLEAN_MESSAGE));
  };
};

/**
 * Funcion que setea el código de respuesta del api
 *
 * @param {number} nCode Código de respuesta
 *
 * @author Leandro Curbelo
 */
export const actionSetResponseCode = (nCode) => {
  return (dispatch) => {
    if (nCode === 401) {
      dispatch(actionLogout());
    }
    dispatch(actionDispatch(CONSTANTS_ACTIONS.SET_RESPONSE_CODE, nCode));
  };
};

/**
 * Funcion que activa el loading
 *
 * @author Leandro Curbelo
 */
export const actionActiveLoading = () => {
  return (dispatch) => {
    dispatch(actionDispatch(CONSTANTS_ACTIONS.ACTIVE_LOADING, null));
  };
};

/**
 * Funcion que desactiva el loading
 *
 * @author Leandro Curbelo
 */
export const actionDesactiveLoading = () => {
  return (dispatch) => {
    dispatch(actionDispatch(CONSTANTS_ACTIONS.DESACTIVE_LOADING, null));
  };
};
