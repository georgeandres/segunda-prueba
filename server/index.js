const express=require('express');
const app = express();

const db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'domiApp'
});

app.post("/create", (req, res)=>{
    const nombre =req.body.nombre;
    const numId = req.body.numId;
    const correo = req.body.correo;
    const phone=req.body.phone;
    const password = req.body.password;

    db.query('INSERT INTO user(nombre, numId,correo, phone, password)VALUES(?,?,?,?,?)',[nombre, numId,correo, phone, password],
    (err, result)=>{
        if(err){
            console.log("err");
        }else{
            res.send("Registro exitoso");
        }
    }
    );
});

app.listen(5173, ()=>{
    console.log("Server is running on port 5173");
})