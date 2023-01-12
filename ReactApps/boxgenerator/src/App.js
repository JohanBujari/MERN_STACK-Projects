import logo from "./logo.svg";
import "./App.css";
// import Form from './components/Form';
// import Display from './components/Display';
import BoxForm from "./components/BoxForm";
import BoxList from "./components/BoxList";
import { useState } from "react";
function App() {
  const [boxColor, setBoxColor] = useState([]);
  const [color, setColor] = useState("");

  return (
    <div>
      <BoxForm
        boxColor={boxColor}
        setBoxColor={setBoxColor}
        color={color}
        onChangeColor={(e) => setColor(e.target.value)}
      />
      <BoxList boxColor={boxColor}/>
    </div>
  );
}

export default App;
