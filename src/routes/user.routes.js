//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';

//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente

router.get('/user', getAllUsers);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id',  getUser);

export default router;