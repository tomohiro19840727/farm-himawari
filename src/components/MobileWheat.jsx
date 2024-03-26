import React from 'react'
import { useEffect } from 'react'
import videoBg1 from "../assets/wheat_-_17285 (540p).mp4";
import videoBg3 from "../assets/wheat_-_37655 (1080p).mp4";
import "./MobileWheat.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

  return (
    <>
   <section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade m-5">
           <div className="video-container6">
             <video src={videoBg1} autoPlay muted loop playsInline className="video" />
           </div>
   </section>
   
 

   <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      
      <div className='fade'>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <video src={videoBg3} autoPlay muted loop playsInline class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
        <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">「春よ恋」<br/> もちもちの極み、春の小麦粉</span>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社の春小麦は、春の穏やかな気候と肥沃な土壌を活用し、小麦の生育に最適な環境を提供しています。春小麦の成長過程では、適切な水分管理と害虫・病気対策を徹底し、小麦の健全な成長を促進しています。</p>
        </div>
      </div>
      

      
      <div className='fade'>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <video src={videoBg1} autoPlay muted loop playsInline  class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">『きたほなみ』<br/>秋小麦の収量と品質向上 </span>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社では、秋小麦の栽培において、土壌の特性や生育状況を十分に考慮しながら、追肥のタイミングと施肥量を適切に管理し、高品質な小麦の生産を目指しています。</p>
        </div>
      </div>
      

      
      <div className='fade'>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="/img/MOK_hitokirenopizza_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <span class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">国産小麦の誇り<br/> ふっくらもちもちの極上食感</span>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">当社の「春よ恋」は、国産小麦らしい味わいともちもちとした食感が特徴で、たんぱく含有量も多いため、パンやピザなどに適しています。<br/>私たちは、この「春よ恋」を通じて、北海道の豊かな自然と農業の技術を活かした、高品質な製品をお届けすることを目指しています。</p>
        </div>
      </div>
      

      
      <div className='fade'>
        <a href="#" class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="/img/002MITTE226_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-col">
          <h2 class="font-bold text-xl mb-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg">北海道の宝石! <br/>  小麦の多彩な魅力 </h2>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mb-10">「きたほなみ」は小麦粉の色や性質、食感も優れており、パン用、麺用、菓子用と幅広い用途で活躍します。強力粉から薄力粉まで、多様なニーズに応える「きたほなみ小麦」は、北海道の豊かな自然と農業技術が生んだ、まさに宝石のような存在です。</p>
        </div>
      </div>
      
    </div>
  </div>
</div>
             </>
   
  )
}

export default MobileWheat