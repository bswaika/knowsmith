import React from 'react'
import cx from 'classnames'
import AboutSectionComponent from './AboutSectionComponent'
import Sidebar from './Sidebar'
import { Container, Row, Col } from 'react-grid-system'
import { Element } from 'react-scroll';

import overview from '../assets/images/overview.jpg'
import mission from '../assets/images/mission.jpg'

import defaults from '../styles/atomic-styles.module.css'

export default function AboutSection() {
    return (
        <Container fluid={true}>
            <Row className={defaults.inheritHeight}>
                <Col xs={0} sm={0} md={3} lg={2} className={cx(defaults.inheritHeight, defaults.borderRightDarkGray, defaults.zeroPaddingLeft)}>
                    <Sidebar
                        type="darkGray"
                        sectionName="About Us"
                        sidebarLinks={[{
                            name: 'Overview',
                            section: 'about-overview'
                        }, {
                            name: 'Mission',
                            section: 'about-mission'
                        }]}
                    />
                </Col>
                <Col xs={12} sm={12} md={9} lg={10}>
                    <Element name="about-overview">
                        <AboutSectionComponent
                            sectionName="about-overview"
                            sectionTitle="Overview"
                            data={[{
                                heading: 'About KnowSmith',
                                body: 'KnowSmith is the only learning and development organization in India focused towards the needs of India\'s growing KPO, market research and consulting industries. Our trainings aim to transform organizations, corporates and individuals by developing the skills and the mindset to effectively tackle complex business problems and succeed in the market research world. Knowsmith trainers are experienced market research professionals and consultants, working for leading consulting firms and Fortune 500 companies.'
                            }]}
                            image={{
                                path: overview,
                                altText: 'Strategy is key.'
                            }}
                        />
                    </Element>
                    <Element name="about-mission">
                        <AboutSectionComponent
                            sectionName="about-mission"
                            sectionTitle="Mission"
                            data={[{
                                heading: 'Our Mission',
                                body: 'To empower businesses, corporates and aspiring individuals achieve strategic problem-solving mindset'
                            }, {
                                heading: 'Our Vision',
                                body: 'To coach, prepare and produce the sharpest minds in the market research industry'
                            }, {
                                heading: 'Our Values',
                                body: '<ul><em>Enrich</em> skills, experience and capability <br> <em>Sincere</em> in the collaborative journey with our customers <br> <em>Fair</em> in all our endeavours, in spirit and letter</ul>'
                            }]}
                            image={{
                                path: mission,
                                altText: 'Our mission is to achieve our vision'
                            }}
                        />
                    </Element>
                </Col>
            </Row>
        </Container >
    )
}
