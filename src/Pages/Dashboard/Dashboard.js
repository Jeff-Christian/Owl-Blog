import styles from "./Dashboard.module.css";

// Components
import UserPost from "../../Components/Post/UserPost";

// Images
import logoSocial from "../../images/logo-social.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// routes
import { Link } from 'react-router-dom';

// Hooks
import {useAuthValue} from "../../context/AuthContext";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";
import { useAuthentication } from "../../hooks/useAuthentication";

const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;

  
  const { logout } = useAuthentication();

  // User posts
  // const posts = [];
  const {documents: posts} = useFetchDocuments("posts", null, uid);


  return (
    <div className="container">
      <div className={styles.dashboard}>
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
 
          {posts && posts.length === 0 ? (
            <div className="container">
              <div className={styles.noPosts}>
                <p>Você ainda não fez nenhuma postagem, comece agora a publicar.</p>
              </div>
            </div>

          ) : (
            <>
            <div className={styles.postContainer}>
              {posts && posts.map((post) => 
                <>
                <UserPost key={post.id} post={post}></UserPost>
                </>
              )}
            </div>
            </>
          )}
      </div>
    </div>
  )
}

export default Dashboard