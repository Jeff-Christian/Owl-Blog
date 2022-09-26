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

  // show and hide container of register user
  const [toggle, setToggle] = useState(false);

  // form control
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // error
  const [error, setError] = useState("");

  // method submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if (password !== ConfirmPassword) {
      setError("As senhas precisam ser iguais!")
      return;
    }

    console.log(user);

  }

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
          <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name='displayName'
            placeholder='Nome' 
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            />
            <input 
            type="email"
            name='email'
            placeholder='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input 
            type="password"
            name='password'
            placeholder='Nova Senha' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <input 
            type="password"
            name='ConfirmPassword'
            placeholder='Confirme a sua senha' 
            value={ConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button>Cadastre-se</button>
          </form>
        </div>
      )}
      </div>
    </>
  )
}

export default Login