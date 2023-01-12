// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";
import { useState } from "react";

function App() {
  const [id, setId] = useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Form onChangeId={(e) => setId(e.target.value)} id={id} />
        <Routes>
          <Route path="/people/:id" element={<People id={id} />}></Route>
          <Route path="/planets/:id" element={<Planets id={id} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
