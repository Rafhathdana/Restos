import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


function Verified() {
    const navigate = useNavigate();
    function closeModal(e) {
        e.preventDefault();
        navigate("/dashboard");
    }
    return (
        <Container fluid="md" className="signUpContainer">
            <div className="accountcreated">

                <Row>
                    <Col>
                        <h2 className="sTitle center">Account Verified Successfully</h2>
                    </Col>
                </Row>
                <div className="wrapper">
                    <div className="circle">
                        <div className="checkMark"></div>
                    </div>
                </div>
                <input type="submit" className="form-control buttonc" id="freeTrial" value="Continue" onClick={(e) => { closeModal(e) }} />

            </div>
        </Container>
    );
}

export default Verified;
