import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Menu.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

const Menu = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <div className='menu'>
            <section className='bars-container' onClick={handleToggle}>
                <FontAwesomeIcon 
                    icon='bars' 
                    className='menu-icon'/>
            </section>
            {toggle
            ?  (<nav className='menu-container'>
                    <AnchorLink
                        href='#home' 
                        className='menu-links'
                        onClick={handleToggle}>
                            <p>Home</p>
                    </AnchorLink>
                    <AnchorLink 
                        href='#about' 
                        className='menu-links'
                        onClick={handleToggle}>
                            <p>About</p>
                    </AnchorLink>
                    <AnchorLink 
                        href='#skills' 
                        className='menu-links'
                        onClick={handleToggle}>
                            <p>Skills</p>
                    </AnchorLink>
                    <AnchorLink 
                        href='#projects' 
                        className='menu-links'
                        onClick={handleToggle}>
                            <p>Projects</p>
                    </AnchorLink>
                    <AnchorLink 
                        href='#contact' 
                        className='menu-links'
                        onClick={handleToggle}>
                            <p>Contact</p>
                    </AnchorLink>
                </nav>)
            : null}
        </div>
    )
}

export default Menu;