import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/IMG_7780.MOV";
import "./Rice.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Footer from './Footer';



const Rice = () => {
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
              <div className="text-container1">          
                <h2 ref={aboutRef2} className="text-3xl font-bold sm:text-4xl md:text-5xl    animate-delayed-tracking-in-expand">ニセコの恵み 『らんこし米』</h2>
              </div>
            </div>
          </SwiperSlide>  
    </Swiper>
    </section>

    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl">らんこし米</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-bold">蘭越町で育つ米は、ただの食材にとどまらず、<br/>この地の豊かな自然、四季の移ろい、そして地域に根ざしたぬくもりが息づいています。<br/>香り高い炊きたての一粒が、あなたに蘭越町の物語を語りかけます。<br/>どうぞ、この地の恵みをご堪能</p>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">

         {/* テキストコンテナを先に配置 */}
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl"></h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold text-2xl">私たちは「アルスプラウト」というシステムを導入しました。これは、スマホやタブレットを使って遠隔からハウス内の温度管理や開閉作業を自動化・操作できる、IT特化型のクラウドシステムです。見やすい画面で設定やモニタリングが可能で、LINEやメールで警報通知も受け取れます。このシステムを活用し、効率的に稲のハウス栽培を行っています。</p>
             </div>
             
           </div>
         </div>

         {/* 動画コンテナを後に配置 */}
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/スクリーンショット 2024-12-14 18.23.04.png" class="absolute inset-0 h-full w-full object-cover object-top" />
         </div>
          
       </div>
     </div>
   </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">
         
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
           }}>
            <img src="/img/15D8BEE2-1A16-4637-BC01-EF7C8D20DFAD.jpeg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-bottom transition duration-200 group-hover:scale-110" />
         </div>
         
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10 fade">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">
               </h2>
               <p className="text-center text-gray-500 sm:text-left font-bold mt-5 text-2xl">適切な温湿度管理など、細やかな設定を施すことも可能です。「たくさんハウスがあるため、環境計測システムの内気象ノードを３台導入しました。また異常動作などを、クラウドからの警報メールとして受け取ることができるため、万が一の際にも安心です。
              </p>
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
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl"></h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold text-2xl">私たちは高橋製品の「ボグボール」というブロードキャスターを導入しました。GPS機能を搭載しており、肥料を均一に散布できるだけでなく、作物や土地の状況に応じて量を自動調整するスピード連動や可変施肥機能も備えています。これにより、効率的で無駄のない肥料散布が可能になり、作業の負担を大幅に軽減しています。</p>
             </div>
             
           </div>
         </div>

         {/* 動画コンテナを後に配置 */}
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/IMG_7411.jpg" class="absolute inset-0 h-full w-full object-cover object-center" />
         </div>
          
       </div>
     </div>
   </div>

   <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
     <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
       <div className="flex overflow-hidden rounded-lg bg-gray-100">
         
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
           }}>
            <img src="/img/スクリーンショット 2024-12-14 19.18.00.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover" />
         </div>
         
         <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10 fade">
           <div className="flex w-full flex-col items-center sm:block">
             <div className="mb-4 sm:mb-8">
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">
               </h2>
               <p className="text-center text-gray-500 sm:text-left font-bold mt-5 text-2xl">『ワタラス』を導入することで水管理の自動化・デジタル化・スマート化により、クラウド技術を活用して省力化や見える化、遠くにいても水位や水温を確認でき、遠隔操作で水の出し入れを行うことが可能になりました。
              </p>
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
               <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl"></h2>
               <p className="text-center text-gray-500 sm:text-left mt-5 font-bold text-2xl">私たちは、田植え機にGPSを導入しました。このシステムにより、田植え作業の精度が格段に向上しました。直線を正確に植えることができるため、ムラや隙間が減り、苗の成長が均一になります。また、作業効率も大幅に向上し、従来よりも短時間で広範囲の田植えが可能です。</p>
             </div>
             
           </div>
         </div>

         {/* 動画コンテナを後に配置 */}
         <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
           style={{
             clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
           }}>
           <img src="/img/8150E62D-4143-4274-82DC-821B1CB7ADDC.jpeg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover" />
         </div>
          
       </div>
     </div>
   </div>


   

     <div class="bg-bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="grid gap-6 sm:grid-cols-2"> 
      <div class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/gohan151214238662_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
        <div class="relative flex flex-col">
          
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ゆめぴりか</span>
        </div>
      </div>
      
      <div class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/ELFAIMG_1632_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center" />
        <div class="relative flex flex-col">
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ななつぼし</span>
        </div>
      </div>   
    </div>
  </div>
  </div>
          </div> 
          </div> 
    

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 fade">
      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/スクリーンショット 2024-12-15 15.31.37.png" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6 fade">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
             私たちの水田管理
          </h2>

          <p class="mb-8 text-gray-500 font-bold">私たちは、水田管理の効率化と精度向上のために、軽量で機敏な農業ドローン「T25」を導入しています。このドローンは折りたたみ式で、一人でも簡単に操作できる設計です。小型で離着陸が容易なため、狭い圃場でも活躍します。</p>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <div class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kissaten27jpegsrgb__92A0497-g_TP_V4.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
          効率と品質を追求するコンバイン作業
          </h2>

          <p class="mb-8 text-gray-500 font-bold">
          当社は先進のコンバイン技術による収穫作業で、効率と品質を追求しています。<br/>熟練の技術者が最適な収穫タイミングを見極め、お米の品質を保ちながら収穫量を最大化しています。
             </p>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <div  class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kamameshiPAR50519_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            ニセコの雪解け水が育む極上の味わい
          </h2>

          <p class="mb-8 text-gray-500 font-bold">当社の「らんこし米」は、はモチモチとした食感と程よい甘さを持ち、粘りが強く、美しい艶が特徴です。<br/>私たちが丹精込めて作るらんこし米は、お客様にとって特別な食卓の一品となることを願っています。</p>       
        </div>
      </div>     
    </div>
  </div>
</div>

 <Footer />
      </>
  )
}

export default Rice