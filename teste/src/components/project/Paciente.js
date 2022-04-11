import styles from './Paciente.module.css';
import Axios from 'axios';
import {useState} from 'react';
import ReturnButton from '../layout/ReturnButton';

export default function Paciente(){

    const url = "http://localhost:5000/paciente"
    const [data,setData] = useState({
        nome: '',
        sobrenome: '',
        data: '',
        cpf: ''
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
                sobrenome: data.sobrenome,
                data: data.data,
                cpf: data.cpf
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
            <h1>Cadastro de Paciente</h1>
            <form onSubmit={(e)=>submit(e)}>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o nome do paciente"
                        maxLength="30"
                        id="nome"
                        value={data.nome}
                        onChange={(e)=>handle(e)}
                    />    
                </div>
                <div className={styles.input}>
                    <input 
                        type="text" 
                        placeholder="Digite o sobrenome do paciente"
                        maxLength="30"
                        id="sobrenome"
                        name="sobrenome"
                        value={data.sobrenome}
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
                    <input 
                        type="text" 
                        placeholder="Digite o CPF do paciente" 
                        maxLength="11"
                        id="cpf"
                        name="cpf"
                        value={data.cpf}
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