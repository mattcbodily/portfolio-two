import React from 'react';
import PortfolioPicture from './../../assets/Portfoliopicture.jpg';
import './About.css';

const About = () => {
    return(
        <div id='about' className='about-container'>
            <img 
                src={PortfolioPicture} 
                alt='Matt Bodily' 
                className='portfolio-picture' />
            <div>
                <h3>About Me</h3>
                <p>Detail oriented, hard working, and driven to succeed, 
                I love the problem solving and daily learning that is involved in the web devlopment profession, and love an 
                environment where I can work with a team. Outside of code, I love watching sports, playing the drums, visiting 
                the National Parks, and spending time with my family.
                </p>
                <h3>Education</h3>
                <section className='education-block'>
                    <p className='institution'>DevMountain</p>
                    <p className='education-italics'>Web Badged</p>
                    <p className='education-italics'>Jan. 2019 - April 2019</p>
                </section>
                <section className='education-block'>
                    <p className='institution'>Utah Valley University</p>
                    <p className='education-italics'>Associates in Integrated Studies</p>
                    <p className='education-italics'>Jan. 2013 - Dec. 2016</p>
                </section>
            </div>
        </div>
    )
}

export default About;