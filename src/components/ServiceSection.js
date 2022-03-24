import React from 'react'
import cx from 'classnames'
import ServiceSectionTextComponent from './ServiceSectionTextComponent'
import ServiceSectionCourseComponent from './ServiceSectionCourseComponent'
import Sidebar from './Sidebar'
import { Container, Row, Col } from 'react-grid-system'
import { Element } from 'react-scroll';

import defaults from '../styles/atomic-styles.module.css'

export default function ServiceSection() {
    return (
        <Container fluid={true}>
            <Row className={defaults.inheritHeight}>
                <Col xs={0} sm={0} md={3} lg={2} className={cx(defaults.inheritHeight, defaults.borderRightDarkGray, defaults.zeroPaddingLeft)}>
                    <Sidebar
                        type="darkGray"
                        sectionName="Our Services"
                        sidebarLinks={[{
                            name: 'For Corporates',
                            section: 'services-cpts'
                        }, {
                            name: 'For Students',
                            section: 'services-stds'
                        }, {
                            name: 'Approach',
                            section: 'services-approach'
                        }, {
                            name: 'Pricing',
                            section: 'services-pricing'
                        }]}
                    />
                </Col>
                <Col xs={12} sm={12} md={9} lg={10}>
                    <Element name="services-cpts">
                        <ServiceSectionCourseComponent
                            sectionName="services-cpts"
                            sectionTitle="For Corporates"
                            sectionHeading="For Businesses and Corporates"
                            data={[{
                                heading: 'Functional Trainings',
                                trainings: [{
                                    name: 'Advanced Problem Architecture and Stakeholder Communication Synthesis',
                                    duration: '14 hours',
                                    topics: 'problem approach, problem definitions, effective research methodology, industry best practices, VUCA methodology, 80:20 principle, problem structure categories, live case studies and approach to solve real-world business problems',
                                    description: 'Our flagship functional training program must for all market research professionals: to grasp important concepts for young professional, and to revise fundamentals for mid-to-senior level professionals.',
                                    image: {
                                        path: 'apa.jpg',
                                        altText: 'Advanced Problem Architecture and Stakeholder Communication Synthesis'
                                    }
                                }, {
                                    name: 'Effective Stakeholder Management and Communication',
                                    duration: '7 hours',
                                    topics: 'synthesize findings in deliverables, top-line synthesis, summary vs recommendations, parent-child ideology for stakeholder communication, SCR and pyramid model',
                                    description: 'This training workshop is aimed at polishing day-to-day stakeholder communication and conveying impactful findings in deliverables.',
                                    image: {
                                        path: 'esm.jpeg',
                                        altText: 'Effective Stakeholder Management and Communication'
                                    }
                                }
                                ]
                            }, {
                                heading: 'Behavioral Trainings',
                                trainings: [{
                                    name: 'Business Storytelling for Maximum Client Engagement',
                                    duration: '2 hours',
                                    topics: 'when to use story-telling, narrative structure and story development, mining experiences to build strong rapport, planning and implementing purposeful stories',
                                    description: ' This training workshop aims to help professionals engage clients while presenting findings and build a personal rapport to expand network that extends beyond the workplace',
                                    image: {
                                        path: 'bsc.jpeg',
                                        altText: 'Business Storytelling for Maximum Client Engagement'
                                    }
                                }, {
                                    name: 'Tackle Work-Pressure and Work-life Tranquilly',
                                    duration: '2 hours',
                                    topics: 'initiating workplace mental health conversations, normalizing support groups, addressing stigmas associated with mental health, developing resilience, healthy ways of working, managing a stress-free team',
                                    description: 'This training workshop is focused towards mental well-being during high-pressure projects or while managing challenging stakeholders.',
                                    image: {
                                        path: 'twc.jpg',
                                        altText: 'Tackle Work-Pressure and Challenges Tranquilly'
                                    }
                                }
                                ]
                            }]}
                        />
                    </Element>
                    <Element name="services-stds">
                        <ServiceSectionCourseComponent
                            sectionName="services-stds"
                            sectionTitle="For Students"
                            sectionHeading="For Educational Instituitions and Students"
                            data={[{
                                heading: 'Primary Trainings',
                                trainings: [{
                                    name: 'Step-by-step to crack market research/KPO interviews',
                                    duration: '20 hours',
                                    topics: 'interview process overview, guestimate cheat sheet, practice of case studies tested in interviews, casting remarkable first impressions',
                                    description: ' This training module is suited for students preparing for consulting and market research interviews to significantly increase chances of success.',
                                    image: {
                                        path: 'cmi.jpg',
                                        altText: 'Step-by-step to crack market research/KPO interviews'
                                    }
                                }, {
                                    name: 'Strategies to crack behavioural interview rounds',
                                    duration: '3 hours',
                                    topics: 'introduction to behavioural interviews, pattern of questions, STAR methodology, refining past experiences to highlight achievements',
                                    description: ' This training module aims to delve into your past experiences and showcase your true potential, highlight your achievements and gain a competitive edge in the eyes of recruiters.',
                                    image: {
                                        path: 'cbi.jpg',
                                        altText: 'Step-by-step to crack market research/KPO interviews'
                                    }
                                }
                                ]
                            }]}
                        />
                    </Element>
                    <Element name="services-approach">
                        <ServiceSectionTextComponent
                            sectionName="services-approach"
                            sectionTitle="Approach"
                            data={[{
                                heading: 'The KnowSmith Approach',
                                body: '<ul><li>Quality trainers with extensive experience as market research consultants</li> <li> Interactive and engaging sessions </li><li> Brainstorming on real-world business case studies </li><li> Greater training retention, implementable in mundane work streams </li><li> Enhanced employee efficiency and motivation</li></ul>'
                            }]}
                            image={{
                                path: 'approach.jpg',
                                altText: 'The only approach that will ever matter.'
                            }}
                        />
                    </Element>
                    <Element name="services-pricing">
                        <ServiceSectionTextComponent
                            sectionName="services-pricing"
                            sectionTitle="Pricing"
                            data={[{
                                heading: 'Pricing and Locations',
                                body: '<p>We offer services in all major metropolitans across India.</p> <br/> <p>Our workshops and trainings are competitively priced to cater to all professionals and students. </p>'
                            }]}
                            image={{
                                path: 'pricing.jpg',
                                altText: 'Our prices will put a smile on your face.'
                            }}
                        />
                    </Element>
                </Col>
            </Row>
        </Container >
    )
}
