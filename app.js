const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/jugadores',require('./routers/get.js'))
const PORT = process.env.PORT || 8000;

//Initialize server
app.listen(PORT, () =>{
    console.log(`Listening on ${PORT}`);
});