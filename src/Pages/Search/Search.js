// CSS
import styles from "./Search.module.css";

// Images
import logoSocial from "../../images/logo-social.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// routes
import { Link } from 'react-router-dom';

// Hooks
import { useQuery } from "../../hooks/useQuery";
import { useAuthentication } from "../../hooks/useAuthentication";

const Search = () => {

    const { logout } = useAuthentication();

    const query = useQuery();
    const search = query.get("q");

  return (
    <>
    <div className="container">
        <nav>
            <ul className={styles.navBar}>
                <li><Link to={"/home"}><img src={logoSocial} alt="logo social" className={styles.logo} /></Link></li>
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

        <div className={styles.search}> 
            <h1>Resultado da sua pesquisa: </h1>
            <p>
                {search}
            </p>
        </div>
        </div>
    </>
  )
}

export default Search;