import styles from "./Footer.module.css";

import iconFooter from '../../images/icon-footer.png';


const Footer = () => {
  return (
        <footer>
            <p><img src={iconFooter} alt="Logo footer" className="logoFooter" />Chain © 2022</p>
            <p className={styles.about}>Esse Projeto consiste em um blog feito com React no front-end e Firebase no back-end.</p>
        </footer>
  )
}

export default Footer