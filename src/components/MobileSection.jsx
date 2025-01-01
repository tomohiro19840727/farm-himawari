import React from 'react'
import { useEffect } from 'react'
import videoBg1 from "../assets/fields_-_41093 (540p).mp4";
import videoBg3 from "../assets/IMG_7783.MOV";
import "./MobileSection.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination } from 'swiper/modules';



const MobileSection = () => {

  useEffect(() => {
    const targets = document.getElementsByClassName("fade");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
          }
        });
      });
  
      Array.from(targets).forEach((target) => {
        observer.observe(target);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
 
 useEffect(() => {
   const options = {
     root: null,
     rootMargin: '0px',
     threshold: 0.5, // テキストが50%以上表示された時に反応する
   };
 
 }, []);

  return (
<section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade">
<Swiper modules={[Navigation, Pagination ]}
  spaceBetween={30}
  centeredSlides={true}
  autoplay={{
    delay: 7000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  className="mySwiper absolute inset-0 h-full w-full"
>
<SwiperSlide>
        <div className="video-onecontainer">
          <video src={videoBg3} autoPlay muted loop playsInline className="video" />
        </div>
      </SwiperSlide>
    
      <SwiperSlide>
        <div className="video-onecontainer">
          <video src={videoBg1} autoPlay muted loop playsInline className="video" />
        </div>
      </SwiperSlide>
    </Swiper>
    </section>


  )
}

export default MobileSection