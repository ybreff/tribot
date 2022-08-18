const TRIBOT_TOKEN_STORAGE = '@Tribot:Token';

/**
 * Funcion que almacena en el local storage el token de autorizacion para tomar los datos del API.
 * 
 * @param {string} sToken Token de autenticacion para los servicios
 * 
 * @author Leandro Curbelo
 */
export const setTokenLocalStorange = async (sToken) => {
    try {
        await localStorage.removeItem(TRIBOT_TOKEN_STORAGE);
        await localStorage.setItem(TRIBOT_TOKEN_STORAGE, sToken);
    } catch (oError) {
        throw oError;
    }
}
/**
 * Funcion que limpia el valor del token de autorizacion del local storage.
 * 
 * @author Leandro Curbelo
 */
export const setEmptyTokenLocalStorange = async () => {
    await localStorage.clear();
}
/**
 * Funcion que toma del local storage el token de autorizacion.
 * 
 * @author Leandro Curbelo
 */
export const getTokenLocalStorange = async () => {
    return await localStorage.getItem(TRIBOT_TOKEN_STORAGE);
}