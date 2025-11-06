import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  BookOpen, 
  Calendar,
  Star,
  TrendingUp,
  Heart,
  ArrowRight
} from 'lucide-react';

const AboutMaster = () => {
  const achievements = [
    {
      year: '1990',
      title: '師從伯母利開雲',
      description: '系統學習《開雲傳灸法》記載的225種病症灸法，掌握43個獨門穴位及藥線製作秘方'
    },
    {
      year: '1994',
      title: '成為第十二代傳人',
      description: '正式成為藥線灸第十二代傳人，開始整理並編撰多部理論專著'
    },
    {
      year: '2008',
      title: '定居珠海創業',
      description: '組建團隊成立公司，註冊專用商標，構建「研發-臨床試驗-生產」的創新鏈條'
    },
    {
      year: '2011',
      title: '非遺名錄認定',
      description: '藥線灸列入珠海市級非物質文化遺產名錄'
    },
    {
      year: '2012',
      title: '代表性傳承人',
      description: '被認定為珠海市級非物質文化遺產代表性傳承人'
    },
    {
      year: '2019',
      title: '優秀非遺傳承人',
      description: '在第十屆珠海高新區非遺文化節獲頒「優秀非遺傳承人」證書'
    }
  ];

  const statistics = [
    {
      icon: Users,
      number: '2萬+',
      label: '累計服務患者',
      description: '截至2019年累計服務量突破2萬例'
    },
    {
      icon: TrendingUp,
      number: '4000+',
      label: '年均服務量',
      description: '自2015年起年均服務患者超過4000人次'
    },
    {
      icon: BookOpen,
      number: '100+',
      label: '培養學員',
      description: '通過進企業、學校開展展示教學，累計培養學員超過百人'
    },
    {
      icon: Award,
      number: '43個',
      label: '獨門穴位',
      description: '完善的心法體系新增獨門口訣及獨門穴位共43個'
    }
  ];

  const innovations = [
    {
      title: '數位化轉型',
      description: '開發藥線灸遠程診斷理療平台，推動傳統技藝數位化轉型',
      icon: TrendingUp
    },
    {
      title: '標準化生產',
      description: '研發的藥線產品通過標準化生產，使傳統技藝適應現代醫療規範',
      icon: Star
    },
    {
      title: '理論體系完善',
      description: '形成完整的技藝傳承體系，新增獨門口訣及穴位，顯著提升治療效果',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">第十二代傳承人</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">關於劉一飊先生</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            珠海非物質文化遺產藥線灸的第十二代傳人，珠海市級非物質文化遺產項目代表性傳承人，
            致力於傳承和發揚這一古老的中醫療法。
          </p>
        </div>

        {/* Master Profile */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gradient-to-br from-green-600 to-amber-600 rounded-lg shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-4xl font-bold text-green-800">劉</span>
                  </div>
                  <p className="text-white font-semibold text-xl">劉一飊先生</p>
                  <p className="text-amber-100">藥線灸第十二代傳承人</p>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-green-800">個人簡介</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    劉一飊先生是珠海非物質文化遺產藥線灸的第十二代傳人，也是珠海市級非物質文化遺產項目代表性傳承人。
                    自1990年師從伯母利開雲以來，他系統學習了《開雲傳灸法》中記載的225種病症灸法，
                    並掌握了43個獨門穴位及藥線製作秘方。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    1994年正式成為藥線灸第十二代傳人後，劉先生開始整理並編撰多部理論專著，
                    形成了完整的技藝傳承體系。他不僅傳承了傳統技藝，更在此基礎上進行創新發展，
                    結合現代醫療需求，推動傳統技藝的現代化轉型。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">成就數據</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800">{stat.number}</CardTitle>
                  <CardDescription className="text-lg font-semibold">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">傳承歷程</h2>
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {achievement.year}
                  </div>
                </div>
                <Card className="flex-1">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-800">{achievement.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{achievement.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Innovations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">創新發展</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((innovation, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                    <innovation.icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <CardTitle className="text-lg">{innovation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{innovation.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social Contribution */}
        <section className="mb-16">
          <Card className="bg-green-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center">
                <Heart className="h-6 w-6 mr-2" />
                社會貢獻
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                劉一飊先生積極參與非遺文化節、社區義診等活動，致力於推廣和普及藥線灸技術。
                他通過進入企業、學校開展展示教學，讓更多人了解和學習這一傳統療法。
              </p>
              <p className="text-gray-700 leading-relaxed">
                其研發的藥線產品通過標準化生產，使傳統技藝適應現代醫療規範，
                相關成果曾被《中國中醫藥報》等媒體專題報導，為傳統中醫藥的現代化發展做出了重要貢獻。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-green-600 to-green-800 text-white">
            <CardHeader>
              <CardTitle className="text-2xl">跟隨大師學習藥線灸</CardTitle>
              <CardDescription className="text-green-100">
                親身體驗傳統中醫的神奇療效，學習千年傳承的醫療智慧
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AboutMaster;

