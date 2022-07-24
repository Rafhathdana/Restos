import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';

function Footer() {
    return (
        <div className='footer' >
            <Container>
                <Row>
                    <Col>
                        <p className='copyrightText'>All rights reserved &copy; 2022</p>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Footer;
