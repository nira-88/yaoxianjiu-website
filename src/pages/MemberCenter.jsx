import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  Crown, 
  Star,
  Gift,
  Calendar,
  ShoppingBag,
  BookOpen,
  Award,
  TrendingUp,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  X
} from 'lucide-react';

const MemberCenter = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '李小明',
    email: 'lixiaoming@example.com',
    phone: '+86 138 0000 0000',
    address: '廣東省珠海市香洲區',
    membershipLevel: 'gold',
    points: 1250,
    joinDate: '2023-08-15'
  });

  const membershipLevels = {
    basic: {
      name: '基礎會員',
      color: 'bg-gray-500',
      icon: User,
      benefits: ['基礎諮詢服務', '會員專屬資訊', '生日優惠']
    },
    silver: {
      name: '銀牌會員',
      color: 'bg-gray-400',
      icon: Star,
      benefits: ['9折課程優惠', '優先預約', '免費健康諮詢', '會員積分雙倍']
    },
    gold: {
      name: '金牌會員',
      color: 'bg-yellow-500',
      icon: Crown,
      benefits: ['8折課程優惠', 'VIP預約通道', '免費複診', '專屬客服', '積分三倍']
    },
    platinum: {
      name: '鉑金會員',
      color: 'bg-purple-500',
      icon: Award,
      benefits: ['7折課程優惠', '專屬治療方案', '免費年度體檢', '24小時客服', '積分五倍']
    }
  };

  const recentOrders = [
    {
      id: 'ORD001',
      date: '2024-06-10',
      items: '優質藥線 x2, 艾絨 x1',
      amount: 298,
      status: '已完成',
      points: 30
    },
    {
      id: 'ORD002',
      date: '2024-05-25',
      items: '藥線灸基礎課程',
      amount: 1200,
      status: '已完成',
      points: 120
    },
    {
      id: 'ORD003',
      date: '2024-05-15',
      items: '面診預約',
      amount: 200,
      status: '已完成',
      points: 20
    }
  ];

  const courseProgress = [
    {
      id: 1,
      title: '藥線灸基礎理論',
      progress: 100,
      totalLessons: 12,
      completedLessons: 12,
      certificate: true
    },
    {
      id: 2,
      title: '藥線灸實操技巧',
      progress: 75,
      totalLessons: 16,
      completedLessons: 12,
      certificate: false
    },
    {
      id: 3,
      title: '中醫診斷基礎',
      progress: 30,
      totalLessons: 20,
      completedLessons: 6,
      certificate: false
    }
  ];

  const pointsHistory = [
    {
      id: 1,
      date: '2024-06-10',
      description: '購買商品獲得積分',
      points: 30,
      type: 'earn'
    },
    {
      id: 2,
      date: '2024-06-05',
      description: '兌換課程優惠券',
      points: -100,
      type: 'spend'
    },
    {
      id: 3,
      date: '2024-05-25',
      description: '課程報名獲得積分',
      points: 120,
      type: 'earn'
    },
    {
      id: 4,
      date: '2024-05-20',
      description: '每日簽到獎勵',
      points: 10,
      type: 'earn'
    }
  ];

  const appointments = [
    {
      id: 1,
      date: '2024-06-20',
      time: '14:00',
      type: '藥線灸治療',
      status: '已確認',
      doctor: '劉一飊先生'
    },
    {
      id: 2,
      date: '2024-06-15',
      time: '10:00',
      type: '複診檢查',
      status: '已完成',
      doctor: '劉一飊先生'
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // 這裡會調用API保存用戶信息
    console.log('保存用戶信息:', userInfo);
  };

  const handleInputChange = (field, value) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const currentMembership = membershipLevels[userInfo.membershipLevel];
  const MembershipIcon = currentMembership.icon;

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge className="mb-4 bg-purple-600">會員中心</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">會員中心</h1>
          <p className="text-xl text-gray-600">管理您的個人信息、課程進度和會員權益</p>
        </div>

        {/* Member Status Card */}
        <Card className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${currentMembership.color}`}>
                  <MembershipIcon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                  <p className="text-purple-100">{currentMembership.name}</p>
                  <p className="text-sm text-purple-200">加入日期：{userInfo.joinDate}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{userInfo.points}</div>
                <div className="text-purple-200">積分餘額</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
            <TabsTrigger value="profile">個人資料</TabsTrigger>
            <TabsTrigger value="courses">我的課程</TabsTrigger>
            <TabsTrigger value="orders">訂單記錄</TabsTrigger>
            <TabsTrigger value="appointments">預約記錄</TabsTrigger>
            <TabsTrigger value="points">積分記錄</TabsTrigger>
            <TabsTrigger value="benefits">會員權益</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>個人資料</CardTitle>
                    <CardDescription>管理您的個人信息和帳戶設置</CardDescription>
                  </div>
                  <Button
                    onClick={() => isEditing ? handleSaveProfile() : setIsEditing(true)}
                    className={isEditing ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    {isEditing ? (
                      <>
                        <Save className="h-4 w-4 mr-2" />
                        保存
                      </>
                    ) : (
                      <>
                        <Edit className="h-4 w-4 mr-2" />
                        編輯
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">姓名</Label>
                    <Input
                      id="name"
                      value={userInfo.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">電子郵箱</Label>
                    <Input
                      id="email"
                      type="email"
                      value={userInfo.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">電話號碼</Label>
                    <Input
                      id="phone"
                      value={userInfo.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                  <div>
                    <Label htmlFor="address">地址</Label>
                    <Input
                      id="address"
                      value={userInfo.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="flex space-x-4">
                    <Button onClick={handleSaveProfile} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      保存更改
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsEditing(false)}
                    >
                      <X className="h-4 w-4 mr-2" />
                      取消
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Courses Tab */}
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>我的課程</CardTitle>
                <CardDescription>查看您的課程進度和學習記錄</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {courseProgress.map((course) => (
                    <div key={course.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{course.title}</h3>
                        {course.certificate && (
                          <Badge className="bg-green-600">
                            <Award className="h-3 w-3 mr-1" />
                            已獲證書
                          </Badge>
                        )}
                      </div>
                      <div className="mb-3">
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                          <span>進度：{course.completedLessons}/{course.totalLessons} 課</span>
                          <span>{course.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Button size="sm" className="w-full">
                        <BookOpen className="h-4 w-4 mr-2" />
                        繼續學習
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>訂單記錄</CardTitle>
                <CardDescription>查看您的購買歷史和訂單狀態</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">訂單 #{order.id}</div>
                        <Badge variant={order.status === '已完成' ? 'default' : 'secondary'}>
                          {order.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <div>日期：{order.date}</div>
                        <div>商品：{order.items}</div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="font-semibold">¥{order.amount}</div>
                        <div className="text-sm text-green-600">
                          +{order.points} 積分
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments">
            <Card>
              <CardHeader>
                <CardTitle>預約記錄</CardTitle>
                <CardDescription>查看您的預約歷史和即將到來的預約</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {appointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-semibold">{appointment.type}</div>
                        <Badge variant={appointment.status === '已確認' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span>
                            <Calendar className="h-4 w-4 inline mr-1" />
                            {appointment.date} {appointment.time}
                          </span>
                          <span>
                            <User className="h-4 w-4 inline mr-1" />
                            {appointment.doctor}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Points Tab */}
          <TabsContent value="points">
            <Card>
              <CardHeader>
                <CardTitle>積分記錄</CardTitle>
                <CardDescription>查看您的積分獲得和使用記錄</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6 p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg text-white">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{userInfo.points}</div>
                    <div>當前積分餘額</div>
                  </div>
                </div>
                <div className="space-y-4">
                  {pointsHistory.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between border-b pb-3">
                      <div>
                        <div className="font-medium">{transaction.description}</div>
                        <div className="text-sm text-gray-500">{transaction.date}</div>
                      </div>
                      <div className={`font-semibold ${
                        transaction.type === 'earn' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {transaction.type === 'earn' ? '+' : ''}{transaction.points}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Benefits Tab */}
          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>會員權益</CardTitle>
                <CardDescription>了解您的會員等級和專屬權益</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {Object.entries(membershipLevels).map(([level, info]) => {
                    const Icon = info.icon;
                    const isCurrentLevel = level === userInfo.membershipLevel;
                    return (
                      <Card key={level} className={`${isCurrentLevel ? 'ring-2 ring-purple-500' : ''}`}>
                        <CardContent className="pt-6">
                          <div className="text-center mb-4">
                            <div className={`inline-flex p-3 rounded-full ${info.color} mb-3`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-semibold">{info.name}</h3>
                            {isCurrentLevel && (
                              <Badge className="mt-2">當前等級</Badge>
                            )}
                          </div>
                          <ul className="space-y-2 text-sm">
                            {info.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 text-blue-900">如何升級會員等級？</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-2">銀牌會員</div>
                      <div>累計消費滿 ¥2,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600 mb-2">金牌會員</div>
                      <div>累計消費滿 ¥5,000</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-2">鉑金會員</div>
                      <div>累計消費滿 ¥10,000</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MemberCenter;

