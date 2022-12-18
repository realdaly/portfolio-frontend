import { useState, useEffect } from "react"

function useFetch(url){
    const [data, setData] = useState(null)
    const [message, setMessage] = useState("Loading...")

    useEffect(() => {
        const abortController = new AbortController()

        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(json => {
            setData(json)
            setMessage(false)
        })
        .catch(error => {
            setMessage("Loading...")
        })
        return () => abortController.abort()
    }, [url])

    return { data, message }
}

export default useFetch