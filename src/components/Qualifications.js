import * as React from 'react'

import msExam from '../img/MS_EXAM.png'
import ihkIcon from '../img/IHK.jpg'

import styles from './Qualifications.module.css'

export default function Qualifications(props) {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.header}>QUALIFICATIONS</h1>

                <div className={styles.item}>
                    <h1>Computer Science Expert <small>(Fachinformatiker Anwendungsentwicklung)</small></h1>
                    <img src={ihkIcon} alt='IHK Abschluss' className={styles.icon}></img>
                </div>

                <div className={styles.item}>
                    <h1>Microsoft Exam 70-480 / Programming in HTML5 with JavaScript and CSS3</h1>
                    <img src={msExam} alt='Microsoft Exam 70-480' className={styles.icon}></img>
                </div>
            </div>
        </section>
    )
}