import React, { useEffect } from 'react'
import Gallery from './Gallery'
import Search from './Search'
import Team from './Team'
import Help from './Help'
import Footer from './Footer'
import Section from './Section'

const Home = () => {
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
       <Section />
    </div>
    <Gallery />
    
    {/* <Search /> */}
     
     {/* <Team /> */}
         
    <Help />
 
     <Footer />
    </div>
    </>
  )
}

export default Home