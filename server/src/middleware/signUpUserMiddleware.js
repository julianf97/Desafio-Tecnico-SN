import User from "../models/user.js";

export const signUpUserMiddleware = async (req, res, next) => {
    const { email } = req.body;
  
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ message: 'El usuario ya existe' });
      }
  
      next();
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
};
  