//Se importa el modelo de base de datos para poder hacer consultas.
import { user } from '../models/user.js';
import { projects } from '../models/projects.js';
import { tasks } from '../models/tasks.js';

//Obtener todos los usuarios.
export const getAllUsers = async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

}

//Obtener un usuario por ID.
export const getUser = async (req, res) => {
    const { id } = req.params
    try {
        const userForId = await user.findOne({
            where: {
                id: id
            }
        })
        res.json(userForId)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Crear usuario.
export const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await user.create({
            username: username,
            email: email,
            password: password
        })
        res.json(newUser)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Actualizar un usuario.
export const updateUser = async (req, res) => {

    try {
        const { id } = req.params;
        const { username, email, password } = req.body;

        const updateUser = await user.findByPk(id)

        if (!updateUser) {
            return res.status(400).json({ message: "No hay usuario que actualizar." })
        }

        await updateUser.update({ username, password, email });

        res.json(updateUser)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

//Eliminar un usuario.
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        await user.destroy({
            where: {
                id: id
            },
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const userInfo = async (req, res) => {
    const { id } = req.params;
    const infoUser = await user.findOne({
        where: {
            id: id
        }
    })
    const infoProjects = await projects.findAll({
        where: {
            user_id: id
        },
        include: [{
            model: tasks, required: true
        }]
    })
    const response = {
        infoUser,
        infoProjects
    }
    res.json(response)
}
