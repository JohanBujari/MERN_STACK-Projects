
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import About from './components/About'
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';
import Colors from './components/Colors';
import { useState } from 'react';
 

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <p className='numbers'>
        <Link to={'/number'}></Link>
        <Link to={'/number'}></Link>
        <Link to={'/word'}></Link>
        {/* <Link to={'/word/wordColor/backgroundcolor'}></Link> */}
        
      </p>
      <Routes>
        {/* <Route path={'/about'} element={<About/>}/> */}
        <Route path={'/home'} element={<Home />}/>
        <Route path={'/number/:number'} element={<Number />}></Route>
        <Route path={'/word/:word'} element={<Hello />}></Route>
        <Route path={`/word/:word/:wordColor/:backgroundColor`} element={<Colors />}></Route>
      </Routes>
    </div>  
    </BrowserRouter>
  );
}

export default App;
