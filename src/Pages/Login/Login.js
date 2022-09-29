import styles from './Login.module.css';

// Fontawesome, Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

// Images
import logoSocial from "../../images/logo-social.png";

// Hooks
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';


const Login = () => {

  // show and hide container of register user
  const [toggle, setToggle] = useState(false);

  // form control
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  // hook authentication
  const { login , createUser, error: authError, loading } = useAuthentication();

  // error
  const [error, setError] = useState("");

  // method Register
  const handleSubmitRegister = async (e) => {
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

    const res = await createUser(user);

    console.log(res);
  }

  // method Login
  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

    const res = await login(user);

    console.log(res);
  }


  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError])

  return (
    <>
      <nav>
        <ul>
          <li><img src={logoSocial} alt="logo social" className={styles.logo} /></li>
        </ul>
      </nav>
      <main>
        <div className={styles.register}>
          <div className={styles.newRegister}>
            <FontAwesomeIcon icon={faUserPlus} />
            <button className={styles.frameBottom} onClick={() => setToggle(!toggle)}>Cadastrar</button>
          </div>
          <div className={styles.loginForm}>
            <form onSubmit={handleSubmitLogin}>
              <input
              type="email"
              name="email"
              required
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              />
              <input
              type="password"
              name="password"
              required
              placeholder="Insira a senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
              {error && <p className={styles.error}>{error}</p>}
              {!loading && <button>Entrar</button> }
              {loading &&  <button disabled>Por favor, Aguarde</button>}
            </form>
          </div>
          {toggle && (
          <div className={styles.registerFrame}>
            <div className={styles.registerForm}>
              <p>Cadastre-se</p>
              <p>Sem complicações.</p>
              <button onClick={() => setToggle(!toggle)}><FontAwesomeIcon icon={faXmarkCircle} /></button>
            </div>
            <form onSubmit={handleSubmitRegister}>
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
              {!loading && <button>Cadastre-se</button> }
              {loading &&  <button disabled>Por favor, Aguarde</button>}
            </form>
          </div>
        )}
        </div>
      </main>
    </>
  )
}

export default Login