import { DataTypes } from 'sequelize'; //Se importan los tipos de datos que soporta Sequelize
import { sequelize } from '../database/database.js'; //Se importa la conexión a la base de datos

//Se crea la tabla de tareas
export const tasks = sequelize.define('tareas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})