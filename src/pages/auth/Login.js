import React, { useState } from 'react'
import './auth.css'
import "react-toastify/dist/ReactToastify.css"
import { toast, ToastContainer } from 'react-toastify'
import { auth } from '../../config/firebase'
import { 
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    FacebookAuthProvider,
    TwitterAuthProvider } from 'firebase/auth'
import Loader from '../../components/Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  //console.log(auth?.currentUser?.email)
  //login with email
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      setLoading(false)
      toast.success("You are successfully logged in")
      navigate('/')
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }

  //signIn With Google
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async() =>{
    try {
      await signInWithPopup(auth, googleProvider)
      toast.success("You are successfully logged in")
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  //signIn With Facebook
  const facebookProvider = new FacebookAuthProvider()
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
      toast.success("You are successfully logged in")
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  //signIn With Twitter
  const twitterProvider = new TwitterAuthProvider()
  const signInWithTwitter = async () =>{
    try {
      await signInWithPopup(auth, twitterProvider)
      toast.success("You are successfully logged in")
      navigate('/')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center py-5 px-2'>
      <ToastContainer />
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 px-2 my-3">
        <div className="card bg-white px-3" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-3"></div>
          <div className='mb-md-5 mt-md-4 pb-3'>
            <h2 className='text-center text-uppercase mb-3'>Login</h2>
            {loading && <Loader />}
            <form className="row g-3" onSubmit={handleSubmit} >
              <div className=" my-2 ">
                <label htmlFor="email" className="">Email</label>
                <input 
                  type="text"
                  className="form-control rounded-pill"
                  id="email"
                  name="email"
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder='example@mail'
                />
              </div>
              <div className=" my-2 ">
                <label htmlFor="password" className="">Password</label>
                <input 
                  type="password"
                  className="form-control rounded-pill"
                  id="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Your Password'
                />
              </div>
              <div className="text-center d-grid gap-2">
                <button type="submit" className="btn btn-outline-light btn-dark btn-lg px-5 rounded-pill" >
                  Sign In
                </button>
              </div>
              <div className="text-center">
                <Link className='text-center mt-2 mb-0' to="/forgotPassword">Forgot Password</Link>
              </div>
              <div className="d-flex justify-content-center text-center mt-4 pt-1" id='signInProviders'>
                <button onClick={signInWithFacebook} className="text-warning"><FontAwesomeIcon icon={faFacebook} className="mx-2 btn btn-lg" /></button>
                <button onClick={signInWithTwitter} className="text-warning"><FontAwesomeIcon icon={faTwitter} className="mx-2 btn btn-lg " /></button>
                <button onClick={signInWithGoogle} className="text-warning"><FontAwesomeIcon icon={faGoogle} className="mx-2 btn btn-lg " /></button>
              </div>
              <div className="text-center">
                <p className="text-center mt-2 mb-0">Not a member? <Link className='fw-bold' to="/register">Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login