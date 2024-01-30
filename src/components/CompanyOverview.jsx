 import React, { useEffect } from 'react'
 
 const CompanyOverview = () => {

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
     <section class="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
    <div class="mb-8 flex flex-wrap justify-between md:mb-16">
      <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
        <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-5xl">ITと情熱が織りなす<br />最先端の米作り</h1>

        <p class="max-w-md leading-relaxed text-gray-500 xl:text-lg font-bold">私たちは、ITと技術を駆使し、環境に配慮した持続可能な方法で、質の高い米を生産しています。<br/>それぞれの粒に込められた情熱と、データに基づいた管理は、この米作りを最先端のものとしています。</p>
      </div>

      <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
        <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
          <img src="/img/スクリーンショット 2024-01-30 19.56.17.png" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
        </div>

        <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
          <img src="/img/mitte102520945_TP_V4.jpg" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
        </div>
      </div>
    </div>

    
  </section>
    
    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">海も山も川もある美しい町の農場です！</h2>
  
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg font-bold">北海道南西部、函館本線が町の中央を通る蘭越町(らんこしちょう)に私たちの農場、<br/>「株式会社Farm・ひまわり」はあります。<br/>町全体に自然があふれ、海・山・川すべての恵みが豊かなことが蘭越町の特徴です！！</p>
      </div>
      
  
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="/img/FK+_50A0694_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">四季を通じた自然の楽園</a>
            </h2>
  
            <p class="mb-8 text-gray-500 font-bold">当農場がある蘭越町は、海、山、川といった自然環境に恵まれた町。春から秋は釣りやサーフィン、バーベキューやキャンプを。<br/><br/>冬季はニセコ等でウィンタースポーツ等多彩なアクティビティを楽しむことができます。</p>
          </div>
        </div>
       
  
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="/img/IMG_7170.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">春から秋の農業革新</a>
            </h2>
  
            <p class="mb-8 text-gray-500 font-bold">春から秋にかけて、お米、麦、大豆を生産。大型農業機械を活用し、効率的に作業を進めています。<br/>自然の恵みをいっぱいに受け、豊かな農作物を育てています。</p>
          </div>
        </div>
       
  
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="/img/JUNtexture1123936_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">清流が育む質の良いお米</a>
            </h2>
  
            <p class="mb-8 text-gray-500 font-bold">蘭越町は冬は豪雪、夏は温暖な気候、さらにニセコ連峰から湧き出る天然のミネラルをたっぷり含んだ清流で質の良いお米が取れることで有名です。</p>
          </div>
        </div>
       
  
        
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="/img/domain458A0453_TP_V4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">待遇改善と拡大への道</a>
            </h2>
  
            <p class="mb-8 text-gray-500 font-bold">個人農家から法人化を行い、規模を拡大している当社。<br/>農家でありつつも、一般の会社のように今後も労働環境や待遇面の改善を随時行なっていく予定です。</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    </>
   )
 }
 
 export default CompanyOverview