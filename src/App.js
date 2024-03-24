import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Home from './components/Home';
import CompanyOverview from './components/CompanyOverview';
import Careers from './components/Careers';
import Contact from './components/Contact';
import { useMediaQuery } from 'react-responsive';
import MobileHeader from './components/MobileHeader';
import Menu from './components/Menu';
import MobileCareers from './components/MobileCareers';
import Rice from './components/Rice';
import Wheat from './components/Wheat';
import Soy from './components/Soy';
import MobileRice from './components/MobileRice';
import MobileWheat from './components/MobileWheat';
import MobileSoy from './components/MobileSoy';




function App() {
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
   <Router>
      <div class="mx-auto  bg-gradient-to-r from-transparent via-green-200 to-yellow-200">
      {isMobile ? ( 
          <MobileHeader />
          )  : 
          (
            <Header /> )}
    <div className='fade'>
  <Routes>
    <Route  path="/companyoverview" element={<CompanyOverview />} />
    <Route  path="/" element={<Home />} />
    <Route  path="/careers" element={
      <div>
     {isMobile ? ( 
       <MobileCareers />
       )  : 
       (
         <Careers /> )}
         </div>
    } />
    <Route  path="/contact" element={<Contact />} />
    <Route  path="/menu" element={<Menu />} />
    <Route  path="/rice" element={<Rice />} />
    <Route  path="/mobilerice" element={<MobileRice />} />
    <Route  path="/mobilewheat" element={<MobileWheat />} />
    <Route  path="/mobilesoy" element={<MobileSoy />} />
    <Route  path="/wheat" element={<Wheat />} />
    <Route  path="/soy" element={<Soy />} />
   
   
  </Routes>
      </div>    
    </div>
   </Router>
    
    </>
  );
}

export default App;
