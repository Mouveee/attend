import * as React from 'react'

import styles from './SkillsItem.module.css'

export default function SkillsItem (props) {
    return (
        <div className={styles.skillsItem}>
            <b>{props.name}</b>
            <ul>
                {props.skills.map(skill => {
                    return <li className={styles.listItem} key={skill}>{skill}</li>
                })}
            </ul>
        </div>
    )
}