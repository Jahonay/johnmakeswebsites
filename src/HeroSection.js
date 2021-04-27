import {React, } from 'react';
import './App.css';
import './HeroSection.css';
import { HashLink } from 'react-router-hash-link';



function HeroSection(){
    
    return(
        
        <div className='hero-container'>
            <a href id='home'> </a>
            <div className='hero-wrapper'>
            
                <h1>Are you looking for a website designer?</h1>
                <HashLink className='hash' smooth to="/#contact">Lets Connect</HashLink>
               
            </div>
        </div>
        
    );
}
export default HeroSection;
