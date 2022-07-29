import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer';
import Select from 'react-select';

function AddProduct() {
    const actions = [
        { label: "Add", value: 1 },
        { label: "Edit", value: 2 },
        { label: "Delete", value: 3 }
    ];
    return (
        <div>
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
                <input type="checkbox" />
                <h6 className="margindec">Recommended product</h6>
                </div>

                <Row>
                    <Col>
                        <h6 className="margindec">Product image</h6>
                    </Col>
                </Row>
                <div className='margindec'>
                    <input type="Text" className="inputbox" placeholder="Product name" />
                </div>
                <Row>
                    <Col>
                        <h6 className="margindec">Variants</h6>
                    </Col>
                </Row>
                <div className='margindec'>
                <p className='grey'>Complete the store setup and start selling your awesome products in no time!</p>       </div><Row>
                    <Col>
                        <h6 className="margindec">Product image</h6>
                    </Col>
                </Row>
                <div className='margindec'>
                    <input type="Text" className="inputbox" placeholder="Product name" />
                </div>


            </Container>
            <Footer />


        </div>
    );
}
export default AddProduct;
