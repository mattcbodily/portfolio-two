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
import ExpressIcon from '../../assets/expressjslogo.png';
import PostgresIcon from '../../assets/postgres.png';
import SocketIcon from '../../assets/socketio.png';
import StripeIcon from '../../assets/stripe_icon.png';
import ChartjsIcon from '../../assets/chartjs.png';

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
            <p><img 
                src={ExpressIcon} 
                alt='Express Icon'
                className='skill-icon'/> Express.js</p>
            <p><img 
                src={PostgresIcon} 
                alt='Postgres Icon'
                className='skill-icon'/> PostgreSQL</p>
            <h3>Other</h3>
            <p><img 
                src={SocketIcon} 
                alt='Socket-io Icon'
                className='skill-icon'/> Socket.io</p>
            <p><img 
                src={StripeIcon} 
                alt='Stripe Icon'
                className='skill-icon'/> Stripe</p>
            <p><img 
                src={ChartjsIcon} 
                alt='Chart.js Icon'
                className='skill-icon'/> Chart.js</p>
        </div>
    )
}

export default Skills;