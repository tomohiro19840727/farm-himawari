import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Section from './components/Section';
import Home from './components/Home';
import CompanyOverview from './components/CompanyOverview';
import Careers from './components/Careers';
import Contact from './components/Contact';




function App() {
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
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
       <Header />
    <div className='fade'>
  <Routes>
    <Route  path="/companyoverview" element={<CompanyOverview />} />
    <Route  path="/" element={<Home />} />
    <Route  path="/careers" element={<Careers />} />
    <Route  path="/contact" element={<Contact />} />
   
  </Routes>
      </div>    
    </div>
   </Router>
    
    </>
  );
}

export default App;
