import {db} from '../db/conn.js';

const getUsuarios = async (req,res)=>{

    const sql = `select * from tbl_usuarios`;
    const result = await db.query(sql);
 
    res.json(result)
 }

 const postUsuarios = async (req,res)=>{

    const { nombre, correo, contraseña} = req.body;

    const params = [nombre, correo, contraseña];

    const sql = `insert into tbl_usuarios
                (nombre, correo, contraseña)
                values
                ($1, $2, $3) returning * `;

    const result = await db.query(sql, params);

    res.json(result);
}

const putUsuarios = async (req, res)=>{

    const { nombre, correo, contraseña } = req.body;
    const {id} = req.params

    const params = [
        nombre,
        correo,
        contraseña,
        id
    ]

    const sql = `update tbl_usuarios
                set
                    nombre = $1,
                    correo = $2,
                    contraseña = $3,
                where id = $4 returning *`;

    const result = await db.query(sql, params)

    res.json(result);
} 

const deleteUsuarios = async (req, res)=>{

    const {id} = req.params;
    const params = [id];

    const sql = `delete from tbl_usuarios where id = $1 returning *`;

    const result = await db.query(sql, params);

    res.json(result);
} 

 export {getUsuarios, postUsuarios, putUsuarios, deleteUsuarios}