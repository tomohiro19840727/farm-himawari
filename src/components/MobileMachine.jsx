import React, { useEffect } from 'react'
import MobileFooter from './MobileFooter';

const MobileMachine = () => {

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
    
      <section class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="mb-8 flex flex-wrap justify-between md:mb-16">
          <div class="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Smart Farming</h1>
            <h1 class="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-3xl">農業をもっとカンタンに!</h1>
    
            <p class="max-w-md leading-relaxed font-bold text-sm">ドローンで空から管理し、自動運転のトラクターや防除機が精密な作業をサポート。巻き上げ機も効率的で、農作業の負担をぐっと軽くします。</p>
          </div>
    
          <div class="mb-12 flex w-full md:mb-16 lg:w-2/3">
            <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
              <img src="/img/スクリーンショット 2024-12-21 17.33.31.png" loading="lazy" alt="Photo by Kaung Htet" class="h-full w-full object-cover object-center" />
            </div>
    
            <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <img src="/img/IT.jpg" loading="lazy" alt="Photo by Manny Moreno" class="h-full w-full object-cover object-center" />
            </div>
          </div>
        </div>
    
        <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
        </div>
      </section>
    </div>
    
    
    
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
        
        <div class="mb-10 md:mb-16">
          <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">未来農業を動かすテクノロジー</h2>
    
          <p class="mx-auto max-w-screen-md text-center font-bold text-sm">ドローンや自動運転トラクター、効率的な巻き上げ機に,頼れるトラックたち。<br/>最新のテクノロジーを使って、<br/>農業がもっと楽に、もっとスマートに！<br/>大変な作業をサポートする頼もしい相棒たちです。</p>
        </div>
        
    
        <div class="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
        
          <div>
            <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/スクリーンショット 2024-12-22 16.55.13.png" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">アルスプラウト</a>
                <span class="text-gray-500">自動巻き上げ機</span>
              </div>
    
             
            </div>
          </div>
        
    
        
          <div>
            <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/IMG_8081.JPG" loading="lazy" alt="Photo by Nick Karvounis" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">ボグボール</a>
                <span class="text-gray-500">セクションコントロール付</span>
              </div>
            </div>
          </div>
       
    
       
          <div>
            <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/IMG_8082.JPG" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">８トントラック</a>
                <span class="text-gray-500">セーフティーローダー付</span>
              </div>
            </div>
          </div>
       
    
       
          <div>
            <a href="#" class="group relative mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
              <img src="/img/IMG_7698.JPG" loading="lazy" alt="Photo by Vladimir Fedotov" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
            </a>
    
            <div class="flex items-start justify-between gap-2 px-2">
              <div class="flex flex-col">
                <a href="#" class="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl">T25ドローン</a>
                <span class="text-gray-500">粒剤散布装置付</span>
              </div>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    
    
    
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-96">
    
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">直感操作で作業効率アップ！</h2>
            <h2 class="mb-4 text-xl font-bold text-white md:text-2xl lg:text-2xl">安定走行でどんな環境でもスムーズ収穫</h2>
    
            <p class="mb-8 max-w-md text-gray-400">直感的な操作性で扱いやすく、どんな場面でも安定したパフォーマンスを発揮！湿田やほ場入り口でも安定した姿勢で走行・作業ができるから、収穫作業がスムーズに進みます。さらに、耐久性も高く、長時間の作業も安心です！</p>
          </div>
    
    
    
          <div class="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img src="/img/IMG_7776.jpg" loading="lazy" alt="Photo by Dom Hill" class="h-full w-full object-cover object-center" />
          </div>
    
        </div>
      </div>
    </div>
    
    
    
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    
    <div class="mb-10 md:mb-16">
    </div>
    

    <div class="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="/img/IMG_8083.jpg" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-indigo-500 md:text-lg">防除機</div>
          <p class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">900リットル</p>
        </div>
      </div>
      

      
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="/img/IMG_7727.JPG" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
        </div>

        <div>
          <div class="font-bold text-indigo-500 md:text-lg">自動操作
            システム
          </div>
        </div>
      </div>
      

      
      <div>
        <div class="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src="/img/スクリーンショット 2024-12-22 17.30.58.png" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-top" />
        </div>

        <div>
          <div class="font-bold text-indigo-500 md:text-lg">ほ場水管理システム WATARAS</div>
          <p class="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">スマホで水管理が可能</p>

        </div>
      </div>
    </div>
  </div>
</div>
    
 <MobileFooter />
    
    </>
    )
}

export default MobileMachine