import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  HelpCircle, 
  BookOpen, 
  Users, 
  CreditCard,
  Truck,
  Shield,
  Clock,
  Phone,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = React.useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      title: '關於藥線灸',
      icon: BookOpen,
      color: 'bg-green-600',
      questions: [
        {
          question: '什麼是藥線灸？',
          answer: '藥線灸是一種傳統的中醫外治療法，使用特製的藥線在特定穴位上燃燒，通過熱力和藥物的雙重作用來治療疾病。它結合了針灸的穴位理論和中藥的藥理作用，是壯族傳統醫學的重要組成部分。'
        },
        {
          question: '藥線灸有什麼功效？',
          answer: '藥線灸具有溫經散寒、活血化瘀、扶正祛邪的功效。主要適用於風濕性關節炎、頸椎病、腰椎間盤突出、胃腸疾病、婦科疾病、呼吸系統疾病等多種慢性疾病的治療。'
        },
        {
          question: '藥線灸安全嗎？',
          answer: '藥線灸是一種安全的治療方法，但需要由專業人員操作。我們使用的藥線都是按照傳統配方製作，經過嚴格的質量檢測。治療過程中會根據患者的具體情況調整治療方案，確保安全有效。'
        },
        {
          question: '藥線灸適合哪些人群？',
          answer: '藥線灸適合大部分人群，特別是患有慢性疾病、亞健康狀態的人群。但孕婦、嚴重心臟病患者、皮膚破損者等特殊人群需要謹慎使用，建議先諮詢專業醫師。'
        }
      ]
    },
    {
      title: '課程相關',
      icon: Users,
      color: 'bg-blue-600',
      questions: [
        {
          question: '線上課程和線下課程有什麼區別？',
          answer: '線上課程主要以理論學習為主，包含視頻教學、電子資料等，適合初學者了解藥線灸基礎知識。線下課程則提供實操機會，由劉一飊先生親自指導，包含真實案例練習，更適合深度學習和專業提升。'
        },
        {
          question: '完成課程後會獲得什麼證書？',
          answer: '完成線上課程會獲得學習證明；完成線下基礎班會獲得結業證書；高級班會獲得專業認證證書；師資班會獲得教學資格認證，可以獨立開展藥線灸教學工作。'
        },
        {
          question: '沒有中醫基礎可以學習嗎？',
          answer: '可以的。我們的課程設計從基礎開始，即使沒有中醫背景也能學習。基礎班會詳細講解中醫理論、穴位知識等基礎內容，循序漸進地引導學員掌握藥線灸技術。'
        },
        {
          question: '課程費用可以退款嗎？',
          answer: '線上課程在開課前7天可以申請全額退款；線下課程在開課前15天可以申請全額退款，開課前7天可以申請50%退款。開課後原則上不予退款，但可以申請延期到下一期。'
        }
      ]
    },
    {
      title: '購物相關',
      icon: CreditCard,
      color: 'bg-amber-600',
      questions: [
        {
          question: '如何確保購買的藥線是正品？',
          answer: '我們所有的藥線都是由劉一飊先生親自監製，按照傳統工藝製作。每批產品都有質量檢測報告，包裝上有防偽標識。我們承諾所售產品均為正品，如發現假冒產品可以申請十倍賠償。'
        },
        {
          question: '藥線的保質期是多久？',
          answer: '我們的藥線在適當保存條件下（陰涼乾燥處）保質期為3年。建議購買後盡快使用，以確保最佳療效。過期的藥線不建議使用，可能影響治療效果。'
        },
        {
          question: '支持哪些支付方式？',
          answer: '我們支持多種支付方式：支付寶、微信支付、銀行卡在線支付、企業轉賬等。部分地區還支持貨到付款服務。所有支付都經過加密處理，確保資金安全。'
        },
        {
          question: '可以開發票嗎？',
          answer: '可以開具發票。個人購買可以開具普通發票，企業購買可以開具增值稅專用發票。請在下單時備註發票信息，我們會隨貨一起寄送。'
        }
      ]
    },
    {
      title: '配送服務',
      icon: Truck,
      color: 'bg-purple-600',
      questions: [
        {
          question: '配送範圍和時間？',
          answer: '我們支持全國配送（港澳台及偏遠地區除外）。一般情況下48小時內發貨，江浙滬地區1-2天到達，其他地區2-5天到達。急需的客戶可以選擇順豐次日達服務。'
        },
        {
          question: '配送費用如何計算？',
          answer: '單筆訂單滿99元免運費，不滿99元收取10元運費。選擇順豐次日達需要額外支付快遞費用。貴重物品建議選擇保價服務。'
        },
        {
          question: '可以指定配送時間嗎？',
          answer: '我們會盡量滿足您的配送時間要求。您可以在訂單備註中說明期望的配送時間，我們會與快遞公司協調。但具體配送時間還需要根據快遞公司的安排。'
        },
        {
          question: '收到商品後發現問題怎麼辦？',
          answer: '如果收到的商品有質量問題或與描述不符，請在收貨後24小時內聯繫我們。我們提供7天無理由退換貨服務，質量問題我們承擔所有費用。'
        }
      ]
    },
    {
      title: '預約診療',
      icon: Clock,
      color: 'bg-red-600',
      questions: [
        {
          question: '如何預約劉一飊先生的診療？',
          answer: '您可以通過我們的網站預約系統、電話預約或微信預約。建議提前3-7天預約，特別是週末和節假日。我們會在收到預約申請後24小時內與您聯繫確認。'
        },
        {
          question: '診療費用是多少？',
          answer: '診療費用根據服務項目而定：藥線灸治療300元/次，中醫診療200元/次，健康諮詢150元/次。初診患者建議選擇中醫診療，以便全面了解病情。'
        },
        {
          question: '需要帶什麼資料？',
          answer: '初診請攜帶身份證，如有既往的檢查報告、病歷資料、正在服用的藥物清單等，請一併帶來。這些資料有助於醫師更好地了解您的病情。'
        },
        {
          question: '可以取消或改期預約嗎？',
          answer: '可以取消或改期，但請提前24小時通知我們，以便安排其他患者。臨時取消可能會影響其他患者的就診，請盡量避免。'
        }
      ]
    },
    {
      title: '售後服務',
      icon: Shield,
      color: 'bg-indigo-600',
      questions: [
        {
          question: '購買後有技術支持嗎？',
          answer: '是的，我們提供完善的售後技術支持。購買藥線產品的客戶可以獲得使用指導；參加課程的學員可以享受終身技術支持，包括在線答疑、技術交流群等。'
        },
        {
          question: '如何聯繫客服？',
          answer: '您可以通過多種方式聯繫我們：電話客服（工作日9:00-18:00）、微信客服、郵件客服。我們承諾在24小時內回復您的問題。'
        },
        {
          question: '有學員交流群嗎？',
          answer: '有的。參加我們課程的學員都可以加入專門的技術交流群，與其他學員分享經驗，也可以直接向劉一飊先生請教問題。這是一個很好的學習和交流平台。'
        },
        {
          question: '可以申請上門服務嗎？',
          answer: '對於行動不便的患者，我們可以提供上門診療服務（僅限珠海地區）。上門服務需要提前預約，並支付額外的出診費用。具體安排請聯繫我們的客服。'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-600">常見問題</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">常見問題解答</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            這裡整理了用戶最常問的問題和詳細解答，
            如果您沒有找到想要的答案，請隨時聯繫我們的客服團隊。
          </p>
        </div>

        {/* Quick Contact */}
        <section className="mb-12">
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
            <CardContent className="pt-6">
              <div className="text-center">
                <Phone className="h-8 w-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">還有其他問題？</h3>
                <p className="text-gray-600 mb-4">
                  我們的客服團隊隨時為您解答疑問
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-gray-700">+86 756 1234567</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-gray-700">微信：yaoxianjiu123</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Categories */}
        <section>
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item, index) => {
                    const itemKey = `${categoryIndex}-${index}`;
                    const isOpen = openItems[itemKey];
                    
                    return (
                      <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader 
                          className="cursor-pointer"
                          onClick={() => toggleItem(itemKey)}
                        >
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg text-left">{item.question}</CardTitle>
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            )}
                          </div>
                        </CardHeader>
                        {isOpen && (
                          <CardContent>
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Help Center */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">幫助中心</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>學習指南</CardTitle>
                <CardDescription>
                  詳細的學習資料和操作指南
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 藥線灸基礎知識</li>
                  <li>• 穴位定位方法</li>
                  <li>• 安全操作規範</li>
                  <li>• 常見問題處理</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>在線客服</CardTitle>
                <CardDescription>
                  專業客服團隊為您解答疑問
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 工作日 9:00-18:00</li>
                  <li>• 微信在線客服</li>
                  <li>• 電話技術支持</li>
                  <li>• 郵件諮詢服務</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>學員社群</CardTitle>
                <CardDescription>
                  加入學員交流群，分享學習心得
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• 技術交流群</li>
                  <li>• 案例分享</li>
                  <li>• 專家答疑</li>
                  <li>• 學習資源共享</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
            <CardContent className="pt-8 pb-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">仍有疑問？立即聯繫我們</h3>
                <p className="text-green-100 mb-6">
                  我們的專業團隊隨時為您提供幫助和支持
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    電話諮詢
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                    微信客服
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default FAQ;

