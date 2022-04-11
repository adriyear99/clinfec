const express = require('express')
const { append } = require('express/lib/response')
const mongoose = require('mongoose')
require('dotenv/config')


// conexão ao BD 
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then( () => {
    console.log("Conexão realizada com sucesso")
})
.catch( (err) => {
    console.log("Erro: " + err)
})

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})