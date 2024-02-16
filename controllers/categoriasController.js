import {db} from '../db/conn.js';

const getCategorias = async (req,res)=>{

    const sql = `select * from tbl_categorias`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postCategorias = async (req,res)=>{

    const { nombre, descripcion } = req.body;

    const params = [nombre, descripcion];

    const sql = `insert into tbl_categoria
                (nombre, descripcion)
                values
                ($1, $2) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putCategorias = async (req, res)=>{

    const { nombre, descripcion } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        descripcion,
        id
    ]

    const sql = `update tbl_categorias
                set
                    nombre = $1,
                    descripcion = $2,
                    where id = $3
                    returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteCategorias = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_categorias where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getCategorias, postCategorias, putCategorias, deleteCategorias}