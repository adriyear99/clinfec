import styles from './Medico.module.css';
import Axios from 'axios';
import {useState} from 'react';
import ReturnButton from '../layout/ReturnButton';

export default function Medico(){

    const url = "http://localhost:5000/medico"
    const [data,setData] = useState({
        nome: '',
        crm: '',
        especialidade: '',
    })

    function handle(e){
        const newData = {...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function submit(e){
        e.preventDefault()
        const confirmar = window.confirm("Deseja mesmo enviar esses dados?")
        if(confirmar){
            Axios.post(url,{
                nome: data.nome,
                crm: data.crm,
                especialidade: data.especialidade,
            })
            .then(res=>{
                alert("Dados enviados com sucesso")
                console.log(res.data)
            })
            .catch((err)=>{
                console.log("Aconteceu um erro: " + err)
            })
        }
    }

    return (
        <div className={styles.container}>
            <h1>Busca por Médico</h1>
            <form onSubmit={(e)=>submit(e)}>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o nome do médico"
                        maxLength="40"
                        id="nome"
                        name="nome"
                        value={data.nome}
                        onChange={(e)=>handle(e)}
                    />    
                </div>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o CRM do médico"
                        maxLength="30"
                        id="crm"
                        name="crm"
                        value={data.crm}
                        onChange={(e)=>handle(e)}
                    />
                </div>
                <div className={styles.input}>
                    <select 
                        id="especialidade"
                        name="especialidade"
                        value={data.especialidade}
                        onChange={(e)=>handle(e)}
                    >
                        <option value="" selected disabled hidden>Especialidade</option>
                        <option value="Infectologia">Infectologia</option>
                        <option value="Mastologia">Mastologia</option>
                        <option value="Genética">Genética</option>
                        <option value="Psicologia">Psicologia</option>
                        <option value="Medicina da Dor">Medicina da Dor</option>
                        <option value="Hematologia">Hematologia</option>
                        <option value="Nutrição">Nutrição</option>
                    </select>
                </div>
                <div className={styles.input}>
                    <ReturnButton to="/cadastro" text="Voltar"/>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    )
}