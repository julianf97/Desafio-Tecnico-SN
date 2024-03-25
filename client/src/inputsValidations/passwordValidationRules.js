const passwordValidationRules = {
    required: "Este campo es requerido",
    minLength: {
        value: 8,
        message: "Al menos 8 caracteres"
    },
    pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        message: "Un numero, una mayuscula, y una minuscula"
    }
};

export default passwordValidationRules;
