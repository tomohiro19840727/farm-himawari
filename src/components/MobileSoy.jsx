// import React from 'react'
// import { useEffect } from 'react'
// import videoBg1 from "../assets/127734 (1080p).mp4";
// import "./MobileSoy.css"
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import { Link } from 'react-router-dom';

// const MobileSoy = () => {
//  useEffect(() => {
//   window.scrollTo(0, 0);
// }, []);

//  useEffect(() => {
//   const targets = document.getElementsByClassName("fade");
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("active");
//       } else {
//           entry.target.classList.remove("active");
//         }
//       });
//     });

//     Array.from(targets).forEach((target) => {
//       observer.observe(target);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);


//   return (
//     <>
//    <section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade">
   
//            <div className="video-container7">
//              <video src={videoBg1} autoPlay muted loop playsInline className="video" />
//            </div>
//    </section>
   
//    <div class="bg-white py-6 sm:py-8 lg:py-12">
//   <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
//     <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      
//       <div className='fade'>
//         <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src="/img/soybean-field-1610754_1280.jpg" loading="lazy" alt="Photo by engin akyurt" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </div>

//         <div class="flex flex-col">
//           <h1 class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">黒大豆栽培の極意<br/> 当社の徹底した管理と適応力</h1>
//           <p  class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"> 当社では、黒大豆の栽培において、気温や日長に敏感な大豆の性質を十分に理解し、適切な管理を行っています。<br/>黒大豆は、極端な暑さや寒さに弱いため、5月下旬から6月中旬に種まきを行うことで、晩霜害を避けつつ最適な生育環境を提供しています。</p>
//         </div>
//       </div>
      

      
//       <div className='fade'>
//         <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src="/img/bean-leaf-2610454_1280.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </div>

//         <div class="flex flex-col">
//           <h2 class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">黒大豆栽培の秘訣 <br/> 当社の徹底した品種選定と管理</h2>
//           <p  class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">当社の黒大豆栽培は、品種選定から栽培カレンダーの活用に至るまで、細心の注意を払った管理が特徴です。<br/>生育時期ごとの農業作業や病害虫の防除を計画的に行い、黒大豆の品質と安定生産を目標としています。</p>
//         </div>
//       </div>
      

      
//       <div className='fade'>
//         <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src="/img/27972838_s.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </div>

//         {/* <div class="flex flex-col">
//           <h2 class="font-bold text-xl mb-3t">北海道産黒大豆<br/> 栄養豊富で美しい黒の輝き</h2>
//           <p href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">北海道産の黒大豆は、健康と美容に良いイソフラボンやアントシアニンを豊富に含み、高たんぱくで低脂肪、さらに食物繊維もたっぷりという、栄養価の高い食材です。<br/>特に豆を柔らかくする際に蒸しても皮浮きが少なく、見た目も味も美しいお豆が炊けます。</p>
//         </div> */}

// <div class="flex flex-col">
//   <h2 class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">北海道産黒大豆<br/> 栄養豊富で美しい黒の輝き</h2>
//   <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">北海道産の黒大豆は、健康と美容に良いイソフラボンやアントシアニンを豊富に含み、高たんぱくで低脂肪、さらに食物繊維もたっぷりという、栄養価の高い食材です。<br/>特に豆を柔らかくする際に蒸しても皮浮きが少なく、見た目も味も美しいお豆が炊けます。</p>
// </div>

//       </div>
      
//     </div>
//   </div>
// </div>

   

//    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
//      <div class="bg-bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
//   <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
//     <div class="mb-10 md:mb-16">
//       <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">収穫の効率化と品質保持</h2>

//       <p class="mx-auto max-w-screen-md text-center  md:text-lg font-bold">当社では、黒大豆の収穫を効率化し、品質を保持するために最新のコンバインを活用しています。<br/>当社の黒大豆栽培は、最新技術の導入により、<br/>安定した品質と供給を実現しています。</p>
//     </div>
    

//     <div class="grid gap-6 sm:grid-cols-2 fade">
      
//       <div class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//         <img src="/img/IMG_7206.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//         <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

