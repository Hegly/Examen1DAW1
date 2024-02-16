import express from 'express'
const entsal = express();
import {getEntsal,
        postEntsal,
        putEntsal,
        deleteEntsal
    } from "../controllers/entsalController.js";

entsal.get('', getEntsal );

entsal.post('', postEntsal);

entsal.put( '/:id', putEntsal)

entsal.delete( '/:id', deleteEntsal)

export { entsal }