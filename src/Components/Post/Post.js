import styles from './Post.module.css';

// Hooks
import { useParams } from 'react-router-dom';

const Post = () => {

    const {id} = useParams();


  return (
    <div className={styles.post}>
        Post {id}
    </div>
  )
}

export default Post