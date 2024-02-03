import React from 'react'
import { Link } from 'react-router-dom'

const Help = () => {
  return (
    <div class="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
        
        <div class="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
          <img src="./img/macbook1985_TP_V4.jpg" loading="lazy" alt="Photo by Andras Vas" class="h-full w-full object-cover object-center" />
        </div>
        
  
        
        <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
          <h2 class="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">『私たちと一緒にIT農業を始めませんか？』</h2>
  
          <p class="mb-8 max-w-md text-gray-600 font-bold">

          経験やスキルは一切問いません。大切なのは、農業に対する興味と、一緒に学び成長していく心です。

          どうぞお気軽にお問い合わせください。一緒に、豊かな自然の中での新しい生活を始めましょう。</p>
  
          <div class="mt-auto">
            <Link to="/careers" class=" inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">採用情報</Link>
            <Link to="/contact" class="ml-20 inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">お問い合わせ</Link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Help