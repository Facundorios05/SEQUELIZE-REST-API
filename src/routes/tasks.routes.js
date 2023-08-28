//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllTasks, createTask, updateTask, deleteTask, getTask } from '../controllers/tasks.controllers.js'

router.get('/tasks', getAllTasks)
router.post('/tasks', createTask)
router.put('/tasks', updateTask)
router.delete('/tasks', deleteTask )
router.get('/tasks', getTask)

export default router;