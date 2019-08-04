import React from 'react';
import './Skills.css';
import JavascriptIcon from '../../assets/javascript3.png';
import HtmlIcon from '../../assets/html5.png';
import CssIcon from '../../assets/css3.png';
import ReactIcon from '../../assets/react2.png';

const Skills = () => {
    return(
        <div id='skills' className='skills-container'>
            <h1>Development Skills</h1>
            <h3>Front-end</h3>
            <p><img 
                src={JavascriptIcon} 
                alt='Javascript Icon'
                className='skill-icon'/> Javascript</p>
            <p><img 
                src={HtmlIcon} 
                alt='HTML Icon'
                className='skill-icon'/> HTML</p>
            <p><img 
                src={CssIcon} 
                alt='CSS Icon'
                className='skill-icon'/> CSS</p>
            <p><img 
                src={ReactIcon} 
                alt='React Icon'
                className='skill-icon'/> React</p>
            <h3>Back-end</h3>
            <h3>Other</h3>
        </div>
    )
}

export default Skills;