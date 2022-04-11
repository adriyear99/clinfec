import { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './TabelaPaciente.module.css';

export default function TabelaPaciente(){

    // recebe dados da API
    const [dados,getDados] = useState([]);
    const url = 'http://localhost:5000/paciente'

    useEffect(() => {
        getPacientes();
    }, []);

    const getPacientes = () => {
        Axios.get(url)
        .then(res => {
            const pacientes = res.data
            console.log(pacientes)
            getDados(pacientes)
        })
        .catch(err => {
            console.log("Ocorreu um erro: " + err)
        })
    }

    if(dados.length > 0){
        return (
            <div className={styles.container}>
                <h1>Tabela de Pacientes</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>Data</th>
                            <th>CPF</th>
                        </tr>
                        {dados.map((dado)=>{
                            <tr>
                                <td>{dado.id}</td>
                                <td>{dado.nome}</td>
                                <td>{dado.sobrenome}</td>
                                <td>{dado.data}</td>
                                <td>{dado.cpf}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        ) 
    } else{
        return (
            <div>
                <h3>Nenhum registro ainda</h3>
            </div>
        )
    }
}