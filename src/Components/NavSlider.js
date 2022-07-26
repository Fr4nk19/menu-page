// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

const urlLinks = '#'

export default function NavSlider() {
    return (
      <>
            <Swiper
              // install Swiper modules
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
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

            <SwiperSlide><a href={urlLinks} className="link" > 
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Appetizers
           </span>
            </a>
            </SwiperSlide>

            <SwiperSlide><a  href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Main Dishes
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">            
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Traditional
           </span></a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Soups
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Salads
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Desserts
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Típicos
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Kids
           </span>
            </a></SwiperSlide>

            <SwiperSlide><a href={urlLinks} className="link">
            <span className='wrap_icon'>
                <FontAwesomeIcon icon={faUtensils} />
            </span>
           <span className='wrap_text'>
                Extras
           </span>
            </a></SwiperSlide>

            </Swiper>
      </>
    )
  }

