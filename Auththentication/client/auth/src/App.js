import logo from "./logo.svg";
import "./App.css";
import Header from "../src/components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const [logInPageIsActive, setLogInPageIsActive] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <Login
                logInPageIsActive={logInPageIsActive}
                setLogInPageIsActive={setLogInPageIsActive}
              />
            }
            path="/login"
          />
          <Route
            element={
              <Signup
                logInPageIsActive={logInPageIsActive}
                setLogInPageIsActive={setLogInPageIsActive}
              />
            }
            path="/signup"
          />
          <Route element={<Welcome />} path='/user'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
