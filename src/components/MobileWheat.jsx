import React from 'react'
import { useEffect } from 'react'
import "./MobileWheat.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from './Footer';
import MobileFooter from './MobileFooter';


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
     

     
     <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg ">
       <img src="/img/IMG_8076.JPG" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover" />
     </div>
     
   </section>
 </div>
</div>


<div class="bg-white py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      
      <div class="fade">
        <div class="group mb-2 block h-56 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="/img/sunset-4342426_1280.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
        
        <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">「春よ恋」<br/> もちもちの極み、春の小麦粉</h2>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mt-5">当社の春小麦の成長過程では、適切な水分管理と害虫・病気対策を徹底し、小麦の健全な成長を促進しています。</p>
        </div>
      </div>
      
      <div>
        <div class="group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-10 fade h-56">
          <img src="/img/wheat-3506758_640.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
        <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">「『きたほなみ』<br/>秋小麦の収量と品質向上</h2>
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl fade mt-5">当社では、秋小麦の栽培において、土壌の特性や生育状況を十分に考慮しながら、追肥のタイミングと施肥量を適切に管理し、高品質な小麦の生産を目指しています</p>
        </div>
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

  <MobileFooter />
             </>
   
  )
}

export default MobileWheat