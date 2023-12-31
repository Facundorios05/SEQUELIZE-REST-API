//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllUsers, getUser, createUser, deleteUser, updateUser, userInfo } from '../controllers/user.controllers.js';
import { userSchema } from '../validator/user.schema.js';
import { validateSchema } from '../validator/validationSchema.js';

//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente
router.post('/', userSchema, validateSchema, createUser);
router.get('/', getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/:id/info', userInfo)

export default router;