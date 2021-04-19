import React from 'react';
import './App.css';
import './Services.css';
import Typewriter from 'typewriter-effect';



function Services() {

    return(
        <>
         <div className='services'>
        <div className='services-container'>
            <h1 className='label'>
                Services
            </h1>
            
        <div className='service-items'>
            <div className='items-container'>
                <ul>
                    <li className='serv-list'>
                        <h2 className='item1'>
                            Logo Design
                        </h2>
                        <img src='./img/s-logo.svg' alt='logo'>
                        </img>
                    </li>
                    <li className='serv-list'>
                        <h2 className='item2'>
                            Website Design
                        </h2>
                <div className='type'>      

<Typewriter
  options={{
    strings: ['https://www.my-site.com', 'www.another-site.org'],
    autoStart: true,
    delay:200,
    loop: true,
  }}
/>
</div>
                    </li>
                    <li className='serv-list'>
                        <h2 className='item3'>
                            Illustration/Graphics
                        </h2>
                        <img src='./img/face.svg' alt='face'/>
                    </li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        </>
    );
    
}
export default Services;