import React, { useEffect } from 'react'
import Gallery from './Gallery'
import Help from './Help'
import Footer from './Footer'
import Section from './Section'
import { useMediaQuery } from 'react-responsive'
import MobileSection from './MobileSection'
import MobileGallery from './MobileGallery'
import MobileHelp from './MobileHelp'

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <div className='fade'>

     <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
     {isMobile ? ( 
          <MobileSection />
          )  : 
          (
            <Section  /> )}
    </div>
    {isMobile ? ( 
          <MobileGallery />
          )  : 
          (
            <Gallery  /> )}
    
    {isMobile ? ( 
          <MobileHelp />
          )  : 
          (
            <Help  /> )}
     <Footer />
    </div>
    </>
  )
}

export default Home