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
const Heading = styled.h4`
font-size: 16px;
font-weight: 500;
margin-right: auto;
`
const Button = styled.button`
    cursor:none;
    height:30px;
    align-items: center;
    margin: 10px 20px;
    border-radius: 5px;
    background-color: #D3D1D1;
    color:#5D4C4C;
    font-size:11px;
    font-weight:400;
    border:none;
    padding: 5px 10px;
    margin-left:auto;
    `
const Rate = styled.h4`
margin-left:auto;
font-size:14px;
font-weight:500;
color:#270D41;
    `
const Count = styled.span`
    font-size: 11px;
    color: #707070;
    font-weight: 400;
`
const Main = styled.div`
display:flex;
flex-direction: column;
margin:auto;
`
const Hr = styled.div`
flex-grow:1;
color:#FFEFF8;
height:1px;
border:1px solid #FFEFF8;
margin:20px auto;
width:95%;
`
const Code = styled.div`
    color:#590FB7;
    font-weight: 400;
    font-size: 12px;
    margin-top:-10px;
    letter-spacing:-1px;
`
const Box = () => {
    return (

        <Container >
            <HeadBox>

                <Image alt="image " src="https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/lkn0extnvjywfts4q7gw" />
                <Main>
                    <Heading>Malabar Chicken Biriyani</Heading>
                    <Rate>146
                        <Count>x2</Count>
                    </Rate>
                    <Code>#111111</Code>
                </Main>
                <Button>Cancelled</Button>
            </HeadBox>
            <Hr />
        </Container>
    )
}

export default Box