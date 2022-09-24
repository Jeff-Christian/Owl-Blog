import styles from "./Footer.module.css";

import iconFooter from '../../images/icon-footer.png';


const Footer = () => {
  return (
        <footer>
            <img src={iconFooter} alt="Logo footer" className="logoFooter" />
            <p>Chain © 2022</p>
        </footer>
  )
}

export default Footer