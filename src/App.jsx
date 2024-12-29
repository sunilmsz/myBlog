import React from 'react';
import { BrowserRouter as Router,Routes, Route } from "react-router";

import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';
import Blog from './pages/Blog';
function App() {


  return (
    <div style={{minHeight:'100vh'}}>
      <Router> 
      <Routes>
        <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path='/blog/:id' element = {<Blog />} /> 
        </Route>
      </Routes>
      </Router>
    </div>
    
  )
}

export default App
