const db = require('../database')
const controller = {}

controller.getJugadores = async (req, res) => {
    var sql = `select * from jugador`
    db.consultaSQL(sql).then(resultados =>{
        res.json(resultados)
    }).catch(error => {
        // Manejar el error
    });
}

controller.getJugadorById = async (req, res) => {
    const id = req.params.id
    var sql = `select * from jugador where codigo = ${id}`
    db.consultaSQL(sql).then(resultados =>{
        res.json(resultados)
    }).catch(error => {
        // Manejar el error
    });
}

module.exports = controller

