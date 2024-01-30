import React, { useEffect } from 'react';

const Careers = () => {

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
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12 fade">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-4xl">株式会社高橋Agriculture・Farm 採用情報</h1>
              <h2 className="mb-8 text-2xl font-bold text-black sm:text-3xl  md:text-2xl">正社員・期間限定アルバイト募集</h2>
              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                私たちは、お米(水稲)、大豆、麦などの農作業全般を行っております。自然と共に生き、食卓に笑顔を届けるやりがいのある仕事を、一緒にしませんか？
              </p>
              <h2 className="mb-4 text-2xl font-bold text-black">仕事内容</h2>
              <p className="mb-4 text-gray-600">【農作物の生産スタッフ】</p>
              <div className="mb-4">
                <h3 className="mb-2 font-bold text-gray-800">《水稲》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>雪投げ、ハウスのビニールがけ、種もみまき</li>
                  <li>耕起(土を耕す)、田植えやその後の水管理</li>
                  <li>防除(病害虫などの予防と駆除)、あぜ草刈り、稲刈り、精米等</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《大豆》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>除草剤の散布、耕起(土を耕す)、種まき</li>
                  <li>防除(病害虫などの予防と駆除)、収穫作業</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《麦》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>耕起(土を耕す)、種まき</li>
                  <li>防除(病害虫などの予防と駆除)、収穫作業</li>
                </ul>
                <p className="mt-2 text-gray-600">※その他、農業機械の整備等もお願いします</p>
              </div>
              {/* Add more sections for '勤務地', '雇用形態', '雇用期間', etc. */}
              {/* Ensure you break down the information into sub-sections for readability */}
            </div>
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000"
                loading="lazy"
                alt="Farm Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
          {/* Add another section or div here for more content like company details, application process, etc. */}
        </div>
      </div>
    </>
  );
};

export default Careers;
