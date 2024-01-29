import { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header';
import Section from './components/Section';
import Home from './components/Home';




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
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
       <Section />
    </div>
  <Routes>
    <Route  path="/" element={<Home />} />
   
  </Routes>
      </div>    
   </Router>
    </>
  );
}

export default App;
