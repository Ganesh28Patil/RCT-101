import React from 'react'
import styled from 'styled-components';

const NavBarWrapper = styled.header`
  height:fit-content;
  padding:10px;
  background-color:gray;
  display:flex;
  justify-content:space-around;
`;
const Logo = styled.div`
height:60px;
`;
const ResourceLinks = styled.div`
font-weight:300;
`;
const Button = styled.button`
  cursor:pointer;
  font-size: 14px;
  font-weight:700;
  padding:15px 30px;
  border-radius:2px; 
  color:#fff;
  background: #00bcd4;
  border:0px;
  text-align:center;
  @media all and (max-width:820px){
    padding:10px 5px;
    font-size:10px;
  }
  @media all and (max-width:620px){
    display:none;
  }
`;
const A = styled.a`
  text-decoration:none;
  color:#fff;
  margin-left:50px;
  cursor:pointer;
  @media all and (max-width:620px){
    margin-left:20px;
  }
`;

const NavBar = () => {
  return (
    <>
      <NavBarWrapper>
          <Logo>
            <img height="60px"         
            src="https://www.masaischool.com/img/navbar/logo.svg"
            alt="logo.png" />
          </Logo>
          <ResourceLinks>
            <Button> TRY NOW</Button>
            <A>About US</A>
            <A>FAQ</A>
            <A>Login</A>
          </ResourceLinks>
       </NavBarWrapper>
    </>
  )
}

export default NavBar