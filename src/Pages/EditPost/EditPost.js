import styles from "./EditPost.module.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faTags } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faXmarkCircle } from "@fortawesome/free-regular-svg-icons";

// Routes
import { useNavigate, useParams, Link } from "react-router-dom";

// Hooks
import { useEffect, useState } from "react";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import {useFetchDocument} from "../../hooks/useFetchDocument";

// Context
import {useAuthValue} from "../../context/AuthContext";

const EditPost = () => {

  const {id} = useParams();
  const {document: post} = useFetchDocument("posts", id);

  const navigate = useNavigate();

  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {

    if (post) {
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
      
    }


  }, [post])

  // User
  const {user} = useAuthValue();

  // Insert document
  const {updateDocument, response} = useUpdateDocument("posts");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // validate image Url
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL.");
      return
    }

    // Create arr tags
    const tagsArray = tags.split(",")
    .map((tag) => tag.trim().toLowerCase());

    // Ckeck all values
    if (!image || !tags || !body ) {
      setFormError("Por favor, preencha todos os campos.");
    }

    if (formError) return;

    const data = {
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    }

    updateDocument(id, data);

    console.log({
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Redirect
    navigate("/dashboard");
  }

  return (
    <main className={styles.main}>
      <div className={styles.createPost}>
        <h3>Editar publicação </h3>
        <Link to="/dashboard"><FontAwesomeIcon className={styles.cancel} icon={faXmarkCircle}/></Link>
        {post && (
          <>
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

              <div className={styles.preview}>
                <p>Preview da imagem atual <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></p>
                <div className={styles.imagePreview}>
                  <img src={post.image} alt={post.body} />
                </div>
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

              {response.error && <p className={styles.error}>{response.error}</p>}
              {formError && <p className={styles.error}>{formError}</p>}
              {!response.loading && <button>Salvar</button> }
              {response.loading &&  <button disabled>Por favor, Aguarde</button>}

            </form>
          </>
        )}

      </div>
    </main>
  )
}

export default EditPost