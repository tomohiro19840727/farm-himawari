import React, { useEffect } from 'react'

const Contact = () => {
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
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">お問い合わせ</h2>
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">お米の注文や採用情報まで幅広く対応しております、お気軽にご相談ください。</p>
      </div>
      
      <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
        <div>
          <label for="first-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">名字</label>
          <input name="first-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div>
          <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">名前</label>
          <input name="last-name" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="sm:col-span-2">
          <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">メールアドレス</label>
          <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="sm:col-span-2">
          <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">題名</label>
          <input name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
        </div>
  
        <div class="sm:col-span-2">
          <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">相談内容</label>
          <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"></textarea>
        </div>
  
        <div class="flex items-center justify-between sm:col-span-2">
          <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">送信</button>
        </div>
      </form>     
    </div>
  </div>
  )
}

export default Contact