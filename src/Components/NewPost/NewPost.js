import styles from "./NewPost.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";

// Routes
import { useNavigate } from "react-router-dom";

// Hooks
import { useState } from "react";

// Context
import {useAuthValue} from "../../context/AuthContext";

const NewPost = () => {

  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className={styles.createPost}>
      <h3>Criar publicação </h3>
      <form onSubmit={handleSubmit}>

        <textarea 
        name="body" 
        id="body" 
        placeholder="No quê você está pensando?"
        onChange={(e) => setBody(e.target.value)}
        value={body}
        required
        ></textarea>

        <div className={styles.fieldImage}>
            <FontAwesomeIcon icon={faImage}></FontAwesomeIcon>
            <input 
            type="text" 
            name="image"
            required
            placeholder="Insira a URL da imagem"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            />
        </div>

        <div className={styles.fieldTags}>
            <FontAwesomeIcon icon={faTags}></FontAwesomeIcon>
            <input 
            type="text" 
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgulas"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
            />
        </div>

        <button>Publicar</button>

      {/* 
        {error && <p className={styles.error}>{error}</p>}
        {!loading && <button>Entrar</button> }
        {loading &&  <button disabled>Por favor, Aguarde</button>} */}

      </form>
    </div>
  )
}

export default NewPost