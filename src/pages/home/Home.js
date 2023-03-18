import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../App'

function Home() {
  const currentUser = useContext(userContext)
  console.log(currentUser)
  return (
    <div className='container text-center pt-5'>
      { !currentUser ? (<h1 className='mt-5'>Please <Link to='/login' >Login</Link> !</h1>) : (
        <>
          <h1>You are logged in with: </h1>
          <h3>{currentUser.email}</h3>
        </>
        
      )}
    </div>
  )
}

export default Home