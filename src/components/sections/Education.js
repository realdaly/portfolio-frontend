import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'
import React from "react"

function Education(){
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/edu/")
    
    return(
        <>
            {message && <p>{message}</p>}
            {data && data.map(item => (
                <React.Fragment key={uuidv4()}>
                    <p>{item.year}</p>
                    <p>{item.description}</p>
                </React.Fragment>
            ))}
        </>
    )
}

export default Education