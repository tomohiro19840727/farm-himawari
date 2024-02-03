import React from 'react'
import videoBg1 from "../assets/43368_1280x720.mp4";
import videoBg2 from "../assets/grain_-_121876 (720p) (1).mp4";
import { Link } from 'react-router-dom';


const Products = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
            }}>
            <video src={videoBg1} autoPlay muted loop playsInline className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">ニセコの恵みが育む、<br/> 蘭越町の逸品『らんこし米』</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">清流日本一に輝く尻別川の流域に広がる肥沃な土壌と、雄大なニセコ連峰から湧き出る天然のミネラルをたっぷり含んだ清流が、良質でおいしい「らんこし米」を育てています</p>
              </div>
              <Link to="/rice" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative">詳細</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">

          {/* テキストコンテナを先に配置 */}
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">北海道の恵みを受けた小麦、<br/> 春の力強さと秋の豊穣</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">当社は春に播かれる春小麦と秋に収穫される秋小麦、それぞれが北海道の蘭越町で育まれ、皆さんの食卓に多様な味わいとしてお届けてしています。</p>
              </div>
              <Link to="/wheat" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative">詳細</span>
              </Link>
            </div>
          </div>

          {/* 動画コンテナを後に配置 */}
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%)' // 斜めの切り取りを適用
            }}>
            <video src={videoBg2} autoPlay muted loop playsInline className="video" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
           
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          
          <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' // 斜めの切り取りを適用
            }}>
             <img src="/img/27972838_s.jpg" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </div>
          
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">漆黒の巨粒、<br/> ふっくらもちもちの極上食感</h2>
                <p className="text-center text-gray-500 sm:text-left font-bold mt-5">黒大豆はその圧倒的な大きさと卓越した食味で知られています。この大豆の特徴は煮ると皮が破れにくく、しっかりと膨らみます。さらに、その深い漆黒色と光沢は見た目にも美しく、食べる前から期待を高めます。
               </p>
              </div>
              <Link to="/soy" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span class="relative">詳細</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

              </>
  )
}

export default Products
