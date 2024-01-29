import React from 'react'

const Gallery = () => {
  return (
    <div class="bg-white py-12 mt-20">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class=" text-center  font-bold text-gray-800  text-3xl mb-10">種をまく春、命の息吹とともに、土地を目覚めさせる!</h2>
      <p className='text-center mb-20 font-serif text-xl'>農家の努力は終わりを知らず、彼らの情熱は絶え間なく燃え続ける。<br />
農家の麦や稲の一年の過程は、辛くも美しい、その努力の結晶なのです。</p>
  
      <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
        
        <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/tanbotohatake_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">水田</span>
        </a>
        
  
        
        <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/kissaten27jpegsrgb__92A0484-e_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">稲刈り</span>
        </a>
        
  
        
        <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/AME20181123B008_TP_V4.jpg" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">トラクター</span>
        </a>
        
  
        
        <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="./img/ZUBOTTYDSC_0981_TP_V4.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">畑</span>
        </a>
        
      </div>
  
      <div class="flex items-start justify-between gap-8 sm:items-center">
         
        <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
      </div>
    </div>
  </div>
  )
}

export default Gallery