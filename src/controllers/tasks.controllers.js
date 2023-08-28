//Se importa el modelo de base de datos para poder hacer consultas.
import { projects } from "../models/projects.js";
import { tasks } from "../models/tasks.js";

//Obtener todas las tareas.
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await projects.findAll()
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: error.message })

    }

}

//Obtener tarea por id.
export const getTask = async (req, res) => {
    const { id } = req.params;
    try {
        const taskForId = await tasks.findOne({
            where: {
                id: id
            }
        })
        res.json(taskForId);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//crear una nueva tarea.
export const createTask = async (req, res) => {

    try {
        const { name, done, project_Id } = req.body;
        const newTask = await tasks.create({
            name: name,
            done: done,
            project_Id: project_Id
        })
        res.json(newTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Actualizar una nueva tarea
export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, done, project_Id } = req.body;

        const updateTask = await tasks.findByPk(id)

        if (!updateTask) {
            return res.status(400).json({ message: "No hay tarea que actualizar" })
        }

        await updateTask.update({ name, done, project_Id })
        res.json(updateTask)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Eliminar una tarea 
export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await tasks.destroy({
            where: {
                id: id
            }
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}