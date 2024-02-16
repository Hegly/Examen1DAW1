import express from 'express'
const cuidados = express();
import {getCuidados,
        postCuidados,
        putCuidados,
        deleteCuidados
    } from "../controllers/cuidadosController.js";

cuidados.get('', getCuidados );

cuidados.post('', postCuidados);

cuidados.put( '/:id', putCuidados)

cuidados.delete( '/:id', deleteCuidados)

export { cuidados }