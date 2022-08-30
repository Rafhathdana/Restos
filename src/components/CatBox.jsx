import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
display:flex;
border-radius:4px;
border: 1px solid #FFEFF8;
height: 58px;
margin-top:10px;
`
const Name = styled.h5`
font-weight: 400;
font-size: 14px;
color: #270D41;
margin: auto ;
`;
const CatBox = () => {
    return (
        <Container>
            <Name>Category 1</Name>
        </Container>
    )
}

export default CatBox