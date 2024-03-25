export const lastNameValidationRules = {
  required: "Este campo es requerido",
  minLength: {
    value: 2,
    message: "Más de 2 caracteres"
  },
  maxLength: {
    value: 20,
    message: "Menos de 20 caracteres"
  },
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Solo se admiten letras"
  }
};
