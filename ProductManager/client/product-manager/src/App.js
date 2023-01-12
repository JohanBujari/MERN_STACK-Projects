import logo from "./logo.svg";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import ProductUpdate from "./components/ProductUpdate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../src/views/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<ProductDetail />} path='/products/:id' />
          <Route element={<ProductUpdate />} path='/products/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
