import './Projects.scss';
import acr from '../../assets/acr-768.avif';
import photography from '../../assets/photography-768.avif';
import portfolio from '../../assets/portfolio-768w.avif';
import timeattask from '../../assets/time-attask.avif';
import ageCalculator from '../../assets/age-calculator.avif';
import { FaExternalLinkAlt } from 'react-icons/fa';


const Projects = () => {
    return(
        <section id='projects'>
            <header className='projects-heading'>
                <h2 className='projects-title'>Projects</h2>
                <hr />
            </header>
            <p className='projects-subtitle'>My recent and notable projects.</p>
            <div className='projects-flex-container'>
                <figure className='projects-box'>
                    <a href="https://age-calculator-react-tailwindcss.netlify.app/" target='_blank'>
                        <img src={ageCalculator} alt="age-calculator" className='image' width='768' height='438'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>Age Calculator</h3>
                    <p>A web application that will calculate and return the exact age of a user's birthday in years, months, and days. This web app is responsive and accessible on mobile devices. Google Lighthouse audit score: <strong>100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.</strong></p>
                    <span>Made with:</span>
                    <ul>
                        <li> HTML</li>
                        <li> Tailwind CSS</li>
                        <li> JavaScript</li>
                        <li> Vite</li>
                        <li> React.js</li>
                        <li> Netlify</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://age-calculator-react-tailwindcss.netlify.app/" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://timeattask.netlify.app/" target='_blank'>
                        <img src={timeattask} alt="time-atttask" className='image' width='768' height='438'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>Time Attask</h3>
                    <p>A customizable pomodoro timer to  increase productivity. The goal is to help users identify, prioritize, and complete their daily tasks in time intervals with breaks. This web app is responsive and accessible on mobile devices. Google Lighthouse audit score: <strong>100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.</strong></p>
                    <span>Made with:</span>
                    <ul>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> JavaScript</li>
                        <li> Vite</li>
                        <li> React.js</li>
                        <li> Sass</li>
                        <li> Netlify</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://timeattask.netlify.app/" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://dinvhophotography.netlify.app/home" target='_blank'>
                        <img src={photography} alt="photography" className='image' width='768' height='438'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>Din Ho Photography</h3>
                    <p>A multi-page photographer portfolio website where users can browse and view photo collections through a pop-up carousel image slider. The website is responsive and accessible on mobile devices.</p>
                    <span>Made with:</span>
                    <ul>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> JavaScript</li>
                        <li> Vite</li>
                        <li> React.js</li>
                        <li> Sass</li>
                        <li> Netlify</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://dinvhophotography.netlify.app/home" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://acrglazing.com/" target='_blank'>
                        <img src={acr} alt="acrglazing" className='image' width='768' height='453'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>ACR Glazing Contractors Inc. </h3>
                    <p> Designed, built, and launched a modern and interactive multi-page website for the clients with WordPress and custom HTML/CSS. The website is responsive and accessible on mobile devices.</p>
                    <span>Made with:</span>
                    <ul>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> WordPress</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://acrglazing.com/" target='_blank' className='website-button'>Website <FaExternalLinkAlt /></a>       
                    </p>
                </div>
                <figure className='projects-box'>
                    <a href="https://hodinportfoliotemplate.netlify.app/" target='_blank'>
                        <img src={portfolio} alt="portfolio" className='image' width='768' height='437'/>
                    </a>
                </figure>
                <div className='projects-description'>
                    <h3 className='projects-name'>My Portfolio Website Template</h3>
                    <p>A 100 points portfolio website including a working contact form submission hosted on Netlify. The website is responsive and accessible on mobile devices. Google Lighthouse audit score: <strong>100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO.</strong></p>
                    <span>Made with:</span>
                    <ul>
                        <li> HTML</li>
                        <li> CSS</li>
                        <li> JavaScript</li>
                        <li> Vite</li>
                        <li> React.js</li>
                        <li> Sass</li>
                        <li> Netlify</li>
                    </ul>
                    <p className='website-button-hover'>
                        <a href="https://github.com/hodinsay/portfolio-website-template" target='_blank' className='website-button'>GitHub <FaExternalLinkAlt /></a>       
                    </p>
                </div>
            </div>
        </section>      
    );
};

export default Projects;