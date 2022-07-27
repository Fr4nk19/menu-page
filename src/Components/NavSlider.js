// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'



export default function NavSlider() {
    return (
      <>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={0}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              className="swiper-container dish_slider"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >

            <SwiperSlide><span className="link" > 
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Appetizers
           </span>
            </span>
            </SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Main Dishes
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">            
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Traditional
           </span></span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Soups
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Salads
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Desserts
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Típicos
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Kids
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Extras
           </span>
            </span></SwiperSlide>

            </Swiper>
      </>
    )
  }

