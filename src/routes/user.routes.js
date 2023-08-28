//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllUsers, getUser, createUser, deleteUser, updateUser, userInfo } from '../controllers/user.controllers.js';
import { userSchema } from '../validator/user.schema.js';


//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente
router.post('/user', userSchema, createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id/info', userInfo)

export default router;