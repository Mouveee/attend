import * as React from 'react'

import styles from './EntryPage.module.css'

export default function EntryPage(props) {
  return (
    <section
      className={styles.container}
    >
      <div className={styles.content}>
        Hallo, mein Name ist Marco Huwig, ich bin Web Developer und lebe in Saarbrücken. 
        <br></br><br></br>
        Ich habe mich 2017 auf die Webentwicklung spezialisiert und 2019
        meinen Abschluss an der IHK Saar gemacht. In der <i>Microsoft Cloud</i> (Azure, SharePoint,
        PowerApps etc...) habe ich bereits mehrere Auftragsrojekte mit <i>Experts Inside</i> umgesetzt
        und dabei sowohl mit Frontend Entwicklung und Coding im Backend, konkret REST APIs,
        Erfahrungen gesammelt.  
        <br></br><br></br>
        Ich bin immer auf der Suche nach Möglichkeiten, meine Fähigkeiten und Kenntnisse
        nützlich einzubringen und freue mich über jeden <a href="mailto:huwig.marco@gmail.de">Kontakt</a>.
      </div>
    </section>
  )
}



