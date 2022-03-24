import React from 'react'
import cx from 'classnames'
import { Row, Col } from 'react-grid-system'

import defaults from '../styles/atomic-styles.module.css'
import "../styles/AboutSectionComponent.css"

export default function AboutSectionComponent(props) {
    return (
        <div id={props.sectionName}>
            <Row className="lp-about-comp">
                <Col xs={12} sm={12} md={7} lg={8}>
                    <small className={cx(defaults.fontOswald, defaults.orange, 'about-section-title')}>{props.sectionTitle}</small>
                    {props.data.map((item) => (
                        <>
                            <h1 className={cx(defaults.fontOswald, defaults.orange, "lp-about-heading")}>{item.heading}</h1>
                            <p className={cx(defaults.fontPoppins, defaults.darkGray, defaults.light, "lp-about-body")} dangerouslySetInnerHTML={{ __html: item.body }}></p>
                        </>
                    ))}
                </Col>

                <Col xs={12} sm={12} md={5} lg={4} className="lp-about-img-container">
                    <img src={props.image.path} alt={props.image.altText} className="lp-about-img" />
                    <div className="lp-about-img-div"></div>
                </Col>
                <Col lg={12} className="lp-about-separator"></Col>
            </Row>
        </div>
    )
}
