import Section from "./Section"
import Slider from "./Slider"

// Importing icons
import { BsFillStarFill } from 'react-icons/bs';
import { MdAlternateEmail } from "react-icons/md";
import { ImArrowUpRight2 } from "react-icons/im";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function MainContent(){
    return(
        <div className="px-3">

            <h1 className="fs-4 fw-bold border-bottom border-white border-opacity-10">
                <p className="p-0 m-0">Mohamed Majid</p>
                <p className="text-white-50">@realdaly</p>
            </h1>
            
            <Section title="ABOUT ME">
                <p>I'm Mohamed, a Web Developer living in Najaf, Iraq. My first encounter with web design was back in the days of my first year at college and since then, web design is something that I do every day. I love making simple but neat designs.</p>
            </Section>

            <Section title="Education">
                <span>2021</span>
                <p>Graduated from Kufa University and got a bachelor's degree in English Language and Literature</p>
            </Section>

            <Section title="Skills">
                <ul className="list-unstyled">
                    <li><BsFillStarFill className="starIcon me-2" />HTML</li>
                    <li><BsFillStarFill className="starIcon me-2" />CSS</li>
                    <li><BsFillStarFill className="starIcon me-2" />JavaScript</li>
                    <li><BsFillStarFill className="starIcon me-2" />Python</li>
                    <li><BsFillStarFill className="starIcon me-2" />Django</li>
                    <li><BsFillStarFill className="starIcon me-2" />React</li>
                </ul>
            </Section>

            <Section title="Projects">
                <Slider />
            </Section>

            <Section title="Hobbies">
                <p>Coding, Exercising, Freerunning, Parkour, Calisthenics, Tricking, Reading, Fishing</p>
            </Section>

            <Section title="Contact Me">
                <div className="w-100 row m-0 g-3">
                    <a className="text-white text-decoration-none" href="mailto:mohammed96218@yahoo.com" target="blank">
                        <div className="contactContainer bg-secondary rounded">
                            <div><MdAlternateEmail size={25} /></div>
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