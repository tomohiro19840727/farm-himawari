import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/fields_-_41093 (540p).mp4";
import videoBg2 from "../assets/tractor_-_43044 (720p).mp4";
import videoBg3 from "../assets/fertilizer_-_114347 (720p).mp4";
import "./Section.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Section = () => {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
 
 useEffect(() => {
   const options = {
     root: null,
     rootMargin: '0px',
     threshold: 0.5, // テキストが50%以上表示された時に反応する
   };
 
   const callback = (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add('animate-delayed-tracking-in-expand');
       } else {
         entry.target.classList.remove('animate-delayed-tracking-in-expand');
       }
     });
   };
 
   const observer = new IntersectionObserver(callback, options);
   observer.observe(aboutRef1.current);
   observer.observe(aboutRef2.current);
   
 
   return () => {
     observer.disconnect();
   };
 }, []);

  return (
//     <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
           
//     <video  src={videoBg} autoPlay muted loop playsInline loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center  opacity-70" />
    
//     <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
//     <div class="relative flex flex-col items-center p-4 sm:max-w-xl text-center">
//   <h1 ref={aboutRef1} class="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
//   <h2 ref={aboutRef2} class="text-3xl font-bold text-white sm:text-4xl md:text-6xl animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
// </div>

//     </div>
    
//   </section>
<section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg ">
<Swiper modules={[Navigation, Pagination, Autoplay]}
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
        <div className="video-container">
          <video src={videoBg1} autoPlay muted loop playsInline className="video" />
          <div className="text-container">
            <h1 ref={aboutRef1} className="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
            <h2 ref={aboutRef2} className="text-3xl font-bold text-white sm:text-4xl md:text-6xl    animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="video-container">
          <video src={videoBg2} autoPlay muted loop playsInline className="video" />
          <div className="text-container">
            <h1 ref={aboutRef1} className="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
            <h2 ref={aboutRef2} className="text-3xl font-bold text-white sm:text-4xl md:text-6xl animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="video-container">
          <video src={videoBg3} autoPlay muted loop playsInline className="video" />
          <div className="text-container">
            <h1 ref={aboutRef1} className="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
            <h2 ref={aboutRef2} className="text-3xl font-bold text-white sm:text-4xl md:text-6xl animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
          </div>
        </div>
      </SwiperSlide>


  {/* <SwiperSlide>
    <div className='absolute inset-0 z-0'>
    <video src={videoBg1} autoPlay muted loop playsInline loading="lazy" class="h-full w-full object-cover object-center opacity-70" />
    </div>
  <div class="relative z-20 flex flex-col items-center p-4 sm:max-w-xl text-center">
    <h1 ref={aboutRef1} class="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
    <h2 ref={aboutRef2} class="text-3xl font-bold text-white sm:text-4xl md:text-6xl animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
  </div>
  </SwiperSlide>
  <SwiperSlide>
    <div className="absolute inset-0 z-0">
    <video src={videoBg2} autoPlay muted loop playsInline loading="lazy" class="h-full w-full object-cover object-center opacity-70" />
    </div>
    <div class="relative z-10 flex flex-col items-center p-4 sm:max-w-xl text-center">
    <h1 ref={aboutRef1} class="mb-10 text-4xl font-bold text-white sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
    <h2 ref={aboutRef2} class="text-3xl font-bold text-black sm:text-4xl md:text-6xl animate-delayed-tracking-in-expand">FARM-ひまわり</h2>
  </div>
  </SwiperSlide> */}
  {/* <SwiperSlide>
    <video src={videoBg3} autoPlay muted loop playsInline loading="lazy" class="h-full w-full object-cover object-center opacity-70" />
  </SwiperSlide> */}
  {/* 他のSwiperSlideを追加する */}

</Swiper>
</section>


  )
}

export default Section