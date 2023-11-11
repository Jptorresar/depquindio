// Ejemplo de cómo usar SheetJS para cargar un archivo Excel y convertirlo a JSON
const XLSX = require('xlsx');
const workbook = XLSX.readFile('../datos/Partidos.xlsx'); //Ruta de tu archivo Excel
const sheet_name = workbook.SheetNames[0]; //Obtener nombre de la hoja que se va a leer
const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name]); //Obtener la hoja especifica y convertirla a un objeto json
const db = require('./database')

// //Insertor de partidos
//   // Excel usa el 1 de enero de 1900 como base, mientras que JavaScript usa el 1 de enero de 1970.
//   // Así que ajustamos la diferencia en días.
//   const dias = 25568; // Número de días entre 1/1/1900 y 1/1/1970
// for (const row of excelData) {
//   // Construir y ejecutar una consulta SQL para insertar datos en la tabla de MySQL
//   const consultaSQL = `INSERT INTO partido (tipo, fecha, rival, gol_quindio, gol_rival) VALUES (?, ?, ?, ?, ?)`;
//   const jsDate = new Date((row.Fecha-dias)* 24 * 60 * 60 * 1000);
//   const datos = [row.Tipo_num, jsDate, row.Rival, row.Gol_Quin, row.Gol_riv]
//   //console.log(datos);
//   db.consultaSQL(consultaSQL,datos);
// }

// Insertor de jugadores
const workbook2 = XLSX.readFile('../datos/GOLEADORES HISTORICO.xlsx');
const sheet_name2 = workbook2.SheetNames[0];
const excelData2 = XLSX.utils.sheet_to_json(workbook2.Sheets[sheet_name2]);

for (const row of excelData2) {
  // Construir y ejecutar una consulta SQL para insertar datos en la tabla de MySQL
  const consultaSQL = `INSERT INTO jugador (nombre, apellido) VALUES (?, ?)`;
  const datos = [row.NOMBRE, row.APELLIDO]
  // console.log(datos)
  db.consultaSQL(consultaSQL,datos);
}

db.cerrarConexion();