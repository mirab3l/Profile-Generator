import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// components
import Home from './components/Home';
import Users from './components/Users';
import Error from './components/Error';

// styling
import './App.css';

function App() {
  

  
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='Users' element={<Users />}>

      </Route>
      <Route path='*' element={<Error />}></Route>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
