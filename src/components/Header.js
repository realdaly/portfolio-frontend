import { BsFillCircleFill } from 'react-icons/bs';

function Header(){
    return(
        <div className="position-relative">
            <div className="coverContainer overflow-hidden">
                <img src="https://media-exp1.licdn.com/dms/image/C4D12AQHMPBvE3avWzg/article-inline_image-shrink_1000_1488/0/1616872522462?e=1674691200&v=beta&t=Js2JbuwWJ6XfoZOxo4TNFahP23DVp9YnZx5LYU4bNvg" alt="Cover" />
            </div>

            <div className="profilePicContainer position-absolute bottom-0 ms-4 rounded-circle bg-dark">
                <div className="position-relative bg-dark rounded-circle">

                    <div className="overflow-hidden position-relative rounded-circle">
                        <img className="rounded-circle" src="https://avatars.githubusercontent.com/u/99325839?v=4" alt="Profile" />
                    </div>

                    <div className="position-absolute bottom-0 end-0">
                        <BsFillCircleFill size={35} className="activeIcon bg-dark rounded-circle" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header