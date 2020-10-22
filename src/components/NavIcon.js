import * as React from 'react'

import styles from './NavIcon.module.css'

import DehazeIcon from '@material-ui/icons/Dehaze';

export default function NavIcon(props) {
    return (
        <div className={styles.container} onClick={props.handleClick}>
            <DehazeIcon className={styles.navButton}></DehazeIcon>
        </div>
    )
}