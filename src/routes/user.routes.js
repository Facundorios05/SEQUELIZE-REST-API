import { Router } from 'express';

//Se importan los controladores
import { getAllUsers, getUser, createUser, deleteUser, updateUser } from '../controllers/user.controllers.js';
//Se importa la funcionalidad router
const router = Router();

//Se hacen las rutas:

router.get('/user', getAllUsers)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
router.get('/user/:id',  getUser)

export default router;