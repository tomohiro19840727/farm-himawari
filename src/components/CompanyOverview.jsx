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
    <div class="bg-white py-6 sm:py-8 lg:py-12 fade">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">海も山も川もある美しい町の農場です！</h2>
  
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">北海道南西部、函館本線が町の中央を通る蘭越町(らんこしちょう)に私たちの農場、株式会社Farm・ひまわりはあります。町全体に自然があふれ、海・山・川すべての恵みが豊かなことが蘭越町の特徴です！！</p>
      </div>
      
  
      <div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New trends in Tech</a>
            </h2>
  
            <p class="mb-8 text-gray-500">当農場がある蘭越町は、海、山、川といった自然環境に恵まれた町。春から秋は釣りやサーフィン、バーベキューやキャンプを。冬季はニセコ等でウィンタースポーツ等多彩なアクティビティを楽しむことができます。</p>
          </div>
        </div>
       
  
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">Working with legacy stacks</a>
            </h2>
  
            <p class="mb-8 text-gray-500">春から秋にかけて、お米、麦、大豆を生産。大型農業機械を活用し、効率的に作業を進めています。自然の恵みをいっぱいに受け、豊かな農作物を育てています。</p>
          </div>
        </div>
       
  
       
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">10 best smartphones for devs</a>
            </h2>
  
            <p class="mb-8 text-gray-500">蘭越町は冬は豪雪、夏は温暖な気候、さらにニセコ連峰から湧き出る天然のミネラルをたっぷり含んだ清流で質の良いお米が取れることで有名、北海道で指折りの「らんこし米」を一緒に育てませんか。</p>
          </div>
        </div>
       
  
        
        <div class="flex flex-col overflow-hidden rounded-lg border bg-white">
          <a href="#" class="group relative block h-48 overflow-hidden bg-gray-100 md:h-64">
            <img src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>
  
          <div class="flex flex-1 flex-col p-4 sm:p-6">
            <h2 class="mb-2 text-lg font-semibold text-gray-800">
              <a href="#" class="transition duration-100 hover:text-indigo-500 active:text-indigo-600">8 High performance Notebooks</a>
            </h2>
  
            <p class="mb-8 text-gray-500">個人農家から法人化を行い、規模を拡大している当社。農家でありつつも、一般の会社のように今後も労働環境や待遇面の改善を随時行なっていく予定です。是非皆さんと一緒に働き、蘭越のおいしいお米を全国に届けたいと思っております！</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
   )
 }
 
 export default CompanyOverview