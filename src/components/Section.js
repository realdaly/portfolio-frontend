function Section(props){
    return(
        <section className="my-3 border-bottom border-white border-opacity-10">
            <h2 className="text-white text-opacity-75 fw-bold fs-5">{props.title}</h2>
            <div className="fs-6 fw-bold d-flex flex-wrap my-3">{props.children}</div>
        </section>
    )
}

export default Section