import React from 'react';
import './Projects.css';
import TeachioVideo from '../../assets/videos/Teachio.mp4';

const Projects = () => {
    return(
        <div id='projects' className='projects-container'>
            <h1>Projects</h1>
            <h3>Teachio</h3>
            <video className='project-video' controls>
                <source src={TeachioVideo} type='video/mp4'/>
            </video>
        </div>
    )
}

export default Projects;