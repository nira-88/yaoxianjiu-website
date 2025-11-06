import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Users, 
  Award, 
  Calendar, 
  ShoppingCart, 
  BookOpen,
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Heart,
      title: '傳統中醫療法',
      description: '承襲千年中醫智慧，運用藥線灸技術治療各種疾病'
    },
    {
      icon: Award,
      title: '非遺傳承人',
      description: '珠海市級非物質文化遺產代表性傳承人，第十二代傳人'
    },
    {
      icon: Users,
      title: '專業團隊',
      description: '年均服務患者超過4000人次，累計服務量突破2萬例'
    },
    {
      icon: BookOpen,
      title: '教學培訓',
      description: '提供線上線下課程，累計培養學員超過百人'
    }
  ];

  const services = [
    {
      title: '線上課程',
      description: '隨時隨地學習藥線灸技術',
      icon: BookOpen,
      link: '/online-courses',
      color: 'bg-blue-500'
    },
    {
      title: '線下課程',
      description: '面對面實操教學',
      icon: Users,
      link: '/offline-courses',
      color: 'bg-green-500'
    },
    {
      title: '藥線商城',
      description: '優質藥線產品直供',
      icon: ShoppingCart,
      link: '/shop',
      color: 'bg-amber-500'
    },
    {
      title: '預約面診',
      description: '專業中醫診療服務',
      icon: Calendar,
      link: '/appointment',
      color: 'bg-red-500'
    }
  ];

  const testimonials = [
    {
      name: '張女士',
      condition: '頸椎病',
      content: '經過劉先生的藥線灸治療，我的頸椎疼痛明顯改善，非常感謝！',
      rating: 5
    },
    {
      name: '李先生',
      condition: '失眠症',
      content: '治療後睡眠質量大幅提升，藥線灸真的很神奇。',
      rating: 5
    },
    {
      name: '王女士',
      condition: '痛經',
      content: '困擾多年的痛經問題得到了有效緩解，非常推薦。',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-amber-500 text-white">珠海非物質文化遺產</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                劉一飊藥線灸
              </h1>
              <p className="text-xl mb-8 text-green-100">
                第十二代傳承人 · 傳承千年中醫智慧 · 守護健康人生
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
                  <Link to="/appointment">
                    立即預約面診
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800">
                  <Link to="/about">了解更多</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl font-bold text-green-800">劉</span>
                  </div>
                  <p className="text-white font-semibold">劉一飊先生</p>
                  <p className="text-amber-100">藥線灸第十二代傳承人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">為什麼選擇我們</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              劉一飊先生作為珠海非物質文化遺產藥線灸的第十二代傳承人，致力於傳承和發揚這一古老的中醫療法
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我們的服務</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              提供全方位的藥線灸服務，從學習培訓到治療康復，滿足您的不同需求
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>
                      了解更多
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">患者見證</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              聽聽我們患者的真實反饋，見證藥線灸的神奇療效
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.condition}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">開始您的健康之旅</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            立即預約面診或報名課程，體驗傳統中醫藥線灸的神奇療效
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
              <Link to="/appointment">
                預約面診
                <Calendar className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-800">
              <Link to="/online-courses">
                報名課程
                <BookOpen className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

