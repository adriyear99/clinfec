const express = require('express')
const router = express.Router()
const Schemas = require('../models/Schema.js')


router.get('/addPaciente', async (req,res) => {
    const paciente = {
        nome:'teste',
        sobrenome:'teste',
        data:'01/01/1999',
        cpf:'11111111111'
    }

    const novoPaciente = new Schemas.Paciente(paciente)

    try{
        await novoPaciente.save(async(err,novoPacienteResultado)=>{
            console.log("Novo paciente criado")
            res.end("Novo paciente criado")
        })
    } catch(err){
        console.log("Erro: " + err)
        res.end("Paciente não adicionado")
    }
})

router.get('/addMedico', async (req,res) => {
    const paciente = {
        nome:'teste',
        crm:'teste',
        especialidade:'Psicologia'
    }

    const novoMedico = new Schemas.Medico(medico)

    try{
        await novoMedico.save(async(err,novoMedicoResultado)=>{
            console.log("Novo médico criado")
            res.end("Novo médico criado")
        })
    } catch(err){
        console.log("Erro: " + err)
        res.end("Médico não adicionado")
    }
})

router.get('/addConsulta', async (req,res) => {
    const consulta = {
        paciente:'teste',
        medico:'teste',
        data:'01/01/1999',
    }

    const novaConsulta = new Schemas.Consulta(consulta)

    try{
        await novaConsulta.save(async(err,novaConsultaResultado)=>{
            console.log("Nova consulta criada")
            res.end("Nova consulta criada")
        })
    } catch(err){
        console.log("Erro: " + err)
        res.end("Consulta não adicionada")
    }
})


router.post('/paciente',(req,res)=>{
    res.end('BR')
})

router.post('/medico',(req,res)=>{
    res.end('BR')
})

router.post('/consulta',(req,res)=>{
    res.end('BR')
})