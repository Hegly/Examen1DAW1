import {db} from '../db/conn.js';

const getZona = async (req,res)=>{

    const sql = `select a.id,
                    a.nombre as nombre_zonas,
                    b.nombre as nombre_plantas
                from tbl_zonas a
                inner join tbl_plantas b
                on a.id_plantas = b.id`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postZona = async (req,res)=>{

    const { nombre, id_plantas } = req.body;

    const params = [nombre, id_plantas];

    const sql = `insert into tbl_zona
                (nombre, id_plantas)
                values
                ($1, $2) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putZona = async (req, res)=>{

    const { nombre, id_plantas } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        id_plantas,
        id
    ]

    const sql = `update tbl_Zonas
                set
                    nombre = $1,
                    id_plantas = $2,
                where id = $3 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteZona = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_zonas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getZona, postZona, putZona, deleteZona}