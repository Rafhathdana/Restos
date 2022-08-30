import React from 'react'
import astro from "../Assets/img/astraunet2.svg";
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
const Container = styled.div`
margin:auto;
display:flex;
flex-direction:column;
`
const Image = styled.img`
 display: block;
    margin: auto;
    height: 18rem;
    width: 15rem;
`
const Head = styled.h2`
    font-size:20px;
    font-weight:500;
    margin: 30px auto;
`
const P = styled.p`
    color:#707070;
    font-size:14px;
    font-weight:400;
    margin:auto 25px;
`
const Button = styled.button`
    background-color: #5C0FB6;
    color: #FFFFFF;
margin: 10px 30px ;
height: 45px;
border:none;
border-radius: 6px;
`
function EmptyProduct() {
    const navigate = useNavigate();

    function addproduct(e) {
        e.preventDefault();
        navigate("/addproduct");
    }
    return (
        <Container>
            <Image src={astro} alt="" />
            <Head>Add your first product </Head>
            <P>Complete the store setup and start selling your awesome products in no time!</P>
            <Button onClick={(e) => { addproduct(e) }} >
                Add Your First Product</Button>

        </Container>
    );
}

export default EmptyProduct;
