import { DataTypes } from 'sequelize'; //Se importan los tipos de datos que soporta Sequelize
import { sequelize } from '../database/database.js'; //Se importa la conexión a la base de datos

//Se importa el modelo de tareas para hacer la realción
import { tasks } from './tasks.js';

//se crea la tabla de proyectos
export const projects = sequelize.define('proyectos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

}, {
    timestamps: false
})

//Se crea la relación de Uno (Poryecto) a Muchos (Tareas)
projects.hasMany(tasks, {
    foreignKey: 'project_id',
    sourceKey: 'id'
})

tasks.belongsTo(projects, {
    foreignKey: 'project_id',
    targetId: 'id'
})