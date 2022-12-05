import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'
import React from "react"

function Title() {
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/about/")

    return(
        <h1 className="fs-4 fw-bold border-bottom border-white border-opacity-10">
                {message && <p>{message}</p>}
                {data && data.map( (item) => (
                    <React.Fragment key={uuidv4()}>
                        <p className="p-0 m-0">{item.name}</p>
                        <p className="text-white-50">{item.title}</p>
                    </React.Fragment>
                ))}
        </h1>
    )
}

export default Title