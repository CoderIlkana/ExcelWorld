import React from 'react';
import { Link } from 'react-router-dom';


const Head = () => {
  return (
    <>
    <div className="head d-lg-flex d-none">
        <div className="container">
            <div className="row">
              {/* left */}
             <div className="headLeft col-xl-6 col-lg-5 col-md-4 ">
              <Link className='iconHead'><i className="fa-brands fa-facebook-f"></i></Link>
              <Link className='iconHead iconY'><i className="fa-brands fa-youtube"></i></Link>
              <Link className='iconHead'><i className="fa-brands fa-linkedin-in"></i></Link>
              
             </div>
             {/* right */}
             <div className="headRight col-xl-6 col-lg-7 col-md-8">
                <ul className='ulHead'>
                  <li><Link className='liLinkhead Link'><i className="fa-solid fa-envelope me-2"></i>javid.khasizada@gmail.com</Link></li>
                  <li><Link className='liLinkhead Link'><i className="fa-solid fa-phone me-2"></i>+36 208022434</Link></li>
                  <li><Link className='liLinkhead Link'><button className='buttonHead'>Sign in</button></Link></li>
                </ul>
             </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Head