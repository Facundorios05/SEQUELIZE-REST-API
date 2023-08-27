//Conexión a la base de datos
import { Sequelize } from 'sequelize';


//Para este trabajo, se ha utilizado un sistema ORM, el cual es Sequelize y PostgreSQL.

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    })
    
export default sequelize;