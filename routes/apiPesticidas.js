import express from 'express'
const pesticidas = express();
import {getPesticidas,
        postPesticidas,
        putPesticidas,
        deletePesticidas} from "../controllers/pesticidaController.js";

pesticidas.get('', getPesticidas );

pesticidas.post('', postPesticidas);

pesticidas.put( '/:id', putPesticidas)

pesticidas.delete( '/:id', deletePesticidas)

export { pesticidas }