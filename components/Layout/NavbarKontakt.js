
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../../styles/Navbar.module.css";
import {BiUserCircle} from 'react-icons/bi';

function NavbarKontakt() {
    return (
        <div className={styles.container}>
          <ul className={styles.ulLeft}>
              <li className={styles.liclass}><a className={styles.links} href="#" >ONLINE SHOP</a></li>
              <li className={styles.liclass}><a className={styles.links} href="#" >Niederlassungen</a></li>
              <li className={styles.liclass}><a className={styles.links} href="#" >Services</a></li>
              <li className={styles.liclass}><a className={styles.links} href="#" >Unternehmen</a></li>
              <li className={styles.liclass}><a className={styles.links} href="#" >Karriere</a></li>
              <li className={styles.liclass}><a className={styles.links} href="#" >Kontakt</a></li>
              
          </ul>
    
          <ul className={styles.ulRight}>
              <li className={styles.login}>Anmelden</li>
              <li className={styles.icon}><BiUserCircle /></li>
          </ul>
        </div>
      )
}

export default NavbarKontakt
