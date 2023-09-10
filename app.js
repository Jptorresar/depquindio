const db = require('./database')

//Datos de prueba
const datos = {
    nombre: "Juan Pablo",
    apellido:"Torres Arias"
}

//Crear consulta
const consultaSQL = 'INSERT INTO jugador SET ?';
db.consultaSQL(consultaSQL,datos);

consultaSQL = 'DELETE FROM JUGADOR';
db.consultaSQL(consultaSQL,datos);

db.cerrarConexion();