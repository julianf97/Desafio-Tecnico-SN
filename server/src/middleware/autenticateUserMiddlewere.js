import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const authenticateUserMiddlewere = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    
    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);
      
      if (passwordMatch) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
