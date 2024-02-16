import express from 'express'
const eventos = express();
import {getEventos,
        postEventos,
        putEventos,
        deleteEventos
    } from "../controllers/eventosController.js";

eventos.get('', getEventos );

eventos.post('', postEventos);

eventos.put( '/:id', putEventos)

eventos.delete( '/:id', deleteEventos)

export { eventos }