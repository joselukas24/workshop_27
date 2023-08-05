import "./App.css";
import SignupForm from "./components/SignupForm";
import Authenticate from "./components/Authenticate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignupForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
