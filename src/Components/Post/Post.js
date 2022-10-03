import styles from './Post.module.css';

// images
import icon from "../../images/icon-esc.png";

// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons';

// Route
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {

    const {id} = useParams();
    const {document: post} = useFetchDocument("posts", id);


  return (
    <div className='container'>
      {post && (
        <>
        <div className={styles.postContainer}>

          <div className={styles.frameImage}>

            <div className={styles.escField}>
              <Link to="/home"><FontAwesomeIcon icon={faXmark}/></Link>
              <img src={icon} alt="logo social media" />
            </div>

            <div className={styles.image}>
              <img src={post.image} alt={post.body} />
            </div>
          </div>

          <div className={styles.frameComments}>

            <div className={styles.profile}>

              <div className={styles.user}>
                <span><FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon></span>
                <p>{post.createdBy}</p>
              </div>

              <div className={styles.desc}>
                <p>{post.body}</p>
              </div>

            </div>

          </div>

        </div>
        </>
      )}
    </div>
  )
}

export default Post