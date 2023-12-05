import { useEffect, useState } from 'react';
import { A11y, EffectCoverflow, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/a11y.css';
import '../../../node_modules/swiper/modules/navigation.css';
import '../../../node_modules/swiper/modules/pagination.css';
import '../../../node_modules/swiper/modules/effect-coverflow.css';

interface Depositions {
  name: string;
  image: string;
  age: number;
  testimonial: string;
}

const Carrousel = () => {
  const [array, setArray] = useState<Depositions[]>([]);

  useEffect(() => {
    fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
      .then(async (response) => {
        const depositions = await response.json();
        setArray(depositions);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }, []);

  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 4,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1376: {
          slidesPerView: 3,
          spaceBetween: 8,
        },
      }}
      modules={[Pagination, A11y, EffectCoverflow]}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="h-[240px]"
    >
      {array.map((item, key) => (
        <SwiperSlide key={key}>
          <div className="h-[210px] bg-white rounded-xl shadow flex flex-col justify-center items-center">
            <p className="w-72 text-stone-950 text-opacity-70 text-base font-Lato leading-snug line-clamp-4 ">
              {item.testimonial}
            </p>
            <div className="flex mt-4 gap-2">
              <img
                src={item.image}
                alt="Foto Perfil"
                className="w-12 h-12 rounded-full"
              />
              <h1 className="text-stone-950 text-opacity-90 text-lg font-Lilita uppercase leading-relaxed">
                {item.name}
                <br />
                <span className="text-stone-950 text-opacity-70 text-xs font-Lato leading-none">
                  {item.age} Anos • Designer
                </span>
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
