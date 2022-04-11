import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
import Container from './Container';
import logo from '../../img/logo.png';

export default function Navbar(){
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="Clinfec"/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/cadastro">Cadastro</Link></li>
                    <li className={styles.item}><Link to="/tabelas">Tabelas</Link></li>
                </ul>
            </Container>
        </nav>
    )
}