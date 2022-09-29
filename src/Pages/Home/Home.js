import styles from './Home.module.css';

// routes
import { Link } from 'react-router-dom';

// Images
import logoSocial from "../../images/logo-social.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Components
import NewPost from '../../Components/NewPost/NewPost';

// Hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState } from 'react';

const Home = () => {

    // show and hide container of register user
    const [toggle, setToggle] = useState(false);

  const { logout } = useAuthentication();

  return (
    <>
    <nav className='container'>
      <ul className={styles.navBar}>
        <li>
          <img src={logoSocial} alt="logo social" className={styles.logo} />
        </li>
        <li className={styles.inputSearch}>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Pesquisar posts' />
        </li>
        <li className={styles.newPost} onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faPlus} />
          <span id={styles.tooltipText}>O quê você quer postar?</span>
        </li>
        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
          <ul className="dropdown-menu">
            <li><Link onClick={logout} className="dropdown-item">Sair</Link></li>
          </ul>
        </div>
      </ul>
    </nav>

      {toggle && (
        <div className='container'>
          <NewPost></NewPost>
        </div>
      )}

    <main>
      <div className='container'>
        <h1>Home</h1>
        
      </div>
    </main>

    </>
  )
}

export default Home