import User from "../models/user.js";
import bcrypt from 'bcryptjs';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error al obtener todos los usuarios:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export const loginUser = async (req, res) => {
  res.status(200).json({ message: "Login successful", user: { id: req.user.dataValues.id, email: req.user.email, admin: req.user.admin } });
};

export const signUpUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword 
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};