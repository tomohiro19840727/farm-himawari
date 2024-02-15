import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
   
    const userID = process.env.REACT_APP_USER_ID;
    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    emailjs.init(process.env.REACT_APP_USER_ID);

    const template_param = {
      user_name: name,
      user_email: email,
      message: message
    };

    emailjs.send(serviceID,templateID, template_param, userID )
      .then((response) => {
          console.log('メールが送信されました');
          // フォームの送信後に入力内容をリセット
          setIsSubmitted(true);
          setName('');
          setEmail('');
          setMessage('');
        
      })
      .catch((error) => {
        console.error('エラー:', error);
      });
    };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
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
    <div class="py-6 sm:py-8 lg:py-12 fade bg-gradient-to-r from-transparent via-green-200 to-yellow-200">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">    
      <div class="mb-10 md:mb-16">
        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">お問い合わせ</h2>
        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">お米の注文や採用情報まで幅広く対応しております、お気軽にご相談ください。</p>
      </div>
      
      <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"  onSubmit={handleSubmit}>
        <div>
          <label for="last-name" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">名前</label>
          <input name="last-name" type="text" placeholder="名前を記入してください" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"  value={name}
                  onChange={(e) => setName(e.target.value)}/>
                    {name === '' && (
                  <p className="text-red-500 text-xs italic">名前を入力してください。</p>
                )}
        </div>
  
        <div class="sm:col-span-2">
          <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">メールアドレス</label>
          <input name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" 
           placeholder="example@yahoo.co.jp"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
           {email === '' && (
                  <p className="text-red-500 text-xs italic">メールアドレスを入力してください。</p>
                  )}
        </div>
  
        
  
        <div class="sm:col-span-2">
          <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">相談内容</label>
          <textarea name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
            {message === '' && (
                  <p className="text-red-500 text-xs italic">お問合せ内容を入力してください。</p>
                  )}
        </div>
  
        <div class="flex items-center justify-between sm:col-span-2">
          <button  type="submit" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">送信</button>
        </div>
        {isSubmitted && (
                  <p className="text-green-400 text-lg text-bold">
                  ありがとうございます。お問合せ内容を受け付けました。
                  </p>
                  )}
      </form>     
    </div>
  </div>
  )
}

export default Contact