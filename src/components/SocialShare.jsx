import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  MessageCircle,
  Copy,
  Mail
} from 'lucide-react';

const SocialShare = ({ url, title, description, className = '' }) => {
  const currentUrl = url || window.location.href;
  const shareTitle = title || '劉一飊藥線灸 - 珠海非物質文化遺產';
  const shareDescription = description || '傳承千年智慧，守護健康人生。劉一飊先生是珠海非物質文化遺產藥線灸第12代傳承人。';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
    wechat: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`,
    email: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDescription + '\n\n' + currentUrl)}`
  };

  const handleShare = (platform) => {
    if (platform === 'copy') {
      navigator.clipboard.writeText(currentUrl).then(() => {
        alert('鏈接已複製到剪貼板！');
      });
      return;
    }

    if (platform === 'wechat') {
      // 顯示微信二維碼
      const qrWindow = window.open('', '_blank', 'width=300,height=300');
      qrWindow.document.write(`
        <html>
          <head><title>微信分享</title></head>
          <body style="text-align: center; padding: 20px;">
            <h3>微信掃碼分享</h3>
            <img src="${shareLinks.wechat}" alt="微信二維碼" />
            <p>使用微信掃描二維碼分享</p>
          </body>
        </html>
      `);
      return;
    }

    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  const shareButtons = [
    {
      platform: 'facebook',
      icon: Facebook,
      label: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      platform: 'twitter',
      icon: Twitter,
      label: 'Twitter',
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      platform: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    {
      platform: 'wechat',
      icon: MessageCircle,
      label: '微信',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      platform: 'email',
      icon: Mail,
      label: '郵件',
      color: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      platform: 'copy',
      icon: Copy,
      label: '複製鏈接',
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Share2 className="h-4 w-4 text-gray-600" />
      <span className="text-sm text-gray-600 mr-2">分享：</span>
      {shareButtons.map((button) => {
        const Icon = button.icon;
        return (
          <Button
            key={button.platform}
            size="sm"
            onClick={() => handleShare(button.platform)}
            className={`${button.color} text-white p-2 h-8 w-8`}
            title={`分享到${button.label}`}
          >
            <Icon className="h-3 w-3" />
          </Button>
        );
      })}
    </div>
  );
};

// 浮動分享按鈕組件
const FloatingSocialShare = ({ url, title, description }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40">
      <div className="flex flex-col items-center space-y-2">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-blue-600 hover:bg-blue-700 rounded-full w-12 h-12 shadow-lg"
        >
          <Share2 className="h-5 w-5" />
        </Button>
        
        {isExpanded && (
          <div className="flex flex-col space-y-2 animate-in slide-in-from-left duration-300">
            <SocialShare 
              url={url} 
              title={title} 
              description={description}
              className="flex-col space-x-0 space-y-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};

// 文章底部分享組件
const ArticleShare = ({ url, title, description, className = '' }) => {
  return (
    <div className={`border-t border-b py-6 my-8 ${className}`}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">分享這篇文章</h3>
        <p className="text-sm text-gray-600">幫助更多人了解藥線灸的神奇療效</p>
      </div>
      <div className="flex justify-center">
        <SocialShare 
          url={url} 
          title={title} 
          description={description}
          className="justify-center"
        />
      </div>
    </div>
  );
};

export { SocialShare, FloatingSocialShare, ArticleShare };
export default SocialShare;

