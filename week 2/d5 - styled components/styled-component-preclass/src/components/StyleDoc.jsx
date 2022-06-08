import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.section`
padding:4em;
background:aqua;
width:fit-content;`;
const Title = styled.h1`
    color:red;
    font-size:1.5em;
    text-align:center;
`;
const Button = styled.button`
    font-size:1em;
    border:2px solid red;
    border-radius:3px;
    padding:0.25em 1em;
    margin:3px;
    background:${props=>props.primary ? "white":"red"};
    color:${props=>props.primary ? "red":"white"};
    `;
const NormalButton = styled.button`
  color: blue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blue;
  border-radius: 3px;
  text-decoration:none;
  `;
  // A new component based on NormalButton, but with some override styles
const YellowButton = styled(NormalButton)`
   color:tomato;
   border-color:tomato;    
`;

const ReverseButton = props=><Button {...props} children = {props.children.split('').reverse()}  />;

// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
    border:none;
    border-radius:3px;
    background:orange;
    margin:1em;
    padding:1em;
    color:${props=> props.inputColor ||"blue"};
`;
const StyleDoc = () => {
  return (
    <>StyleDoc
    <Wrapper>
        <Title>
            Hello Styled Components
        </Title>
    </Wrapper>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
    <NormalButton>BlueButton</NormalButton>
    <YellowButton>YellowButton</YellowButton>
    <h1>-----</h1>
    <Button>Normal Button</Button>
    <NormalButton as='a' href="#">Link with Normal Button</NormalButton>
    <YellowButton as='a' href="#">Link with Yellow Button</YellowButton>
    <h2>custom component (reverse string)</h2>
    <Button>Normal Button</Button>
    <Button as={ReverseButton}>Custom Button with Normal Size</Button>
    <h1>------- Input value -------</h1>
    <Input defaultValue="Name" type="text" />
    <Input defaultValue="Email" type="text" inputColor="red" />
    </>
  )
}

export default StyleDoc