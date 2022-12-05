import { BsFillCircleFill } from 'react-icons/bs';
import useFetch from './useFetch';
import { v4 as uuidv4 } from 'uuid';

function Header(){
    const { data } = useFetch("https://realdaly.pythonanywhere.com/api/about/")
    let profilePic

    {data && data.map(item => {
       profilePic = <img key={uuidv4()} src={item.profileImg} />
    })}

    return(
        <div className="position-relative">
            <div className="coverContainer overflow-hidden">
                {data && data.map(item => (
                    <img key={item.id} src={item.coverImg} alt="Cover" />
                ))}
            </div>

            <div className="profilePicContainer position-absolute bottom-0 ms-4 rounded-circle">
                <div className="position-relative rounded-circle p-2">

                    <div className="overflow-hidden position-relative rounded-circle">
                        {profilePic}
                    </div>

                    <div className="position-absolute bottom-0 end-0 mb-2 me-1">
                        <BsFillCircleFill size={35} className="activeIcon rounded-circle" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header