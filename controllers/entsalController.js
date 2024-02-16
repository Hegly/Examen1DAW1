import {db} from '../db/conn.js';

const getEntsal = async (req,res)=>{

    const sql = `select a.id,
                    a.tipo,
                    a.fecha,
                    a.cantidad,
                    b.nombre as nombre_plantas
                from tbl_entradas_salidas a
                inner join tbl_plantas b
                on a.id_plantas = b.id`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postEntsal = async (req,res)=>{

    const { tipo, fecha, cantidad, id_plantas } = req.body;

    const params = [tipo, fecha, cantidad, id_plantas];

    const sql = `insert into tbl_entradas_salidas
                (tipo, fecha, cantidad, id_plantas)
                values
                ($1, $2, $3, $4) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putEntsal = async (req, res)=>{

    const { tipo, fecha, cantidad, id_plantas } = req.body;
    const {id} = req.params

    const params = [
        tipo,
        fecha,
        cantidad,
        id_plantas,
        id
    ]

    const sql = `update tbl_entradas_salidas
                set
                    tipo = $1,
                    fecha =$2,
                    cantidad = $3,
                    id_plantas = $4,
                where id = $5 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteEntsal = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_entradas_salidas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getEntsal, postEntsal, putEntsal, deleteEntsal}