import React from 'react'
import styled from 'styled-components'
import CatBox from '../components/CatBox.jsx'
import ImageUploader from '../components/ImageUploader.jsx'
import { Icon } from '@iconify/react';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
margin:0px 23px;
`
const Heading = styled.h3`
font-weight: ${(props) => props.type === "Modal" ? "400" : "500"};
font-size: ${(props) => props.type === "Modal" ? "15px" : "20px"};
line-height:${(props) => props.type === "Modal" && "30px"};
color: #270D41;
`
const MainBorder = styled.div`
  border:none;
  padding-top: 20px;
  margin:auto;
  justify-content: center;
  align-items: center;
`
const Button = styled.button`
    background-color: #5C0FB6;
    color: #FFFFFF;
margin: 10px 0px ;
height: 45px;
border:none;
border-radius: 6px;
width:100%;
justify-content: center;
align-items: center;
`
const Input = styled.input`
background: #FFEFF8;
border:none;
border-radius:3px;
width:100%;
justify-content: center;
padding:10px;
height:48px;
`
const TextArea = styled.textarea`
    border: 1px solid #FFEFF8;
    resize: none;
    width: 100%;
    height: 170px;
    padding: 15px;
`
const Categories = () => {
    function addcategory(e) {
        e.preventDefault();
        setShowSuccessModal(true);

    }
    function closeModal(e) {
        e.preventDefault();
        setShowSuccessModal(false);
        navigate("/category");
    }

    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const navigate = useNavigate();
    return (
        <Container>
            <Heading>Categories</Heading>
            <Button onClick={(e) => { addcategory(e) }} >
                Add Category</Button>
            <MainBorder>
                <CatBox />
                <CatBox />
                <CatBox />
                <CatBox />
                <CatBox />
            </MainBorder>

            <Modal show={showSuccessModal}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Body>
                    <Container>
                        <Icon icon="akar-icons:cross" cursor="pointer" height="30" onClick={(e) => { closeModal(e) }} />

                        <Heading type="Modal">Category name</Heading>
                        <Input type="Text" placeholder="Category name" />

                        <Heading type="Modal">URL</Heading>
                        <Input type="Text" />
                        <Heading type="Modal">Description</Heading>

                        <TextArea placeholder="product details"></TextArea>
                        <Heading type="Modal">Category Image</Heading>
                        <ImageUploader />
                        <Button id="continue" onClick={(e) => { closeModal(e) }} >Save</Button>
                    </Container>

                </Modal.Body>

            </Modal>


        </Container>
    )
}

export default Categories