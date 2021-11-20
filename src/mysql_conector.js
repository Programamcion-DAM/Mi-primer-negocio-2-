//Importamos sql
const mysql = require('mysql')

//Crear la conexion
const conector = mysql.createConnection(
    {
        host:'localhost',
        user:'ProgramacionDAM',
        password:'Contraseña123',
        database:'registro_usuarios'
    }
)

//Nos conectamos y comprobamos si error
const connection = () =>{
    conector.connect(err =>{
        if(err)throw err
        console.log("Perfectamente conectado!")
    })
}

const addUser = (username,email,password) =>{
    const sql = 'INSERT INTO usuario (id_usuario, nombre_usuario, correo_usuario, contraseña_usuario) VALUES ('+null+',"'+username+'","'+email+'","'+password+'")'
    conector.query(sql,function(err,result,filed){
        if(err) throw err
    })
}

//Exportamos este metodo
exports.connection = connection
exports.addUser = addUser