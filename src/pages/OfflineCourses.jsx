import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Calendar,
  CheckCircle,
  CreditCard,
  User,
  BookOpen,
  Award
} from 'lucide-react';

const OfflineCourses = () => {
  const courses = [
    {
      id: 1,
      title: '藥線灸實地培訓班（基礎班）',
      description: '面對面實操教學，小班制授課，適合初學者和有一定基礎的學員',
      duration: '3天',
      lessons: 18,
      students: 12,
      rating: 4.9,
      price: 3999,
      level: '基礎',
      location: '珠海市香洲區中醫藥文化街123號',
      schedule: [
        '第一天：理論基礎與穴位認識',
        '第二天：藥線製作與實操練習',
        '第三天：臨床案例與考核認證'
      ],
      features: [
        '劉一飊先生親自授課',
        '小班制教學（限12人）',
        '實操練習機會',
        '提供學習材料',
        '頒發結業證書',
        '終身技術支持'
      ]
    },
    {
      id: 2,
      title: '藥線灸高級研修班',
      description: '深度學習高級技法，適合有基礎的從業者和醫療工作者',
      duration: '5天',
      lessons: 30,
      students: 8,
      rating: 5.0,
      price: 6999,
      level: '高級',
      location: '珠海市香洲區中醫藥文化街123號',
      schedule: [
        '第一天：高級理論與診斷技巧',
        '第二天：複雜疾病治療方案',
        '第三天：特殊穴位與配伍',
        '第四天：臨床實習與案例分析',
        '第五天：考核與認證'
      ],
      features: [
        '劉一飊先生一對一指導',
        '精品小班（限8人）',
        '真實患者臨床實習',
        '高級技法傳授',
        '專業認證證書',
        '加入專業交流群'
      ]
    },
    {
      id: 3,
      title: '藥線灸師資認證班',
      description: '培養專業的藥線灸教學人才，獲得官方師資認證',
      duration: '7天',
      lessons: 42,
      students: 6,
      rating: 5.0,
      price: 12999,
      level: '師資',
      location: '珠海市香洲區中醫藥文化街123號',
      schedule: [
        '第一天：教學理論與方法',
        '第二天：課程設計與教案編寫',
        '第三天：實操教學技巧',
        '第四天：學員管理與評估',
        '第五天：教學實習與演練',
        '第六天：考核與評估',
        '第七天：認證與授權'
      ],
      features: [
        '劉一飊先生親自認證',
        'VIP小班（限6人）',
        '教學實習機會',
        '師資認證證書',
        '教學資料包',
        '終身教學支持'
      ]
    }
  ];

  const upcomingClasses = [
    {
      course: '藥線灸實地培訓班（基礎班）',
      date: '2024年7月15日-17日',
      status: '報名中',
      remaining: 5
    },
    {
      course: '藥線灸高級研修班',
      date: '2024年8月5日-9日',
      status: '報名中',
      remaining: 3
    },
    {
      course: '藥線灸師資認證班',
      date: '2024年9月10日-16日',
      status: '預約中',
      remaining: 2
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">面對面教學</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">線下課程</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            由劉一飊先生親自授課的線下實地培訓，小班制教學，
            提供真實的實操機會和一對一指導，讓您深度掌握藥線灸技術。
          </p>
        </div>

        {/* Course Features */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <User className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">大師親授</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">劉一飊先生親自授課指導</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">小班教學</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">限制人數，確保教學質量</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">實操練習</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">真實案例，實際操作機會</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">權威認證</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">頒發官方認證證書</p>
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
                    <Badge variant={course.level === '基礎' ? 'default' : course.level === '高級' ? 'secondary' : 'destructive'}>
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
                      <p className="text-sm text-gray-600">限{course.students}人</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.location}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">課程安排：</h4>
                    <ul className="space-y-1">
                      {course.schedule.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600">• {item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">課程特色：</h4>
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
                      <span className="text-sm text-gray-500">包含材料費</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <CreditCard className="h-4 w-4 mr-2" />
                      立即報名
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Classes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">近期開班</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingClasses.map((classInfo, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{classInfo.course}</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{classInfo.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <Badge variant={classInfo.status === '報名中' ? 'default' : 'secondary'}>
                      {classInfo.status}
                    </Badge>
                    <span className="text-sm text-gray-600">
                      剩餘名額：{classInfo.remaining}人
                    </span>
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
              <CardTitle className="text-2xl text-center">線下課程報名</CardTitle>
              <CardDescription className="text-center">
                填寫以下信息完成報名，我們將在24小時內與您聯繫確認
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
                    <option value="basic">藥線灸實地培訓班（基礎班） - ¥3999</option>
                    <option value="advanced">藥線灸高級研修班 - ¥6999</option>
                    <option value="instructor">藥線灸師資認證班 - ¥12999</option>
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
                  <Label htmlFor="preferred_date">期望開班時間</Label>
                  <select id="preferred_date" className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">請選擇期望時間</option>
                    <option value="july">2024年7月15日-17日</option>
                    <option value="august">2024年8月5日-9日</option>
                    <option value="september">2024年9月10日-16日</option>
                    <option value="other">其他時間（請在備註中說明）</option>
                  </select>
                </div>
                
                <div>
                  <Label htmlFor="message">備註信息</Label>
                  <Textarea 
                    id="message" 
                    placeholder="請告訴我們您的學習目標、特殊需求或其他需要說明的信息"
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg">
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
                <CardTitle className="text-lg">課程包含哪些內容？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  包含理論講解、實操練習、學習材料、結業證書等。高級班還包含臨床實習機會。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">是否提供住宿安排？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  我們可以協助推薦附近的酒店住宿，但住宿費用需要學員自理。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">可以申請分期付款嗎？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  高級班和師資班支持分期付款，具體方案請聯繫我們的客服人員。
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">證書是否具有權威性？</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  所有證書均由劉一飊先生親自簽發，師資證書具有教學授權資格。
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OfflineCourses;

