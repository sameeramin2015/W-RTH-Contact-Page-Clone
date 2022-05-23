import React from 'react';
import styles from "../styles/Header.module.css";
import Image from 'next/image';
import {AiOutlineMail} from "react-icons/ai";
import Navbar from '../components/Layout/Navbar';
import Bottom from '../components/Layout/Bottom';
import TopbarIndex from '../components/Layout/TopbarIndex';
import {BsArrowRightShort} from "react-icons/bs"
function index() {
  return (
    <div>
      <TopbarIndex />
      <Navbar />
    <div id="#top" className={styles.container}>
     <div className={styles.boxContainer}>
       <div className={styles.box1}>
       <div className={styles.left}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <p>
        <a className={styles.a1} href="#">Home <BsArrowRightShort /> </a>
        <a className={styles.a1} href="#">Würth <BsArrowRightShort /> </a>
        <a className={styles.a1} href="#">Contact <BsArrowRightShort /></a>
        </p>
          <h5 className={styles.h5}>Contact</h5>
        
          <li id={styles.idli} className={styles.dropdown}><a className={styles.a} href="#"> <BsArrowRightShort /> Bedrijf<span className={styles.span}></span></a>
            <ul className={styles.sbul}>
            <h5 className={styles.h5}>Würth Belux </h5>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Missie, visie & waarden</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Würth  wereldwijd</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Engagement</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Kwaliteit</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Persberichten</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Sportsponsoring</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Algemene voorwaarden</a></li>
            <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Code of compliance</a></li>
            </ul>
          </li>
          
          <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Vacatures</a></li>
          
          <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Merken</a></li>
          
          <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Social media</a></li>
          
          <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Sign up for Würth news </a></li>
          
          <li className={styles.li}><a className={styles.a} href="#"> <BsArrowRightShort /> Veelgestelde vragen</a></li>
          
        </ul>
      </nav>
      </div>
       </div>
       <div className={styles.box}>
       <div className={styles.right}>
        <h2>CONTACT WÜRTH BELUX</h2><br></br>

        <Image src="/images/wurth-contact-image.jpg" width={500} height={300} alt="contact image" /><br></br>
        
        Hoofdkantoor Würth Belux nv <br></br>
        Everdongenlaan 29 (4253)<br></br>
        2300 Turnhout, België<br></br>

        T: +32 (0)14 44 55 66<br></br>
        F: +32 (0)14 44 55 67<br></br>
        E: service@wurth.be *<br></br>

        * Sponsoraanvragen kunnen ingediend worden via communication@wurth.be<br></br>
        <div className={styles.imageContainer}>
        <div>
        <Image src="/images/Serge.jpg" width={170} height={180} alt="contact image" /><br></br>
        Serge Vranken<br></br>
        CEO<br></br>
        <AiOutlineMail className={styles.iconColor} /> Contact
        </div>
        <div className={styles.contactImage}>
        <Image src="/images/RobbieDeWit.jpg" width={170} height={180} alt="contact image" /><br></br>
        Robbie De Wit<br></br>
        CEO<br></br>
        <AiOutlineMail className={styles.iconColor} /> Contact<br></br>
        </div>
        </div>

        <div>
        <Image className={styles.contactImage1} src="/images/steven.jpg" width={170} height={180} alt="contact image" /><br></br>
        Steven Bosschem<br></br>
        Communication<br></br>
        <AiOutlineMail className={styles.iconColor} /> Contact<br></br>
        T: +32 (0) 14 44 56 52
        </div>
      </div>
       </div>

     </div>
      
      <div className={styles.rightButtons}>
      <div className={styles.cardbasket}>
      </div>
      <div className={styles.cardmail}>

      </div>
      </div>
      
      <div className={styles.rightButtons}>
      <Image className={styles.basketImage} src="/images/mail.jpg" width={50} height={50} alt="contact image" /><br></br>
      <Image className={styles.basketImage} src="/images/gift.jpg" width={50} height={50} alt="contact image" /><br></br>
      <Image className={styles.basketImage} src="/images/jobs.jpg" width={50} height={50} alt="contact image" /><br></br>
      </div>
      <div className={styles.gotop}>
        <a href="#top"><Image id={styles.basketImage} src="/images/top.jpg" width={50} height={50} alt="contact image" /></a><br></br>
      </div>
    </div>
    <Bottom />
    </div>
  )
}

export default index
