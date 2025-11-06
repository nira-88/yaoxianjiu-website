import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Zap, 
  Shield, 
  Target,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Heart,
      title: '通痹止痛',
      description: '有效緩解各種疼痛症狀，改善血液循環'
    },
    {
      icon: Zap,
      title: '祛風止癢',
      description: '治療皮膚疾病，緩解瘙癢症狀'
    },
    {
      icon: Shield,
      title: '活血化瘀',
      description: '促進血液循環，消除瘀血阻滞'
    },
    {
      icon: Target,
      title: '精準治療',
      description: '針對特定穴位進行精準治療'
    }
  ];

  const indications = [
    '感冒', '痛經', '外陰白斑', '乳腺增生病', 
    '眼底病', '頸椎病', '腰椎間盤突出', '失眠症',
    '胃炎', '關節炎', '神經痛', '皮膚病'
  ];

  const process = [
    {
      step: 1,
      title: '診斷評估',
      description: '專業中醫師進行詳細診斷，確定治療方案'
    },
    {
      step: 2,
      title: '穴位定位',
      description: '根據病情選擇合適的穴位或治療部位'
    },
    {
      step: 3,
      title: '藥線點灸',
      description: '使用特製藥線進行精準點灸治療'
    },
    {
      step: 4,
      title: '療程跟進',
      description: '定期評估療效，調整治療方案'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-600">傳統中醫療法</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">關於藥線灸</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            藥線灸是流傳於壯族的一種民間療法，屬於南中國的傳統自然療法。
            它使用經過中藥炮製的苧麻線點燃後，直接灼灸患者體表的特定穴位或部位，以達到治療疾病的目的。
          </p>
        </div>

        {/* History and Background */}
        <section className="mb-16">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800">歷史背景</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                藥線灸作為中國傳統醫學的重要組成部分，有著悠久的歷史。這種療法最初流傳於壯族地區，
                經過世代傳承和發展，逐漸形成了完整的理論體系和治療方法。
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                藥線灸的獨特之處在於其使用的藥線是經過特殊中藥溶液浸泡加工製成的苧麻線，
                這些藥線不僅具有物理刺激作用，更重要的是藥物成分能夠通過皮膚滲透，
                發揮藥物的治療作用。
              </p>
              <p className="text-gray-700 leading-relaxed">
                2011年，藥線灸被列入珠海市級非物質文化遺產名錄，這標誌著這一傳統療法得到了官方的認可和保護，
                為其傳承和發展提供了重要保障。
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Principles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">技術原理</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">材料特點</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>藥線由苧麻搓成，經過貴重藥物溶液浸泡加工</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>每條藥線長30cm，分為3種不同規格</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>藥線燃燒時形成珠火，溫度適中，安全有效</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-green-800">治療機制</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>通過局部刺激激發經絡氣血運行</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>藥物成分經皮膚滲透發揮治療作用</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <span>調節人體免疫功能，增強抗病能力</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">主要功效</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Indications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">適應症</h2>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-green-800">常見治療疾病</CardTitle>
              <CardDescription>
                藥線灸適用於多種疾病的治療，以下是常見的適應症
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {indications.map((indication, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-gray-700">{indication}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Treatment Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">治療流程</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Safety Notes */}
        <section>
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-amber-600" />
                <CardTitle className="text-xl text-amber-800">注意事項</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-amber-700">
                <li>• 治療時藥線點燃後會形成珠火，但不會使用明火直接灼燒皮膚，因此無需過度擔心</li>
                <li>• 建議在專業人士指導下進行治療</li>
                <li>• 孕婦、嚴重心臟病患者等特殊人群需謹慎使用</li>
                <li>• 治療後注意保暖，避免受風寒</li>
                <li>• 如有不適反應，請及時聯繫醫師</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;

