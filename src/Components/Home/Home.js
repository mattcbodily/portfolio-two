import React from 'react';
import './Home.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
library.add(faFacebookF, faTwitter, faLinkedinIn, faGithub)

const Home = () => {
    return(
        <div className='home-container'>
            <h1>Hello, I'm <span className='name-span'>Matthew Bodily</span></h1>
            <h1>Full-Stack Web Developer</h1>
            <FontAwesomeIcon icon={['fab', 'facebook-f']} id='facebook-icon' className='brand-icon'/>
            <FontAwesomeIcon icon={['fab', 'twitter']} className='brand-icon'/>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} className='brand-icon'/>
            <FontAwesomeIcon icon={['fab', 'github']} className='brand-icon'/>
        </div>
    )
}

export default Home;