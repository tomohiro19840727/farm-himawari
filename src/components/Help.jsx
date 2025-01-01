import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Help = () => {

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
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-90">
          
          <div class="order-first w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5 fade">
            <img src="./img/macbook1985_TP_V4.jpg" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-left"/>
          </div>
          
          <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
            <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">『未来の農業へ、一歩先を行く技術』</h2>

            <p class="mb-8 text-gray-600 font-bold text-xl">
            私たちの農業は、最新のIT技術を取り入れた機械やシステムを使って、もっと効率的で、環境にも優しい農業を目指しています。<br/>ドローンで畑の状況をチェックしたり、GPS付きトラクターで精密な作業をしたり…。便利なだけじゃなく、美味しいお米を届けるための、大切なパートナーたちです！
           </p>

            <div class="mt-auto">
            <Link to="/machine" class="relative inline-flex items-center px-8 py-3 overflow-hidden text-sm font-medium text-indigo-600 border-2 border-indigo-600 rounded-lg hover:text-white group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative text-xl">機械の詳細</span>
            </Link>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Help
