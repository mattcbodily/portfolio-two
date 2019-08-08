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
            <section className='project-box'>
                <h3>O.D.N.T. Longboards</h3>
                <video className='project-video' controls>
                    <source src={ODNTLongboardsVideo} type='video/mp4'/>
                </video>
                <a href='https://www.odntlongboards.com'><button className='landing-button'>Live Site</button></a>
                <a href='https://github.com/mattcbodily/longboard-shop'><button className='landing-button'>GitHub</button></a>
                <p className='project-description'>Old Dog New Trick longboards is an E-commerce longboard shop designed for Aaron Kahle. 
                This application is built with a React front-end, and also uses Redux for state management. 
                O.D.N.T. Longboards is styled using Bootstrap components, and Stripe is utilized to take 
                customer payments.  The backend is built with Node.js, Express.js and a postgreSQL database.</p>
            </section>
            <section className='project-box'>
            <section className='project-box'>
                <h3>PiggyBank</h3>
                <video className='project-video' controls>
                    <source src={PiggyBankVideo} type='video/mp4'/>
                </video>
                <a href='https://github.com/mattcbodily/budget-app-hooks'><button className='landing-button'>GitHub</button></a>
                <p className='project-description'>PiggyBank is a budgeting app built with React and Styled Components on the 
                front-end.  The back-end is built using Node.js, Express.js, and a postgreSQL
                database.  Chart.js is implemented to improve user experience by providing a 
                visual representation of budget and expense information. From this app, a user 
                can set their budget, input expenses, and view their budget history and expense 
                trends.</p>
            </section>
                <h3>Teachio</h3>
                <video className='project-video' controls>
                    <source src={TeachioVideo} type='video/mp4'/>
                </video>
                <a href='https://www.teachio.co'><button className='landing-button'>Live Site</button></a>
                <a href='https://github.com/mattcbodily/tutorlab'><button className='landing-button'>GitHub</button></a>
                <p className='project-description'>Teachio is an online platform that allows students to find tutors. Users are able to find tutors 
                based on subject, and can view tutor profiles and request lessons. Teachio utilizes AWS S3, as well 
                as React Dropzone, to allow users to upload profile pictures. Socket.io is used within Teachio to allow 
                real time messaging between students and tutors.</p>
            </section>
            <section className='project-box'>
                <h3>PearProgramming</h3>
                <video className='project-video' controls>
                    <source src={PearProgrammingVideo} type='video/mp4'/>
                </video>
                <a href='https://github.com/sudorm-rfdot/pearprogramming'><button className='landing-button'>GitHub</button></a>
                <p className='project-description'>Pear Programming is an online, collaborative code editor. Utilizing Monaco's code editor, 
                together with Socket.io, users are able to write and edit code together in real time. 
                PearProgramming is styled using Sass, and it also utilizes particles.js for added styling on select pages. 
                PearProgramming also uses AWS S3, paired with React Dropzone, to allow users the ability to 
                upload and store profile pictures.</p>
            </section>
        </div>
    )
}

export default Projects;