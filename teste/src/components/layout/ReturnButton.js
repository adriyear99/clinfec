import styles from './ReturnButton.module.css';
import { Link } from 'react-router-dom';

export default function ReturnButton({ to, text }) {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}