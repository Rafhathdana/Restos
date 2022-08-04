import { Container, Row, Col, Button } from 'react-bootstrap';
import React from 'react';
import astro from "../Assets/img/astraunet2.svg";
import { useNavigate } from "react-router-dom";


function EmptyProduct() {
    const navigate = useNavigate();

    function closeModal(e) {
        e.preventDefault();
        navigate("/addproduct");
    }
    return (
        <Container fluid="md" className="mainComponent">
            <Row>
                <Col className="bannerLeft d-md-block">
                    <img className="astroImg" src={astro} alt="" />
                </Col>
                <Col className="heroTitleBox">
                    <h2 className="heroTitle">Add your first product </h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="heroPara">Complete the store setup and start selling your awesome products in no time!</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button variant="primary" type="submit" onClick={(e) => { closeModal(e) }} >
                        Add Your First Product
                    </Button>
                </Col>
            </Row>



        </Container>
    );
}

export default EmptyProduct;
