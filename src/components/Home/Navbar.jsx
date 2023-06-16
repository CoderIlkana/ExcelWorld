import React from 'react';
import img1 from '../../imgs/Home/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbarr">
      <div className="container">
        <div className="row">
          {/* logo */}
          <div className="logo col-lg-1 col-1 ms-lg-0 ms-5">
            <img src={img1} alt="" />
          </div>
          {/* nav */}
          <div className="navv col-lg-7 col-9 ">
            <ul >
              <li><Link className='linkNav Link'>Home</Link></li>
              <li><Link className='linkNav Link'>Azerbaijan Excel Days</Link></li>
              <li><Link className='linkNav Link'>Shop</Link></li>
              <li><Link className='linkNav Link'>Free Resources</Link></li>
              <li><Link className='linkNav Link'>Blog</Link></li>
              <li><Link className='linkNav Link'>About us</Link></li>
            </ul>
          </div>
          {/* bars */}
          <div className="bars-box">
            <p>Menu</p>
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar