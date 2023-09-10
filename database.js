//Importar mysql
const mysql = require('mysql');

//Configurar conexion
const dbConfig = {
    host: 'localhost',       // Host de tu base de datos MySQL
    user: 'root',      // Nombre de usuario
    password: '4321',  // Contraseña
    database: 'depquindio' // Nombre de la base de datos
  
};

//Conectar base de datos
const connection = mysql.createConnection(dbConfig);
connection.connect((err) => {
    if (err) {
      console.error('Error al conectar a la base de datos: ' + err.stack);
      return;
    }
    console.log('Conexión exitosa a la base de datos MySQL');
  });

//Funcion para realizar operaciones
function consultaSQL(consulta,datos){
  connection.query(consulta, datos, (error, resultados) => {
    if (error) {
      console.error('Error al insertar datos en la tabla: ' + error.message);
      return;
    }
    console.log('Datos insertados con éxito. ID del nuevo registro:', resultados.insertId);
  });
}
//Cerrar conexion
function cerrarConexion(){
  connection.end((err) => {
    if (err) {
      console.error('Error al cerrar la conexión: ' + err.stack);
      return;
    }
    console.log('Conexión a la base de datos MySQL cerrada');
  });
}

module.exports = {
  consultaSQL,
  cerrarConexion
}