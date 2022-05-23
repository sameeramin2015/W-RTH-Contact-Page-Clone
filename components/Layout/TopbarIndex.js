import React from 'react'
import Image from "next/image";
import styles from "../../styles/Topbar.module.css"
import {FiShoppingCart} from 'react-icons/fi';
import {BsSearch} from "react-icons/bs";

function TopbarIndex() {
  return (
    <div className={styles.links}>
    Enkel voor ondernemers   
  
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

export default TopbarIndex
