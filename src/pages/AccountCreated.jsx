import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';


function Verified() {
    const navigate = useNavigate();
    function closeModal(e) {
        e.preventDefault();
        navigate("/dashboard");
    }
    return (
        <Container fluid="md" className="signUpContainer">
            <Row>
                <Col>
                    <h2 className="sTitle">Account Verified Successfully</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit" onClick={(e) => { closeModal(e) }}>
                        Continue
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Verified;
