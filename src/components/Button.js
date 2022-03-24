import React from 'react'
import cx from 'classnames'
import defaults from '../styles/atomic-styles.module.css'
import { Link } from 'react-scroll'

export default function Button(props) {

    let btnClasses, divClasses

    if (props.type === 'secondary') {
        btnClasses = cx(defaults.btn, defaults.fontOswald, defaults.white, defaults.bgDarkGray)
        divClasses = cx(defaults.btnDiv, defaults.btnDivSecondary)
    } else if (props.type === 'primary') {
        btnClasses = cx(defaults.btn, defaults.fontOswald, defaults.white, defaults.bgOrange)
        divClasses = cx(defaults.btnDiv, defaults.btnDivPrimary)
    }

    return (
        <div className={divClasses}>
            <a className={btnClasses} href={props.to}><Link to='lp-services' smooth={true} spy={true} offset={-100}>{props.buttonText}</Link></a>
        </div>
    )
}
