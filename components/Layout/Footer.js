import React from 'react'
import styles from "../../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    
      <div className={styles.footer}>
        <p className={styles.left}><Image src="/images/wuerth_group_logo.png" width={130} height={14} alt="logo" /> © Würth Belux nv</p>
        <p className={styles.right}>Vacatures Algemene voorwaarden Cookies Disclaimer Privacyverklaring</p>
      </div>
   

    
  )
}

export default Footer
