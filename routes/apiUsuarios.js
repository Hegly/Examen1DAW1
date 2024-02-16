import express from 'express'
const usuarios = express();
import {getUsuarios,
        postUsuarios,
        putUsuarios,
        deleteUsuarios
    } from "../controllers/usuarioController.js";

usuarios.get('', getUsuarios );

usuarios.post('', postUsuarios);

usuarios.put( '/:id', putUsuarios)

usuarios.delete( '/:id', deleteUsuarios)

export { usuarios }