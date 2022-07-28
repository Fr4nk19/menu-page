//import component styles
import './css/NavSlider.css';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import ceviche  from './assets/images/ceviche.png';
import mainDish from './assets/images/main_dish.png';
import camaron from './assets/images/camaron.png';
import soup from './assets/images/soup.png';
import salad from './assets/images/salad.png';
import desert from './assets/images/desert.png';
import tipico from './assets/images/tipico.png';
import kid from './assets/images/kids.png';
import tortilla from './assets/images/tortilla.png';

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
                  slidesPerView: 4,
                },
              }}
            >

            <SwiperSlide><span className="link" > 
            <span className='wrap_icon'>
            <img src={ceviche} alt="apperitizer" />
            </span>
           <span className='wrap_text'>
                Appetizers
           </span>
            </span>
            </SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
            <img src={mainDish} alt="mainDish" />
            </span>
           <span className='wrap_text'>
                Main Dishes
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">            
            <span className='wrap_icon'>
           <img src={camaron} alt="camaron" />
            </span>
           <span className='wrap_text'>
                Traditional
           </span></span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
            <img src={soup} alt="soup" />
            </span>
           <span className='wrap_text'>
                Soups
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
            <img src={salad} alt="salad" />
            </span>
           <span className='wrap_text'>
                Salads
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
             <img src={desert} alt="desert" />   
            </span>
           <span className='wrap_text'>
                Desserts
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <img src={tipico} alt="tipico" />
            </span>
           <span className='wrap_text'>
                Típicos
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
             <img src={kid} alt="kid" />
            </span>
           <span className='wrap_text'>
                Kids
           </span>
            </span></SwiperSlide>

            <SwiperSlide><span className="link">
            <span className='wrap_icon'>
                <img src={tortilla} alt="tortilla" />
            </span>
           <span className='wrap_text'>
                Extras
           </span>
            </span></SwiperSlide>

            </Swiper>
      </>
    )
  }

