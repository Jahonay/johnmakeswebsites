import React from 'react';
import './MyWork.css';
import './App.css';

function MyWork() {
    return (
        <>
            <div className="my-work">
                <div className='my-work-cont'>

                <h2 className= 'title'>My Work</h2>


                <div className="three-coll">
                    <div className='three-coll-cont'>
                        <div className='site1'>
                            <h4>gregorymsullivanlaw.org</h4>
                            <p>This is a website I made for a family friend
                                it was made in wordpress using elementor. 
                            </p>
                            <img src='greg.png' alt='gregory site' />
                        </div>
                       

                        <div className='site2'>
                            <h4>Johnmackeydesigns.com</h4>
                            <p>This is a portfolio website I made for myself. 
                            It was also produced using wordpress.
                            </p>
                            <img src='johnmd.png' alt='john site' />
                        </div>

                        <div className='site3'>
                            <h4>globalchildrenschool.com</h4>
                            <p>This is the website redesign that I am 
                                working on for my current internship. It still needs
                                some copy to fill out the page. 
                            </p>
                            <img src='gcs.png' alt='gcs site' />
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default MyWork
