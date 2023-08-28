//Se importa la funcionalidad router y su funcionalidad
import { Router } from 'express';
const router = Router();

//Se importan los controladores para las rutas
import { getAllProjects, createProject, updateProject, deleteProject, getProject } from '../controllers/projects.controllers.js';


//Se definen las rutas y se les concatena su funcionalidad importada del controlador correspondiente
router.get('/projects/:id',getProject );
router.get('/projects', getAllProjects);
router.post('/projects', createProject);
router.put('/projects/:id',updateProject)
router.delete('/projects/:id', deleteProject)

export default router;