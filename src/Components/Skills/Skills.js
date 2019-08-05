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
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={JavascriptIcon} 
                        alt='Javascript Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Javascript</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={HtmlIcon} 
                        alt='HTML Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>HTML</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={CssIcon} 
                        alt='CSS Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>CSS</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={ReactIcon} 
                        alt='React Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>React</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={ReduxIcon} 
                        alt='Redux Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Redux</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={BootstrapIcon} 
                        alt='Bootstrap Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Bootstrap</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={SassIcon} 
                        alt='Sass Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>SASS</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={StyledComponentsIcon} 
                        alt='Styled-Components Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Styled-Components</p>
                </div>
            </section>
            <h3>Back-end</h3>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={NodeIcon} 
                        alt='Node.js Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Node.js</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={ExpressIcon} 
                        alt='Express.js Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Express.js</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={PostgresIcon} 
                        alt='PostgreSQL Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>PostgreSQL</p>
                </div>
            </section>
            <h3>Other</h3>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={SocketIcon} 
                        alt='Socket.io Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Socket.io</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={StripeIcon} 
                        alt='Stripe Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Stripe</p>
                </div>
            </section>
            <section className='skill-box'>
                <div className='skills-flex'>
                    <img 
                        src={ChartjsIcon} 
                        alt='Chart.js Icon'
                        className='skill-icon'/>
                    <p className='skill-name'>Chart.js</p>
                </div>
            </section>
        </div>
    )
}

export default Skills;