import React, {useState} from 'react';
import './Projects.css';
import TeachioVideo from '../../assets/videos/Teachio.mp4';
import PearProgrammingVideo from '../../assets/videos/PearProgramming.mp4';
import ODNTLongboardsVideo from '../../assets/videos/odntshop.mp4';
import PiggyBankVideo from '../../assets/videos/piggy_bank_two.mp4';

const Projects = () => {
    const [index, setIndex] = useState(0)
    const projectArr = [
        {name: 'O.D.N.T. Longboards', 
         video: ODNTLongboardsVideo, 
         liveSite: 'https://www.odntlongboards.com', 
         gitHub: 'https://github.com/mattcbodily/longboard-shop',
         description: `Old Dog New Trick longboards is an E-commerce longboard shop designed for Aaron Kahle. 
         This application is built with a React front-end, and also uses Redux for state management. 
         O.D.N.T. Longboards is styled using Bootstrap components, and Stripe is utilized to take 
         customer payments.  The backend is built with Node.js, Express.js and a postgreSQL database.`},
        {name: 'PiggyBank',
         video: PiggyBankVideo,
         liveSite: '',
         gitHub: 'https://github.com/mattcbodily/budget-app-hooks',
         description: `PiggyBank is a budgeting app built with React and Styled Components on the 
         front-end.  The back-end is built using Node.js, Express.js, and a postgreSQL
         database.  Chart.js is implemented to improve user experience by providing a 
         visual representation of budget and expense information. From this app, a user 
         can set their budget, input expenses, and view their budget history and expense 
         trends.`},
        {name: 'PearProgramming',
         video: PearProgrammingVideo,
         liveSite: '',
         gitHub: 'https://github.com/sudorm-rfdot/pearprogramming',
         description: `Pear Programming is an online, collaborative code editor. Utilizing Monaco's code editor, 
         together with Socket.io, users are able to write and edit code together in real time. 
         PearProgramming is styled using Sass, and it also utilizes particles.js for added styling on select pages. 
         PearProgramming also uses AWS S3, paired with React Dropzone, to allow users the ability to 
         upload and store profile pictures.`},
        {name: 'Teachio',
         video: TeachioVideo,
         liveSite: 'https://www.teachio.co',
         gitHub: 'https://github.com/mattcbodily/tutorlab',
         description: `Teachio is an online platform that allows students to find tutors. Users are able to find tutors 
         based on subject, and can view tutor profiles and request lessons. Teachio utilizes AWS S3, as well 
         as React Dropzone, to allow users to upload profile pictures. Socket.io is used within Teachio to allow 
         real time messaging between students and tutors.`}]

    const incrementIndex = () => {
        if(index === projectArr.length - 1){
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    const decrementIndex = () => {
        if(index === 0){
            setIndex(projectArr.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return(
        <div id='projects' className='projects-container'>
            <h1>Projects</h1>
            <section>
                <h3>{projectArr[index].name}</h3>
                <video key={projectArr[index].video} className='project-video' controls>
                    <source src={projectArr[index].video} type='video/mp4'/>
                </video>
                <div>
                    {projectArr[index].liveSite
                    ? <a href={projectArr[index].liveSite}><button>Live Site</button></a>
                    : null}
                    <a href={projectArr[index].gitHub}><button>GitHub</button></a>
                    <div className='project-description'>
                        <p>{projectArr[index].description}</p>
                    </div>
                </div>
            </section>
            <div>
                <button onClick={decrementIndex}>Previous</button>
                <button onClick={incrementIndex}>Next</button>
            </div>
        </div>
    )
}

export default Projects;