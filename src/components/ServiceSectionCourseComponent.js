import React from 'react'
import cx from 'classnames'
import { Row, Col } from 'react-grid-system'

import defaults from '../styles/atomic-styles.module.css'
import "../styles/AboutSectionComponent.css"
import "../styles/ServiceSectionCourseComponent.css"

export default function ServiceSectionCourseComponent(props) {
    return (
        <div id={props.sectionName}>
            <Row className="lp-about-comp">
                <Col>
                    <small className={cx(defaults.fontOswald, defaults.darkGray, 'about-section-title')}>{props.sectionTitle}</small>
                    <h1 className={cx(defaults.fontOswald, defaults.orange, "lp-about-heading")}>{props.sectionHeading}</h1>
                    {props.data.map((item) => (
                        <>
                            <h2 className={cx(defaults.fontOswald, defaults.darkGray, "lp-about-heading")}>{item.heading}</h2>
                            {item.trainings.map((training) => (
                                <>
                                    <Row className="lp-service-course">
                                        <Col md={5}>
                                            <img src={require(`../assets/images/courses/${training.image.path}`)} alt={training.image.altText} className="lp-service-course-img" />
                                            {/* <div className="lp-service-img-div"></div> */}
                                        </Col>
                                        <Col md={7} className="lp-service-course-details">
                                            <h3
                                                className={cx(defaults.fontOswald, defaults.orange)}
                                            >{training.name}</h3>
                                            <p
                                                className={cx(defaults.fontPoppins, defaults.darkGray, "lp-service-course-separation")}
                                            ><strong>Duration: </strong>{training.duration}</p>
                                            <p
                                                className={cx(defaults.fontPoppins, defaults.darkGray)}
                                                style={{
                                                    marginBottom: '0.5rem'
                                                }}
                                            >{training.description}</p>
                                            <p
                                                className={cx(defaults.fontPoppins, defaults.orange)}
                                            ><strong>Topics Covered: </strong>
                                                {training.topics}
                                            </p>
                                        </Col>
                                    </Row>
                                </>
                            ))}
                            <p className={cx(defaults.fontPoppins, defaults.orange, defaults.light, "lp-about-body")} dangerouslySetInnerHTML={{ __html: item.body }}></p>
                        </>
                    ))}
                </Col>
            </Row>
        </div>
    )
}
