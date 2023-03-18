//import './App.css';
import React, { Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Loader from './components/Loader';
import Header from './components/Header';
import { auth } from './config/firebase';

export const userContext = React.createContext();


function App() {
  const [currentUser, setCurrentUser] = useState()
  auth.onAuthStateChanged((user) => {
    if (user) {
        setCurrentUser(user)
    }
  })

  return (
    <BrowserRouter>
      <userContext.Provider value={currentUser} > 
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' name="Home" element={<Home />} />
            <Route path='/login' name="Login" element={<Login />} />
            <Route path='/register' name="Register" element={<Register />} />
          </Routes>
        </Suspense>
      </userContext.Provider>
    </BrowserRouter>
  );
}

export default App;
