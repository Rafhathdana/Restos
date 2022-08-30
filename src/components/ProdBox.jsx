import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
 justify-content: center;
  align-items: center;
`
const HeadBox = styled.div`
border: none;
    display: flex;
`
const Image = styled.img`
height:63px;
width:63px;
border-radius: 7px;
margin: 0px 20px;
`
const ImageHead = styled.div`
margin: 0px 20px;
width:63px;
font-size:${(props) => props.type === "Head" ? "16px" : "14px"};
font-weight:${(props) => props.type === "Head" ? "500" : "400"};
`
const Heading = styled.h4`
margin: auto 10px auto ;
font-size:${(props) => props.type === "Head" ? "16px" : "14px"};
font-weight:${(props) => props.type === "Head" ? "500" : "400"};
`
const Rate = styled.h4`
color:#270D41;
margin:${(props) => props.type === "Head" ? "auto 47px auto auto" : "auto 60px auto auto"};
font-size:${(props) => props.type === "Head" ? "16px" : "14px"};
font-weight:${(props) => props.type === "Head" ? "500" : "400"};
    `

const Hr = styled.div`
flex-grow:1;
color:#FFEFF8;
height:1px;
border:1px solid #FFEFF8;
margin:10px auto;
width:95%;
`
const ProdBox = () => {
    return (
        <Container >
            <HeadBox>

                <Image alt="image " src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw" />
                <Heading>Hamburger</Heading>
                <Rate>146</Rate>
            </HeadBox>
            <Hr />
        </Container>
    )
}

export default ProdBox

export const ProbHead = () => {
    return (

        <Container>
            <HeadBox>
                <ImageHead type="Head">Image</ImageHead>
                <Heading type="Head">Product Name</Heading>
                <Rate type="Head">Price</Rate>
            </HeadBox>
        </Container>
    )
}