import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MealDetails from './Components/MealDetails';
import Api from './Components/Api';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meal/:id" element={<MealDetails />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;


























// import React, { startTransition } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Navbar from './Components/Navbar'
// import Home from './Components/Home'
// import MealDetails from './Components/MealDetails'
// import Api from './Components/Api'

// const App = () => {
//   return (
//     <>
//     <BrowserRouter>
//     <Navbar/>

//  <Routes>
//  <Route path='/' element={<Home/>}/>
    
//     <Route path='/Meal/:id' element={<MealDetails/>}/>
//      <Route path='/api'element={<Api/>} />
//  </Routes>


    
//     </BrowserRouter>

//   </>
//   )
// }

// export default App
