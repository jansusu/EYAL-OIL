import React from 'react'
import { Link } from 'react-router-dom'
import './admin.css'
import Update from './Update'

const Admin = () => {
  return (
    <div className='ad'>
      <Link  to="/upload"className='btn btn-dark' >Add on</Link>
       <Update/>
    </div>
  )
}

export default Admin
