import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  BookOpen, 
  Clock, 
  Users, 
  Star,
  Play,
  Download,
  CheckCircle,
  CreditCard
} from 'lucide-react';

const OnlineCourses = () => {
  const courses = [
    {
      id: 1,
      title: '藥線灸基礎入門課程',
      description: '適合初學者的基礎課程，從零開始學習藥線灸的理論基礎和基本操作',
      duration: '8小時',
      lessons: 12,
      students: 156,
      rating: 4.9,
      price: 899,
      level: '初級',
      features: [
        '藥線灸歷史與理論',
        '基本穴位認識',
        '藥線製作工藝',
        '安全操作規範',
        '常見疾病治療方法'
      ]
    },
    {
      id: 2,
      title: '藥線灸進階實操課程',
      description: '深入學習藥線灸的高級技法，掌握複雜疾病的治療方案',
      duration: '16小時',
      lessons: 24,
      students: 89,
      rating: 4.8,
      price: 1599,
      level: '進階',
      features: [
        '高級穴位配伍',
        '複雜疾病診療',
        '個性化治療方案',
        '臨床案例分析',
        '實操技能提升'
      ]
    },
    {
      id: 3,
      title: '藥線灸師資培訓課程',
      description: '培養專業的藥線灸教學人才，獲得教學資格認證',
      duration: '32小時',
      lessons: 48,
      students: 34,
      rating: 5.0,
      price: 2999,
      level: '專業',
      features: [
        '教學方法論',
        '課程設計技巧',
        '學員管理方法',
        '教學實習指導',
        '師資認證考核'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">線上學習</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">線上課程</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            隨時隨地學習藥線灸技術，由劉一飊先生親自授課，
            從基礎理論到實操技能，系統性掌握這一傳統中醫療法。
          </p>
        </div>

        {/* Course Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">專業課程</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">由第十二代傳承人親自授課</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Play className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">高清視頻</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">4K高清視頻，細節清晰可見</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">靈活學習</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">隨時隨地，按自己節奏學習</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Download className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">資料下載</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">提供豐富的學習資料下載</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">課程選擇</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={course.level === '初級' ? 'default' : course.level === '進階' ? 'secondary' : 'destructive'}>
                      {course.level}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div>
                      <Clock className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{course.duration}</p>
                    </div>
                    <div>
                      <BookOpen className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{course.lessons}課時</p>
                    </div>
                    <div>
                      <Users className="h-5 w-5 text-gray-400 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">{course.students}學員</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">課程內容：</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-green-600">¥{course.price}</span>
                      <span className="text-sm text-gray-500">一次付費，終身學習</span>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      立即報名
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="mb-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">課程報名</CardTitle>
              <CardDescription className="text-center">
                填寫以下信息完成報名，我們將在24小時內與您聯繫
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">姓名 *</Label>
                    <Input id="name" placeholder="請輸入您的姓名" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">電話 *</Label>
                    <Input id="phone" placeholder="請輸入您的電話號碼" required />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">電子郵箱 *</Label>
                  <Input id="email" type="email" placeholder="請輸入您的電子郵箱" required />
                </div>
                
                <div>
                  <Label htmlFor="course">選擇課程 *</Label>
                  <select id="course" className="w-full p-2 border border-gray-300 rounded-md" required>
                    <option value="">請選擇課程</option>
                    <option value="basic">藥線灸基礎入門課程 - ¥899</option>
                    <option value="advanced">藥線灸進階實操課程 - ¥1599</option>
                    <option value="instructor">藥線灸師資培訓課程 - ¥2999</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="experience">中醫基礎</Label>
                  <select id="experience" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">請選擇您的中醫基礎</option>
                    <option value="none">無基礎</option>
                    <option value="basic">有一定了解</option>
                    <option value="intermediate">有實踐經驗</option>
                    <option value="advanced">專業從業者</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">備註信息</Label>
                  <Textarea 
                    id="message" 
                    placeholder="請告訴我們您的學習目標或其他需要說明的信息"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                  提交報名申請
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">常見問題</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">課程有效期多長？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  所有線上課程均為一次付費，終身學習。您可以隨時回看課程內容，沒有時間限制。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">是否提供學習證書？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  完成課程學習並通過考核後，我們將頒發由劉一飊先生簽名的學習證書。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">可以申請退款嗎？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  購買後7天內，如果對課程不滿意，可以申請全額退款。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">是否有學習群組？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  每個課程都有專門的學習群組，學員可以互相交流，導師也會定期答疑。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OnlineCourses;

