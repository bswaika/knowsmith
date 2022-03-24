import React from 'react'
import { Row, Col, Container } from 'react-grid-system'
import ContactFormComponent from './ContactFormComponent'

import cx from 'classnames'
import defaults from '../styles/atomic-styles.module.css'

export default function ContactSection() {
    return (
        <div className={cx(defaults.bgOrange)} style={{
            paddingTop: "3rem",
            paddingBottom: "3rem"
        }}>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <h1
                            className={cx(defaults.fontOswald, defaults.white)} style={{
                                textAlign: "center",
                                marginBottom: "2rem"
                            }}
                        >
                            Get in Touch
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={1}></Col>
                    <Col md={5}>
                        <p
                            className={cx(defaults.fontPoppins, defaults.white)}
                            style={{
                                marginBottom: "2rem"
                            }}
                        >
                            For more information about our services or for any queries, please call us at: <br /><br />
                            <strong>+91 75310 47366<br /></strong><br /><br />
                            You can also reach us through email with your queries at:<br /><br />
                            <strong>support@knowsmith.in</strong><br /><br />
                            Alternatively, kindly send us your queries, using the <strong>Contact Form</strong> provided.
                        </p>
                    </Col>
                    <Col md={5}>
                        <ContactFormComponent />
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Container>
        </div>
    )
}
