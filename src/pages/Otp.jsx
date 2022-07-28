import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, InputGroup, Form, Button } from 'react-bootstrap';
import "../App.css";
function Otp() {
    const navigate = useNavigate();
    function closeModal(e) {
        e.preventDefault();
        navigate("/");
    }
    function accountcreated(e) {
        e.preventDefault();
        navigate("/accountCreated");
    }
    return (
        <Container fluid="md" className="signUpContainer">
            <div className='otpspace'>
                 <div className="backward" onClick={(e) => { closeModal(e) }}>&lt;
                        </div>
            <Row>
                <Col>
                    <h2 className="sTitle">Enter OTP send to Your Phone number</h2>
                </Col>
            </Row> <Row>
                            <Col>
                                <p className="sPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odit sit ipsa illo reiciendis iste consequatur earum cupiditate. Animi aperiam deleniti ad consectetur sed minima quaerat modi sit veniam dolorum.</p>
                            </Col>
                        </Row>

                        <input type="Text" className="inputbox " placeholder="OTP" />
                        <input type="submit" className="form-control buttonc" id="freeTrial" value="Create account" onClick={(e) => { accountcreated(e) }} />

            </div>
        </Container>
    );
}

export default Otp;
