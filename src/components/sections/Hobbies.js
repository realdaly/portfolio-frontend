import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'

function Hobbies(){
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/hobbies/")

    return(
        <>
            {message && <p>{message}</p>}
            {data && data.map(item => (
                <p key={uuidv4()}>
                    <span>{item.name},&nbsp;</span>
                </p>
            ))}
        </>
    )
}

export default Hobbies