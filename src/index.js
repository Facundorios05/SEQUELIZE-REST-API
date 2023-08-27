import app from './app.js'
import { sequelize } from './database/database.js'

//Se importan modelos de tablas

async function main() {
    try {
        await sequelize.sync({ force: false }) //Crear las tablas si no existen, la caracteristica force lo que hace es que en caso de existir las tablas que se estan requiriendo, las borre y las cree de nuevo. 

        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log("Server running on: http://localhost:" + 3000);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

main()