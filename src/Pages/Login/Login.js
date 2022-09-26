import styles from './Login.module.css';

// Fontawesome, Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

// Images
import logoSocial from "../../images/logo-social.png";

// Hooks
import { useState } from 'react';


const Login = () => {

  const [toggle, setToggle] = useState(false);

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
          <button onClick={() => setToggle(!toggle)}>Cadastrar</button>
          </div>
        </div>
        <div className={styles.loginForm}>
          <form>
            <input type="email" name="email" id="email" placeholder='Email' required/>
            <input type="password" name="password" id="password" placeholder='Senha' required/>
            <input type="submit" value="Entrar" />
          </form>
        </div>
        {toggle && (
        <div className={styles.registerFrame}>
          <div className={styles.registerForm}>
            <p>Cadastre-se</p>
            <p>Sem complicações.</p>
            <button onClick={() => setToggle(!toggle)}><FontAwesomeIcon icon={faXmarkCircle} /></button>
          </div>
          <form>
            <input 
            type="text"
            name='displayName'
            placeholder='Nome' 
            required
            />
            <input 
            type="email"
            name='email'
            placeholder='email' 
            required
            />
            <input 
            type="password"
            name='password'
            placeholder='Nova Senha' 
            required
            />
            <input 
            type="password"
            name='ConfirmPassword'
            placeholder='Confirme a sua senha' 
            required
            />
            <button>Cadastre-se</button>
          </form>
        </div>
      )}
      </div>
    </>
  )
}

export default Login