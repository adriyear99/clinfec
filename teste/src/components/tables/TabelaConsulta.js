import { useState, useEffect } from 'react';
import Axios from 'axios';

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
            console.log(res)
            const consultas = res.data.dados
            getDados(consultas)
        })
        .catch(err => {
            console.log("Ocorreu um erro: " + err)
        })
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Paciente</th>
                    <th>Médico</th>
                    <th>Data</th>
                </tr>
            </table>
        </div>
    )
}