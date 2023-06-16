import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div className="getintouch">
                <div className="container">
                    <div className="row d-flex align-items-center justify-content-md-between justify-content-center">
                        {/* left */}
                        <div className="left-getintouch col-md-5 col-10">
                            <h3 className='h3-getintouch'>Get in touch</h3>
                            <p className='p-getintouch'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis.</p>

                                <div className='mt-5'>
                                    <p>Name</p>
                                    <input type="text" />
                                </div>
                                <div>
                                    <p className='mt-3'>Email</p>
                                    <input type="email" />
                                </div>
                                <div>
                                    <p className='mt-3'>Message</p>
                                   <textarea></textarea>
                                </div>
                                <div>
                                    <button className='button-getintouch mt-4'>Send message</button>
                                </div>

                        </div>
                        {/* right */}
                        <div className="right-getintouch col-md-5 d-md-flex d-none"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetInTouch