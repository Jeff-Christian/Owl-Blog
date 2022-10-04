import styles from "./UserPosts.module.css";

// Routes
import { Link } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const UserPost = ({post}) => {

    const deleteDocument = (id) => {
        console.log("tentanto deletar publicação");
    }

    
  return (
    <>
    <div className={styles.post}>

        <div className={styles.user}>
            <div className={styles.userDetails}>
                <span><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></span>
                <p>{post.createdBy}</p>
            </div>

            <div className="btn-group dropstart">
                <button type="button" id={styles.btnDots} className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon className={styles.dots} icon={faEllipsisV} />
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <Link to={`/posts/${post.id}`} id={styles.edit} className="dropdown-item"><FontAwesomeIcon className={styles.pen} icon={faPen}></FontAwesomeIcon>Editar publicação</Link>
                    </li>
                    <li>
                        <Link 
                        onClick={() => deleteDocument(post.id)} 
                        to={`/posts/${post.id}`} id={styles.delete} className="dropdown-item"><FontAwesomeIcon className={styles.trash} icon={faTrash}></FontAwesomeIcon>Excluir Post</Link>
                    </li>
                </ul>
                </div>
            </div>
        <div className={styles.content}>
            <p>{post.body}</p>
        </div>
        <div className={styles.image}>
            <img src={post.image} alt={post.body} />
            <div className={styles.tags}>
                {post.tagsArray.map((tag) => (
                    <p key={tag}>
                        <span>#</span>
                        {tag}
                    </p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`}>Acessar postagem</Link>
        </div>

    </div>

    </>
  )
}

export default UserPost;