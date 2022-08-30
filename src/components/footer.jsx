import React from 'react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
 /* display: flex; */
position:sticky;
bottom:0;
background-color: white;
width:100%;
height:58px;
`
const Contain = styled.div`
 display: flex;
`
const Item = styled.div`
width :33%;
margin:auto;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 10px;
color: #270D41;
cursor: pointer;
`

function Footer() {
    const navigate = useNavigate();
    return (
        <Container>
            <Contain>

                <Item><Icon icon="ph:house-simple" height="38" />Dashboard</Item>
                <Item onClick={() => navigate('/order')}><Icon icon="ph:receipt" height="40" />Orders</Item>
                <Item onClick={() => navigate('/product')}><Icon icon="ph:receipt" height="40" />Product</Item>
            </Contain>
        </Container>
    );
}

export default Footer;
