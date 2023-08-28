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

//Obtener un proyecto por Id.
export const getProject = async (req, res) => {
    const { id } = req.params;
    try {
        const ProyectforId = await projects.findOne({
            where: {
                id: id
            }
        })
        res.json(ProyectforId)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Crear un nuevo proyecto
export const createProject = async (req, res) => {
    try {
        const { name, description, user_Id } = req.body;
        const newProject = await projects.create({
            name: name,
            description: description,
            user_Id: user_Id
        })
        res.json(newProject);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Actualizar un proyecto
export const updateProject = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, userId } = req.body;

        const updateProject = await projects.findByPk(id)

        if (!updateProject) {
            return res.status(400).json({ message: "No hay proyecto que actualizar" })
        }

        await updateProject.update({ name, description, userId });

        res.json(updateProject)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Eliminar un proyecto
export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        await projects.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {

    }
}

