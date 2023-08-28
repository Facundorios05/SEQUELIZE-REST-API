//Se importa el modelo de base de datos para poder hacer consultas.
import { projects } from "../models/projects.js";

//Obtener todos los proyectos
export const getAllProjects = async (req, res) => {
    try {
        const project = await projects.findAll()
        res.json(project)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

export const createProject = async (req, res) => {
    try {
        const { name, description, userId } = req.body;
        const newProject = await projects.create({
            name: name,
            description: description,
            userId: userId
        })
        res.json(newProject);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

