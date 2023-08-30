//Se importan elementos importantes como express, dotenv.  
import express from 'express';
import "dotenv/config";



//Se importan rutas
import userRoutes from './routes/user.routes.js';
import tasksRoutes from './routes/tasks.routes.js';
import projectsRoutes from './routes/projects.routes.js';

const app = express()



//Permite interpretar los datos que se envian al servidor en formato en json y transformarlo en un req.body.
app.use(express.json());




//Se implementan las rutas
app.use("/users", userRoutes);
app.use("/tasks", tasksRoutes);
app.use("/projects", projectsRoutes);


export default app;
