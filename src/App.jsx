import "./App.css";
import SignupForm from "./components/SignupForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

function App() {
  return (
    <>
      <SignupForm />
      <Authenticate />
    </>
  );
}

export default App;
