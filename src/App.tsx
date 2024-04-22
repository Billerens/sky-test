import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { Counter } from "./components/Counter";
import { Jetton } from "./components/Jetton";
import { TransferTon } from "./components/TransferTon";
import styled from "styled-components";
import { Button, FlexBoxCol, FlexBoxRow } from "./components/styled/styled";
import { useTonConnect } from "./hooks/useTonConnect";
import { CHAIN } from "@tonconnect/protocol";
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
  const { network } = useTonConnect();

  return (
    <StyledApp>
      <AppContainer>
        <IFrame src='https://skycrypto.net/' height={window.innerHeight} width={window.innerWidth}/>
      </AppContainer>
    </StyledApp>
  );
}

export default App;
