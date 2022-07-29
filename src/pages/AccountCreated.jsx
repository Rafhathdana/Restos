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
                        <h2 className="sTitle">Account Verified Successfully</h2>
                    </Col>
                </Row>
                <div class="wrapper">
  <div class="circle">
    <div class="checkMark"></div>
  </div>
</div>
                <input type="submit" className="form-control buttonc" id="freeTrial" value="Continue" onClick={(e) => { closeModal(e) }} />

            </div>
        </Container>
    );
}

export default Verified;
