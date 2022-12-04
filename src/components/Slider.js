// Import Swiper React components
import { Scrollbar, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


function Slider(){
    return(
    <Swiper
        modules={[Scrollbar, Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        grabCursor={true}
        scrollbar={{ draggable: true }}
    >
        <SwiperSlide className="slide position-relative">
            <p className="slideTitle">Foo</p>
            <a href="https://www.google.com" target="blank">
                <img className="rounded" src="https://q4y2k3w9.rocketcdn.me/wp-content/uploads/2021/06/react-ecommerce-app.png" alt="Project" />
            </a>
        </SwiperSlide>

        <SwiperSlide className="slide">
            <p className="slideTitle">Bar</p>
            <a href="https://www.google.com" target="blank">
                <img className="rounded" src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107ff04702bdac3d216459_6002086f72b727845f01e48b_la-barraca.jpeg" alt="Project" />
            </a>
        </SwiperSlide>

        <SwiperSlide className="slide">
            <p className="slideTitle">Baz</p>
            <a href="https://www.google.com" target="blank">
                <img className="rounded" src="https://onextrapixel.com/wp-content/uploads/2014/06/Christchurch-Harbour-Hotel.jpg" alt="Project" />
            </a>
        </SwiperSlide>

    </Swiper>
    )
}

export default Slider