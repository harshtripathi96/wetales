import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Social from './components/Social';
import Services from './components/Services';
import Achievement from './components/Achievement';
import WhyUs from './components/WhyUs';
import SingleImageSection from './components/SingleImageSection';
import Quote from './components/Quote';
import Testimonial from './components/Testimonial';
import Clients from './components/Clients';
//import Partners from './components/Partners';
import OnlyimgSection from './components/OnlyimgSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Social />
    <Services />
    <Achievement />
    <WhyUs />
    <SingleImageSection />
    <Quote />
    <Testimonial />
    <Clients />
    <OnlyimgSection />
    <Contact />
    <Footer />
  </>
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
    </Routes>
  );
};

export default App;
