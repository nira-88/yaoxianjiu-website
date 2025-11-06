import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">劉一飊藥線灸</h3>
            <p className="text-green-100 mb-4">
              珠海非物質文化遺產藥線灸第十二代傳承人，致力於傳承和發揚中醫藥線灸技術，為廣大患者提供專業的中醫治療服務。
            </p>
            <div className="flex items-center space-x-2 text-green-100">
              <Clock className="h-4 w-4" />
              <span>週一至週六 9:00-18:00</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-green-100 hover:text-white transition-colors">關於藥線灸</Link></li>
              <li><Link to="/about-master" className="text-green-100 hover:text-white transition-colors">關於劉先生</Link></li>
              <li><Link to="/online-courses" className="text-green-100 hover:text-white transition-colors">線上課程</Link></li>
              <li><Link to="/offline-courses" className="text-green-100 hover:text-white transition-colors">線下課程</Link></li>
              <li><Link to="/shop" className="text-green-100 hover:text-white transition-colors">藥線商城</Link></li>
              <li><Link to="/appointment" className="text-green-100 hover:text-white transition-colors">預約面診</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服務項目</h3>
            <ul className="space-y-2 text-green-100">
              <li>藥線灸治療</li>
              <li>中醫面診</li>
              <li>藥線灸培訓</li>
              <li>藥線產品銷售</li>
              <li>健康諮詢</li>
              <li>企業培訓</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">聯絡資訊</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-300" />
                <span className="text-green-100">+86 756 1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-300" />
                <span className="text-green-100">info@yaoxianjiu.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-300 mt-1" />
                <span className="text-green-100">廣東省珠海市香洲區<br />中醫藥文化街123號</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-green-100">
            © 2024 劉一飊藥線灸. 版權所有 | 珠海非物質文化遺產 | 藥線灸第十二代傳承人
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

