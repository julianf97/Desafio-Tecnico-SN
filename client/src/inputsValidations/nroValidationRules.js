export const nroValidationRules = {
    required: "Este campo es requerido",
    pattern: {
      value: /^[0-9]+$/,
      message: "El Nro de tramite no es valido"
    },
    minLength: {
      value: 11,
      message: "El Nro de tramite no es valido"
    },
    maxLength: {
      value: 11,
      message: "El Nro de tramite no es valido"
    }
  };
  