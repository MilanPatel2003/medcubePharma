import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import './nutraceuticals.css';
import IMAGES from '../imagedata';

function Nutraceuticals() {
  return (
    <div>
    <div className="crosel-container1">

        <section className="py-5 text-center header-nutra mt-1">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className="fw-light">Vitamin tablet/capsule</h2>
              <p className='para-nutra'> Convenient and easy to swallow, our vitamin tablet capsules provide a daily dose of essential vitamins and minerals for a healthier life.</p>
            </div>
          </div>
        </section>
        <Swiper

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {IMAGES.vitamin.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="caption">{image.alt}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <i className="bi bi-arrow-bar-right swiper-button-next"></i>
        <i className="bi bi-arrow-bar-left swiper-button-prev"></i>
      </div>

      <div className='crosel-container'>
        <section className="py-5 text-center header-nutra mt-1">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className="fw-light">Ayurvedic tablet/capsule</h2>
              <p className='para-nutra'> Our Ayurvedic tablet is crafted with authentic Ayurvedic ingredients, offering holistic wellness by supporting various aspects of health and vitality</p>
            </div>
          </div>
        </section>
        <Swiper

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {IMAGES.ayurvedic.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="caption">{image.alt}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <i className="bi bi-arrow-bar-right swiper-button-next"></i>
        <i className="bi bi-arrow-bar-left swiper-button-prev"></i>
    </div>
    <div className='crosel-container'>
        <section className="py-5 text-center header-nutra mt-1">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h2 className="fw-light">Other tablet/capsule</h2>
              <p className='para-nutra'> Our specialized capsule and tablet offerings are formulated with the highest quality.</p>
            </div>
          </div>
        </section>
        <Swiper

          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {IMAGES.other.map((image) => (
            <SwiperSlide key={image.id}>
              <img src={image.src} alt={image.alt} />
              <div className="caption">{image.alt}</div>
            </SwiperSlide>
          ))}
        </Swiper>

        <i className="bi bi-arrow-bar-right swiper-button-next"></i>
        <i className="bi bi-arrow-bar-left swiper-button-prev"></i>
    </div>
    </div>
  );
}

export default Nutraceuticals;
