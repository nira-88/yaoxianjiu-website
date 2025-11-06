import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send,
  User,
  Building,
  Globe,
  Calendar,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactMethod: 'email'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('聯繫表單：', formData);
    alert('您的消息已發送，我們會在24小時內回復您！');
    // 重置表單
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      contactMethod: 'email'
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: '電話聯繫',
      description: '直接撥打我們的服務熱線',
      info: '+86 756 1234567',
      available: '週一至週六 9:00-18:00',
      color: 'text-green-600'
    },
    {
      icon: Mail,
      title: '郵件聯繫',
      description: '發送郵件給我們',
      info: 'info@yaoxianjiu.com',
      available: '24小時內回復',
      color: 'text-blue-600'
    },
    {
      icon: MessageCircle,
      title: '微信客服',
      description: '添加微信獲得即時回復',
      info: 'yaoxianjiu123',
      available: '工作日 9:00-18:00',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: '到店諮詢',
      description: '歡迎到診所面對面交流',
      info: '珠海市香洲區中醫藥文化街123號',
      available: '週一至週六 9:00-18:00',
      color: 'text-red-600'
    }
  ];

  const officeInfo = {
    address: '廣東省珠海市香洲區中醫藥文化街123號',
    phone: '+86 756 1234567',
    email: 'info@yaoxianjiu.com',
    website: 'www.yaoxianjiu.com',
    wechat: 'yaoxianjiu123',
    workingHours: {
      weekdays: '週一至週五 9:00-18:00',
      saturday: '週六 9:00-12:00',
      sunday: '週日休息'
    }
  };

  const departments = [
    {
      name: '診療預約',
      phone: '+86 756 1234567',
      email: 'appointment@yaoxianjiu.com',
      description: '預約劉一飊先生診療服務'
    },
    {
      name: '課程諮詢',
      phone: '+86 756 1234568',
      email: 'courses@yaoxianjiu.com',
      description: '線上線下課程報名諮詢'
    },
    {
      name: '產品銷售',
      phone: '+86 756 1234569',
      email: 'shop@yaoxianjiu.com',
      description: '藥線產品購買諮詢'
    },
    {
      name: '技術支持',
      phone: '+86 756 1234570',
      email: 'support@yaoxianjiu.com',
      description: '售後服務和技術支持'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">聯繫我們</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">聯繫我們</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我們隨時準備為您提供幫助和支持。
            無論您有任何問題或需求，都歡迎與我們聯繫。
          </p>
        </div>

        {/* Contact Methods */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">聯繫方式</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <method.icon className={`h-12 w-12 mx-auto mb-4 ${method.color}`} />
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-gray-900 mb-2">{method.info}</p>
                  <p className="text-sm text-gray-500">{method.available}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Send className="h-6 w-6 mr-2" />
                  發送消息
                </CardTitle>
                <CardDescription>
                  填寫下面的表單，我們會盡快回復您
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
                      <Label htmlFor="phone">電話</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="請輸入您的電話號碼"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">電子郵箱 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="請輸入您的電子郵箱"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">主題 *</Label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">請選擇諮詢主題</option>
                      <option value="appointment">預約診療</option>
                      <option value="courses">課程諮詢</option>
                      <option value="products">產品購買</option>
                      <option value="technical">技術支持</option>
                      <option value="cooperation">合作洽談</option>
                      <option value="other">其他問題</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="contactMethod">期望聯繫方式</Label>
                    <select
                      id="contactMethod"
                      value={formData.contactMethod}
                      onChange={(e) => handleInputChange('contactMethod', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-md"
                    >
                      <option value="email">電子郵件</option>
                      <option value="phone">電話</option>
                      <option value="wechat">微信</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">詳細信息 *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="請詳細描述您的問題或需求"
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    發送消息
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            {/* Main Office */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Building className="h-5 w-5 mr-2" />
                  診所信息
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">地址</p>
                    <p className="text-gray-600">{officeInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">電話</p>
                    <p className="text-gray-600">{officeInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">郵箱</p>
                    <p className="text-gray-600">{officeInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">微信</p>
                    <p className="text-gray-600">{officeInfo.wechat}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Globe className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="font-medium">網站</p>
                    <p className="text-gray-600">{officeInfo.website}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  營業時間
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium">週一至週五</span>
                  <span className="text-gray-600">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">週六</span>
                  <span className="text-gray-600">9:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">週日</span>
                  <span className="text-gray-600">休息</span>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <CheckCircle className="h-4 w-4 inline mr-1" />
                    節假日營業時間可能有調整，請提前電話確認
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">位置地圖</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">地圖位置</p>
                    <p className="text-sm text-gray-400">珠海市香洲區中醫藥文化街123號</p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p><strong>交通指引：</strong></p>
                  <p>• 地鐵1號線中醫院站A出口，步行5分鐘</p>
                  <p>• 公交：乘坐1路、15路、28路到中醫院站</p>
                  <p>• 自駕：診所提供免費停車位</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Department Contacts */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">部門聯繫</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-sm">{dept.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="mt-16">
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-red-600 mr-2" />
                  <h3 className="text-xl font-bold text-red-800">緊急聯繫</h3>
                </div>
                <p className="text-red-700 mb-4">
                  如遇緊急情況或急需診療，請直接撥打緊急聯繫電話
                </p>
                <div className="text-2xl font-bold text-red-600 mb-2">
                  +86 756 1234567
                </div>
                <p className="text-sm text-red-600">
                  24小時緊急聯繫熱線
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Contact;

