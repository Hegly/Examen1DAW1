import express from 'express';
import { usuarios } from './routes/apiUsuarios.js'
import { planta } from './routes/apiPlantas.js'
import { entsal } from './routes/apiEntSal.js'
import { cuidados } from './routes/apiCuidados.js'
import { ubicacion } from './routes/apiUbicacion.js'
import { categorias } from './routes/apiCategorias.js'
import { eventos } from './routes/apiEventos.js'
import { pesticidas } from './routes/apiPesticidas.js'
import { zona } from './routes/apiZonas.js'

const app = express();

//middlewares

app.use(express.json());

const port = 4000;

app.use('/api/usuarios', usuarios);
app.use('/api/plantas', planta);
app.use('/api/entsal', entsal);
app.use('/api/cuidados', cuidados);
app.use('/api/ubicacion', ubicacion);
app.use('/api/categorias', categorias);
app.use('/api/eventos', eventos);
app.use('/api/pesticidas', pesticidas);
app.use('/api/zonas', zona);


app.listen(port, ()=>{
    console.log(`Escuchando en el puerto ${port}`);
})