// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


function Slider(){
    return(
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      grabCursor={true}
    >
        <SwiperSlide className="slide">
            <img className="rounded" src="https://q4y2k3w9.rocketcdn.me/wp-content/uploads/2021/06/react-ecommerce-app.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className="slide">
            <img className="rounded" src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60107ff04702bdac3d216459_6002086f72b727845f01e48b_la-barraca.jpeg" alt="" />
        </SwiperSlide>

        <SwiperSlide className="slide">
            <img className="rounded" src="https://onextrapixel.com/wp-content/uploads/2014/06/Christchurch-Harbour-Hotel.jpg" alt="" />
        </SwiperSlide>

    </Swiper>
    )
}

export default Slider