import React from 'react';
import '../App.css';
import HeroSection from '../HeroSection';
import Services from '../Services';
import MyWork from '../MyWork';
import Contact from '../Contact'

function Home(){
    return(
        <>
        <HeroSection />
        <Services />
        <MyWork />
        <Contact />
        </>

    )
}

export default Home;