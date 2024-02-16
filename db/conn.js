import pg from 'pg-promise'
import dotenv from "dotenv";
dotenv.config();
const pgp = pg();

const user = process.env.USER;
const pass = process.env.PASS;
const dataBase = process.env.DB;
const host = process.env.HOST;
const portDB = process.env.PORT_DB;

const cnstr = `postgresql://${user}:${pass}@${host}:${portDB}/${dataBase}`;
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexión Exitosa");
    } )

    .catch( (err)=>{
        console.log(`Error de conexión ${err}`)
    })

    export { db }