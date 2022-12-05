import useFetch from "../useFetch"
import { BsFillStarFill } from 'react-icons/bs';

function Skills(){
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/skills/")

    return(
        <ul className="list-unstyled">
            <li><BsFillStarFill className="starIcon me-2" />HTML</li>
            <li><BsFillStarFill className="starIcon me-2" />CSS</li>
            <li><BsFillStarFill className="starIcon me-2" />JavaScript</li>
            <li><BsFillStarFill className="starIcon me-2" />Python</li>
            <li><BsFillStarFill className="starIcon me-2" />Django</li>
            <li><BsFillStarFill className="starIcon me-2" />React</li>
        </ul>
    )
}

export default Skills