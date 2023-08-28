import checkSchema from 'express-validator';

export const userSchema = checkSchema({
    username: {
        notEmpty: {
            errorMessage: 'El nombre de usuario es obligatorio'
        },
    isUsername: {
        errorMessage: 'El nombre de usuario debe ser valido'
    }
    },
    email: {
        notEmpty: {
            errorMessage: 'El email es obligatorio'
        },
        isEmail: {
            errorMessage: 'El email debe ser vailido'
        }
    },
    password: {
        notEmpty: {
            errorMessage: 'La contraseña es obligatoria'
        },
        isLength: {
            errorMessage: 'La contraseña debe tener al menos 8 caracteres',
            options: { min: 8}
        }    
    }
})
