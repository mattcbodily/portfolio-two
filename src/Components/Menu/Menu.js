import React, {useState} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Menu.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars)

const Menu = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return(
        <div className='menu-container'>
            <FontAwesomeIcon 
                icon='bars' 
                className='menu-icon'
                onClick={handleToggle}/>
            {toggle
            ?  (<nav>
                    <AnchorLink href='#home'><p>Home</p></AnchorLink>
                    <AnchorLink href='#about'><p>About</p></AnchorLink>
                    <AnchorLink href='#skills'><p>Skills</p></AnchorLink>
                    <AnchorLink href='#projects'><p>Projects</p></AnchorLink>
                    <AnchorLink href='#contact'><p>Contact</p></AnchorLink>
                </nav>)
            : null}
        </div>
    )
}

export default Menu;