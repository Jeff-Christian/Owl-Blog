import styles from './Login.module.css';

// Fontawesome, Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

// Images
import logoSocial from "../../images/logo-social.png";


const Login = () => {
  return (
    <>
      <nav>
        <ul>
          <li><img src={logoSocial} alt="logo social" className={styles.logo} /></li>
        </ul>
      </nav>
      <div className={styles.register}>
        <div className={styles.newRegister}>
          <FontAwesomeIcon icon={faUserPlus} />
          <div className={styles.frameBottom}>
          <button>cadastrar</button>
          </div>
        </div>
        <div className={styles.registerForm}>
          <form>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            <input type="password" name="password" id="password" placeholder='Senha' required/>
            <input type="submit" value="Entrar" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login