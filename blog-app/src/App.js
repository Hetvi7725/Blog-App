
import './App.css';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Blog from './Components/Blog';
import Singleblog from './Components/Singleblog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import Addblog from './Components/Addblog';


function App() {


  return (
    <div className="App">
           <BrowserRouter>
           <Header/> 
                <Routes>
                  <Route path="/" element={<Addblog />} />
                  <Route path='/blog' element={<Blog/>}/>
                  <Route path='/Singleblog/:id' element={<Singleblog/>}/>
                </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;
