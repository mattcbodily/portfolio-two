import React from 'react';
import './Skills.css';
import JavascriptIcon from '../../assets/javascript3.png';
import HtmlIcon from '../../assets/html5.png';
import CssIcon from '../../assets/css3.png';
import ReactIcon from '../../assets/react2.png';
import ReduxIcon from '../../assets/croppedRedux.png';
import BootstrapIcon from '../../assets/bootstrap_icon.png';
import SassIcon from '../../assets/sass.png';
import StyledComponentsIcon from '../../assets/styled-components.png';
import NodeIcon from '../../assets/nodejs.png';

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
            <p><img 
                src={ReduxIcon} 
                alt='Redux Icon'
                className='skill-icon'/> Redux</p>
            <p><img 
                src={BootstrapIcon} 
                alt='Bootstrap Icon'
                className='skill-icon'/> Bootstrap</p>
            <p><img 
                src={SassIcon} 
                alt='Sass Icon'
                className='skill-icon'/> Sass</p>
            <p><img 
                src={StyledComponentsIcon} 
                alt='Styled-Components Icon'
                className='skill-icon'/> Styled-Components</p>
            <h3>Back-end</h3>
            <p><img 
                src={NodeIcon} 
                alt='Node Icon'
                className='skill-icon'/> Node.js</p>
            <h3>Other</h3>
        </div>
    )
}

export default Skills;