import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logout from '../pages/auth/Logout'
import { userContext } from '../App'

function Header() {
    
    const currentUser = useContext(userContext)
    //console.log(currentUser)
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/" >Navbar</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>  
                </ul>
                <form className="d-flex">
                    {currentUser ?  <Logout /> : (
                        <>
                            <Link to='/login' type="button" className="btn btn-secondary me-3">
                                Sign In
                            </Link>
                            <Link to='/register' type="button" className="btn btn-secondary me-3">
                                Sign Up
                            </Link>
                        </>
                        
                    )}
                </form>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header