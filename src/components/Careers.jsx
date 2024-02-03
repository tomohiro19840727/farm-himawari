import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mb-20">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h1 className="text-4xl font-bold text-black sm:text-5xl md:text-4xl">株式会社 FARM・ひまわり <br />採用情報</h1>
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
                src="/img/IMG_7169.JPG"
                loading="lazy"
                alt="Farm Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>
          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mb-20">
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="/img/IMG_7169.JPG"
                loading="lazy"
                alt="Farm Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
             
              <h2 className="mb-4 text-2xl font-bold text-black">勤務地</h2>
              <p className="mb-4 text-gray-600">北海道磯谷郡蘭越町字初田172-1 <br/>
                   ※JR函館本線/蘭越駅より車で18分程度</p>
              <div className="mb-4">
                <h3 className="mb-2 font-bold text-gray-800">雇用形態</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>雇用期間の定めなし</li>
                  <li>試用期間あり (12ヶ月)</li>
                  <li>シーズンが終わる11月迄は試用期間となります。
                    その後は能力に応じて最大3月末まで試用期間となります。</li>
                  <li>※試用期間中の給与は季節雇用アルバイトと同額になります(給与欄に詳細記載)</li>
                  <li>※冬季試用期間中の場合は除雪等の仕事を紹介致します。</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">勤務時間</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>※法定通りの休憩時間あり</li>
                  <li>●試用期間終了後●
                     <br/>・4:00～19:00の間で8時間～10時間</li>
                     <li>※変動労働時間制を採用(2085時間/年)<br/>
                        月毎に所定勤務時間あり、超えた場合は別途残業代を支給</li>
                        <br/>
                        <li>●試用期間中●<br/>
                        ・4:00～19:00の間で8時間～10時間(時給制)</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">休日</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>3月～11月:月2日以上(希望休制)</li>
                  <li>※希望休以外は天候による</li>
                  <li>12月～2月:冬季休暇(全日休み)</li>
                  <li>※変動労働時間制を採用(2085時間/年)しており、月毎の所定勤務時間に沿って休日を設けております</li>
                </ul>
              </div>
            </div>
           
          </section>

          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row mb-20">
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h2 className="mb-4 text-2xl font-bold text-black">給与</h2>
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-600">
                  <li>月給: 240,000円 〜</li>
                  <li>●試用期間終了後● <br/>
                      《未経験》<br/>
                      ・大型特殊、大型免許なし
                      月給:240,000円～</li>
                  <li>大型特殊、大型免許所有者のいずれかを所有
                          月給:260,000円～</li>
                          <li>大型特殊、大型免許所有者
                    月給:280,000円～</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《農業経験者》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>月給:350,000円～ <br/>
                    ※大型特殊、大型免許所有者し扱える方</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《試用期間中給与》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <h5>《未経験者》</h5>
                  <li>時給:1,200円<br/>
                  給与例:1,200円✖️10時間✖️26日=312,000円
                  </li>
                  <br/>
                  <h5>《経験者》</h5>
                  <li>時給:1,400円<br/>
                  給与例:1,400円✖️10時間✖️26日=364,000円
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="/img/IMG_7169.JPG"
                loading="lazy"
                alt="Farm Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </section>

          <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
          <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
              <img
                src="/img/IMG_7169.JPG"
                loading="lazy"
                alt="Farm Image"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              <h2 className="mb-4 text-2xl font-bold text-black">待遇</h2>
              <div className="mb-4">
                <ul className="list-disc list-inside text-gray-600">
                  <li>賞与あり(※業績に応じて支給)</li>
                  <li>時間外勤務手当あり</li>
                  <li>冬季休暇あり</li>
                  <li>年末年始休暇あり</li>
                  <li>長期休暇相談可(※12月～2月にかけて休暇となります。)</li>
                  <li>車の貸与あり(10,000円/月)</li>
                  <li>マイカー通勤可(駐車場完備)</li>
                  <li>Wワーク可(※冬季休業中の副業可)</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《寮・社宅》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>単身寮 <br/>
                  ※空き状況は事前にご確認ください</li>
                </ul>
                <h3 className="mb-2 mt-4 font-bold text-gray-800">《応募条件》</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <h5>《年齢》</h5>
                  <li>69歳以下 ※長期勤続によるキャリア形成のため<br/>
                  ※経験者69歳以下、未経験50歳以下
                  </li>
                  <br/>
                  <h5>《学歴》</h5>
                  <li>不問<br/>
                  ※トラクター操作可能者、その他農機具を扱える方は尚可<br/>
                  (ロータリー・アッパー・しろかき・田植え機操作可能者、ドローン操作等)
                  </li>
                  <br/>
                  <h5>《免許》</h5>
                  <li>普通自動車免許(AT限定相談可)<br/>
                  ※大型免許、大型特殊免許保有者歓迎！<br/>
                  </li>
                  <br/>
                  <h5>《備考》</h5>
                  <li>求める人物像<br/>
                  <li>北海道で働きたい道外や遠方の方や、Iターン、Uターンの方</li>
                  <li>春から秋にかけて集中して働き、冬はプライベートを楽しみたい方</li>
                  </li>
                </ul>
                <h3 className="mb-2 mt-6 font-bold text-2xl text-gray-800">《応募の流れ》</h3>
                <h5>《選考フロー》</h5>
                <ul className="list-disc list-inside text-gray-600">
                  <li>応募(※お問い合わせフォームから応募できます)</li>
                  <li>面接 (※写真付き履歴書を持参ください)</li>
                  <li>採用</li>
                </ul>
              </div>
            </div>
           
          </section>
        </div>
      </div>

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
            <Link to="/" class=" inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">Home</Link>
            <Link to="/contact" class="ml-20 inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base">お問い合わせ</Link>
          </div>
        </div>
        
      </div>
    </div>
  </div>
    </>
  );
};

export default Careers;
