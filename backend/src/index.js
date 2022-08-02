const express = require('express');
const pool = require('../drivers/mysql');
const cors = require('cors')
const { insertPool,
        readPool,
        removePool} = require('../controller/controller')


var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    }

const app = express();
app.use(express.json());
app.use(cors(corsOptions))
const PORT = 5000

//METODOS CON POOL

app.get('/insert', (req,res) => {
    insertPool(pool,
        {name: 'frase placeholder', especial: 'true'}, 
        result => {
            res.json(result);
        }
    )
})

app.get('/read', (req,res) => {
    readPool(pool, result =>{
        res.json(result)
    })
})

app.get('/remove', (req,res) => {
    removePool(pool, {id: 38}, result =>{
        res.json(result)
    })
})

app.listen(PORT,() => {
    console.log(`App listening on http://localhost:${PORT}`)
})











