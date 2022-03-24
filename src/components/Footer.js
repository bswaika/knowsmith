import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import SocialMediaBar from './SocialMediaBar'

import cx from 'classnames'
import defaults from '../styles/atomic-styles.module.css'

import '../styles/Footer.css'

export default function Footer() {

    return (
        <div className={cx(defaults.bgDarkGray, defaults.lightGray, defaults.fontPoppins)}>
            <Container fluid={true}>
                <Row style={{
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem"
                }}>
                    <Col md={1}></Col>
                    <Col sm={12} md={6} lg={7}>
                        <p className="lp-footer-text-mobile">All rights reserved. &copy; <strong>Know</strong>Smith 2020.</p>
                    </Col>
                    <Col xs={2} sm={2} md={0} lg={0}></Col>
                    <Col xs={8} sm={8} md={4} lg={3}>
                        <SocialMediaBar />
                    </Col>
                    <Col xs={2} sm={2} md={0} lg={0}></Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    )
}
