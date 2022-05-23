import styles from "../../styles/Bottom.module.css";
import {FaLinkedin} from 'react-icons/fa';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {MdAddCall} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";
import {IoLogoXing} from "react-icons/io";
import {FaXRay} from "react-icons/fa";
import Image from 'next/image';

function BottomKontakt() {
    return (
    <div className={styles.container}>
         <div className={styles.img}>
          <Image src="/images/newsletter.jpg" width={1150} height={180} alt="contact image" /><br></br>
         </div>
    <div className={styles.boxContainer}>
        <div className={styles.box}>
        <div class="row align-items-start" id={styles.row}>
            <div class="col-sm-6 "><strong>Entdecken</strong><br></br>
                Newsletter<br></br>
                Online-Magazin<br></br>
                Karriereportal<br></br>
                Presseportal<br></br>
                Kulturelles und soziales Engagement<br></br>
                Reinhold Würth
            </div>
            <div class="col-sm-4 "><strong>Einkaufen</strong><br></br>
                App für iOS/Android<br></br>
                Zahlungsarten<br></br>
                Liefern und Abholen<br></br>
                E-Procurement<br></br>
                Rückgabe und Reklamation
             
           </div>
           </div>
                </div>
            <div className={styles.box}>
            <div class="row align-items-start" id={styles.row}>
                <div class="col-sm-5 "><strong>Folgen</strong><br></br>
                    <AiFillFacebook /> Facebook<br></br>
                    <AiFillInstagram /> Instagram<br></br>
                    <AiFillYoutube /> Youtube<br></br>
                    <FaTiktok /> Tik Tok<br></br>
                    <FaLinkedin /> Linkedin<br></br>
                    <IoLogoXing /> Xing  
                             
                </div>
          <div class="col-sm-5 "><strong>Kontaktieren</strong><br></br>
                Adolf Würth GmbH & Co. KG<br></br>
                Reinhold-Würth-Straße 12-17<br></br>
                74653 Künzelsau-Gaisbach<br></br>
                Deutschland<br></br>
                Alle Kontaktmöglichkeiten<br></br>
                <MdAddCall/> +49 7940 15-0<br></br>
                <FaXRay /> +49 7940 15-1000<br></br>
                <AiOutlineMail /> service@wurth.be
          </div>
          </div>
                </div>
                
            </div>
            <div className={styles.imgbottom}>
            <Image src="/images/label_klimaneutrale-website.jpg" width={300} height={50} alt="contact image" /><br></br>
            </div>
            <div className={styles.p}>
            Verkauf nur an Unternehmer, Gewerbetreibende, Freiberufler und öffentliche Institutionen, nicht jedoch an Verbraucher im Sinne des § 13 BGB. Alle Preise in Euro zzgl. gesetzl. MwSt. Angebote freibleibend
            </div>
        </div>
     
    )
}

export default BottomKontakt
