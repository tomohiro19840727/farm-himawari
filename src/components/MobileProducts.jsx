import React, { useEffect } from 'react'
import videoBg1 from "../assets/43368_1280x720.mp4";
import videoBg2 from "../assets/grain_-_121876 (720p) (1).mp4";
import { Link } from 'react-router-dom';


const MobileProducts = () => {


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
    <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      
      <div className='fade'>
        <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <video src={videoBg1} autoPlay muted loop playsInline className="video" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <h1 class="text-black mb-3 font-bold">蘭越町の逸品『らんこし米』</h1>
            <p class="text-sm font-bold text-gray-800">ニセコ連峰のミネラルを含んだ清流が、<br/>美味しい「らんこし米」を育てています!</p>
          </div>
        </div>
      </div>
      <Link to="/mobilerice" class="mb-10 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span class="relative text-white">詳細はこちら</span>
      </Link>
     
      
      <div className='fade'>
        <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <video src={videoBg2} autoPlay muted loop playsInline className="video" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <h1 class="text-black font-bold mb-3">北海道の恵みを受けた小麦</h1>
            <p class="text-sm font-bold text-gray-800 lg:text-xl">春小麦と秋小麦を多様な味わいとして<br/>お届けしています!</p>
          </div>
        </div>
      </div>

      <Link to="/mobilewheat" class="mb-10 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span class="relative text-white">詳細はこちら</span>
      </Link>

      <div className='fade'>
        <div class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="/img/27972838_s.jpg" autoPlay muted loop playsInline className="video" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <h1 class="text-black mb-3 font-bold">漆黒の巨粒</h1>
            <p class="text-sm font-bold text-gray-800 lg:text-xl">黒大豆は深い漆黒色と光沢は見た目にも美しく、<br/>食べる前から期待を高めます!</p>
          </div>
        </div>
      </div>
      
      <Link to="/mobilesoy" class="mb-10 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
      <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span class="relative text-white">詳細はこちら</span>
      </Link>

    </div>
  </div>
</div>
                  </>
  )
}

export default MobileProducts
