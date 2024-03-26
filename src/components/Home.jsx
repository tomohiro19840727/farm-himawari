import React, { useEffect } from 'react'
import Gallery from './Gallery'
import Help from './Help'
import Footer from './Footer'
import Section from './Section'
import { useMediaQuery } from 'react-responsive'
import MobileSection from './MobileSection'
import MobileGallery from './MobileGallery'
import MobileHelp from './MobileHelp'
import Products from './Products'
import MobileProducts from './MobileProducts'
import MobileFooter from './MobileFooter'

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

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
    <>
    <div className='fade bg-gradient-to-r from-transparent via-green-200 to-yellow-200 fade'>

     <div class="mx-auto max-w-screen-2xl px-4 md:px-8 fade">
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
          <MobileProducts />
          )  : 
          (
            <Products  /> )}  
    
    {isMobile ? ( 
          <MobileHelp />
          )  : 
          (
            <Help  /> )}
    {isMobile ? ( 
          <MobileFooter />
          )  : 
          (
            <Footer  /> )}
     
    </div>
    </>
  )
}

export default Home