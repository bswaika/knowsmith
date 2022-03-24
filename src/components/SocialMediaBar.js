import React from 'react'
import { Row, Col } from 'react-grid-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';

export default function SocialMediaBar() {
    return (
        <div>
            <Row style={{
                textAlign: "center"
            }}>
                <Col xs={3}>
                    <a
                        href=" https://www.linkedin.com/feed/update/urn:li:activity:6799716164525277184?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6799716164525277184%29"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin social"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </Col>
                <Col xs={3}>
                    <a
                        href="#facebook"
                        className="facebook social"
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                </Col>
                <Col xs={3}>
                    <a
                        href="https://twitter.com/Knowsmith1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="twitter social"
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </Col>
                <Col xs={3}>
                    <a
                        href="https://www.instagram.com/knowsmith03"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram social"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </Col>
            </Row>
        </div>
    )
}
