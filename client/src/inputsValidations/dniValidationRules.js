export const dniValidationRules = {
  required: "Este campo es requerido",
  pattern: {
    value: /^[0-9]+$/,
    message: "El DNI no es valido"
  },
  minLength: {
    value: 8,
    message: "El DNI no es valido"
  },
  maxLength: {
    value: 8,
    message: "El DNI no es valido"
  }
};
