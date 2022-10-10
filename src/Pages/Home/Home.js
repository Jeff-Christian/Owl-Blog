import styles from './Home.module.css';

// routes
import { useNavigate, Link } from 'react-router-dom';

// Images
import logoSocial from "../../images/logo-social.png";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Components
import NewPost from '../../Components/NewPost/NewPost';
import PostDetails from '../../Components/Post/PostDetails';

// Hooks
import { useAuthentication } from "../../hooks/useAuthentication";
import { useState } from 'react';
import {useFetchDocuments} from "../../hooks/useFetchDocuments";


const Home = () => {

  // show and hide container of register user
  const [toggle, setToggle] = useState(false);

  // states search
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // receiving posts
  const {documents: posts} = useFetchDocuments("posts");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`)
    }
  }

  const { logout } = useAuthentication();

  return (
    <>
    <nav className='container'>
      <ul className={styles.navBar}>
        <li>
          <img src={logoSocial} alt="logo social" className={styles.logo} />
        </li>
        <form onSubmit={handleSubmit} className={styles.inputSearch}>
          <input 
          type="text" 
          placeholder='Pesquisar posts'
          onChange={(e) => setQuery(e.target.value)}
          />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </form>
        <li className={styles.newPost} onClick={() => setToggle(!toggle)}>
          <FontAwesomeIcon icon={faPlus} />
          <span id={styles.tooltipText}>O quê você quer postar?</span>
        </li>
        <div className="dropdown" id={styles.dropdown}>
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faCircleUser} />
          </button>
          <ul className="dropdown-menu">
            <li><Link to="/dashboard" className="dropdown-item">Perfil</Link></li>
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

    <div className='container'>
      <div className={styles.posts}>

        { posts && posts.map((post) => 
          <PostDetails key={post.id} post={post}></PostDetails>
        )}


        {posts && posts.length === 0 && (
          <p>Não foram encontrados posts :(</p>
        )}
      </div>
    </div>


    </>
  )
}

export default Home