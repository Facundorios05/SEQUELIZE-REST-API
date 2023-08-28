//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';

//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente

router.post('/user/create', createUser);
router.get('/user/getAll', getAllUsers);
router.get('/user/:id/getById',  getUser);
router.put('/user/:id/update', updateUser);
router.delete('/user/:id/delete', deleteUser);

export default router;