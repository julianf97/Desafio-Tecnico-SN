'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../../config/database.cjs'; 
import User from './user.js'; 

class Tramite extends Model {
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'userId', onDelete: 'CASCADE' });
  }
}

Tramite.init({
  nombre: DataTypes.STRING,
  apellido: DataTypes.STRING,
  dni: DataTypes.STRING,
  numero_tramite: DataTypes.STRING,
  estado: DataTypes.STRING,
  nombre_archivo: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
}, {
  sequelize,
  modelName: 'Tramite',
});

export default Tramite;