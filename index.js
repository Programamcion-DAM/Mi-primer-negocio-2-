

const express = require('express');
const app = express() //Iniciamos Express
const connectSQL = require('./src/mysql_conector.js')
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

//Iniciamos servidor
app.listen('8000',function(){
    console.log('Aplicacion iniciadda en el 8000')
})



app.get('/',function(req,res){
    //connectSQL.connection()
    res.sendFile('C:/Users/Dani/Desktop/Impresiones 3D/views/index.html')
})

app.get('/aboutus',function(req,res){
    res.sendFile('C:/Users/Dani/Desktop/Impresiones 3D/views/aboutus.html')
})

app.get('/login',function(req,res){
    res.sendFile('C:/Users/Dani/Desktop/Impresiones 3D/views/login.html')
})

app.get('/add/:username/:email/:password', function(req,res){
    
    let username = req.params.username
    let email = req.params.email
    let password = req.params.password;
    
    console.log("Recibe la peticion con los parametros: "+username+" "+email+" "+password)
    
    connectSQL.addUser(username,email,password);

    res.redirect('/');
})