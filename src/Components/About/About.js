import React from 'react';
import PortfolioPicture from './../../assets/Portfoliopicture.jpg';
import './About.css';

const About = () => {
    return(
        <div id='about' className='about-container'>
            <h1>About Me</h1>
            <img 
                src={PortfolioPicture} 
                alt='Matt Bodily' 
                className='portfolio-picture' />
            <p>Detail oriented, hard working, and driven to succeed, 
               I love the problem solving and daily learning that is involved in the web devlopment profession, and love an 
               environment where I can work with a team. Outside of code, I love watching sports, playing the drums, visiting 
               the National Parks, and spending time with my family.
            </p>
        </div>
    )
}

export default About;