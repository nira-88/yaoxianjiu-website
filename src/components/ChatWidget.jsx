import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Video,
  Paperclip,
  Smile,
  X,
  Minimize2,
  Maximize2,
  Clock,
  CheckCircle,
  User,
  Bot
} from 'lucide-react';

const LiveChat = ({ isOpen, onClose, onMinimize, isMinimized }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'admin',
      senderName: '客服小王',
      message: '您好！歡迎來到劉一飊藥線灸，我是您的專屬客服。有什麼可以幫助您的嗎？',
      timestamp: new Date(Date.now() - 60000),
      type: 'text'
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    isGuest: true
  });
  const [showUserForm, setShowUserForm] = useState(true);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    '我想了解藥線灸',
    '預約面診',
    '課程諮詢',
    '產品購買',
    '其他問題'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const message = {
      id: messages.length + 1,
      sender: 'user',
      senderName: userInfo.name || '訪客',
      message: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // 模擬客服回復
    setIsTyping(true);
    setTimeout(() => {
      const adminReply = {
        id: messages.length + 2,
        sender: 'admin',
        senderName: '客服小王',
        message: getAutoReply(newMessage),
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, adminReply]);
      setIsTyping(false);
    }, 1500);
  };

  const getAutoReply = (userMessage) => {
    const message = userMessage.toLowerCase();
    if (message.includes('藥線灸') || message.includes('了解')) {
      return '藥線灸是一種傳統的中醫療法，具有溫經散寒、活血化瘀的功效。劉一飊先生是第12代傳承人，擁有豐富的臨床經驗。您想了解哪方面的內容呢？';
    } else if (message.includes('預約') || message.includes('面診')) {
      return '我可以幫您預約劉一飊先生的面診。請問您方便的時間是什麼時候？我們的營業時間是週一至週六 9:00-18:00。';
    } else if (message.includes('課程') || message.includes('學習')) {
      return '我們提供線上和線下的藥線灸課程，包括基礎理論、實操技巧等。您是想學習哪個層次的課程呢？';
    } else if (message.includes('價格') || message.includes('費用')) {
      return '我們的服務價格透明合理：面診200元，藥線灸治療300元，課程價格根據不同級別有所不同。具體需求請告訴我，我為您詳細介紹。';
    } else {
      return '感謝您的諮詢！我會盡快為您解答。如果您有緊急問題，也可以直接撥打我們的服務熱線：+86 756 1234567。';
    }
  };

  const handleQuickReply = (reply) => {
    setNewMessage(reply);
  };

  const handleUserInfoSubmit = () => {
    if (userInfo.name && userInfo.email) {
      setShowUserForm(false);
      const welcomeMessage = {
        id: messages.length + 1,
        sender: 'admin',
        senderName: '客服小王',
        message: `${userInfo.name}，很高興為您服務！我已經記錄了您的聯繫方式，有任何問題都可以隨時諮詢我。`,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages(prev => [...prev, welcomeMessage]);
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('zh-TW', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (!isOpen) return null;

  return (
    <div className={`fixed ${isMinimized ? 'bottom-4 right-4 w-80 h-16' : 'bottom-4 right-4 w-96 h-[600px]'} bg-white rounded-lg shadow-2xl border z-50 transition-all duration-300`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-green-600 text-white rounded-t-lg">
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/images/customer-service.jpg" />
            <AvatarFallback>客服</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">線上客服</div>
            <div className="text-xs text-green-100">通常幾分鐘內回復</div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={onMinimize}
            className="text-white hover:bg-green-700 p-1"
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={onClose}
            className="text-white hover:bg-green-700 p-1"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* User Info Form */}
          {showUserForm && (
            <div className="p-4 border-b bg-blue-50">
              <div className="text-sm font-medium mb-3">為了更好地為您服務，請留下您的聯繫方式：</div>
              <div className="space-y-2">
                <Input
                  placeholder="您的姓名"
                  value={userInfo.name}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                  size="sm"
                />
                <Input
                  placeholder="您的郵箱"
                  type="email"
                  value={userInfo.email}
                  onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  size="sm"
                />
                <Button onClick={handleUserInfoSubmit} size="sm" className="w-full">
                  開始對話
                </Button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 p-4 space-y-4 overflow-y-auto" style={{ height: showUserForm ? '300px' : '400px' }}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <Avatar className="h-6 w-6">
                    {message.sender === 'user' ? (
                      <AvatarFallback className="bg-blue-500 text-white text-xs">
                        {userInfo.name ? userInfo.name.charAt(0) : 'U'}
                      </AvatarFallback>
                    ) : (
                      <AvatarFallback className="bg-green-500 text-white text-xs">客</AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <div
                      className={`p-3 rounded-lg ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}
                    >
                      <div className="text-sm">{message.message}</div>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <Avatar className="h-6 w-6">
                    <AvatarFallback className="bg-green-500 text-white text-xs">客</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {!showUserForm && (
            <div className="px-4 py-2 border-t">
              <div className="text-xs text-gray-500 mb-2">快速回復：</div>
              <div className="flex flex-wrap gap-1">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    size="sm"
                    variant="outline"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs h-6"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          {!showUserForm && (
            <div className="p-4 border-t">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="輸入您的問題..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

const ChatWidget = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  useEffect(() => {
    // 模擬新消息通知
    const timer = setTimeout(() => {
      if (!isChatOpen) {
        setHasNewMessage(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [isChatOpen]);

  const handleOpenChat = () => {
    setIsChatOpen(true);
    setIsMinimized(false);
    setHasNewMessage(false);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
    setIsMinimized(false);
  };

  const handleMinimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      {/* Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={handleOpenChat}
            className="bg-green-600 hover:bg-green-700 rounded-full w-14 h-14 shadow-lg relative"
          >
            <MessageCircle className="h-6 w-6" />
            {hasNewMessage && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            )}
          </Button>
          {hasNewMessage && (
            <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs">
              <div className="text-sm font-medium">有新消息</div>
              <div className="text-xs text-gray-600">客服為您提供專業諮詢</div>
            </div>
          )}
        </div>
      )}

      {/* Chat Window */}
      <LiveChat
        isOpen={isChatOpen}
        onClose={handleCloseChat}
        onMinimize={handleMinimizeChat}
        isMinimized={isMinimized}
      />
    </>
  );
};

export default ChatWidget;

