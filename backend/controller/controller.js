const mysql = require('mysql')
//POOL

const insertPool = (_pool, data, callback) =>{
    let insertQuery = "INSERT INTO evento (nombre,especial) VALUES (?,?)"
    let query = mysql.format(insertQuery, [data.name, data.category]) //esto es para reemplazar los "??"

    _pool.getConnection((err, _connection) =>{
        if (err) throw err
        _connection.query(query,(err,result) => {
            if(err) throw err
            callback(result)
            _connection.release()
        })
    })
}   

const readPool = (_pool, callback) =>{
    let readQuery = `SELECT * FROM evento`

    _pool.getConnection((err, _connection)=>{
        if(err) throw err
        _connection.query(readQuery, (err,result) => {
            if(err) throw err
            callback(result)
            _connection.release()
        })
    })

}

const removePool = (_pool,data,callback) =>{
    let removeQuery = `DELETE FROM evento WHERE id_product = ?`
    let query = mysql.format(removeQuery,[data.id])
    _pool.getConnection((err, _connection) =>{
        if (err) throw err
        _connection.query(query, (err,result) => {
            if(err) throw err
            callback(result)
            _connection.release()
        })
    })
}

module.exports = {insertPool,readPool,removePool};