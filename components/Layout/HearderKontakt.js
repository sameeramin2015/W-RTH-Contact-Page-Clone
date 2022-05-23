import React from 'react'
import styles from "../../styles/HearderKontakt.module.css";
import Image from 'next/image';

function HearderKontakt() {
  return (
    <div>
       <div className={styles.headerImage}>
       <Image src="/images/header1920x524.jpg" width={1920} height={524} alt="contact image" />
    </div>
    <div className={styles.links}>
     Startseite &gt; Kontakt
    </div>
    <div className={styles.title}>
    IHR KONTAKT ZU WÜRTH
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
      <Image src="/images/support-beratung-mann-telefon_res_wl2_frontpage_1200.jpg" width={600} height={300} alt="contact image" /> 
      </div>
      <div className={styles.box}>
      <span className={styles.paraghraph}><span className={styles.red}>Service-Hotline<br></br></span>Sie haben Fragen zum Würth Online-Shop, zu unserem Lieferprogramm oder zur Sendungsverfolgung? Kontaktieren Sie unsere Service-Hotline. Unter +49 7940 15-2400 sind wir gerne für Sie da - auch nach 18 Uhr. Sie erreichen uns montags bis freitags von 6 bis 24 Uhr, ausgenommen Sonn- und Feiertage.</span>

      </div>
      
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
      <Image src="/images/14821846.jpg" width={600} height={500} alt="contact image" />
      </div>
      <div className={styles.box}>
      <span className={styles.paraghraph}><span className={styles.red}>Produkt- und Anwendungsberatung<br></br></span>Sie haben spezifische Fragen zu unseren Produkten und deren Anwendung? Sie erreichen unsere Spezialisten der Produkt- und Anwendungsberatung unter +49 794015-2552.<br></br><br></br> Durch Eingabe der entsprechenden Durchwahl erreichen Sie direkt den richtigen Ansprechpartner in Ihrem gewünschten Beratungsbereich.<br></br><br></br>
        <span className={styles.span}> &gt; 1 - Brandschutz und Haustechnik <br></br></span>
        <span className={styles.span}> &gt; 2 - Bautechnik <br></br></span>
        <span className={styles.span}> &gt; 3 - Fahrzeugtechnik, Werkstattsysteme, Handwerkzeuge <br></br></span>
        <span className={styles.span}> &gt; 4 - Maschinen, Messtechnik, mechanische Materialbearbeitung <br></br></span>
        <span className={styles.span}> &gt; 5 - Chemieprodukte<br></br></span>
        <span className={styles.span}> &gt; 6 - Normteile <br></br> </span>
        <span className={styles.span}> &gt; 7 - Arbeitsschutz<br></br></span>
        <span className={styles.span}> &gt; 8 - Beschläge </span>

      </span>
      </div>
      
      </div>
      <div className={styles.p1}>
        <span>Alle Leitungen belegt? Dürfen wir Sie zurückrufen? Bitte teilen Sie uns den Grund Ihres Anrufes sowie Ihre Kontaktdaten über unser Call-Back-Formular mit. Wir melden uns umgehend bei Ihnen.<br></br><br></br></span>
        <button className={styles.button}>ZUM CALL-BACK-FORMULAR</button>
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
      <Image src="/images/50-berufserfahrene-13_res_wl2_frontpage_1200.jpg" width={600} height={400} alt="contact image" />
      </div>
      <div className={styles.box}>
      <span className={styles.paraghraph}><span className={styles.red}>Immer für Sie da: unsere Beraterinnen und Berater im Außendienst<br></br></span>Als persönliche Ansprechpartner sind unsere Beraterinnen und Berater Ihr direkter Kontakt zu Würth und in der Regel auch Ihre erste Anlaufstelle für Fragen. Sie verstehen Ihre geschäftlichen Herausforderungen und beraten Sie umfassend zu unseren Produkten, Services und Systemen. Die Kontaktdaten Ihres Würth Beraters finden Sie im Online-Shop im Bereich "Mein Würth", nachdem Sie sich angemeldet haben.<br></br><br></br><strong> Sie haben noch keinen im Online-Shop Zugang?</strong> Gern richten wir Ihnen und Ihren Mitarbeitenden kostenfrei persönliche Zugänge ein - einfach hier registrieren.</span>

      </div>

      
      
    </div>
    <div className={styles.boxContainer}>
      <div className={styles.box}>
      <Image src="/images/wuerth-niederlassung-mitarbeiter_res_wl2_frontpage_1200.jpg" width={600} height={400} alt="contact image" /> 

      </div>
      <div className={styles.box}>
      <span className={styles.paraghraph}><span className={styles.red}>Würth Niederlassungen<br></br></span>Nah. Näher. Würth! Mit über 550 Niederlassungen deutschlandweit ist Würth der Partner ganz in Ihrer Nähe. Sie finden in unseren Niederlassungen in der Regel rund 5.000 Artikel für Ihren Sofortbedarf.<br></br><br></br>Einkauf, Sofort-Lieferservice, Click & Collect - nutzen Sie die vielen Vorteile unseres dichten Niederlassungsnetzes. Besuchen Sie uns während unserer Geschäftszeiten von 7 - 17 Uhr und überzeugen Sie sich vor Ort von Qualität made by Würth.<br></br><br></br>
      <button className={styles.button1}> &gt; HIER FINDEN SIE NACHSTE NIDERLASSUNG</button>
      </span>
      </div>
    
      </div>
      <div className={styles.boxContainer}>
      <div className={styles.box}>
      <Image src="/images/4198967.jpg" width={600} height={400} alt="contact image" /> 

      </div>
      <div className={styles.box}>
      <span className={styles.paraghraph}><span className={styles.red}>Firmenzentrale<br></br></span><br></br>
    <div class="row align-items-start" id={styles.row}>
      <div class="col-sm-6 "><strong>Adressdaten:</strong><br></br>
        Adolf Würth GmbH & Co. KG<br></br>
        Reinhold-Würth-Straße 12-17<br></br>
        74653 Künzelsau-Gaisbach<br></br>
        Deutschland<br></br>
      </div>

      <div class="col-sm-6 "><strong>Direkter Kontakt:</strong><br></br>
        Telefon: +49 7940 15-0<br></br>
        Telefax: +49 7940 15-1000<br></br>
        E-Mail: info@wuerth.com<br></br>
        </div>
      </div>
    
    <button className={styles.button1}> &gt; Anfahrtsweg zur Adolf Würth GmbH &amp; Co. KG</button><br></br>
    <button className={styles.button1}> &gt; Detailskizze für Besucher der Adolf Würth GmbH &amp; Co. KG</button>
    </span>
    
      </div>
    </div>
    <div className={styles.form}>
      <div className={styles.formBg}>
      <div className={styles.boxContainer}>
      <div className={styles.box}>
      
        Ihr Anliegen <br></br><input type="text" name="text" className={styles.textBox} /><br></br>
        Kundennummer *<br></br> <input type="number" name="number" className={styles.textBox} /><br></br>
        Name * <br></br> <input type="text" name="text" className={styles.textBox} /><br></br>
        Telefon * <br></br> <input type="text" name="text" className={styles.textBox} /><br></br>
      
      </div>
      <div className={styles.box}>
      
        E-Mail *<br></br><input type="email" name="email" className={styles.textBox} /><br></br>
        Nachricht *<br></br><textarea id="textarea" name="textarea" rows="4" cols="37">
       
        </textarea><br></br>
        Gewerbetreibend<br></br>
        <input type="checkbox" name="checkbox" className={styles.checkbox} /> Ja

      
      </div>
      <div className={styles.formText}>
      <span className={styles.spanText}>Die Adolf Würth GmbH & Co. KG erhebt und verarbeitet die in dem Formular angegebenen personenbezogenen Daten,<br></br> um für Sie die gewünschte
      <span className={styles.spanText}> Anfrage zu bearbeiten. Bitte beachten Sie bei den Formularen die Markierung der Pflichtfelder.</span></span><br></br>
      <span className={styles.spanText}>Rechtsgrundlage für diese Verarbeitung, der zwingend erforderlichen Daten, ist Art. 6 Abs. 1 lit. b DSGVO, Durchführung einer vorvertraglichen Maßnahme. Die</span><br></br>
      <span className={styles.spanText}>Verarbeitung der von Ihnen freiwillig mitgeteilten Daten erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Danach ist eine Verarbeitung zulässig, die zur</span><br></br>
      <span className={styles.spanText}>Wahrung der unserer berechtigten Interessen erforderlich ist. Unser berechtigtes Interesse besteht darin, mit Ihnen, unseren Kunden, Kontakt zu haben, unsere</span><br></br>
      <span className={styles.spanText}>Beratungsqualität zu verbessern und Sie bei möglichen Rückfragen einfacher kontaktieren zu können. Die erhobenen Daten werden von uns nur solange</span><br></br>
      <span className={styles.spanText}>gespeichert, wie es für die Bearbeitung Ihrer Anfrage sowie zur Kontaktaufnahme mit Ihnen erforderlich ist. Danach werden sie gelöscht.</span><br></br><br></br>
      <span className={styles.spanText}>Ergänzende Datenschutzhinweise, insbesondere zu Ihren Rechten auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch und Beschwerde, finden Sie in unserer Datenschutzerklärung.</span><br></br>
      <span className={styles.spanText}><input type="checkbox" name="checkbox"  /> Ich habe die Datenschutzerklärung gelesen.*</span><br></br><br></br>
      <button className={styles.button2}>Nachricht senden</button><br></br>
      </div>
      </div>
        
      </div>
    </div>
    <div className={styles.cards}>
          <div class="card m-2" >
            <img class="card-img-top" src="/images/card1.jpg" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card m-2" >
            <img class="card-img-top" src="/images/card2.jpg" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
          <div class="card m-2" >
            <img class="card-img-top" src="/images/card1.jpg" alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
      
       </div>
    </div>
  )
}

export default HearderKontakt
