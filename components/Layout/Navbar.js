
import 'bootstrap/dist/css/bootstrap.css';
import styles from "../../styles/Navbar.module.css";
import {BiUserCircle} from 'react-icons/bi';


function Navbar() {
  return (
    <div className={styles.container}>
      <ul className={styles.ulLeft}>
          <li className={styles.liclass}><a className={styles.links} href="#" >ONLINE SHOP</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >SHOP</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >BROCHURES</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >VOORRADBEHEER</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >E-PROCUREMENT</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >SERVICE</a></li>
          <li className={styles.liclass}><a className={styles.links} href="#" >WÜRTH</a></li>
      </ul>

      <ul className={styles.ulRight}>
          <li className={styles.login}>Login</li>
          <li className={styles.icon}><BiUserCircle /></li>
      </ul>
    </div>
  )
}

export default Navbar
