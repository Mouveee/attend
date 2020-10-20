import * as React from 'react'

import { _interests } from './Interests.ressource'

import styles from './Interests.module.css'

export default function Interests(props) {
    return(
        <section className={styles.container}>
            <h1 className={styles.header}>INTERESTS</h1>

            <div className={styles.content}>
                {
                    _interests.map(interest => {
                        return(
                            <section key={interest}>
                                <div className={styles.header}><b>{interest.title}</b></div>
                                <div>   {interest.text}</div>
                                <br></br>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    )
}