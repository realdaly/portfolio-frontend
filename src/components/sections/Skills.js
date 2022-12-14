// Importing start icon
import { BsFillStarFill } from 'react-icons/bs';

import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'


function Skills(){
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/skills/")

    return(
        <ul className="list-unstyled">
            {message && <p>{message}</p>}
            {data && data.map(item => (
                <li key={uuidv4()}><BsFillStarFill className="starIcon me-2" />{item.name}</li>
            ))}
        </ul>
    )
}

export default Skills