import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/IMG_7780.MOV";
import "./MobileRice.css"
import  {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import MobileFooter from './MobileFooter';



const MobileRice = () => {
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
                <h2 ref={aboutRef2} className="text-3xl font-bold sm:text-4xl md:text-5xl    animate-delayed-tracking-in-expand">ニセコの恵み <br/>『らんこし米』</h2>
              </div>
            </div>
          </SwiperSlide>  
    </Swiper>
    </section>

    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
    <div class="mb-10 md:mb-16">
      <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-4xl">らんこし米</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-bold">蘭越町で育つ米は、ただの食材にとどまらず、<br/>この地の豊かな自然、四季の移ろい、そして地域に根ざしたぬくもりが息づいています。<br/>香り高い炊きたての一粒が、あなたに蘭越町の物語を語りかけます。<br/>どうぞ、この地の恵みをご堪能ください</p>
    </div>

    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">

    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      
      <div class="fade">
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="/img/スクリーンショット 2024-12-14 18.23.04.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">私たちは「アルスプラウト」というシステムを導入しました。これは、スマホやタブレットを使って遠隔からハウス内の温度管理や開閉作業を自動化・操作できる、IT特化型のクラウドシステムです。</p>
        </div>
      </div>
      
      <div>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-10 fade">
          <img src="/img/15D8BEE2-1A16-4637-BC01-EF7C8D20DFAD.jpeg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl fade">適切な温湿度管理など、細やかな設定を施すことも可能です。「たくさんハウスがあるため、環境計測システムの内気象ノードを３台導入しました。また異常動作などを、クラウドからの警報メールとして受け取ることができるため、万が一の際にも安心です。</p>
        </div>
      </div>
      
      <div>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-10 fade">
          <img src="/img/IMG_7411.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">私たちは高橋製品の「ボグボール」というブロードキャスターを導入しました。GPS機能を搭載しており、肥料を均一に散布できるだけでなく、作物や土地の状況に応じて量を自動調整するスピード連動や可変施肥機能も備えています。</p>
        </div>
      </div>
      
      <div>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-10 fade">
          <img src="/img/スクリーンショット 2024-12-14 19.18.00.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">『ワタラス』を導入することで水管理の自動化・デジタル化・スマート化により、クラウド技術を活用して省力化や見える化、遠くにいても水位や水温を確認でき、遠隔操作で水の出し入れを行うことが可能になりました。</p>
        </div>
      </div>
      

      <div>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg mt-10 fade">
          <img src="/img/8150E62D-4143-4274-82DC-821B1CB7ADDC.jpeg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col mt-5 fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">私たちは、田植え機にGPSを導入しました。このシステムにより、田植え作業の精度が格段に向上しました。直線を正確に植えることができるため、ムラや隙間が減り、苗の成長が均一になります。</p>
        </div>
      </div>
    </div>
  </div>
</div>

    
    

   
  </div>
</div>

 <MobileFooter />
      </>
  )
}

export default MobileRice