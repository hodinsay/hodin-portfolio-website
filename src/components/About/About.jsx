import './About.scss';
import din from '../../assets/din-294.avif';
import { Link } from 'react-scroll';
import { TiHtml5 } from 'react-icons/ti';
import { FaCss3Alt, FaNodeJs, FaReact, FaGit, FaSass, FaWordpress } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiMongodb, SiVite, SiNetlify, SiExpress, SiTailwindcss } from 'react-icons/si';

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
                    <p>I am a web developer specializing in building modern and responsive websites for small and medium-sized businesses, personal portfolios, and web applications. I am passionate about creating user-friendly interfaces, optimizing website performance, and staying up-to-date with the latest industry trends and best practices.</p>
                    <br />
                    <p>My expertise lies in HTML and CSS, allowing me to create visually appealing and interactive web experiences. I am well-versed in front-end technologies like Sass, ensuring efficient styling and consistent designs across platforms. I am proficient in utilizing popular frameworks and libraries such as React.js to develop robust and scalable web applications. Additionally, I have experience working with content management systems like WordPress and website builders like Wix, enabling me to customize and optimize websites based on client preferences.</p>
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
                        <li> <SiVite className='skills'/> <br /> Vite</li>
                        <li> <FaReact className='skills'/> <br />React.js</li>
                        <li> <FaGit className='skills'/> <br />Git</li>
                        <li> <FaSass className='skills'/> <br />Sass</li>
                        <li> <SiTailwindcss className='skills'/> <br />Tailwind CSS</li>
                        <li> <FaWordpress className='skills'/> <br />WordPress</li>
                        <li> <SiNetlify className='skills'/> <br />Netlify</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};

export default About;