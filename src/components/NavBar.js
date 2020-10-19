import * as React from 'react'

import styles from './NavBar.module.css'

import DehazeIcon from '@material-ui/icons/Dehaze';



export default function NavBar(props) {
    const handleClick = () => {
        alert('why? why did you click me?')
    }

    return (
        <div className={styles.container}>
            <DehazeIcon onClick={handleClick} className={styles.navButton}></DehazeIcon>
        </div>
    )
}