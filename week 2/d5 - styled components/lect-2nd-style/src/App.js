import logo from './logo.svg';
// import styled from "styled-components";
import './App.css';
import {AppStyled,AppHeader,AppLogo,FlexBox} from './App.styled'
function App() {
  const flexProps = {
    flexDirection : "column",
  };
  return (
    <AppStyled>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
          <FlexBox {...flexProps}>
            <div>A</div>
            <div>B</div>
          </FlexBox>
      </AppHeader>
    </AppStyled>
  );
}

export default App;
