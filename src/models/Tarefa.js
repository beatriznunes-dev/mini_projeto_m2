const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Tarefa extends Model {}

Tarefa.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('pendente', 'concluída'),
      defaultValue: 'pendente',
    },
  },
  {
    sequelize, 
    modelName: 'Tarefa',
    tableName: 'tarefas',
    timestamps: true,
  }
);

module.exports = Tarefa;
