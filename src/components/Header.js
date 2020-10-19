import React from 'react'

import styles from './Header.module.css'

import video from '../vids/head.mp4'

export default function(props) {
    let visible = false

    window.setTimeout(() => {
        visible = !visible
    }, 400)

    return (
        <section className={visible ? styles.faderClass : styles.doodoo}>
            <section className={styles.container}>
                <video loop autoplay muted className={styles.video}>
                    <source src={video} type="video/mp4"></source>
                </video>

                <h1 className={styles.content}>                    
                    MARCO HUWIG
                    <h2 className={styles.subHeader}>WEB DEVELOPMENT</h2>
                </h1>
            </section>
        </section>
    )
}