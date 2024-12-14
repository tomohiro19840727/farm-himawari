 import React from 'react'
 import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/wheat_-_17285 (540p).mp4";
import videoBg3 from "../assets/wheat_-_37655 (1080p).mp4";
import "./Wheat.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
 
 const Wheat = () => {
  const aboutRef2 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
 
   const observer = new IntersectionObserver(callback, options);
   observer.observe(aboutRef2.current);
   
   return () => {
     observer.disconnect();
   };
 }, []);

   return (
     <>
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
            <div className="video-container">
              <video src={videoBg1} autoPlay muted loop playsInline className="video" />
              <div className="text-container4">    
                <h2 ref={aboutRef2} className="text-3xl font-bold sm:text-3xl md:text-6xl    animate-delayed-tracking-in-expand">春の力強さと秋の豊穣</h2>
              </div>
            </div>
          </SwiperSlide>
    </Swiper>
    </section>
    
    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
            }}>
            <img src="/img/sunset-4342426_1280.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">「春よ恋」<br/> もちもちの極み、春の小麦粉</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">当社の春小麦は、春の穏やかな気候と肥沃な土壌を活用し、小麦の生育に最適な環境を提供しています。春小麦の成長過程では、適切な水分管理と害虫・病気対策を徹底し、小麦の健全な成長を促進しています。</p>
              </div>    
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">

          {/* テキストコンテナを先に配置 */}
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">『きたほなみ』<br/>秋小麦の収量と品質向上 </h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">秋小麦の栽培において、追肥のタイミングと施肥量の管理は収量と品質の向上に不可欠です。それぞれのタイミングで適切な施肥量を施すことが収量増や品質向上の鍵となります。<br/>また、施肥効率を高めるためには、追肥で窒素分を複数回に分けて補うことが効果的です。<br/>当社では、秋小麦の栽培において、土壌の特性や生育状況を十分に考慮しながら、追肥のタイミングと施肥量を適切に管理し、高品質な小麦の生産を目指しています。</p>
              </div>             
            </div>
          </div>

          {/* 動画コンテナを後に配置 */}
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
            }}>
            <img src="/img/wheat-3506758_640.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
           
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
            }}>
             <img src="/img/MOK_hitokirenopizza_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </div>
          
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">国産小麦の誇り<br/> ふっくらもちもちの極上食感</h2>
                <p className="text-center text-gray-500 sm:text-left font-bold mt-5">
                  当社の「春よ恋」は、国産小麦の中でも珍しい強力粉であり、高級小麦ハルユタカから改良された品種です。この「春よ恋」は、国産小麦らしい味わいともちもちとした食感が特徴で、たんぱく含有量も多いため、パンやピザなどに適しています。<br/>私たちは、この「春よ恋」を通じて、北海道の豊かな自然と農業の技術を活かした、高品質な製品をお届けすることを目指しています。
               </p>
              </div>          
            </div>
          </div>

          

        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">

          {/* テキストコンテナを先に配置 */}
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">北海道の宝石<br/> 小麦の多彩な魅力</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">「きたほなみ」は耐病性に優れ、収穫量も1～2割多いことから、農家にとっても魅力的な品種です。<br/>小麦粉の色や性質、食感も優れており、パン用、麺用、菓子用と幅広い用途で活躍します。強力粉から薄力粉まで、多様なニーズに応える「きたほなみ小麦」は、北海道の豊かな自然と農業技術が生んだ、まさに宝石のような存在です。</p>
              </div>       
            </div>
          </div>

          {/* 動画コンテナを後に配置 */}
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
            }}>
            <img src="/img/002MITTE226_TP_V4.jpg" autoPlay muted loop playsInline className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
           
        </div>
      </div>
    </div>
              </>
    
   )
 }
 
 export default Wheat