import { user } from '../models/user.js'; //Se importa el modelo de base de datos para poder hacer consultas.

//Obtener todos los usuarios.
export const getUser = (req, res) => {
    res.send('Getting all users..')
}

//Crear usuario.
export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = await user.create({
        username: username,
        email: email,
        password: password
    })
    console.log(newUser)
    res.send('Creating user..')
}