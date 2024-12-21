import React from 'react'
import { useEffect, useRef } from 'react'
import videoBg1 from "../assets/127734 (1080p).mp4";

import "./MobileRice.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


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

  return (
    <>
    <section class="h-full relative flex flex-4 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-lg fade m-5">
            <div className="video-container5">
              <video src={videoBg1} autoPlay muted loop playsInline className="video" />
            </div>
    </section>

    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-10 md:mb-16 fade">
      <h2 class="mb-4 text-center text-2xl font-bold text-white bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-lg shadow-lg md:mb-6 lg:text-4xl">『らんこし米』</h2>

      <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-bold">蘭越町で育つ米は、ただの食材にとどまらず、<br/>この地の豊かな自然、四季の移ろい、そして地域に根ざしたぬくもりが息づいています。<br/>香り高い炊きたての一粒が、<br/>あなたに蘭越町の物語を語りかけます。<br/><br/>どうぞ、この地の恵みをご堪能ください。</p>
    </div>

    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
     
      <div className='fade mb-8'>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="/img/FK+_IMG0364_TP_V4.jpg" loading="lazy" alt="Photo by engin akyurt" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col fade">
          <p class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mt-5">蘭越町、ここは一年を通して自然の恵みが溢れる地。冬の豪雪が春になると溶け出し、ニセコ連峰からの清らかな水が田を潤します。<br/><br/>この水は、天然のミネラルをたっぷり含んでおり、米作りには欠かせない恵みの源です。</p>
        </div>
      </div>
       
      <div className='fade mb-8'>
        <div class="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
          <img src="/img/JUNtexture1123936_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-col">
          <div class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl mt-5">この米を口にすれば、心はすぐにこの大地の一部と繋がり、食卓は笑顔と生命の喜びで溢れます。<br/><br/>雪解けがもたらすミネラルと愛情を吸い上げた私たちの米は、あなたを蘭越町の豊かな自然へと誘います。</div>
        </div>
      </div>
      
    </div>
  </div>
</div>

<div class="grid gap-6 sm:grid-cols-2 mb-10"> 
      <a href="#" class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/gohan151214238662_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ゆめぴりか</span>
        </div>
      </a>
      
      <div  class="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
        <img src="/img/ELFAIMG_1632_TP_V4.jpg" loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

        <div class="relative flex flex-col">
          <span class="text-lg font-semibold text-white lg:text-xl">蘭越米 ななつぼし</span>
        </div>
      </div>   
    </div>

    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8 fade">
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
        <div class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/mitte82028_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6 fade">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600"> 私たちの水田管理</div>
          </h2>

          <p class="mb-8 text-gray-500 font-bold">一面に広がる当社の緑の稲穂は、私たちの緻密な管理と情熱の証です。<br/>地域の気候と土壌の特性を深く理解し、水の管理から害虫対策まで、細部にわたるこだわりを持っています。このような徹底した管理が、安全で美味しいお米を育てる土台となっています。</p>

          <div class="mt-auto flex items-end justify-between">
            <div class="flex items-center gap-2">
            </div>
          </div>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <div to class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kissaten27jpegsrgb__92A0497-g_TP_V4.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">効率と品質を追求するコンバイン作業</div>
          </h2>

          <p class="mb-8 text-gray-500 font-bold">
          当社は先進のコンバイン技術による収穫作業で、効率と品質を追求しています。<br/>熟練の技術者が最適な収穫タイミングを見極め、お米の品質を保ちながら収穫量を最大化しています。
             </p>
        </div>
      </div>
      

      
      <div class="flex flex-col overflow-hidden rounded-lg border bg-white fade">
        <div class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
          <img src="/img/kamameshiPAR50519_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </div>

        <div class="flex flex-1 flex-col p-4 sm:p-6">
          <h2 class="mb-2 text-lg font-semibold text-gray-800">
            <div class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">ニセコの雪解け水が育む極上の味わい</div>
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

export default MobileRice