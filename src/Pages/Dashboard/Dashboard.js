import styles from "./Dashboard.module.css";

// Hooks
import {useAuthValue} from "../../context/AuthContext";
import {useFetchDocuments} from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const {user} = useAuthValue();
  const uid = user.uid;

  // User posts
  const posts = [];


  return (
    <div className={styles.dashboard}>
        Dashboard:

        {posts && posts.length === 0 ? (
          <div>
            <p>Não tem posts</p>
          </div>

        ) : (
          <div>
          <p>Tem posts</p>
          </div>
        )}
    </div>
  )
}

export default Dashboard