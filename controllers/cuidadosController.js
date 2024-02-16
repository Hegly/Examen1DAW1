import {db} from '../db/conn.js';

const getCuidados = async (req,res)=>{

    const sql = `select a.id,
                    a.tipo_cuidado,
                    a.fecha,
                    a.observaciones,
                    b.nombre as nombre_plantas
                from tbl_cuidados a
                inner join tbl_plantas b
                on a.id_plantas = b.id`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postCuidados = async (req,res)=>{

    const { tipo_cuidado, fecha, observaciones, id_plantas } = req.body;

    const params = [tipo_cuidado, fecha, observaciones, id_plantas];

    const sql = `insert into tbl_cuidados
                (tipo_cuidado, fecha, observaciones, id_plantas)
                values
                ($1, $2, $3, $4) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putCuidados = async (req, res)=>{

    const { tipo_cuidado, fecha, observaciones, id_plantas } = req.body;
    const {id} = req.params

    const params = [
        tipo_cuidado,
        fecha,
        observaciones,
        id_plantas,
        id
    ]

    const sql = `update tbl_cuidados
                set
                    tipo_cuidado = $1,
                    fecha =$2,
                    observaciones = $3,
                    id_plantas = $4,
                where id = $5 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteCuidados = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_cuidados where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getCuidados, postCuidados, putCuidados, deleteCuidados}