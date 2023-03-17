//import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Loader from './components/Loader';



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' name="Home" element={<Home />} />
          <Route path='/login' name="Login" element={<Login />} />
          <Route path='/register' name="Register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
