import { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './Tabela.module.css';

export default function TabelaMedico(){

    // recebe dados da API
    const [dados,getDados] = useState([]);
    const url = 'http://localhost:5000/medico'

    useEffect(() => {
        getMedicos();
    }, []);

    const getMedicos = () => {
        Axios.get(url)
        .then(res => {
            const medicos = res.data
            console.log(medicos)
            getDados(medicos)
        })
        .catch(err => {
            console.log("Ocorreu um erro: " + err)
        })
    }

    if(dados.length > 0){
        return (
            <div className={styles.container}>
                <h1>Tabela de Médicos</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>CRM</th>
                            <th>Especialidade</th>
                        </tr>
                        {dados.map((dado)=>
                            <tr>
                                <td>{dado.id}</td>
                                <td>{dado.nome}</td>
                                <td>{dado.crm}</td>
                                <td>{dado.especialidade}</td>
                            </tr>
                        )}
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