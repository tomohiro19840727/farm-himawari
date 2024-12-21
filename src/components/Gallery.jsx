import React, { useEffect } from 'react';

const Gallery = () => {
  useEffect(() => {
    const targets = document.getElementsByClassName('fade');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
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
    <div className="bg-gradient-to-r from-transparent via-green-200 to-yellow-200 py-12 mt-20 fade">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
        <h2 className="text-center font-bold text-gray-800 text-6xl mb-10">
        次世代を担うスマート農業への挑戦
        </h2>
        <p className="text-center mb-20 font-serif text-3xl font-bold">
        私たちの会社は、最新の技術やデータ活用を通じて効率化と高品質な生産を実現し、<br/> 環境に配慮しながら持続可能な農業を目指します。<br/>また、次世代を担う農業のモデルケースとなるべく、挑戦を続けていきます。
        </p>
      </div>
    </div>
  );
};

export default Gallery;
