import { signOut } from 'firebase/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../config/firebase'

function Logout() {
    const navigate = useNavigate()
    const logout = async () =>{
        try {
            const response =  await signOut(auth)
            console.log(response)
            toast.success('Logout')
            navigate('/login')
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className='text-center'>
        <button className='btn btn-danger' onClick={logout}>Logout</button>
    </div>
  )
}

export default Logout