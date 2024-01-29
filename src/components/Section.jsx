import React from 'react'
import videoBg from "../assets/fields_-_41093 (540p).mp4";

const Section = () => {
  return (
    <section class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
           
    <video  src={videoBg} autoPlay muted loop playsInline loading="lazy" alt="Photo by Fakurian Design" class="absolute inset-0 h-full w-full object-cover object-center  opacity-70" />
    
    <div class="relative flex flex-col items-center p-4 sm:max-w-xl">
      <h1 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">Welcome to Farm-ひまわり</h1>
    </div>
    
  </section>
  )
}

export default Section