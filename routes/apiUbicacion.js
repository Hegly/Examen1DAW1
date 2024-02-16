import express from 'express'
const ubicacion = express();
import {getUbicacion,
        postUbicacion,
        putUbicacion,
        deleteUbicacion
    } from "../controllers/ubicacionController.js";

ubicacion.get('', getUbicacion );

ubicacion.post('', postUbicacion);

ubicacion.put( '/:id', putUbicacion)

ubicacion.delete( '/:id', deleteUbicacion)

export { ubicacion }