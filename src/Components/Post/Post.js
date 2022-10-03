import styles from './Post.module.css';

// Route
import { useParams } from 'react-router-dom';

// Hooks
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Post = () => {

    const {id} = useParams();
    const {document: post} = useFetchDocument("posts", id);


  return (
    <div className={styles.post}>
      Post: {id}
      {post && (
        <>
          Post: {post.id}
          <h1>{post.body}</h1>
        </>
      )}
    </div>
  )
}

export default Post