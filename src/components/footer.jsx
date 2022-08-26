import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Container = styled.div`
 display: flex;
`
const Item= styled.div`
width :33%;
margin:auto;
`

function Footer() {
    const navigate = useNavigate();
    return (
            <Container>
            <Item>Dashboard</Item>
            <Item>Home</Item>
            <Item onClick={() => navigate('/order')}>Orders</Item>
            </Container>
    );
}

export default Footer;
