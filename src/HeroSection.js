import React from 'react';
import './App.css';
import './HeroSection.css';
import {Button} from 'reactstrap';




function HeroSection(){
    
    return(
        
        <div className='hero-container'>
            <a href id='home'> </a>
            <div className='hero-wrapper'>
            
                <h1>Are you looking for a website designer?</h1>
                <Button outline color="dark" size='lg'>Lets Connect</Button>
            </div>
        </div>
        
    );
}
export default HeroSection;
