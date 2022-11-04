import { useState } from 'react'
import './App.css'


import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from './layouts/admin/AdminLayout';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/admin/dashboard/*' element={<AdminLayout/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App
