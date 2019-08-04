import React from 'react';
import './Skills.css';
import JavascriptIcon from '../../assets/javascript3.png';

const Skills = () => {
    return(
        <div id='skills' className='skills-container'>
            <h1>Development Skills</h1>
            <h3>Front-end</h3>
            <p><img 
                src={JavascriptIcon} 
                alt='Javascript Icon'
                className='skill-icon'/> Javascript</p>
            <h3>Back-end</h3>
            <h3>Other</h3>
        </div>
    )
}

export default Skills;