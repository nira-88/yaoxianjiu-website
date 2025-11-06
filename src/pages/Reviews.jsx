import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, 
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  User,
  Award,
  TrendingUp
} from 'lucide-react';

const Reviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const featuredReviews = [
    {
      id: 1,
      name: '李女士',
      age: 45,
      location: '珠海',
      rating: 5,
      title: '頸椎病得到顯著改善',
      content: '我患頸椎病多年，經過劉一飊先生的藥線灸治療，現在頸部疼痛明顯減輕，睡眠質量也大大提升。劉先生的技術非常專業，治療過程很舒適。',
      treatmentType: '頸椎病治療',
      treatmentDuration: '3個月',
      date: '2024-05-15',
      avatar: '/images/avatar-1.jpg',
      beforeAfter: {
        before: '頸部僵硬疼痛，無法正常轉動',
        after: '頸部活動自如，疼痛基本消失'
      }
    },
    {
      id: 2,
      name: '王先生',
      age: 52,
      location: '廣州',
      rating: 5,
      title: '多年腰痛終於治好了',
      content: '腰椎間盤突出困擾我十多年，看過很多醫生都沒有根治。通過劉先生的藥線灸治療，現在腰痛完全消失，可以正常工作和運動了。',
      treatmentType: '腰椎間盤突出',
      treatmentDuration: '4個月',
      date: '2024-04-20',
      avatar: '/images/avatar-2.jpg',
      beforeAfter: {
        before: '腰部劇痛，無法彎腰',
        after: '腰部靈活，可以正常運動'
      }
    },
    {
      id: 3,
      name: '陳女士',
      age: 38,
      location: '深圳',
      rating: 5,
      title: '胃病調理效果驚人',
      content: '慢性胃炎讓我食慾不振，經常胃痛。劉先生用藥線灸調理我的脾胃，現在胃口大開，消化也很好，整個人精神狀態都改善了。',
      treatmentType: '慢性胃炎',
      treatmentDuration: '2個月',
      date: '2024-06-01',
      avatar: '/images/avatar-3.jpg',
      beforeAfter: {
        before: '食慾不振，經常胃痛',
        after: '胃口大開，消化良好'
      }
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: '風濕性關節炎康復案例',
      patientInfo: '張女士，65歲',
      condition: '風濕性關節炎',
      duration: '6個月治療',
      description: '患者雙手關節腫痛變形多年，經過系統的藥線灸治療，關節腫脹明顯消退，疼痛大幅減輕，生活質量顯著提升。',
      results: [
        '關節腫脹減少80%',
        '疼痛指數從8分降至2分',
        '手部活動度恢復90%',
        '停用止痛藥物'
      ],
      beforeImage: '/images/case-before-1.jpg',
      afterImage: '/images/case-after-1.jpg'
    },
    {
      id: 2,
      title: '小兒哮喘治療成功案例',
      patientInfo: '小明，8歲',
      condition: '支氣管哮喘',
      duration: '4個月治療',
      description: '患兒自幼患有哮喘，經常發作影響學習。通過溫和的藥線灸治療，哮喘發作頻率大幅降低，體質明顯增強。',
      results: [
        '哮喘發作次數減少90%',
        '肺功能明顯改善',
        '體重增加5公斤',
        '學習專注力提升'
      ],
      beforeImage: '/images/case-before-2.jpg',
      afterImage: '/images/case-after-2.jpg'
    },
    {
      id: 3,
      title: '失眠症調理康復案例',
      patientInfo: '劉先生，42歲',
      condition: '嚴重失眠症',
      duration: '3個月治療',
      description: '患者因工作壓力導致嚴重失眠，每晚只能睡2-3小時。經過藥線灸調理，睡眠質量大幅改善，精神狀態恢復正常。',
      results: [
        '睡眠時間延長至7-8小時',
        '入睡時間縮短至15分鐘',
        '深度睡眠比例提升',
        '白天精力充沛'
      ],
      beforeImage: '/images/case-before-3.jpg',
      afterImage: '/images/case-after-3.jpg'
    }
  ];

  const statistics = [
    {
      number: '2000+',
      label: '成功案例',
      icon: Award,
      color: 'text-green-600'
    },
    {
      number: '98%',
      label: '患者滿意度',
      icon: Heart,
      color: 'text-red-600'
    },
    {
      number: '15+',
      label: '年臨床經驗',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      number: '95%',
      label: '有效治療率',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredReviews.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredReviews.length) % featuredReviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">患者見證</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">用戶評價與成功案例</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            真實的患者反饋和成功治療案例，見證藥線灸的神奇療效。
            每一個康復故事都是我們前進的動力。
          </p>
        </div>

        {/* Statistics */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className={`h-8 w-8 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">精選患者見證</h2>
          <div className="relative">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-8">
                <div className="flex items-center justify-center mb-6">
                  <Quote className="h-12 w-12 text-green-600" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {renderStars(featuredReviews[currentTestimonial].rating)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredReviews[currentTestimonial].title}
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {featuredReviews[currentTestimonial].content}
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={featuredReviews[currentTestimonial].avatar} />
                    <AvatarFallback>
                      {featuredReviews[currentTestimonial].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {featuredReviews[currentTestimonial].name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {featuredReviews[currentTestimonial].age}歲 · {featuredReviews[currentTestimonial].location}
                    </div>
                    <div className="text-sm text-gray-500">
                      治療週期：{featuredReviews[currentTestimonial].treatmentDuration}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">治療前</h4>
                    <p className="text-red-700 text-sm">
                      {featuredReviews[currentTestimonial].beforeAfter.before}
                    </p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">治療後</h4>
                    <p className="text-green-700 text-sm">
                      {featuredReviews[currentTestimonial].beforeAfter.after}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center space-x-2">
                  {featuredReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-green-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </section>

        {/* Case Studies */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">成功治療案例</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy) => (
              <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                  <CardDescription>
                    {caseStudy.patientInfo} · {caseStudy.condition}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-2">
                      {caseStudy.duration}
                    </Badge>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {caseStudy.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-3 text-green-800">治療效果：</h4>
                    <ul className="space-y-2">
                      {caseStudy.results.map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <div className="w-full h-24 bg-gray-200 rounded mb-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">治療前</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 text-center">
                      <div className="w-full h-24 bg-gray-200 rounded mb-2 flex items-center justify-center">
                        <span className="text-xs text-gray-500">治療後</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Reviews */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">所有用戶評價</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredReviews.map((review) => (
              <Card key={review.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarImage src={review.avatar} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-gray-500">
                          {review.age}歲 · {review.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2">{review.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{review.content}</p>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{review.treatmentType}</span>
                    <span>{review.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">您也想擁有這樣的康復體驗嗎？</h3>
                <p className="text-green-100 mb-6">
                  立即預約劉一飊先生的專業診療，開始您的康復之旅
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-green-600 hover:bg-gray-100">
                    立即預約面診
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                    了解更多案例
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Reviews;

