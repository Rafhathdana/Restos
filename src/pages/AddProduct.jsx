import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import { useNavigate } from "react-router-dom";
function AddProduct() {
    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
    ];
    const varients = [
        { label: "1 varients", value: 1 },
        { label: "2 varients", value: 2 },
        { label: "3 varients", value: 3 }
    ];
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const navigate = useNavigate();
    function varient(e) {
        e.preventDefault();
        setShowSuccessModal(true);
    }
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/addproduct");
    }
    function products(e) {
        e.preventDefault();
        navigate("/product");
    }
    return (
        <Container fluid="md" className="dashboard">
            <Row>
                <Col>
                    <h4 className="producttitle">Add Product</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className="margindec">Product name</h6>
                </Col>
            </Row>
            <div className='margindec'>
                <input type="Text" className="inputbox" placeholder="Product name" />
            </div>
            <Row>
                <Col>
                    <h6 className="margindec">Product category</h6>
                </Col>
            </Row>
            <div className='margindec'>
                <Select options={actions} />
            </div>
            <div className='checkboxf'>
                <input type="checkbox" className='checkbox' />
                <h6 className="margindec">Recommended product</h6>
            </div>
            <div className="productdetails">
                <textarea className="productdetai" placeholder="product details"></textarea>
            </div>
            <div className='imagehead'>
                <h6 className="margindec">Product image</h6>
            </div>
            <div className='margindec'>
                <ImageUploader />
            </div>
            <Row>
                <Col>
                    <h6 className="margindec extra">Variants</h6>
                </Col>
            </Row>
            <div className='margindec'>
                <p className='grey'>Complete the store setup and start selling your awesome products in no time!</p>       </div>

            <div className='savebutton'>
                <Button className='d-block saveBtn' id="varient" onClick={(e) => { varient(e) }} >Add varient</Button>
            </div>
            <h6 className="margindec clear">Price Details</h6>
            <div className='varienthead'>
                <div className='varientname' >
                    <input type="Number" className="inputbox" placeholder="MRP" />

                </div>
                <div className='varientprice'>
                    <input type="Number" className="inputbox" placeholder="Selling Price" />
                </div>
            </div>
            <Button className='form-control buttonc' id="continue" onClick={(e) => { products(e) }} >Add Product</Button>

            <Modal
                show={showSuccessModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Body>
                    <div>
                        <div className="backward" onClick={(e) => { closeModal(e) }}>X
                        </div>

                        <div fluid="md" className="formfun">
                            <div className='margindec'>
                                <Select placeholder="Number of Varients" options={varients} />
                            </div>
                            <div className='varienthead'>
                                <div className='varientname' >
                                    <h6 className="margindec extra">Varient 1 Name</h6>
                                    <div className='margindec'>
                                        <input type="Text" className="inputbox" placeholder="Varient Name" />
                                    </div>
                                </div>
                                <div className='varientprice'>
                                    <h6 className="margindec extra">Varient 1 Price</h6>
                                    <div className='margindec'>
                                        <input type="Number" className="inputbox" placeholder="Varient Price" />
                                    </div>
                                </div>
                            </div>

                            <Col>
                                <h6 className="margindec extra">Varient Image</h6>
                            </Col>
                            <ImageUploader />
                            <Button className='form-control buttonc' id="continue" onClick={(e) => { varient(e) }} >Save</Button>
                        </div>

                    </div>
                </Modal.Body>
                <div className="hrline lin"></div>

            </Modal>



        </Container>
    );
}
export default AddProduct;
