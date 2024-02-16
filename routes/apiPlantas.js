import express from 'express'
const planta = express();
import {getPlanta,
        postPlanta,
        putPlanta,
        deletePlanta
    } from "../controllers/plantaController.js";

planta.get('', getPlanta);

planta.post('', postPlanta);

planta.put( '/:id', putPlanta)

planta.delete( '/:id', deletePlanta)

export { planta }