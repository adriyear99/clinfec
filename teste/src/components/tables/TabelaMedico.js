import { useState, useEffect } from 'react';
import Axios from 'axios';

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
            console.log(res)
            const medicos = res.data.dados
            getDados(medicos)
        })
        .catch(err => {
            console.log("Ocorreu um erro: " + err)
        })
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Nome</th>
                    <th>CRM</th>
                    <th>Especialidade</th>
                </tr>
            </table>
        </div>
    )
}