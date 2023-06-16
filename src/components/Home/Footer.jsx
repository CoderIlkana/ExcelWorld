import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        {/* link */}
                        <div className="col-xl-7 col-lg-8 col-sm-12 ">
                            <ul>
                                <li><Link className='linkFooter Link'>Azerbaijan Excel Days</Link></li>
                                <li><Link className='linkFooter Link'>Shop</Link></li>
                                <li><Link className='linkFooter Link'>Free Resources</Link></li>
                                <li><Link className='linkFooter Link'>Blog</Link></li>
                                <li><Link className='linkFooter Link'>About us</Link></li>
                            </ul>
                        </div>
                        {/* icon */}
                        <div className="icon-footer col-xl-2 col-lg-4 col-sm-2">
                            <Link className='icon-foot'><i className="fa-brands fa-facebook-f"></i></Link>
                            <Link className='icon-foot ms-sm-0 ms-3'><i className="fa-brands fa-youtube"></i></Link>
                            <Link className='icon-foot ms-sm-0 ms-3'><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                        {/* text */}
                     <div className="text-footer col-sm-12 ">
                     <h6>Excel World 2021. All rights reserved.</h6>
                     </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer