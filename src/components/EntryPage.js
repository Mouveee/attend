import * as React from 'react'

import styles from './EntryPage.module.css'

export default function EntryPage(props) {
  return (
    <section
      className={styles.container}
    >
      <div className={styles.content}>
        Hi, mein Name ist Marco Huwig, ich bin Web Developer und lebe in Saarbrücken. 
        <br></br><br></br>
        Ich habe mich 2017 vollends auf die Entwicklung von Software im Web spezialiert und 2019
        an der IHK Saar meinen Abschluss an der IHK Saar gemacht. Mein Abschlussprojekt war ein
        Microsoft basiertes Projekt in der Azure Cloud, das sowohl Front- als auch Backend Coding
        beinhaltete. 
        <br></br><br></br>
        Ich bin immer auf der Suche nach Möglichkeiten, meine Fähigkeiten und Kenntnisse
        nützlich einzubringen und freue mich über jede <a href="mailto:huwig.marco@gmail.de">Kontaktaufnahme</a>.
        Insbesondere zu allem was die Themen HTML, CSS und JavaScript und den gigantischen Kosmos, der sie 
        umgibt, betrifft. 
      </div>
    </section>
  )
}



