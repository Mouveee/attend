import React from 'react'

import styles from './NavBar.module.css'

import { _navItems } from './NavBar.ressource'

export default function NavBar(props) {
    return (
        <nav className={`${styles.container} ${props.visible ? '' : styles.outbound}`}>
            <ul>
                {
                   _navItems.map((item, index) => {
                       return (
                        <li 
                            className={styles.listItem} 
                            key={'list-' + index} 
                            onClick={() => {
                                props.handleClick()
                                props.handleNavClick(props[item.navPoint])
                            }}
                        >
                            {item.item}
                        </li>
                       )
                    }) 
                }
            </ul>
        </nav>
    )
}