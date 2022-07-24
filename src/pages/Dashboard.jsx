import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { Container, Row, Col, Modal, Button, InputGroup, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

function Dashboard() {
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showShopAddress, setshowShopAddress] = useState(false)
    const navigate = useNavigate();
    function customStore(e) {
        e.preventDefault();
        setShowSuccessModal(true);
    }
    function restaurantDetails(e) {
        e.preventDefault();
        setshowShopAddress(true);
    }
    function addProduct(e) {
        e.preventDefault();
        navigate("/empty");

    }
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        setshowShopAddress(false);
        navigate("/dashboard");
    }
    return (
        <Container fluid="md" className="signUpContainer">
            <Row>
                <Col>
                    <h2 className="sTitle">Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className="sTitle">Welcome to the Rokeat</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="sTitle">Complete the store setup and start selling your awesome products in no time!</p>
                </Col>
            </Row>
            <div className="ibox mb-3">
                <Button
                    className="dash-button" onClick={(e) => { customStore(e) }}
                >
                    Customize Your online Store
                    {/* <FaBeer /> */}
                </Button>
            </div>
            <Modal
                show={showSuccessModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div fluid="md" className="">
                        <Row>
                            <Col>
                                <h2 className="sTitle">Upload your restaurant logo</h2>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className="">select color Theme for Your Store.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Button className='d-block saveBtn' id="save" onClick={(e) => { closeModal(e) }} >Save</Button>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="ibox mb-3">
                <Button
                    className="dash-button" onClick={(e) => { restaurantDetails(e) }}
                >
                    Add Restaurant details
                </Button>
            </div>
            <Modal
                show={showShopAddress}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div fluid="md" className="">
                        <Row>
                            <Col>
                                <h2 className="sTitle">Shop address</h2>
                            </Col>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder="Your Shop Address"
                                    aria-label="shop address"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Row>
                        <Row>
                            <Button className='d-block saveBtn' id="save" onClick={(e) => { closeModal(e) }} >Save</Button>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="ibox mb-3">
                <Button
                    className="dash-button" onClick={(e) => { addProduct(e) }}
                >
                    Add Products
                </Button>
            </div>


        </Container>
    );
}

export default Dashboard;
