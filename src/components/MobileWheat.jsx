// import React from 'react'
// import { useEffect } from 'react'
// import videoBg1 from "../assets/127734 (1080p).mp4";
// import videoBg3 from "../assets/127734 (1080p).mp4";
// import "./MobileWheat.css"
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


// const MobileWheat = () => {

//  useEffect(() => {
//    window.scrollTo(0, 0);
//  }, []);

//  useEffect(() => {
//    const targets = document.getElementsByClassName("fade");
//    const observer = new IntersectionObserver((entries, observer) => {
//      entries.forEach((entry) => {
//        if (entry.isIntersecting) {
//          entry.target.classList.add("active");
//        } else {
//            entry.target.classList.remove("active");
//          }
//        });
//      });
 
//      Array.from(targets).forEach((target) => {
//        observer.observe(target);
//      });
 
//      return () => {
//        observer.disconnect();
//      };
//    }, []);

//   return (
//     <>
//    <section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade m-5">
//            <div className="video-container6">
//              <video src={videoBg1} autoPlay muted loop playsInline className="video" />
//            </div>
//    </section>
   
 

//    <div class="bg-white py-6 sm:py-8 lg:py-12">
//   <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
//     <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      
//       <div className='fade'>
//         <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <video src={videoBg3} autoPlay muted loop playsInline class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </a>

//         <div class="flex flex-col">
//         <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">「春よ恋」<br/> もちもちの極み、春の小麦粉</span>
//           <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社の春小麦は、春の穏やかな気候と肥沃な土壌を活用し、小麦の生育に最適な環境を提供しています。春小麦の成長過程では、適切な水分管理と害虫・病気対策を徹底し、小麦の健全な成長を促進しています。</p>
//         </div>
//       </div>
      

      
//       <div className='fade'>
//         <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <video src={videoBg1} autoPlay muted loop playsInline  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </a>

//         <div class="flex flex-col">
//           <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">『きたほなみ』<br/>秋小麦の収量と品質向上 </span>
//           <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社では、秋小麦の栽培において、土壌の特性や生育状況を十分に考慮しながら、追肥のタイミングと施肥量を適切に管理し、高品質な小麦の生産を目指しています。</p>
//         </div>
//       </div>
      

      
//       <div className='fade'>
//         <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src="/img/MOK_hitokirenopizza_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </a>

//         <div class="flex flex-col">
//           <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">国産小麦の誇り<br/> ふっくらもちもちの極上食感</span>
//           <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社の「春よ恋」は、国産小麦らしい味わいともちもちとした食感が特徴で、たんぱく含有量も多いため、パンやピザなどに適しています。<br/>私たちは、この「春よ恋」を通じて、北海道の豊かな自然と農業の技術を活かした、高品質な製品をお届けすることを目指しています。</p>
//         </div>
//       </div>
      

      
//       <div className='fade'>
//         <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
//           <img src="/img/002MITTE226_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
//         </a>

//         <div class="flex flex-col">
//           <h2 class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">北海道の宝石! <br/>  小麦の多彩な魅力 </h2>
//           <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">「きたほなみ」は小麦粉の色や性質、食感も優れており、パン用、麺用、菓子用と幅広い用途で活躍します。強力粉から薄力粉まで、多様なニーズに応える「きたほなみ小麦」は、北海道の豊かな自然と農業技術が生んだ、まさに宝石のような存在です。</p>
//         </div>
//       </div>
      
//     </div>
//   </div>
// </div>
//              </>
   
//   )
// }

// export default MobileWheat

import React from 'react'
import { useEffect } from 'react'
import "./MobileWheat.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from './Footer';


const MobileWheat = () => {

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
   <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
     
     <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
       <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Fields of Innovation！</h1>
       <h1 class="mb-8 text-2xl font-bold text-black sm:text-5xl md:mb-12 md:text-4xl">小麦の新たな挑戦！！</h1>

       <p class="mb-8 leading-relaxed font-bold md:mb-12 lg:w-4/5 xl:text-lg">私たちは、伝統的な小麦栽培に最先端の技術をプラスし、GPSトラクターやドローンを駆使した精密農業で、環境に優しい持続可能な未来を目指しています。</p>

       <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
       </div>
     </div>
     

     
     <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
       <img src="/img/IMG_8076.JPG" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
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
   <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
 <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
   
   <div class="mb-10 md:mb-16 fade">
     <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">小麦の収穫っていつがベスト？</h2>

     <p class="mx-auto font-bold max-w-screen-md text-center md:text-lg">小麦の収穫は、秋に種をまいて、翌年の夏（6月～8月）に行われます。<br/>地域や気候によっても少し違いますが、<br/>穂がしっかりと熟す「成熟期」から4日くらいが収穫のゴールデンタイムです。<br/>その期を私たちは逃しません！</p>
   </div>
   

   <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 fade">
     
     <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
       <img src="/img/IMG_8074.JPG" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </a>
     

     
     <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
       <img src="/img/IMG_8078.JPG" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </a>
     

     
     <a href="#" class="group relative flex h-48 items-end justify-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-96">
       <img src="/img/IMG_8077.JPG" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
     </a>    
   </div>
 </div>
</div>
   </div>

  <Footer />
             </>
   
  )
}

export default MobileWheat