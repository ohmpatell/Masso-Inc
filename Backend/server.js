const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const hotelRoutes= require('./app/routes/index.server.routes');
const clientRoute = require ('./app/routes/clientRoute');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://santiagocarreno05:zS31VIjlc1JGPHkv@cluster0.0unoubr.mongodb.net/MASSO_INC?retryWrites=true&w=majority',
{useNewUrlParser:true});

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("DB connected......")
})

app.use('/', hotelRoutes);
app.use('/login', clientRoute)
app.listen(8081,()=>{
    console.log("Server is running on 8081....");
});