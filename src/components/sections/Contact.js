// Importing icons
import { ImArrowUpRight2 } from "react-icons/im";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'

function Contact(){
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/contacts/")

    return(
        <div className="w-100 row m-0 g-3">
            {message && <p>{message}</p>}

            {data && 
                <a className="text-white text-decoration-none" href={`mailto:${data[0].link}`} target="_blank">
                    <div className="contactContainer bg-secondary rounded">
                        <div><AiFillMail size={25} /></div>
                        <div>{data[0].content}</div>
                        <div><ImArrowUpRight2 size={20} /></div>
                    </div>
                </a>
            }

            {data && 
                <a className="text-white text-decoration-none" href={data[1].link} target="_blank">
                    <div className="contactContainer bg-secondary rounded">
                        <div><AiFillInstagram size={25} /></div>
                        <div>{data[1].content}</div>
                        <div><ImArrowUpRight2 size={20} /></div>
                    </div>
                </a>
            }

            {data && 
                <a className="text-white text-decoration-none" href={data[2].link} target="_blank">
                    <div className="contactContainer bg-secondary rounded">
                        <div><AiFillLinkedin size={25} /></div>
                        <div>{data[2].content}</div>
                        <div><ImArrowUpRight2 size={20} /></div>
                    </div>
                </a>
            }
            

            {/* <a className="text-white text-decoration-none" href="mohammed96218@yahoo.com" target="blank">
                <div className="contactContainer bg-secondary rounded">
                    <div><AntDesignIcons.AiFillMail size={25} /></div>
                    <div>mohammed96218@yahoo.com</div>
                    <div><ImArrowUpRight2 size={20} /></div>
                </div>
            </a> */}

        </div>
    )
}

export default Contact