import React from 'react';
import Iyallogo from "../images/Iyallogo.jpg";
import './nav.css';
import { Link } from 'react-router-dom';
import { FiLogIn } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className='nav'>
       <Link to='/'><img src={Iyallogo} alt=''/></Link>
      <ul>
        <li><Link to="/coco" className='lin'>Products</Link></li>
        <li>About Us</li>
        <li><Link to="/cart" className='lin'>Cart</Link></li>
        <li><Link to="/admin" className='lin'>Admin</Link></li> q
        <li>Login</li>
      </ul>
      {/* <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <FiLogIn />
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link class="dropdown-item" to="/sign">signIn</Link></li>
    <li><Link class="dropdown-item" to="/log">Login</Link></li>
    <li><Link class="dropdown-item" to="/">Logout</Link></li>
  </ul>
</div> */}
    </div>
/* <>
<div className="nav">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid navb">
    <a class="navbar-brand" href="#"> <Link to='/'><img src={Iyallogo} alt=''/></Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navb1" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active lin" aria-current="page" to="/coco">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link lin" to="/cart">Cart</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <FiLogIn />
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Sign-in</a></li>
            <li><a class="dropdown-item" href="#">Log-in</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</div>
</> */
  )
}

export default Navbar
