import LinkButton from '../layout/LinkButton';
import styles from './Cadastro.module.css';

export default function Cadastro(){
    return (
        <div className={styles.container}>
            <div className={styles.texto}>
                <h1>Escolha uma opção para realizar cadastro</h1>
            </div>
            <div className={styles.botoes}>
                <LinkButton to="/paciente" text="Paciente"/>
                <LinkButton to="/medico" text="Médico"/>
                <LinkButton to="/consulta" text="Consulta"/>
            </div>
        </div>
    )
}