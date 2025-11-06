import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle,
  Heart,
  Stethoscope
} from 'lucide-react';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    age: '',
    gender: '',
    symptoms: '',
    medicalHistory: '',
    urgency: 'normal'
  });

  const availableDates = [
    { date: '2024-07-15', day: '週一', available: true },
    { date: '2024-07-16', day: '週二', available: true },
    { date: '2024-07-17', day: '週三', available: false },
    { date: '2024-07-18', day: '週四', available: true },
    { date: '2024-07-19', day: '週五', available: true },
    { date: '2024-07-22', day: '週一', available: true },
    { date: '2024-07-23', day: '週二', available: true },
    { date: '2024-07-24', day: '週三', available: true },
    { date: '2024-07-25', day: '週四', available: false },
    { date: '2024-07-26', day: '週五', available: true }
  ];

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: false },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: false },
    { time: '15:00', available: true },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true }
  ];

  const services = [
    {
      title: '藥線灸治療',
      description: '針對各種慢性疾病的藥線灸治療',
      duration: '60分鐘',
      price: '¥300',
      features: ['個性化診斷', '精準穴位治療', '療效跟蹤']
    },
    {
      title: '中醫診療',
      description: '傳統中醫望聞問切四診合參',
      duration: '45分鐘',
      price: '¥200',
      features: ['全面診斷', '中藥調理建議', '生活指導']
    },
    {
      title: '健康諮詢',
      description: '健康狀況評估和養生指導',
      duration: '30分鐘',
      price: '¥150',
      features: ['健康評估', '養生建議', '預防指導']
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log('預約信息：', {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    alert('預約申請已提交，我們將在24小時內與您聯繫確認！');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-600">專業診療</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">預約面診</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            由劉一飊先生親自診療，運用傳統中醫四診合參的方法，
            結合藥線灸技術，為您提供個性化的治療方案。
          </p>
        </div>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">診療服務</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant="outline">{service.price}</Badge>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{service.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Appointment Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Date and Time Selection */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  選擇日期
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {availableDates.map((dateInfo) => (
                    <button
                      key={dateInfo.date}
                      onClick={() => dateInfo.available && setSelectedDate(dateInfo.date)}
                      disabled={!dateInfo.available}
                      className={`p-3 rounded-md text-sm transition-colors ${
                        selectedDate === dateInfo.date
                          ? 'bg-red-600 text-white'
                          : dateInfo.available
                          ? 'bg-gray-100 hover:bg-gray-200'
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="font-medium">
                        {new Date(dateInfo.date).getDate()}日
                      </div>
                      <div className="text-xs">{dateInfo.day}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  選擇時間
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      onClick={() => slot.available && setSelectedTime(slot.time)}
                      disabled={!slot.available || !selectedDate}
                      className={`p-2 rounded-md text-sm transition-colors ${
                        selectedTime === slot.time
                          ? 'bg-red-600 text-white'
                          : slot.available && selectedDate
                          ? 'bg-gray-100 hover:bg-gray-200'
                          : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {slot.time}
                    </button>
                  ))}
                </div>
                {!selectedDate && (
                  <p className="text-sm text-gray-500 mt-2">請先選擇日期</p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Patient Information Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  患者信息
                </CardTitle>
                <CardDescription>
                  請填寫詳細的個人信息和症狀描述，以便我們為您提供更好的診療服務
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">姓名 *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="請輸入您的姓名"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">電話 *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="請輸入您的電話號碼"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">電子郵箱</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="請輸入您的電子郵箱"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="age">年齡</Label>
                      <Input
                        id="age"
                        type="number"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        placeholder="請輸入您的年齡"
                      />
                    </div>
                    <div>
                      <Label htmlFor="gender">性別</Label>
                      <select
                        id="gender"
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="">請選擇性別</option>
                        <option value="male">男</option>
                        <option value="female">女</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="symptoms">主要症狀 *</Label>
                    <Textarea
                      id="symptoms"
                      value={formData.symptoms}
                      onChange={(e) => handleInputChange('symptoms', e.target.value)}
                      placeholder="請詳細描述您的主要症狀、持續時間、嚴重程度等"
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicalHistory">既往病史</Label>
                    <Textarea
                      id="medicalHistory"
                      value={formData.medicalHistory}
                      onChange={(e) => handleInputChange('medicalHistory', e.target.value)}
                      placeholder="請告訴我們您的既往病史、過敏史、正在服用的藥物等"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="urgency">緊急程度</Label>
                    <select
                      id="urgency"
                      value={formData.urgency}
                      onChange={(e) => handleInputChange('urgency', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="normal">一般</option>
                      <option value="urgent">較急</option>
                      <option value="emergency">緊急</option>
                    </select>
                  </div>

                  {/* Selected Appointment Summary */}
                  {selectedDate && selectedTime && (
                    <Card className="bg-green-50 border-green-200">
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          預約信息確認
                        </h4>
                        <div className="space-y-1 text-sm">
                          <p><strong>日期：</strong>{selectedDate} ({availableDates.find(d => d.date === selectedDate)?.day})</p>
                          <p><strong>時間：</strong>{selectedTime}</p>
                          <p><strong>地點：</strong>珠海市香洲區中醫藥文化街123號</p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700"
                    size="lg"
                    disabled={!selectedDate || !selectedTime || !formData.name || !formData.phone || !formData.symptoms}
                  >
                    提交預約申請
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Clinic Information */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">診所信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  地址位置
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>地址：</strong>廣東省珠海市香洲區中醫藥文化街123號
                  </p>
                  <p className="text-gray-700">
                    <strong>交通：</strong>地鐵1號線中醫院站A出口，步行5分鐘
                  </p>
                  <p className="text-gray-700">
                    <strong>停車：</strong>診所提供免費停車位
                  </p>
                  <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                    <span className="ml-2 text-gray-500">地圖位置</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  營業時間
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">門診時間</h4>
                    <div className="space-y-1 text-gray-700">
                      <p>週一至週五：09:00 - 12:00，14:00 - 17:30</p>
                      <p>週六：09:00 - 12:00</p>
                      <p>週日：休息</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">聯繫方式</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">+86 756 1234567</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-700">info@yaoxianjiu.com</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-amber-800">溫馨提示</h4>
                        <ul className="text-sm text-amber-700 mt-1 space-y-1">
                          <li>• 請提前15分鐘到達診所</li>
                          <li>• 初診患者請攜帶身份證</li>
                          <li>• 如需取消預約請提前24小時通知</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常見問題</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">如何預約面診？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  您可以通過本頁面的預約表單提交申請，我們會在24小時內與您聯繫確認具體時間。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">診療費用如何收取？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  診療費用根據服務項目收取，支持現金、刷卡、移動支付等多種方式。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">需要帶什麼資料？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  初診請攜帶身份證，如有既往檢查報告或病歷資料，請一併帶來。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">可以取消預約嗎？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  可以取消，但請提前24小時通知，以便我們安排其他患者。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Appointment;

