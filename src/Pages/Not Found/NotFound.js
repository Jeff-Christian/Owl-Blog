import logo from '../../images/notfound-logo.png';
import styles from './NotFound.module.css';


const NotFound = () => {
  return (
    <div className={styles.container}>
       <img src={logo} alt="Logo footer" className="logoFooter" />
       <h1>Ué, não há nada por aqui!</h1>
    </div>
  )
}

export default NotFound