'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PedidoProductos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Pedidos",
          key:"id"          
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      productoId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Productos",
          key:"id"          
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },     
      cantidad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PedidoProductos');
  }
};