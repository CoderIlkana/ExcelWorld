import React from 'react'
import img1 from '../../imgs/Home/imgvideo.png';
import { Link } from 'react-router-dom';

const LearnExcel = () => {
  return (
    <>
    <div className="learnExcel">
       <div className="container">
        <div className="row">
            {/* text */}
        <div className="text-learnExcel col-12">
            <h1>Learn Excel with me</h1>
        </div>
        {/* video */}
        <div className="video-learexcel">
            <img className='col-12' src={img1} alt="" />
            <span className='playIcon'><Link><i class="fa-solid fa-play"></i></Link></span>
        </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default LearnExcel