import { CONSTANTS_ACTIONS } from "../../constants/ConstantsActions";

// Estado inicial del reducer
const aInitialState = {
  bLoading: false,
  nResponseCode: null,
  sMessage: "",
  sMessageType: "",
};

/**
 * Reducer que sera utilizado para controlar variables globales en el sistema, por ejemplo el loading.
 *
 * @param {Array} state Estado, si no recibe datos se setea el estado inicial
 * @param {object} action Action que es ejecutada
 *
 * @returns {Array} Retorna un array que sera seteado en el estado del reducer
 *
 * @author Leandro Curbelo
 */
export const sharedReducer = (state = aInitialState, action) => {
  switch (action.type) {
    case CONSTANTS_ACTIONS.MESSAGE:
      return {...state,
        bLoading: !action.bStopLoading,
        sMessage: action.sMessage,
        sMessageType: action.sMessageType,
      };
    case CONSTANTS_ACTIONS.CLEAN_MESSAGE:
      return {...state,
        sMessage: '',
        sMessageType: ''
      };
    case CONSTANTS_ACTIONS.SET_RESPONSE_CODE:
      return { ...state, nResponseCode: action.data };
    case CONSTANTS_ACTIONS.ACTIVE_LOADING:
      return { bLoading: true, sMessage: "", style: "" };
    case CONSTANTS_ACTIONS.DESACTIVE_LOADING:
      return { ...state, bLoading: false };
    default:
      return state;
  }
};
