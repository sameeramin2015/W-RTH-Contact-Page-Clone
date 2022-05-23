import styles from "../../styles/Bottom.module.css";
import {FaLinkedin} from 'react-icons/fa';
import {AiFillFacebook} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {MdAddCall} from "react-icons/md";
import {AiOutlineMail} from "react-icons/ai";

function Bottom() {
  return (
    
    <div className={styles.container}>
    
<div className={styles.boxContainer}>
   <div className={styles.box}>
   <div class="row align-items-start" id={styles.row}>
   <div class="col-sm-7 "><strong>WÜRTH ONLINE SHOP</strong><br></br>
            Wachtwoord vergeten?<br></br>
            Klant- en/of partnernummer vergeten?<br></br>
            Registreren bij Würth<br></br>
            Aanvragen login nieuwe klant<br></br>
            Aanvragen login bestaande klant<br></br>
            Veelgestelde vragen
        </div>
        <div class="col-sm-5 "><strong>WÜRTH</strong><br></br>
            Download de Würth app<br></br>
            Raadpleeg onze catalogen<br></br>
            Bekijk al onze brochures<br></br>
            Ontdek onze actuele promoties<br></br>
            Vind je dichtstbijzijnde shop<br></br>
            Werken bij Würth<br></br>
            Nieuwsbrief
        </div>
        </div>
           </div>
       <div className={styles.box}>
       <div class="row align-items-start" id={styles.row}>
       <div class="col-sm-5 "><strong>SOCIAL</strong><br></br>
            <FaLinkedin /> Linkedin<br></br>
            <AiFillFacebook /> Facebook<br></br>
            <AiFillYoutube /> Youtube<br></br>
            <AiFillInstagram /> Instagram<br></br>


         </div>
        <div class="col-sm-5 "><strong>CONTACT</strong><br></br>
            Würth Belux nv<br></br>

            Everdongenlaan 29 (4253)<br></br>

            2300 Turnhout<br></br>

            België<br></br>

            <MdAddCall/> +32 (0)14 44 55 66<br></br>

            <AiOutlineMail /> service@wurth.be
        </div>
     </div>
     </div>
           </div>
           
       </div>
      
   
    
  )
}

export default Bottom
