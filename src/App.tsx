import "./App.css";
import styled from "styled-components";
import "@twa-dev/sdk";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const IFrame = styled.iframe`
  max-width: 100%;
  min-height: 100%;
  // width: 100%;
  // height: 100%;
`

function App() {
  return (
    <StyledApp>
      <AppContainer>
        <IFrame src='https://shop.trcrfortest.co/flashpay/sale/71865951-f3aa-4ed2-a6b0-b831bf2d1ae4' height={window.innerHeight} width={window.innerWidth}/>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
