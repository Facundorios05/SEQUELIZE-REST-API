//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

router.get('/tasks/getAll')
router.post('/tasks/create')
router.put('/tasks/update')
router.delete('/tasks/delete')
router.get('/tasks/getById')