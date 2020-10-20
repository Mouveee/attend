import React from 'react'

import styles from './Header.module.css'

import video from '../vids/head.mp4'

export default function(props) {
    return (
        <section className={styles.container}>
            <video loop autoPlay muted className={styles.video}>
                <source src={video} type="video/mp4"></source>
            </video>

            <h1 className={styles.content}>                    
                MARCO HUWIG    
            </h1>
            <h2 className={styles.subHeader}>WEB DEVELOPMENT</h2>
        </section>
    )
}