//         <div class="relative flex flex-col">
//           <span class="text-gray-300">ヤンマー</span>
//           <span class="text-lg font-semibold text-white lg:text-xl">大豆専用コンバイン</span>
//         </div>
//       </div>
      

      
//       <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
//         <img src="/img/IMG_7207.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

//         <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

//         <div class="relative flex flex-col">
//           <span class="text-gray-300">収穫後</span>
//           <span class="text-lg font-semibold text-white lg:text-xl">収穫直後の黒大豆</span>
//         </div>
//       </a>
      
      
//     </div>
//   </div>
//   </div>
//    </div> 
//              </>
   
//   )
// }

// export default MobileSoy

import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/127734 (1080p).mp4";
import "./MobileSoy.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import MobileFooter from './MobileFooter';

const MobileSoy = () => {

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
   
  }, []);
 

  return (
    <>
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 pb-6 sm:pb-8 lg:pb-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
      
      <img src="/img/soybean-field-1610754_1280.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
      
      <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Taste the Legacy</h1>
        <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-4xl">黒大豆の誇り</h1>

        <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
        </div>
      </div>
      
    </section>
  </div>
</div>
   
   <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">
         
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/IMG_7472.jpg" className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </div>
         
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">黒大豆栽培の極意<br/> 当社の徹底した管理と適応力</h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">
                当社では、黒大豆の栽培において、気温や日長に敏感な大豆の性質を十分に理解し、適切な管理を行っています。<br/>20～25度のやや暖かい気温でよく育つ大豆は、極端な暑さや寒さに弱いため、冷涼地では5月下旬から6月中旬に種まきを行うことで、晩霜害を避けつつ最適な生育環境を提供しています。<br/>また、種まきが遅れた場合は、植え付け間隔を狭くするなどの対策を講じています。</p>
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
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">黒大豆栽培の秘訣 <br/> 当社の徹底した品種選定と管理</h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">当社の黒大豆栽培は、品種選定から栽培カレンダーの活用に至るまで、細心の注意を払った管理が特徴です。<br/>地域や栽培時期に合わせた適切な品種を選び、日長や温度に対する反応を考慮しています。生育時期ごとの農業作業や病害虫の防除を計画的に行い、黒大豆の品質と安定生産を目標としています。</p>
             </div>
             
           </div>
         </div>

         {/* 動画コンテナを後に配置 */}
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/bean-leaf-2610454_1280.jpg" className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
            <img src="/img/27972838_s.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         </div>
         
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">北海道産黒大豆<br/> 栄養豊富で美しい黒の輝き</h2>
               <p className="text-center text-gray-500 sm:text-left font-bold mt-5">北海道産の黒大豆は、健康と美容に良いイソフラボンやアントシアニンを豊富に含み、高たんぱくで低脂肪、さらに食物繊維もたっぷりという、栄養価の高い食材です。表面には光沢があり、見た目にも美しい黒豆で、お料理を彩ります。<br/>特に調理時の煮崩れが少ないのが一番の特徴で、豆を柔らかくする際に蒸しても皮浮きが少なく、見た目も味も美しいお豆が炊けます。
              </p>
             </div>
             
           </div>
         </div>

       </div>
     </div>

     <div class="bg-bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">収穫の効率化と品質保持</h2>

      <p class="mx-auto max-w-screen-md text-center md:text-lg font-bold">当社では、黒大豆の収穫を効率化し、品質を保持するために<br/>最新のコンバインを活用しています。この先進的な収穫機械は、黒大豆を傷つけることなく収穫し、その豊かな風味と栄養価を保ちながら、さまざまな料理の原料として加工されます。</p>
    </div>
    

    <div class="grid gap-6 sm:grid-cols-2 fade">
      
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/IMG_7206.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">ヤンマー</span>
          <span class="text-lg font-semibold text-white lg:text-xl">大豆専用コンバイン</span>
        </div>
      </a>
      

      
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/IMG_7207.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-gray-300">収穫後</span>
          <span class="text-lg font-semibold text-white lg:text-xl">収穫直後の黒大豆</span>
        </div>
      </a>
      
      
    </div>
  </div>
  </div>
   </div> 

   <MobileFooter />
             </>
   
  )
}

export default MobileSoy