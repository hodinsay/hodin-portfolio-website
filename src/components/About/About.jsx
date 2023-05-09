import './About.scss';
import din from '../../assets/din-294.avif';
import { Link } from 'react-scroll';

const About = () => {
    return(
        <article id='about'>
            <header className='about-heading'>
                <h2 className='about-title'>About me</h2>
                <hr />
                <p className='about-subtitle'>Get to know me.</p>
            </header>
            <figure>
                <img src={din} alt="din" className='profile-pic' width='294' height='300'/>
            </figure>
            <div className='about-flex-container'>
                <div>
                    <h3 className='about-block-title'>Who I am!</h3>
                    <p>I am a self-taught <strong>Software Engineer</strong> | <strong>Web Developer</strong> who build websites and web applications. Currently, I am building modern, responsive, and interactive websites and web app with <strong>React.js</strong> and deploying them through <strong>Netlify</strong>. Please take your time to check out some of my works under the <strong>Projects</strong> section.</p>
                    <br />
                    <p>I'm open to <strong>Job</strong> opportunities where I can contribute and learn in a team environment at a tech company with global reach. I am <strong>confident </strong> that I will help build the frontend of websites and web applications that are the first thing people see when they want to <strong>interact</strong> with your product, leaving users with the best first impression of your business. If you have a good opportunity that matches my skills and experience, then please don't hesitate to <strong>Contact</strong> me.</p>
                    <p className='contact-button-hover'> 
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className='contact-button' href='#contact'>Contact</Link>
                    </p>
                </div>
                <div>
                    <h3 className='about-block-title'>Skills:</h3>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>MongoDB</li>
                        <li>Vite.js</li>
                        <li>React.js</li>
                        <li>Git</li>
                        <li>Sass</li>
                        <li>WordPress</li>
                        <li>Netlify</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;