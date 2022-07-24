import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Button, Modal } from "react-bootstrap";

function SignUp() {
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const navigate = useNavigate();
    
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/otp");
    }

    return (
        <Modal
            show={showSuccessModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body>

                <Container fluid="md" className="signUpContainer">
                    <Row>
                        <Col>
                            <h2 className="sTitle">Start your free 14-day trial of Rockeat</h2>
                        </Col>
                    </Row>
                    <Row>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <Col>
                            <p className="sPara">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
                                odit sit ipsa illo reiciendis iste consequatur earum cupiditate.
                                Animi aperiam deleniti ad consectetur sed minima quaerat modi sit
                                veniam dolorum.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Button className='d-block saveBtn' id="continue" onClick={(e) => { closeModal(e) }} >Continue</Button>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default SignUp;
