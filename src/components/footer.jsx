import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
 display: flex;
`
const Item= styled.div`
width :33%;
margin:auto;
`
function Footer() {
    return (
            <Container>
            <Item>Dashboard</Item>
            <Item>Home</Item>
            <Item>Orders</Item>
            </Container>
    );
}

export default Footer;
