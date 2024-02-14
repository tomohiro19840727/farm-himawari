import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/188923 (540p).mp4";
import videoBg2 from "../assets/tractor_-_43044 (720p).mp4";
import "./Rice.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';



const Rice = () => {
    const aboutRef2 = useRef(null);

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
              <div className="text-container1">          
                <h2 ref={aboutRef2} className="text-3xl font-bold sm:text-4xl md:text-5xl    animate-delayed-tracking-in-expand">ニセコの恵み 『らんこし米』</h2>
              </div>
            </div>
          </SwiperSlide>  
    </Swiper>
    </section>

    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl">らんこし米</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-bold">蘭越町で育つ米は、ただの食材にとどまらず、<br/>この地の豊かな自然、四季の移ろい、そして地域に根ざしたぬくもりが息づいています。<br/>香り高い炊きたての一粒が、あなたに蘭越町の物語を語りかけます。<br/>どうぞ、この地の恵みをご堪能ください。</p>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">

         {/* テキストコンテナを先に配置 */}
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl"></h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold text-2xl">蘭越町、ここは一年を通して自然の恵みが溢れる地。冬の豪雪が春になると溶け出し、ニセコ連峰からの清らかな水が田を潤します。<br/><br/>この水は、天然のミネラルをたっぷり含んでおり、米作りには欠かせない恵みの源です。</p>
             </div>
             
           </div>
         </div>

         {/* 動画コンテナを後に配置 */}
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/FK+_IMG0364_TP_V4.jpg" autoPlay muted loop playsInline className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
         </div>
          
       </div>
     </div>
   </div>

    <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2 fade"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
            }}>
            <video src={videoBg2} autoPlay muted loop playsInline className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">
         
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
           }}>
            <img src="/img/JUNtexture1123936_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
         </div>
         
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10 fade">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">
               </h2>
               <p className="text-center text-gray-500 sm:text-left font-bold mt-5 text-2xl">この米を口にすれば、心はすぐにこの大地の一部と繋がり、食卓は笑顔と生命の喜びで溢れます。<br/><br/>雪解けがもたらすミネラルと愛情を吸い上げた私たちの米は、あなたを蘭越町の豊かな自然へと誘います。
              </p>
             </div>
           </div>
         </div>
       </div>
     </div>
     <div class="bg-bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    
  

    <div class="grid gap-6 sm:grid-cols-2"> 
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/gohan151214238662_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ゆめぴりか</span>
        </div>
      </a>
      
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/ELFAIMG_1632_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ななつぼし</span>
        </div>
      </a>   
    </div>
  </div>
  </div>
   </div> 
    

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 fade">
      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/mitte82028_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6 fade">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"> 私たちの水田管理</a>
          </h2>

          <p class="mb-8 text-gray-500 font-bold">一面に広がる当社の緑の稲穂は、私たちの緻密な管理と情熱の証です。<br/>地域の気候と土壌の特性を深く理解し、水の管理から害虫対策まで、細部にわたるこだわりを持っています。このような徹底した管理が、安全で美味しいお米を育てる土台となっています。</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
            </div>
          </div>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kissaten27jpegsrgb__92A0497-g_TP_V4.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">効率と品質を追求するコンバイン作業</a>
          </h2>

          <p class="mb-8 text-gray-500 font-bold">
          当社は先進のコンバイン技術による収穫作業で、効率と品質を追求しています。<br/>熟練の技術者が最適な収穫タイミングを見極め、お米の品質を保ちながら収穫量を最大化しています。
             </p>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kamameshiPAR50519_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </a>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ニセコの雪解け水が育む極上の味わい</a>
          </h2>

          <p class="mb-8 text-gray-500 font-bold">当社の「らんこし米」は、はモチモチとした食感と程よい甘さを持ち、粘りが強く、美しい艶が特徴です。<br/>私たちが丹精込めて作るらんこし米は、お客様にとって特別な食卓の一品となることを願っています。</p>       
        </div>
      </div>     
    </div>
  </div>
</div>
      </>
  )
}

export default Rice