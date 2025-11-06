import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ShoppingCart, 
  Star, 
  Plus,
  Minus,
  Package,
  Truck,
  Shield,
  Award,
  Filter,
  Search
} from 'lucide-react';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: '優質藥線（1號）',
      description: '直徑較細的藥線，適合精細穴位治療，每束10條，長度30cm',
      price: 88.0,
      originalPrice: 108.0,
      stock: 100,
      category: '藥線',
      image: '/images/yaoxian-1.jpg',
      rating: 4.8,
      reviews: 156,
      features: ['精細穴位專用', '燃燒穩定', '藥效持久', '安全無毒'],
      specifications: {
        '直徑': '1.2mm',
        '長度': '30cm',
        '包裝': '10條/束',
        '保質期': '3年'
      }
    },
    {
      id: 2,
      name: '優質藥線（2號）',
      description: '中等直徑的藥線，適合一般治療使用，性價比最高的選擇',
      price: 98.0,
      originalPrice: 118.0,
      stock: 150,
      category: '藥線',
      image: '/images/yaoxian-2.jpg',
      rating: 4.9,
      reviews: 203,
      features: ['通用型藥線', '效果穩定', '使用方便', '經濟實惠'],
      specifications: {
        '直徑': '1.5mm',
        '長度': '30cm',
        '包裝': '10條/束',
        '保質期': '3年'
      }
    },
    {
      id: 3,
      name: '優質藥線（3號）',
      description: '直徑較粗的藥線，適合大面積治療，燃燒時間更長',
      price: 108.0,
      originalPrice: 128.0,
      stock: 80,
      category: '藥線',
      image: '/images/yaoxian-3.jpg',
      rating: 4.7,
      reviews: 89,
      features: ['大面積治療', '燃燒持久', '熱力充足', '深層滲透'],
      specifications: {
        '直徑': '2.0mm',
        '長度': '30cm',
        '包裝': '10條/束',
        '保質期': '3年'
      }
    },
    {
      id: 4,
      name: '藥線灸工具套裝',
      description: '包含鑷子、點火器、滅火盤等專業工具，新手必備套裝',
      price: 288.0,
      originalPrice: 358.0,
      stock: 50,
      category: '工具',
      image: '/images/tools-set.jpg',
      rating: 4.9,
      reviews: 67,
      features: ['專業工具', '新手必備', '安全可靠', '使用方便'],
      specifications: {
        '包含': '鑷子、點火器、滅火盤、支架',
        '材質': '不鏽鋼',
        '包裝': '精美禮盒',
        '保修': '1年'
      }
    },
    {
      id: 5,
      name: '《藥線灸實用手冊》',
      description: '劉一飊先生親自編寫的實用指南，包含225種病症治療方法',
      price: 68.0,
      originalPrice: 88.0,
      stock: 200,
      category: '書籍',
      image: '/images/handbook.jpg',
      rating: 5.0,
      reviews: 312,
      features: ['大師親著', '實用指南', '圖文並茂', '權威資料'],
      specifications: {
        '頁數': '368頁',
        '開本': '16開',
        '裝幀': '精裝',
        '出版': '中醫藥出版社'
      }
    },
    {
      id: 6,
      name: '藥線灸穴位圖譜',
      description: '詳細的人體穴位圖譜，標註藥線灸適用穴位和治療方法',
      price: 128.0,
      originalPrice: 158.0,
      stock: 75,
      category: '書籍',
      image: '/images/acupoint-chart.jpg',
      rating: 4.8,
      reviews: 94,
      features: ['穴位詳解', '治療指導', '彩色印刷', '專業權威'],
      specifications: {
        '尺寸': 'A3大開',
        '材質': '防水覆膜',
        '包裝': '卷筒包裝',
        '語言': '中英對照'
      }
    },
    {
      id: 7,
      name: '藥線製作原料包',
      description: '包含製作藥線所需的苧麻線和中藥配方，可製作100條藥線',
      price: 188.0,
      originalPrice: 228.0,
      stock: 30,
      category: '原料',
      image: '/images/materials.jpg',
      rating: 4.6,
      reviews: 45,
      features: ['DIY製作', '天然原料', '傳統配方', '製作教程'],
      specifications: {
        '苧麻線': '500g',
        '中藥配方': '完整配方',
        '製作量': '約100條',
        '教程': '詳細說明書'
      }
    },
    {
      id: 8,
      name: '藥線灸體驗套裝',
      description: '適合初次體驗的套裝，包含各種規格藥線和基礎工具',
      price: 168.0,
      originalPrice: 208.0,
      stock: 120,
      category: '套裝',
      image: '/images/starter-kit.jpg',
      rating: 4.9,
      reviews: 178,
      features: ['新手友好', '完整體驗', '性價比高', '安全指導'],
      specifications: {
        '藥線': '1-3號各5條',
        '工具': '基礎工具包',
        '手冊': '使用指南',
        '包裝': '精美包裝'
      }
    }
  ];

  const categories = [
    { id: 'all', name: '全部商品', count: products.length },
    { id: '藥線', name: '藥線', count: products.filter(p => p.category === '藥線').length },
    { id: '工具', name: '工具', count: products.filter(p => p.category === '工具').length },
    { id: '書籍', name: '書籍', count: products.filter(p => p.category === '書籍').length },
    { id: '原料', name: '原料', count: products.filter(p => p.category === '原料').length },
    { id: '套裝', name: '套裝', count: products.filter(p => p.category === '套裝').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-600">正品保證</Badge>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">藥線商城</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            精選優質藥線和專業工具，由劉一飊先生親自監製，
            確保每一件產品都符合最高品質標準。
          </p>
        </div>

        {/* Features */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg">正品保證</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">劉一飊先生親自監製</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg">快速配送</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">全國包郵，48小時發貨</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg">品質保障</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">7天無理由退換貨</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Package className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <CardTitle className="text-lg">精美包裝</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">專業包裝，安全送達</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Search className="h-5 w-5 mr-2" />
                  商品搜索
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input
                  placeholder="搜索商品..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </CardContent>
            </Card>

            {/* Categories */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  商品分類
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-md transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-amber-100 text-amber-800'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-500">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Shopping Cart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  購物車 ({getTotalItems()})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {cart.length === 0 ? (
                  <p className="text-gray-500 text-center">購物車是空的</p>
                ) : (
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium truncate">{item.name}</p>
                          <p className="text-xs text-gray-500">¥{item.price}</p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center font-bold">
                        <span>總計：</span>
                        <span className="text-amber-600">¥{getTotalPrice().toFixed(2)}</span>
                      </div>
                      <Button className="w-full mt-3 bg-amber-600 hover:bg-amber-700">
                        立即結算
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-lg flex items-center justify-center">
                      <Package className="h-16 w-16 text-amber-600" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{product.category}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                        <span className="text-xs text-gray-500">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="text-2xl font-bold text-amber-600">¥{product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-sm text-gray-500">庫存：{product.stock}</span>
                    </div>
                    
                    <Button
                      onClick={() => addToCart(product)}
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      disabled={product.stock === 0}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.stock === 0 ? '缺貨' : '加入購物車'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Service Information */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">服務保障</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">配送說明</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 全國包郵（偏遠地區除外）</li>
                  <li>• 48小時內發貨</li>
                  <li>• 支持順豐、圓通等快遞</li>
                  <li>• 貴重物品提供保價服務</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">售後服務</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 7天無理由退換貨</li>
                  <li>• 質量問題免費退換</li>
                  <li>• 專業客服在線解答</li>
                  <li>• 提供使用指導服務</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">支付方式</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 支付寶、微信支付</li>
                  <li>• 銀行卡在線支付</li>
                  <li>• 貨到付款（部分地區）</li>
                  <li>• 企業轉賬</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">品質保證</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• 劉一飊先生親自監製</li>
                  <li>• 傳統工藝製作</li>
                  <li>• 嚴格質量檢測</li>
                  <li>• 正品保證承諾</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Shop;

