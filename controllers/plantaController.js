import {db} from '../db/conn.js';

const getPlanta = async (req,res)=>{

    const sql = `select a.id,
                    a.nombre as nombre_plantas,
                    a.especie,
                    a.descripcion,
                    a.fecha_plantacion,
                    b.nombre as nombre_usuarios
                from tbl_plantas a
                inner join tbl_usuarios b
                on a.id_usuarios = b.id`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postPlanta = async (req,res)=>{

    const { nombre, especie, descripcion, fecha_plantacion, id_usuarios } = req.body;

    const params = [nombre, especie, descripcion, fecha_plantacion, id_usuarios];

    const sql = `insert into tbl_plantas
                (nombre, especie, descripcion fecha_plantacion, id_usuarios)
                values
                ($1, $2, $3, $4, $5) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putPlanta = async (req, res)=>{

    const { nombre, especie, descripcion, fecha_plantacion, id_usuarios } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        especie,
        descripcion,
        fecha_plantacion,
        id_usuarios,
        id
    ]

    const sql = `update tbl_plantas
                set
                    nombre = $1,
                    especie =$2,
                    descripcion = $3,
                    fecha_plantacion = $4,
                    id_usuario = $5,
                where id = $6 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deletePlanta = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_plantas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getPlanta, postPlanta, putPlanta, deletePlanta}