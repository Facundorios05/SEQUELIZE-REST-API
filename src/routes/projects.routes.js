//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllProjects, createProject, updateProject, deleteProject } from '../controllers/projects.controllers.js';


//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente
router.get('/projects/:id', )
router.get('/projects/get', getAllProjects);
router.post('/projects/create', createProject);
router.put('/projects/:id/update',updateProject)
router.delete('/projects/:id/delete', deleteProject)

export default router;