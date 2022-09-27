import styles from './Home.module.css';

// routes
import { Link } from 'react-router-dom';

// Images
import logoSocial from "../../images/logo-social.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// Hooks
import { useAuthentication } from "../../hooks/useAuthentication";

const Home = () => {

  const { logout } = useAuthentication();

  return (
    <>
    <nav>
      <ul className={styles.navBar}>
        <li>
          <img src={logoSocial} alt="logo social" className={styles.logo} />
        </li>
        <li className={styles.inputSearch}>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder='Pesquisar posts' />
        </li>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
          <ul class="dropdown-menu">
            <li><Link onClick={logout} className="dropdown-item">Sair</Link></li>
          </ul>
        </div>
      </ul>
    </nav>

    <main>
      <div className='container'>Home</div>
    </main>

    </>
  )
}

export default Home