import React from 'react'
import Logout from '../auth/Logout'

function Home() {
  return (
    <div className='container text-center' >
      <h1 className='my-5'>Home</h1>
      <Logout />
    </div>
  )
}

export default Home