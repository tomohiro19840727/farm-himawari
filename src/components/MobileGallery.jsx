import React from 'react'
import { Link } from 'react-router-dom'

const MobileGallery = () => {
  return (
    <div class="bg-white py-12 mt-20">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <h2 class=" text-center  font-bold text-gray-800  text-3xl mb-10">デジタルの革新が<br/>土地を目覚めさせ、<br/><br/>命の息吹を<br/>データと共鳴させる! </h2>
      <p className='text-center mb-20 font-serif text-xl font-bold'>先端技術を農業に取り入れることで、<br/>伝統的な米作りに<br/>新しい息吹を吹き込んでいます。<br /><br/>
      私たちの米は、<br/>最新技術と伝統的な農法が融合し、<br/>品質と味に妥協はありません!</p>
  
      <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
        
        <Link to="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/tanbotohatake_TP_V4.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">水田</span>
        </Link>
        
  
        
        <Link to="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/kissaten27jpegsrgb__92A0484-e_TP_V4.jpg" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">稲刈り</span>
        </Link>
        
  
        
        <Link to="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="/img/スクリーンショット 2024-01-30 14.42.42.png" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">機械</span>
        </Link>
        
  
        
        <Link to="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
          <img src="./img/ZUBOTTYDSC_0981_TP_V4.jpg" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
  
          <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
  
          <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">畑作</span>
        </Link>
        
      </div>
    </div>
  </div>
  )
}

export default MobileGallery