// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faCodeFork } from '@fortawesome/free-solid-svg-icons'


export default function NavSlider() {
    return (
      <>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="swiper-container dish_slider"
            >
            <SwiperSlide><a className="link"> 
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Appetizers
           </span>
            </a>
            </SwiperSlide>
            <SwiperSlide><a className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Main Dishes
           </span>
            </a></SwiperSlide>
            <SwiperSlide><a className="link">England</a></SwiperSlide>
            <SwiperSlide><a className="link">Portugal</a></SwiperSlide>
            <SwiperSlide><a className="link">El Salvador</a></SwiperSlide>
            </Swiper>
      </>
    )
  }

