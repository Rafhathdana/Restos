import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box.jsx'
const Container = styled.div`
margin:0px 23px;
`
const Heading = styled.h3`
  font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #270D41;
`
const MainBorder = styled.div`
  border: 1px solid #FFEFF8;
  padding-top: 20px;
  margin:auto;
  justify-content: center;
  align-items: center;
`
const Order = () => {
  return (
    <Container>
      <Heading>Orders</Heading>
      <MainBorder>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </MainBorder>
    </Container>
  )
}

export default Order;