import { Container, Row, Col, Modal, Button, InputGroup, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import React from 'react';
import hero from "../Assets/img/main-image.png";
import "../App.css"

function LandingPage() {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const navigate = useNavigate();
    function saveUser(e) {
        e.preventDefault();
        setShowSuccessModal(true);
    }
    function otpUser(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/otp");
    }
    
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/");
    }
    return (
        <Container fluid="md" className="mainComponent">
            <Row>
                <Col className="bannerLeft d-md-block">
                    <img className="heroImg" src={hero} alt="" />
                </Col>
                <Col className="heroTitleBox">
                    <h2 className="heroTitle">Set Up your Own Online Food Ordering Sysytem in 15 Minutes </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="heroPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odit sit ipsa illo reiciendis iste consequatur earum cupiditate. Animi aperiam deleniti ad consectetur sed minima quaerat modi sit veniam dolorum.</p>
                </Col>
            </Row>
                <div className="form">
                    <input type="Text" className="inputbox " placeholder="Enter Your Shop Name" />
                    <input type="submit" className="form-control buttonc" id="freeTrial" value="Start Free Trail" onClick={(e) => { saveUser(e) }} />
                </div>
            
            <div className="hrline"></div>
            <div>
                <h4 className="promotitle">Accepting all forms of orders through a single system.</h4>
            </div>
            <div>
                <div className="boxorder"></div>
                <h5 className="promotitle size">Table Ordering</h5>
                <p className="contentp">Ditch physical menus and reduce contact between staff and customers. Customers can scan a QR code to access your digital menus</p>
            </div>

            <div>
                <div className="boxorder"></div>
                <h5 className="promotitle size">Table Ordering</h5>
                <p className="contentp">Ditch physical menus and reduce contact between staff and customers. Customers can scan a QR code to access your digital menus</p>
            </div>
            <div>
                <div className="boxorder"></div>
                <h5 className="promotitle size">Delivery</h5>
                <p className="contentp">Ditch physical menus and reduce contact between staff and customers. Customers can scan a QR code to access your digital menus</p>
            </div>
            <div>
                <div className="boxorder"></div>
                <h5 className="promotitle size">Pick up</h5>
                <p className="contentp">Ditch physical menus and reduce contact between staff and customers. Customers can scan a QR code to access your digital menus</p>
            </div>
            <div className="features">
                <div className="featuretitle">Features</div>
                <Row>
                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>

                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>

                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>

                    <Col>
                        <div className="boxorder featur"></div>
                        <h5 className="promotitle size feature">Table Ordering</h5>

                    </Col>
                </Row>
            </div>
            <Modal
                show={showSuccessModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div fluid="md" className="formfun">
                        <div className="backward" onClick={(e) => { closeModal(e) }}>&lt;
                        </div>
                        <Row>
                            <Col>
                                <h2 className="sTitle">Start your free 14-day trial of Rokeat</h2>
                            </Col>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Shop URL"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                        </Row>
                        <Row>
                            <Col>
                                <p className="sPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odit sit ipsa illo reiciendis iste consequatur earum cupiditate. Animi aperiam deleniti ad consectetur sed minima quaerat modi sit veniam dolorum.</p>
                            </Col>
                        </Row>

                        <input type="Text" className="inputbox " placeholder="Name" />
                        <input type="Text" className="inputbox " placeholder="Email" />
                        <input type="Text" className="inputbox " placeholder="Password" />
                        <input type="Text" className="inputbox " placeholder="Phone Number" />

                        <Row>
                            <Col>
                                <p className="sPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente odit sit ipsa illo reiciendis iste consequatur earum cupiditate. Animi aperiam deleniti ad consectetur sed minima quaerat modi sit veniam dolorum.</p>
                            </Col>
                        </Row>
                        <div className='savebutton'>
                            <Button className='d-block saveBtn' id="continue" onClick={(e) => { otpUser(e) }} >Continue</Button>
                        </div>
                    </div>

                </Modal.Body>
                    <div className="hrline lin"></div>

            </Modal>
        </Container>
    );
}

export default LandingPage;
