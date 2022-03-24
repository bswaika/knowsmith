import React from 'react'
import cx from 'classnames'
import { Container, Row, Col } from 'react-grid-system'
import { Link, animateScroll as scroll } from 'react-scroll'

import defaults from '../styles/atomic-styles.module.css'
import '../styles/Navbar.css'

export default function Navbar(props) {
    return (
        <header className={cx(defaults.bgOrange, "lp-nav")}>
            <Container fluid={true} className={defaults.inheritHeight}>
                <Row align="center" className={defaults.inheritHeight}>
                    <Col sm={12} md={3} className={defaults.inheritHeight} style={{ textAlign: 'center' }}>
                        <a href={props.to} style={{ cursor: 'pointer' }} onClick={() => scroll.scrollToTop()}><img className="lp-nav-logo" src={require("../assets/images/logos/logo_white.png")} alt="" /></a>
                    </Col>
                    <Col className="lp-nav-override-height" sm={0} md={5}></Col>
                    <Col sm={12} md={4} className={cx(defaults.inheritHeight, "lp-nav-navbar")}>
                        <Row className={cx(defaults.fontOswald, defaults.white, "lp-nav-navbar-row")}>

                            <Col className="nav-link"><Link to='lp-about' activeClass='nav-active' smooth={true} spy={true} offset={-100}>About</Link></Col>


                            <Col className="nav-link"><Link to='lp-services' activeClass='nav-active' smooth={true} spy={true} offset={-100}>Services</Link></Col>


                            <Col className="nav-link"><Link to='lp-contact' activeClass='nav-active' smooth={true} spy={true} offset={-100}>Contact</Link></Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
