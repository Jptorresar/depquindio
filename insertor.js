// Ejemplo de cómo usar SheetJS para cargar un archivo Excel y convertirlo a JSON
const XLSX = require('xlsx');
const workbook = XLSX.readFile('../datos/Partidos.xlsx');
const sheet_name = workbook.SheetNames[0];
const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name]);
const db = require('./database')

//Insertor de partidos
for (const row of excelData) {
    // Construir y ejecutar una consulta SQL para insertar datos en la tabla de MySQL
    const consultaSQL = `INSERT INTO partido (tipo, fecha, rival, gol_quindio, gol_rival) VALUES (?, ?, ?, ?, ?)`;
    const datos = [row.Tipo_num, new Date(row.Fecha), row.Rival, row.Gol_Quin, row.Gol_riv]
    // console.log(datos);
    db.consultaSQL(consultaSQL,datos);
  }

  db.cerrarConexion();

  //Insertor de jugadores
