import {db} from '../db/conn.js';

const getPesticidas = async (req,res)=>{

    const sql = `select a.id,
                    a.tipo_pesticida,
                    a.fecha_aplicacion,
                    a.cantidad_aplicada,
                    b.nombre as nombre_plantas
                from tbl_pesticidas a
                inner join tbl_plantas b
                on a.id_plantas = b.id`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postPesticidas = async (req,res)=>{

    const { tipo_pesticida, fecha_aplicacion, cantidad_aplicada, id_plantas } = req.body;

    const params = [tipo_pesticida, fecha_aplicacion, cantidad_aplicada, id_plantas];

    const sql = `insert into tbl_pesticidas
                (tipo_pesticida, fecha_aplicacion, cantidad_aplicada, id_plantas)
                values
                ($1, $2, $3, $4) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putPesticidas = async (req, res)=>{

    const { tipo_pesticida, fecha_aplicacion, cantidad_aplicada, id_plantas } = req.body;
    const {id} = req.params

    const params = [
        tipo_pesticida,
        fecha_aplicacion,
        cantidad_aplicada,
        id_plantas,
        id
    ]

    const sql = `update tbl_pesticidas
                set
                    tipo_pesticida = $1,
                    fecha_aplicacion =$2,
                    cantidad_aplicada = $3,
                    id_plantas = $4,
                where id = $5 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deletePesticidas = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_pesticidas where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getPesticidas, postPesticidas, putPesticidas, deletePesticidas}