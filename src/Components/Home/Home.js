import React from 'react';
import './Home.css';
import Resume from '../../assets/Matthew_Bodily_Resume_2019.pdf';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faLinkedinIn, faGithub)

const Home = () => {
    return(
        <div id='home' className='home-container'>
            <h1>Hello, I'm <span className='name-span'>Matthew Bodily</span></h1>
            <h1>Full-Stack Web Developer</h1>
            <section>
                <a href='https://www.facebook.com/matt.bodily.1'><FontAwesomeIcon icon={['fab', 'facebook-f']} id='facebook-icon' className='brand-icon'/></a>
                <a href='https://twitter.com/Mattcbodily'><FontAwesomeIcon icon={['fab', 'twitter']} className='brand-icon'/></a>
                <a href='https://www.linkedin.com/in/matthewbodily/'><FontAwesomeIcon icon={['fab', 'linkedin-in']} className='brand-icon'/></a>
                <a href='https://github.com/mattcbodily'><FontAwesomeIcon icon={['fab', 'github']} className='brand-icon'/></a>
                <a href={Resume} download><button className='landing-button'>Resume</button></a>
            </section>
        </div>
    )
}

export default Home;