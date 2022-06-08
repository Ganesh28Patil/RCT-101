import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding:2rem;
border:2px solid red;
width:fit-content;
h1{
    color:blue; 
}
h3{
    color:red;
    @media all and (max-width:720px){
        border:3px dashed yellow;
        color:blue;
    }
}
`
const Anchor = styled.a`
font-size:24px;
text-decoration:none;
color:${(props) =>(props.color === 'yellow' ? 'yellow' : "aqua" )}
`;

const StyleConcept1 = () => {

  return (
    <Wrapper>
      <div>StyleConcept1</div>
      <h1>style on H1</h1>
      <h3>style on h3</h3>
      <Anchor color='green' href='https://www.google.co.in/'>Welcome to Google</Anchor>
    </Wrapper>
  )
}

export default StyleConcept1