'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.cjs'; 

class User extends Model {
  static associate(models) {
    
  }
}

User.init({
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  admin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User',
});

export default User  
