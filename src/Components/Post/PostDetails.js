import styles from "./PostDetails.module.css";

// Routes
import { Link } from "react-router-dom";

// Icons
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostDetails = ({post}) => {
  return (
    <>
    <div className={styles.post}>

        <div className={styles.user}>
            <span><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></span>
            <p>{post.createdBy}</p>
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

export default PostDetails