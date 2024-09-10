import React from 'react'
import { TfiInstagram } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import './nav.css'

const Footer = () => {
  return (
    <div className='foot'>
      <div className='row'>
        <div className='col-lg-4'>
          <h5>Office address</h5>
          <address>
            24, <br/>GN MILL(PO),<br/> COIMBATORE-641029
          </address>
        </div>
        <div className='col-lg-4'>
          <h4>Follow us on </h4>
          <div className='ic'>
          <TfiInstagram />
          <FaFacebook />
          <FaTwitterSquare />
          </div>
        </div>
        <div className='col-lg-4'>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
