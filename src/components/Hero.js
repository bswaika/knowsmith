import React from 'react'
import cx from 'classnames'

import Button from './Button'
import { ReactComponent as HeroGraphic } from '../assets/images/hero-graphic-css.svg'
import { Container, Row, Col } from 'react-grid-system'

import defaults from '../styles/atomic-styles.module.css'
import '../styles/Hero.css'


export default function Hero(props) {

    return (
        <Container fluid={true} className="lp-hero">
            <Row align="center">
                <Col sm={12} md={6} lg={5} className="lp-hero-text">
                    <h1 className={cx(defaults.fontOswald, defaults.orange, "lp-hero-header")}>Knowledge. <br />Growth. Success.</h1>
                    <p className={
                        cx(defaults.fontPoppins, defaults.darkGray, defaults.thin, "lp-hero-body")
                    }>Empowering
                        <span className={
                            cx(defaults.orange, defaults.light)
                        }> minds</span> to take on their
                        <span className={
                            cx(defaults.orange, defaults.light)
                        }> consulting journey</span>. <br /><br />
                        Supporting
                        <span className={
                            cx(defaults.orange, defaults.light)
                        }> KPOs and consulting firms</span> to utilize the true potential of their most valuable assets: their employees.
                    </p>
                    <Button type="secondary" buttonText="Know More" />
                </Col>
                <Col sm={12} md={6} lg={7} className="lp-hero-graphic">
                    <HeroGraphic />
                </Col>
            </Row>
        </Container>
    )
}
