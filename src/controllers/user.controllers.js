//Se importa el modelo de base de datos para poder hacer consultas.
import { user } from '../models/user.js';


//Obtener todos los usuarios.
export const getUser = async (req, res) => {
    const users = await user.findAll();
    res.send('Getting all users..')
    res.json(users)
}

 
//Crear usuario.
export const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    const newUser = await user.create({
        username: username,
        email: email,
        password: password
    })
    res.send('Creating user..')
    res.json(newUser)

}