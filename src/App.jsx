import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n'; // 導入i18n配置
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { FloatingSocialShare } from './components/SocialShare';
import Home from './pages/Home';
import About from './pages/About';
import AboutMaster from './pages/AboutMaster';
import OnlineCourses from './pages/OnlineCourses';
import OfflineCourses from './pages/OfflineCourses';
import Shop from './pages/Shop';
import Appointment from './pages/Appointment';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';
import MemberCenter from './pages/MemberCenter';
import Live from './pages/Live';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-master" element={<AboutMaster />} />
            <Route path="/online-courses" element={<OnlineCourses />} />
            <Route path="/offline-courses" element={<OfflineCourses />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/member" element={<MemberCenter />} />
            <Route path="/live" element={<Live />} />
          </Routes>
        </main>
        <Footer />
        
        {/* 全局組件 */}
        <ChatWidget />
        <FloatingSocialShare 
          title="劉一飊藥線灸 - 珠海非物質文化遺產"
          description="傳承千年智慧，守護健康人生。劉一飊先生是珠海非物質文化遺產藥線灸第12代傳承人。"
        />
      </div>
    </Router>
  );
}

export default App;

