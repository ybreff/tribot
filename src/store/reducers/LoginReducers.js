import { CONSTANTS_ACTIONS } from '../../constants/ConstantsActions';

const aInitialState = {
  oUserSession: {},
  bStatus: false
}
/**
 * Reducer encargado del inicio de session de un usuario.
 * 
 * @param {Array} aState Estado del reducer, al momento de inicializarse se tomara aInitialState
 * @param {object} oAction Objeto donde se encuentra el tipo de estado que se desea actualizar y los respectivos datos
 * 
 * @author Leandro Curbelo
 */
export const loginReducer = (aState = aInitialState, oAction) => {
  switch (oAction.type) {
    case CONSTANTS_ACTIONS.LOGIN:
      return { ...aState, bStatus: true, oUserSession: oAction.data };
    case CONSTANTS_ACTIONS.LOGOUT:
      return { ...aState, bStatus: false, oUserSession: null };
    default:
      return aState;
  }
}
