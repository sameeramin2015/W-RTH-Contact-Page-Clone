import React from 'react'
import Image from "next/image";
import styles from "../../styles/Topbar.module.css"
import {FiShoppingCart} from 'react-icons/fi';
import {BsSearch} from "react-icons/bs";


function Topbar() {
  return (
    <div className={styles.links}>
    Willkommen bei Würth Deutschland | <a href="#" alt="top link">Nur für Gewerbetreibende </a>
    <div className={styles.lang}>
    <select class="selectpicker" data-width="fit">
    <option data-content='<span class="flag-icon flag-icon-nl"></span> Nederlands'>Nederlands</option>
    <option  data-content='<span class="flag-icon flag-icon-fr"></span> Français'>Français</option>
    </select>
    </div>
  
    <div className={styles.container}>
         

      <Image src="/images/wuerth_logo_big.png" height={50} width={180} alt="logo" /> 
      
      <input className={styles.search}  type="search" placeholder="Search..." />
      <button className={styles.searchIcon} type="submit"><BsSearch /></button>
      
      <div className={styles.basket}>
      <p className={styles.baskettext}><strong>Winkelwagen</strong></p> <p className={styles.baskettext}>0</p> <FiShoppingCart className={styles.iconcolor} />
      </div>
  
    </div>
    </div>
  )
}

export default Topbar
