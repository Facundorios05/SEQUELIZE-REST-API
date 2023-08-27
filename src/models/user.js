import { DataTypes } from 'sequelize'; //Se importan los tipos de datos que soporta Sequelize
import { sequelize } from '../database/database.js'; //Se importa la conexión a la base de datos

//Se importa tabla de "proyectos" para hacer la relación
import { projects } from './projects.js';


//Se crea la tabla de usuarios
export const user = sequelize.define('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

//Se crea la relación de uno (Usuarios) a Muchos (Proyectos)

user.hasMany(projects, {
    foreignKey: 'project_id',
    sourceKey: 'id'
})

projects.belongsTo(user, {
    foreignKey: 'project_id',
    targetId: 'id'
})