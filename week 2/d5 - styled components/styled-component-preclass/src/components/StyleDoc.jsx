import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
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

const Thing = styled.div.attrs(()=>({tavIndex:0}))`
color:blue;
width:fit-content;
  &:hover{
    color:red;
    font-size:30px;// <Thing> tag when Hovered
  }

  & ~ &{
    // Thing as sibling of Thing , but may be not directly next to it.
    background:aqua;
    color:white;
    font-weight:bold;
    border-radius:5px;
    border:4px dashed blue;
    margin:5px;
    padding:10px;
  }
  & + & {
   // <Thing> next to <Thing>
   background:yellow;
  }
  &.something {
    // <Thing> tagged with an additional CSS class ".something"
    background: red; 
  }

  .something-else & {
    // <Thing> inside another element labeled ".something-else"
    border: 3px solid red; 
  }
`;
const FlexText = styled.div`
  display:flex;
  flex-direction:column;
  width:fit-content;
  margin:auto;
`;
const Thing2 = styled.div`
  &&{
    color:red;
    font-size:25px;
  }
`;
// Create the keyframes
const rotate = keyframes`
    form{
      transform:rotate(0deg);
    }
    to{
      transform:rotate(360deg);
    }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
    display:inline-block;
    animation:${rotate} 2s linear infinite;
    padding: 2rem 1 rem;
    font-size: 1.2rem;
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
    
    <h2> ---- Pseudoelements, pseudoselectors, and nesting ---- </h2>
    <FlexText>
      <Thing>Hello</Thing>
      <Thing>I am your neighbour, how are you</Thing>
      <Thing className = "something">There is something on table</Thing>
      <div>I am in DIV tag</div>
      <Thing>Thing next to DIV</Thing>
      <div className = "something-else">
        <Thing>something else Thing in Div</Thing>
      </div>
      <div>Note: && a double ampersand alone has a special behavior called a "precedence boost";<br /> this can be useful if you are dealing with a mixed styled-components <br /> and vanilla CSS environment where there might be conflicting styles:</div>
      <Thing2>
         I am double ampersand,Precedence boost
      </Thing2>
   </FlexText>

     <h2> Annimation : Rotate ME 😅 </h2>
      <Rotate> 🤸 </Rotate>
    </>
  )
}

export default StyleDoc