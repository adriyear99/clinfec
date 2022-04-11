const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema({
    nome: {type: String, required: true},
    sobrenome: {type: String, required: true},
    data: {type: Date, required: true},
    cpf: {type: String, required: true}
})

const medicoSchema = new Schema({
    nome: {type: String, required: true},
    crm: {type: String, required: true},
    especialidade: {type: String, required: true},
})

const consultaSchema = new Schema({
    paciente: {type: String, required: true},
    medico: {type: String, required: true},
    data: {type: Date, required: true},
})


const Paciente = mongoose.model('paciente',pacienteSchema,'paciente')
const Medico = mongoose.model('medico',medicoSchema,'medico')
const Consulta = mongoose.model('consulta',consultaSchema,'consulta')