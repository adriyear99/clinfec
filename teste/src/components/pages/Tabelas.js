import LinkButton from '../layout/LinkButton';
import styles from './Tabelas.module.css';

export default function Tabelas(){
    return (
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1>Escolha uma tabela para visualizar no banco de dados</h1>
            </div>
            <div className={styles.botoes}>
                <LinkButton to="/tabelaPaciente" text="Paciente"/>
                <LinkButton to="/tabelaMedico" text="Médico"/>
                <LinkButton to="/tabelaConsulta" text="Consulta"/>
            </div>
        </div>
    )
}