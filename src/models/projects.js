import { DataTypes } from 'sequelize'; //Se importan los tipos de datos que soporta Sequelize
import { sequelize } from '../database/database.js'; //Se importa la conexión a la base de datos

//Se importa el modelo de tareas para hacer la realción
import { tasks } from './tasks.js';
import { user } from './user.js'

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
    },
    user_Id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: user,
            key: 'id'
        }
    }
}, {
    timestamps: false
})

user.hasMany(projects, {
    foreignKey: 'user_Id',
    sourceKey: 'id'
})

projects.belongsTo(user, {
    foreignKey: 'user_Id',
    targetId: 'id'
})

//Se crea la relación de Uno (Poryecto) a Muchos (Tareas)
projects.hasMany(tasks, {
    foreignKey: 'projects_id',
    sourceKey: 'id'
})

tasks.belongsTo(projects, {
    foreignKey: 'projects_id',
    targetId: 'id'
})