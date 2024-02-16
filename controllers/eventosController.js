import {db} from '../db/conn.js';

const getEventos = async (req,res)=>{

    const sql = `select * from tbl_eventos`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postEventos = async (req,res)=>{

    const { titulo, descripcion, fecha, lugar } = req.body;

    const params = [titulo, descripcion, fecha, lugar];

    const sql = `insert into tbl_categoria
                (titulo, descripcion, fecha, lugar)
                values
                ($1, $2, $3, $4) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putEventos = async (req, res)=>{

    const { titulo, descripcion, fecha, lugar } = req.body;
    const {id} = req.params

    const params = [
        titulo,
        descripcion,
        fecha,
        lugar,
        id
    ]

    const sql = `update tbl_eventos
                set
                    titulo = $1,
                    descripcion = $2,
                    fecha = $3
                    lugar = $4
                where id = $5 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteEventos = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_eventos where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getEventos, postEventos, putEventos, deleteEventos}