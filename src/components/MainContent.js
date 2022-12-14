import Section from "./Section"
import Slider from "./sections/Slider"

// Importing sections
import About from "./sections/About"
import Title from "./sections/Title"
import Education from "./sections/Education"
import Skills from "./sections/Skills"
import Hobbies from "./sections/Hobbies"
import Contact from "./sections/Contact"


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
                <Hobbies />
            </Section>

            <Section title="CONTACT ME">
                <Contact />
            </Section>
        </div>
    )
}

export default MainContent