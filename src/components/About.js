import * as React from 'react'

import styles from './About.module.css'

export default function About(props) {
    return (
        <section className={styles.container}>
            Marco Huwig
            <br></br>
            Gärtnerstraße 31
            <br></br>
            66117 Saarbrücken
            <br></br><br></br>
            <a href='mailto:huwig.marco@gmail.com'>huwig.marco@gmail.com</a>
        </section> 
    )
}