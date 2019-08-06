import React from 'react';
import './Projects.css';
import TeachioVideo from '../../assets/videos/Teachio.mp4';
import PearProgrammingVideo from '../../assets/videos/PearProgramming.mp4';
import ODNTLongboardsVideo from '../../assets/videos/odntshop.mp4';
import PiggyBankVideo from '../../assets/videos/piggy_bank_two.mp4';

const Projects = () => {
    return(
        <div id='projects' className='projects-container'>
            <h1>Projects</h1>
            <h3>Teachio</h3>
            <video className='project-video' controls>
                <source src={TeachioVideo} type='video/mp4'/>
            </video>
            <h3>PearProgramming</h3>
            <video className='project-video' controls>
                <source src={PearProgrammingVideo} type='video/mp4'/>
            </video>
            <h3>O.D.N.T. Longboards</h3>
            <video className='project-video' controls>
                <source src={ODNTLongboardsVideo} type='video/mp4'/>
            </video>
            <h3>PiggyBank</h3>
            <video className='project-video' controls>
                <source src={PiggyBankVideo} type='video/mp4'/>
            </video>
        </div>
    )
}

export default Projects;