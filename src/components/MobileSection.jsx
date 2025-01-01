// import React from 'react'
// import { useEffect, useRef } from 'react'
// import videoBg1 from "../assets/fields_-_41093 (540p).mp4";
// import "./MobileSection.css"
// import  {Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';



// const MobileSection = () => {
//   const aboutRef1 = useRef(null);
//   const aboutRef2 = useRef(null);
 
//  useEffect(() => {
//    const options = {
//      root: null,
//      rootMargin: '0px',
//      threshold: 0.5, // テキストが50%以上表示された時に反応する
//    };
 
//    const callback = (entries) => {
//      entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//          entry.target.classList.add('animate-delayed-tracking-in-expand');
//        } else {
//          entry.target.classList.remove('animate-delayed-tracking-in-expand');
//        }
//      });
//    };
 
//    const observer = new IntersectionObserver(callback, options);
//    observer.observe(aboutRef1.current);
//    observer.observe(aboutRef2.current);
   
 
//    return () => {
//      observer.disconnect();
//    };
//  }, []);

//   return (
// <section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg ">
//       <Swiper modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 7000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         className="mySwiper absolute inset-0 h-full w-full"
//       >

//     <SwiperSlide>
//         <div className="video-onecontainer">
//           <video src={videoBg1} autoPlay muted loop playsInline className="video" />
//           <div className="text-container">
//             <h1 ref={aboutRef1} className="mb-10 text-2xl font-bold text-black sm:text-5xl md:text-5xl animate-delayed-tracking-in-expand">Welcome to</h1>
//             <h2 ref={aboutRef2} className="text-2xl font-bold text-white    animate-delayed-tracking-in-expand">FARM ひまわり</h2>
//           </div>
//         </div>
//       </SwiperSlide>
     
//       <SwiperSlide>
//         <div className="video-onecontainer">
//           <video src={videoBg1} autoPlay muted loop playsInline className="video" />
//           <div className="text-container">
//             <h1 ref={aboutRef1} className="mb-10 text-2xl font-bold text-black animate-delayed-tracking-in-expand">Welcome to</h1>
//             <h2 ref={aboutRef2} className="text-2xl font-bold text-white  animate-delayed-tracking-in-expand">FARM ひまわり</h2>
//           </div>
//         </div>
//       </SwiperSlide>
// </Swiper>
// </section>
//   )
// }

// export default MobileSection

import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/fields_-_41093 (540p).mp4";
// import videoBg2 from "../assets/tractor_-_43044 (720p).mp4";
import videoBg3 from "../assets/IMG_7783.MOV";
import "./MobileSection.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const MobileSection = () => {
  // const aboutRef1 = useRef(null);
  // const aboutRef2 = useRef(null);

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
 
   const callback = (entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add('animate-delayed-tracking-in-expand');
       } else {
         entry.target.classList.remove('animate-delayed-tracking-in-expand');
       }
     });
   };
 
  //  const observer = new IntersectionObserver(callback, options);
  //  observer.observe(aboutRef1.current);
  //  observer.observe(aboutRef2.current);
   
  //  return () => {
  //    observer.disconnect();
  //  };
 }, []);

  return (
<section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade">
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
        <div className="video-onecontainer">
          <video src={videoBg1} autoPlay muted loop playsInline className="video" />
          <div className="text-container">
            <h1  className="mb-10 text-2xl font-bold text-black sm:text-5xl md:text-5xl">Welcome to</h1>
            <h2  className="text-2xl font-bold text-white sm:text-4xl md:text-6xl">FARM ひまわり</h2>
          </div>
        </div>
      </SwiperSlide>
    
      <SwiperSlide>
        <div className="video-onecontainer">
          <video src={videoBg3} autoPlay muted loop playsInline className="video" />
          <div className="text-container">
            <h1  className="mb-10 text-2xl font-bold text-black sm:text-5xl md:text-5xl">Welcome to</h1>
            <h2  className="text-2xl font-bold text-black sm:text-4xl md:text-6xl">FARMひまわり</h2>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>


  )
}

export default MobileSection