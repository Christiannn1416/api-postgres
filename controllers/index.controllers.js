const {Pool}  = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'123',
    database:'firstapi',
    port:'5432'
});


const getUsers = async (req,res)=>{
   const response =  await pool.query('select * from users;');
   res.status(200).json(response.rows);
};

const getUserById = async (req,res)=>{
    const id =req.params.id;
    const response= await pool.query('select * from users where id = $1',[id]);
    res.json(response.rows);
}

const deleteUser = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('delete from users where id=$1',[id]);
    console.log(response),
    res.json('User ' + id + ' deleted');

};

const updateUser = async (req,res)=>{
    const id = req.params.id;
    const {name, email} = req.body;
    const response = await pool.query('update users set name=$1,email=$2 where id=$3',[name,email,id]);
    console.log(response),
    res.json('User ' + id + ' Updated');

};

const createUser = async (req,res)=>{
    const {name,email} = req.body;
    const response = await pool.query('insert into users (name,email) values($1,$2)',[name,email]);
    console.log(response);
    res.json({
        message: 'User Added Succesfylly',
        body:{
            user: {name,email}
        }
    })
};



module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}
