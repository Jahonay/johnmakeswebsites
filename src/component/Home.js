import React from 'react';
import '../App.css';
import HeroSection from '../HeroSection';
import Services from '../Services';
import MyWork from '../MyWork';

function Home(){
    return(
        <>
        <HeroSection />
        <Services />
        <MyWork />
        </>

    )
}

export default Home;