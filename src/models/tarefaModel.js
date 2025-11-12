const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

console.log(' Sequelize recebido:', sequelize instanceof require('sequelize').Sequelize);

class Tarefa extends Model {}

Tarefa.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'a fazer',
        validate: {
            isIn: {
                args: [['a fazer', 'em andamento', 'concluída']],
                msg: 'O Status deve ser: a fazer, em andamento ou concluída'
            }
        }
    }
}, {
    sequelize,
    modelName: 'Tarefa',
    tableName: 'tarefas',
    timestamps: true
});

module.exports = Tarefa;