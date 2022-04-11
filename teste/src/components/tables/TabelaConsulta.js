import { useState, useEffect } from 'react';
import Axios from 'axios';
import styles from './Tabela.module.css';

export default function TabelaConsulta(){

    // recebe dados da API
    const [dados,getDados] = useState([]);
    const url = 'http://localhost:5000/consulta'

    useEffect(() => {
        getConsultas();
    }, []);

    const getConsultas = () => {
        Axios.get(url)
        .then(res => {
            const consultas = res.data
            console.log(consultas)
            getDados(consultas)
        })
        .catch(err => {
            console.log("Ocorreu um erro: " + err)
        })
    }

    if(dados.length > 0){
        return (
            <div className={styles.container}>
                <h1>Tabela de Consultas</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Paciente</th>
                            <th>Médico</th>
                            <th>Data</th>
                        </tr>
                        {dados.map((dado)=>
                            <tr>
                                <td>{dado.id}</td>
                                <td>{dado.paciente}</td>
                                <td>{dado.medico}</td>
                                <td>{dado.data}</td>
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