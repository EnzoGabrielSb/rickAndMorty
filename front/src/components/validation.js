const validation = (userData) => {
  let errors = {};

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
    errors.username = "Email invalido.";
  }
  if (!userData.username) {
    errors.username = "Este campo no puede estar vacio";
  }
  if (userData.username.length >= 35) {
    errors.username = "No puede contener mas de 35 caracteres";
  }
  if (!userData.password.match(/\d/)) {
    errors.password = "Debe contener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password = "Debe tener entre 6 y 10 caracteres.";
  }

  return errors;
};

export default validation;
