import React, { useState } from 'react'
import { auth } from '../../config/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'

function Register() {
  const navigate = useNavigate()
  // useState hook 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confPass, setConfPass] = useState('')
  const [loading, setLoading] = useState(false)

  // submit signUp
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confPass !== password) {
      toast.error("Password do not much!")
    } else {
      setLoading(true)
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        setLoading(false)
        toast.success("Successful SignUp")
        navigate('/login')
      } 
      catch (error) {
        toast.error(error.message)
        setLoading(false)
      }
    }
    
  }

  return (
    <div className='container d-flex justify-content-center align-items-center py-5'>
      <ToastContainer />
      <div className="col-12 col-md-8 col-lg-6  px-2 my-3">
        <div className="card bg-white px-3" style={{ borderRadius: "1rem" }}>
          <div className="card-body p-3"></div>
          <div className='mb-md-5 mt-md-4 pb-3'>
            <h2 className='text-center text-uppercase mb-3'>Sign Up</h2>
            {loading && <Loader />}
            <form onSubmit={handleSubmit} className="my-5">
              <div className="my-3">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control rounded-pill" id="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="my-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control  rounded-pill" id="password" onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="my-3">
                <label htmlFor="confPass">Password Confirmation</label>
                <input type="password" className="form-control  rounded-pill" id="confPass" onChange={(e) => setConfPass(e.target.value)} />
              </div>
                <div className="text-center d-grid gap-2">
                  <button type="submit" className="btn btn-outline-light btn-dark btn-lg px-5 rounded-pill" >Sign Up</button>
                </div>
                <p className="text-center mt-3 mb-0">Have already an account? 
                  <Link to="/login" className="fw-bold"><u>Login here</u></Link>
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register