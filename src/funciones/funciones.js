// Expresión regular de un email
const emailReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;

/**
 * Valida expresión regular de un email
 * retorna verdadero si es válido y falso si es invalido
 * @param {string} email
 * @return {boolean}
 */
function validarMail(email) {
  return emailReg.test(email);
}

export {
  validarMail,
};