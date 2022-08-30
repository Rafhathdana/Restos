import React from 'react'
import styled from 'styled-components'
import Box from '../components/Box.jsx'
const Container = styled.div`
margin:0px 23px;
`
const Heading = styled.h3`
  font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #270D41;
`
const SubHeading = styled.h3`
  font-weight: 500;
font-size: 20px;
line-height: 30px;
color: #270D41;
`
const Outer = styled.div`
  display: flex;
  justify-content: center;
    align-items: center;
    background-color:  #FFEFF8;
`
const OuterBox = styled.div`
    height:110px;
    width:33%;
    border:1px solid #FFEFF8;
    background-color:  #FFFFFF;
    margin:5px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    `
const OuterHead = styled.h4`
  font-weight: 700;
  font-size: 24px;
  color: #270D41;
  `
const OuterHeading = styled.h6`
  font-weight: 400;
  font-size: 14px;
  color: #270D41;
`
const MainBorder = styled.div`
  border: 1px solid #FFEFF8;
  padding-top: 20px;
  margin:auto;
  justify-content: center;
  align-items: center;
`
const MainDashboard = () => {
  return (
    <Container>
      <Heading>Dashboard</Heading>
      <Outer>
        <OuterBox>
          <OuterHead>10</OuterHead>
          <OuterHeading>Orders</OuterHeading>
        </OuterBox>
        <OuterBox>
          <OuterHead>3</OuterHead>
          <OuterHeading>Sales</OuterHeading>
        </OuterBox>
        <OuterBox>
          <OuterHead>4</OuterHead>
          <OuterHeading>Payout</OuterHeading>
        </OuterBox>
      </Outer>
      <SubHeading>Recent Orders</SubHeading>
      <MainBorder>
        <Box />
        <Box />
      </MainBorder>
    </Container>
  )
}

export default MainDashboard