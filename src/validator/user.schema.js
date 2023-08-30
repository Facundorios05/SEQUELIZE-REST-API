import { checkSchema } from 'express-validator';

export const userSchema = checkSchema({
    username: {
        notEmpty: {
            errorMessage: 'El nombre de usuario es obligatorio'
        }
    },
    email: {
        errorMessage: 'La información ingresada no pertenece a ningún correo.',
        isEmail: true
      },
    password: {
        isLength: {
            options: { min: 8 },
            errorMessage: 'La contraseña como mínimo debe tener 8 caracteres'
          }
}
})