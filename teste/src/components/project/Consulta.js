import styles from './Consulta.module.css';
import Axios from 'axios';
import {useState} from 'react';
import ReturnButton from '../layout/ReturnButton';

export default function Consulta(){

    const url = "http://localhost:5000/consulta"
    const [data,setData] = useState({
        paciente: '',
        medico: '',
        data: '',
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
                paciente: data.paciente,
                medico: data.medico,
                data: data.data,
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
            <h1>Agendamento de Consulta</h1>
            <form onSubmit={(e)=>submit(e)}>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o nome do paciente"
                        maxLength="40"
                        id="paciente"
                        name="paciente"
                        value={data.paciente}
                        onChange={(e)=>handle(e)}
                    />    
                </div>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o nome do médico"
                        maxLength="40"
                        id="medico"
                        name="medico"
                        value={data.medico}
                        onChange={(e)=>handle(e)}
                    />
                </div>
                <div className={styles.input}>
                    <input 
                        type="date"
                        id="data"
                        name="data"
                        value={data.data}
                        onChange={(e)=>handle(e)}
                    />
                </div>
                <div className={styles.input}>
                    <ReturnButton to="/cadastro" text="Voltar"/>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    )
}