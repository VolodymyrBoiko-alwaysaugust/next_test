import { Swiper, SwiperSlide } from 'swiper/react';

// import { Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState, useEffect } from 'react';
import cn from 'classnames';

const Slider = ({images}) => {

  // pagination nav controls
  const swiper = useRef(null);
  const [swiperLength, setSwiperLength] = useState(0);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiperPageIndicators, setSwiperPageIndicators] = useState([]);

  useEffect(() => {
    setSwiperLength(swiper.current.swiper.slides.length);
    const slideChange = swiper.current.swiper.on(
      "activeIndexChange",
      () => {
        setSwiperIndex(swiper.current.swiper.realIndex);
      }
    )
    let indicators = [];
    for (let i = 1; i < swiperLength -1; i++) {
      indicators.push(
        <button 
          key={`slider-nav-${i}`}
          onClick={() => swiper.current.swiper.slideTo(i)} 
          className={cn(
            "swiper-pagination-bullet", 
            {
              "swiper-pagination-bullet-active" : i-1 === swiperIndex
          })}></button>
      );
    }
    setSwiperPageIndicators(indicators);
    // return () => {
    //   swiper.current.swiper?.off("activeIndexChange", slideChange);
    // }
  }, [swiper.current?.swiper, swiperIndex]);

  return (
    <div className='relative w-[100%] md:rounded-[10px]'>
      <div className=' mr-[-10px] md:mr-0 md:w-[622px]'>
        <Swiper
        
          ref={swiper}
          spaceBetween={0}
          slidesPerView={0.9965}
          // modules={[Pagination]}
          loop
          // pagination={{ clickable: true }}
          onSlideChange={() => setSwiperIndex(swiper.current.swiper.realIndex)}
          onSwiper={(swiper) => console.log(swiper)}
          className="rounded-[10px] overflow-hidden"
        >
      {images && images.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Image src={image} priority placeholder='blur'/>
              </SwiperSlide>
            );
          }
        )}


        </Swiper>
      </div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        {swiperPageIndicators && swiperPageIndicators.map((indicator) => indicator)}
      </div>
    </div>
  );
};
export default Slider