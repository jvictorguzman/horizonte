'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_pedido: {
        type: Sequelize.DATE
      },
      monto_total: {
        type: Sequelize.DECIMAL
      },
      estado: {
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Clientes",
          key:"id"          
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },    
      personaId: {
        type: Sequelize.INTEGER,
        references:{
          model: "Personals",
          key:"id"          
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
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
    await queryInterface.dropTable('Pedidos');
  }
};