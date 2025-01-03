import React, { useEffect } from 'react'
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
    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 fade">
      <div className="mx-auto max-w-screen-2xl px-4 fade">
      <div class="group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg h-52">
          <img src="/img/ELFAIMG_1632_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center" />
        </div>
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
            <div className="flex w-full flex-col items-center sm:block">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">ニセコの恵みが育む、<br/> 蘭越町の逸品『らんこし米』</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">雄大なニセコ連峰から湧き出る天然のミネラルをたっぷり含んだ清流が、良質でおいしい『らんこし米』を育てています。</p>
              </div>
              <Link to="/mobilerice" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full">
              <span class="relative">詳細</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
      <div class="group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg h-52">
          <img src="/img/OHT92_ichimennomugibatake_TP_V4.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center" />
        </div>
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10 fade">
            <div className="flex w-full flex-col items-center sm:block fade">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">北海道の恵みを受けた小麦、<br/> 春の力強さと秋の豊穣</h2>
                <p className="text-center text-gray-500 sm:text-left mt-5 font-bold">当社は春に播かれる春小麦と秋に収穫される秋小麦、それぞれが北海道の蘭越町で育まれ、皆さんの食卓に多様な味わいとしてお届けてしています。</p>
              </div>
              <Link to="/mobilewheat" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
              <span class="relative">詳細</span>
              </Link>
            </div>
          </div>
           
        </div>
      </div>
    </div>

    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-6 sm:py-8 lg:py-12 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
      <div class="group mb-2 block overflow-hidden rounded-lg bg-gray-100 shadow-lg h-52">
          <img src="/img/27972838_s.jpg" loading="lazy" alt="Photo by Austin Wade" class="h-full w-full object-cover object-center" />
        </div>
        <div className="flex overflow-hidden rounded-lg bg-gray-100">
          
          <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10 fade">
            <div className="flex w-full flex-col items-center sm:block fade">
              <div className="mb-4 sm:mb-8">
                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">漆黒の巨粒、<br/> ふっくらもちもちの極上食感</h2>
                <p className="text-center text-gray-500 sm:text-left font-bold mt-5">黒大豆の特徴は煮ると皮が破れにくく、しっかりと膨らみます。さらに、その深い漆黒色と光沢は見た目にも美しく、食べる前から期待を高めます。
               </p>
              </div>
              <Link to="/mobilesoy" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
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

export default MobileProducts
