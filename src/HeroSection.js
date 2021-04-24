import React from 'react';
import './App.css';
import './HeroSection.css';
import {Button} from 'reactstrap';




function HeroSection(){
    
    return(
        <div className='hero-container'>
                <h1>Are you looking for a website designer?</h1>
                <Button outline color="dark" size='lg'>Lets Connect</Button>
        </div>

    );
}
export default HeroSection;
