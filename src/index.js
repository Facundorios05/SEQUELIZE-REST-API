//Se importan archivos necesarios
import app from './app.js'
import { sequelize } from './database/database.js'


//Se importan las modelos 
import { user } from './models/user.js';
import { projects } from './models/projects.js';
import { tasks } from './models/tasks.js';

async function main() {
    try {
        //Crear las tablas si no existen, la caracteristica force lo que hace es que en caso de existir las tablas que se estan requiriendo, las borre y las cree de nuevo. 
        await sequelize.sync({ force: true }) 

        //Comprobar la conexión a la base de datos. De ser asi, mostrar el localhost
        console.log('Connection has been established successfully.');
        app.listen(3000);
        console.log("Server running on: http://localhost:" + 3000);
    } catch (error) {
        //En caso de error, escribir mensaje + error
        console.error('Unable to connect to the database:', error);
    }
}

main()