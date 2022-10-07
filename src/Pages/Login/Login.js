import styles from './Login.module.css';

// Fontawesome, Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Images
import logoSocial from "../../images/logo-social.png";

// Hooks
import { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';


const Login = () => {

  // show and hide container of register user
  const [toggle, setToggle] = useState(false);

  // Show/Hide Password
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(faEyeSlash);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(faEye);
      setType("text");
    } else {
      setIcon(faEyeSlash);
      setType("password");
    }
  }

  // Show/Hide Password Register Fieldset
  const [typeRegister, setTypeRegister] = useState("password");
  const [iconRegister, setIconRegister] = useState(faEyeSlash);

  const handleToggleRegister = () => {
    if (typeRegister === "password") {
      setIconRegister(faEye);
      setTypeRegister("text");
    } else {
      setIconRegister(faEyeSlash);
      setTypeRegister("password");
    }
  }

  
  // Show/Hide Password Register Fieldset
  const [typeConfirm, setTypeConfirm] = useState("password");
  const [iconConfirm, setIconConfirm] = useState(faEyeSlash);

  const handleToggleConfirm = () => {
    if (typeConfirm === "password") {
      setIconConfirm(faEye);
      setTypeConfirm("text");
    } else {
      setIconConfirm(faEyeSlash);
      setTypeConfirm("password");
    }
  }


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
    
      <nav className='container'>
        <ul>
          <li><img src={logoSocial} alt="logo social" className={styles.logo} /></li>
        </ul>
      </nav>

      <main  className='container'>
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
              <div className={styles.passwordField}>
              <input
              type={type}
              name="password"
              required
              placeholder="Insira a senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              />
              <span onClick={handleToggle}><FontAwesomeIcon icon={icon}/></span>
              </div>
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

              <div className={styles.passwordFieldRegister}>
              <input 
              type={typeRegister}
              name='password'
              placeholder='Nova Senha' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
              <span onClick={handleToggleRegister}><FontAwesomeIcon icon={iconRegister}/></span>
              </div>

              <div className={styles.passwordFieldRegister}>
              <input 
              type={typeConfirm}
              name='ConfirmPassword'
              placeholder='Confirme a sua senha' 
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              />
              <span onClick={handleToggleConfirm}><FontAwesomeIcon icon={iconConfirm}/></span>
              </div>

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