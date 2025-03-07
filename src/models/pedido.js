'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pedido.init({
    fecha_pedido: DataTypes.DATE,
    monto_total: DataTypes.DECIMAL,
    estado: DataTypes.INTEGER,
    clienteId: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};