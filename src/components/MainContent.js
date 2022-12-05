import Section from "./Section"
import Slider from "./Slider"

// Importing sections
import About from "./sections/About"
import Title from "./sections/Title"
import Education from "./sections/Education"
import Skills from "./sections/Skills"


// Importing icons
import { BsFillStarFill } from 'react-icons/bs';
import { ImArrowUpRight2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


function MainContent(){
    return(
        <div className="px-3">

            <Title />
            
            <Section title="ABOUT ME">
                <About />
            </Section>

            <Section title="EDUCATION">
                <Education />
            </Section>

            <Section title="SKILLS">
                <Skills />
            </Section>

            <Section title="PROJECTS">
                <Slider />
            </Section>

            <Section title="HOBBIES">
                <p>Coding, Exercising, Freerunning, Parkour, Calisthenics, Tricking, Reading, Fishing</p>
            </Section>

            <Section title="CONTACT ME">
                <div className="w-100 row m-0 g-3">
                    <a className="text-white text-decoration-none" href="mailto:mohammed96218@yahoo.com" target="blank">
                        <div className="contactContainer bg-secondary rounded">
                            <div><AiFillMail size={25} /></div>
                            <div>mohammed96218@yahoo.com</div>
                            <div><ImArrowUpRight2 size={20} /></div>
                        </div>
                    </a>

                    <a className="text-white text-decoration-none" href="https://www.instagram.com/realdaly_" target="blank">
                        <div className="contactContainer bg-secondary rounded">
                            <div><AiFillInstagram size={25} /></div>
                            <div>@realdaly_</div>
                            <div><ImArrowUpRight2 size={20} /></div>
                        </div>
                    </a>

                    <a className="text-white text-decoration-none" href="https://www.linkedin.com/in/realdaly/" target="blank">
                        <div className="contactContainer bg-secondary rounded">
                            <div><AiFillLinkedin size={25} /></div>
                            <div>@realdaly</div>
                            <div><ImArrowUpRight2 size={20} /></div>
                        </div>
                    </a>

                </div>
            </Section>
        </div>
    )
}

export default MainContent