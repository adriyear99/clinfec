import LinkButton from "../layout/LinkButton";
import styles from './Home.module.css';
import logo2 from '../../img/logo2.jpg';

export default function Home(){
    return (
        <section className={styles.container}>
            <div className={styles.imagem}>
                <img src={logo2} alt="Logo Clinfec"/>
            </div>
            <div className={styles.botoes}>
                <div className={styles.botao}>
                    <LinkButton to="/cadastro" text="Cadastrar Usuário"/>
                </div>
                <div className={styles.botao}>
                    <LinkButton to="/tabelas" text="Ver Tabelas"/>
                </div>
            </div>
        </section>
    )
}