import * as React from 'react'

import styles from './NavBar.module.css'

import DehazeIcon from '@material-ui/icons/Dehaze';

export default function NavBar(props) {
    const handleClick = () => {
        alert('where is the navbar?')
    }

    return (
        <div className={styles.container}>
            <DehazeIcon onClick={handleClick} className={styles.navButton}></DehazeIcon>
        </div>
    )
}