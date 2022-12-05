import useFetch from "../useFetch"

function About(){
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/about/")

    return(
        <>
            {message && <p>{message}</p>}
            {data && data.map(item =>(
                <p key={item.id}>{item.paragraph}</p>
            ))}
        </>
    )
}

export default About