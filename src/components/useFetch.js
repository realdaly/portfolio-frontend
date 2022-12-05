import { useState, useEffect } from "react"

function useFetch(url){
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url)
        .then(response => {
            if(!response.ok){
                throw Error("Network error.")
            }
            return response.json()
        })
        .then(json => {
            setData(json)
            setMessage(false)
        })
        .catch(error => {
            setMessage(error.message)
        })
        return () => abortController.abort()
    }, [url])

    return { data, message }
}

export default useFetch