import {db} from '../db/conn.js';

const getUbicacion = async (req,res)=>{

    const sql = `select * from tbl_ubicacion`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postUbicacion = async (req,res)=>{

    const { nombre, descripcion } = req.body;

    const params = [nombre, descripcion];

    const sql = `insert into tbl_ubicacion
                (nombre, descripcion)
                values
                ($1, $2) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putUbicacion = async (req, res)=>{

    const { nombre, descripcion } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        descripcion,
        id
    ]

    const sql = `update tbl_Ubicacion
                set
                    nombre = $1,
                    descripcion = $2,
                    where id = $3
                    returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteUbicacion = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_ubicacion where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getUbicacion, postUbicacion, putUbicacion, deleteUbicacion}