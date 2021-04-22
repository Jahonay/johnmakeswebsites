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
                        <div className='site1' 
                       >
                            <a href='gregorymsullivanlaw.org'>gregorymsullivanlaw.org</a>
                            <p>This is a website I made for a family friend
                                I wanted it to look professional and be functional. 
                            </p>
                            <img src='./img/greg.png' alt='gregory site' />
                        </div>
                       

                        <div className='site2'
                        >
                            <a href='johnmackeydesigns.com'>johnmackeydesigns.com</a>
                            <p>This is a portfolio website I made for myself. I like
                                some of my choices but I would design it differently 
                                if I were to remake it today. 
                            </p>
                            <img src='./img/johnmd.png' alt='john site' />
                        </div>

                        <div className='site3'
                       >
                             <a href='globalchildrenschool.com'>globalchildrenschool.com</a>
                            <p>This is the website redesign that I am 
                                working on for my current internship. It still needs
                                some copy to fill out the page before it can go live.
                            </p>
                            <img src='./img/gcs.png' alt='gcs site' />
                        </div>
                    </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default MyWork
