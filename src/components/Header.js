import { BsFillCircleFill } from 'react-icons/bs';

function Header(){
    return(
        <div className="header position-relative">
            <div className="overflow-hidden" style={{height:"17rem", paddingBottom:"5rem"}}>
                <img width="100%" height="100%" style={{objectFit:"cover", objectPosition:"center"}} src="https://media-exp1.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1674691200&v=beta&t=Js2JbuwWJ6XfoZOxo4TNFahP23DVp9YnZx5LYU4bNvg" alt="Cover" />
            </div>

            <div className="position-absolute bottom-0 ms-4 rounded-circle bg-dark" style={{ padding:".7rem", width:"8.5rem"}}>
                <div className="position-relative bg-dark rounded-circle">

                    <div className="overflow-hidden position-relative rounded-circle">
                        <img className="rounded-circle" style={{width: "100%",height:"100%", objectFit:"cover", objectPosition:"0 25px", transform: "scale(2)"}} src="https://avatars.githubusercontent.com/u/99325839?v=4" alt="Profile" />
                    </div>

                    <div className="position-absolute bottom-0 end-0">
                        <BsFillCircleFill style={{padding:".4rem", zIndex:"3", color: "#32CD32"}} size={35} className="bg-dark rounded-circle" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header