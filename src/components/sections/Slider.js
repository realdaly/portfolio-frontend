// Import Swiper React components
import { Scrollbar, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

import useFetch from "../useFetch"
import { v4 as uuidv4 } from 'uuid'


function Slider(){
    const { v4: uuidv4 } = require('uuid')
    const { data, message } = useFetch("https://realdaly.pythonanywhere.com/api/projects/")

    return(
    <Swiper
        modules={[Scrollbar, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
    >
        {message && <SwiperSlide>{message}</SwiperSlide>}
        {data && data.map(item => (
            <SwiperSlide key={uuidv4()} className="slide position-relative">
                <p className="slideTitle">{item.name}</p>
                <a href={item.link} target="blank">
                    <img className="rounded" src={item.image} alt="Project" />
                </a>
            </SwiperSlide>
        ))}

    </Swiper>
    )
}

export default Slider