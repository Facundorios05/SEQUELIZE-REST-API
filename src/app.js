import express from 'express';
import "dotenv/config";
import sequelize from './database/database.js';

//Se importan las rutas
import userRoutes from './routes/user.routes.js'

const app = express()

app.use(userRoutes);


export default app;
