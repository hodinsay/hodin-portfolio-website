import './About.scss';
import din from '../../assets/din-294.avif';
import { Link } from 'react-scroll';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt, FaNodeJs, FaReact, FaGit, FaSass, FaWordpress } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMongodb, SiVite, SiNetlify, SiExpress } from 'react-icons/si';

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
                        <li> <TiHtml5 className='skills'/> <br /> HTML 5 </li>
                        <li> <FaCss3Alt className='skills'/> <br /> CSS 3 </li>
                        <li> <TbBrandJavascript className='skills'/> <br /> JavaScript</li>
                        <li> <FaNodeJs className='skills'/> <br />Node.js </li>
                        <li> <SiExpress className='skills'/> <br />Express.js</li>
                        <li> <SiMongodb className='skills'/> <br /> MongoDB</li>
                        <li> <SiVite className='skills'/> <br /> Vite.js</li>
                        <li> <FaReact className='skills'/> <br />React.js</li>
                        <li> <FaGit className='skills'/> <br />Git</li>
                        <li> <FaSass className='skills'/> <br />Sass</li>
                        <li> <FaWordpress className='skills'/> <br />WordPress</li>
                        <li> <SiNetlify className='skills'/> <br />Netlify</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;