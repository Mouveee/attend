import * as React from 'react'

import styles from './EntryPage.module.css'

export default function EntryPage(props) {
  return (
    <section
      className={styles.container}
    >
      <div className={styles.content}>
        Als Web Developer liegen meine Kernkompetenzen im Umgang mit Technologien wie <i>HTML, Javascript und CSS</i>{' '}
        sowie verwandten Tools, Libraries und Frameworks. Diese Seite wurde zum Beispiel
        mit <i>React</i> erstellt.
        Eine detailliertere Auflistung meiner Kenntnisse und Erfahrungen findet sich unter <i>Kenntnisse</i>.
        <br></br>
        Als Web Developer besteht ein Großteil meiner Aufgaben in der Konzeptionierung und Gestaltung von Websites
        und deren praktischer Umsetzung in Codeform im Frontend, sowie in der Entwicklung von REST-APIs und
        Datenverarbeitung im Backend.
        Ich sehe mich dabei als klassischen Problemlöser: Der Kunde hat ein Problem, meine Aufgabe ist es, dieses zu analysieren,
        seinen Ursprung zu finden und es schließlich zu lösen.
        <br></br>
        Neben der Webentwicklung beschäftige ich mich intensiv mit digital erstellter Musik und Sounddesign mit <i>Ableton Live</i> und bin
        begeisterter Leser von Romanen.
        <br></br>
        Ich bin erreichbar unter meiner <i><a type="email" className="App-clickable" href="mailto:huwig.marco@gmail.com">E-Mail Adresse </a></i>{'\u00A0'}
        oder in den <i>Kontaktdaten</i>.
      </div>
    </section>
  )
}



