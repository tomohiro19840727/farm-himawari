import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <div class="bg-green-300 py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div class="grid gap-6 rounded-lg bg-indigo-100 p-6">
        <div class="text-indigo-500 text-center text-2xl">
        <Link to="/companyoverview">会社概要</Link>
        </div>
      </div>

      <div class="grid gap-6 rounded-lg bg-indigo-100 p-6 mt-20">
        <div class="text-indigo-500 text-center text-2xl">
        <Link to="/careers">採用情報</Link>
        </div>
      </div>

      <div class="grid gap-6 rounded-lg bg-indigo-100 p-6 mt-20">
        <div class="text-indigo-500 text-center text-2xl">
        <Link to="/contact">お問い合わせ</Link>
        </div>
      </div>
    </div>
  </div>

  <Link to="/" class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block mt-10">
<span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
<span class="relative group-hover:text-white text-2xl">Home</span>
</Link>
    </>
  )
}

export default Menu