import { Router } from 'express';

//Se importan los controladores
import { getUser, createUser } from '../controllers/user.controllers.js';
//Se importa la funcionalidad router
const router = Router();

//Se hacen las rutas:

router.get('/user', getUser)
router.post('/user', createUser)
router.put('/user/id')
router.delete('/user/id')
router.get('/user/id')

export default router;