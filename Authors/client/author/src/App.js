import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import AuthorList from "./components/AuthorList";
import AuthorUpdate from "./components/AuthorUpdate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<AuthorList />} path="/:authors"  />
          <Route element={<AuthorUpdate />} path='/authors/edit/:id' />

        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
