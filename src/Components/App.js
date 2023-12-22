import React from "react";
import ReactDom from "react-dom";
import {Container} from "react-bootstrap"
import Signin from "./Signin";
import AuthState from "../context/AuthState";

function App() {
  return (
<>
<AuthState>
<Container>
<Signin/>
</Container>
</AuthState>
</>
  );
}

export default App;
