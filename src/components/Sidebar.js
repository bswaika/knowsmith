import React from 'react'
import cx from 'classnames'

import { Link } from 'react-scroll'

import defaults from '../styles/atomic-styles.module.css'
import '../styles/Sidebar.css'

export default function Sidebar(props) {

    let h2Classes, ulClasses, activeClass

    if (props.type === 'orange') {
        h2Classes = cx(defaults.orange)
        ulClasses = cx(defaults.light, defaults.lightGray, 'sdbr-orange')
        activeClass = 'active-orange'
    } else if (props.type === 'darkGray') {
        h2Classes = cx(defaults.darkGray)
        ulClasses = cx(defaults.light, defaults.lightOrange, 'sdbr-darkGray')
        activeClass = 'active-darkGray'
    }

    return (
        <div className={cx(defaults.fontOswald, 'sdbr')}>
            <h2 className={h2Classes}>{props.sectionName}</h2>
            <ul className={ulClasses}>
                {props.sidebarLinks.map(item => {
                    return (
                        <Link to={item.section} activeClass={activeClass} smooth={true} spy={true} offset={-100}><li>{item.name}</li></Link>
                    )
                })}
            </ul>
        </div>
    )
}
