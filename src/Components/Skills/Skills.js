import React from 'react';
import './Skills.css';
import JavascriptIcon from '../../assets/javascript3.png';
import TypescriptIcon from '../../assets/typescript_logo.png';
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
import GitIcon from '../../assets/git_icon.png';
import JestIcon from '../../assets/jest_icon.png';

const Skills = () => {
    const frontEndSkills = [{image: JavascriptIcon, name: 'Javascript'}, {image: TypescriptIcon, name: 'Typescript'}, {image: HtmlIcon, name: 'HTML'}, {image: CssIcon, name: 'CSS'}, {image: ReactIcon, name: 'React'}, {image: ReactIcon, name: 'React Native'}, {image: ReduxIcon, name: 'Redux'}, {image: BootstrapIcon, name: 'Bootstrap'}, {image: SassIcon, name: 'SASS'}, {image: StyledComponentsIcon, name: 'Styled-Components'}]
    const backEndSkills = [{image: NodeIcon, name: 'Node.js'}, {image: ExpressIcon, name: 'Express.js'}, {image: JavascriptIcon, name: 'Massive.js'}, {image: NodeIcon, name: 'Bcrypt.js'}, {image: PostgresIcon, name: 'PostgreSQL'}]
    const otherSkills = [{image: SocketIcon, name: 'Socket.io'}, {image: StripeIcon, name: 'Stripe.js'}, {image: ChartjsIcon, name: 'Chart.js'}, {image: GitIcon, name: 'Git'}, {image: JestIcon, name: 'Jest'}, {image: JavascriptIcon, name: 'Axios'}]
    const mappedFrontEndSkills = frontEndSkills.map(skillStructure)
    const mappedBackEndSkills = backEndSkills.map(skillStructure)
    const mappedOtherSkills = otherSkills.map(skillStructure)
    function skillStructure(element, i){
        return (
            <section className='skill-box' key={i}>
                <div className='skills-flex'>
                    <img 
                        src={element.image}
                        alt={`${element.name} icon`}
                        className='skill-icon'/>
                    <p className='skill-name'>{element.name}</p>
                </div>
            </section>
        )
    }
    return(
        <div id='skills' className='skills-container'>
            <h1>Development Skills</h1>
            <h3>Front-end</h3>
            {mappedFrontEndSkills}
            <h3>Back-end</h3>
            {mappedBackEndSkills}
            <h3>Other</h3>
            {mappedOtherSkills}
        </div>
    )
}

export default Skills;