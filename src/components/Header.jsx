import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.aboutMaster'), href: '/about-master' },
    { name: t('nav.onlineCourses'), href: '/online-courses' },
    { name: t('nav.offlineCourses'), href: '/offline-courses' },
    { name: t('nav.shop'), href: '/shop' },
    { name: t('nav.appointment'), href: '/appointment' },
    { name: t('nav.reviews'), href: '/reviews' },
    { name: t('nav.faq'), href: '/faq' },
    { name: t('nav.contact'), href: '/contact' },
    { name: t('nav.member'), href: '/member' },
    { name: t('nav.live'), href: '/live' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+86 756 1234567</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@yaoxianjiu.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm">
              珠海非物質文化遺產 · 藥線灸第十二代傳承人
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-amber-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">劉</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-800">劉一颷藥線灸</h1>
              <p className="text-sm text-gray-600">傳承千年智慧 · 守護健康人生</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.href
                    ? 'bg-green-100 text-green-800'
                    : 'text-gray-700 hover:bg-green-50 hover:text-green-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-700 hover:bg-green-50 hover:text-green-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

