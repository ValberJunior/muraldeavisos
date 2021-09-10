const PORT = 3000;
const express = require('express');
const app = express();
const path = require('path');
const apiRoute = require('./routes/api');


// Para evitar que uma chamada a api não busque por
//uma pasta chamada api, devemos inserir a linha da rota primeiro.

app.use('/api', apiRoute);

//Chamando meu index.hmtl que está na pasta public

app.use('/', express.static(path.join(__dirname, 'public')));





app.listen(PORT, (err)=>{

    if(err){
        console.log(err);
    }else{
    console.log("Server running on port: ",PORT)}
});