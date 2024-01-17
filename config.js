const mongoose = require('mongoose')
const dbconnect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect("mongodb://localhost:27017/users_prueba", {}, (err, res) => {
        if(!err){
            console.log("Conexion correcta a la base de datos");
        }else{
            console.log("Error en la conexión a la base de datos");
        }
    })
}

module.exports = dbconnect