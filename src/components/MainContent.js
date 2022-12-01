import Section from "./Section"
import { BsFillStarFill } from 'react-icons/bs';
import { MdAlternateEmail } from "react-icons/md";
import { BsArrowUpRightSquare } from "react-icons/bs";

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
                    <li><BsFillStarFill />HTML</li>
                    <li><BsFillStarFill />CSS</li>
                    <li><BsFillStarFill />JavaScript</li>
                    <li><BsFillStarFill />Python</li>
                    <li><BsFillStarFill />Django</li>
                    <li><BsFillStarFill />React</li>
                </ul>
            </Section>

            <Section title="Hobbies">
                <p>Coding, Exercising, Freerunning, Parkour, Calisthenics, Tricking, Reading, Fishing</p>
            </Section>

            <Section title="Contact Me">
                <div className="row bg-secondary m-0">
                    <div className="col"><MdAlternateEmail /></div>
                    <div className="col">mohammed96218@yahoo.com</div>
                    <div className="col"><BsArrowUpRightSquare /></div>
                </div>
            </Section>
        </div>
    )
}

export default MainContent