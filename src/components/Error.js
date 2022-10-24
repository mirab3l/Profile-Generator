import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'

import './Error.css'

const Error = () => {
  return (
    <div className='error'>
        <h3>404 <span>|</span> This page could not be found</h3>
        <Link to='/' className='go-back'><FaArrowLeft />go back</Link>
    </div>
  )
}

export default Error