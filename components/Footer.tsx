import React from 'react';

// Reuse SVG Logo for Footer
const DabomLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD54F" />
        <stop offset="100%" stopColor="#FF8F00" />
      </linearGradient>
    </defs>
    <g>
      <circle cx="35" cy="35" r="30" fill="url(#logoGradientFooter)" fillOpacity="0.9" />
      <circle cx="65" cy="35" r="30" fill="url(#logoGradientFooter)" fillOpacity="0.8" />
      <circle cx="35" cy="65" r="30" fill="url(#logoGradientFooter)" fillOpacity="0.8" />
      <circle cx="65" cy="65" r="30" fill="url(#logoGradientFooter)" fillOpacity="0.9" />
    </g>
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/40 backdrop-blur-md border-t border-gray-200 pt-16 pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <DabomLogo className="w-7 h-7 object-contain" />
              <span className="text-2xl font-extrabold text-primary-dark">다봄</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mb-6 font-medium">
              이트라이브 X 고려대 마음건강연구소<br />
              시니어 맞춤형 AI 마음건강 케어 솔루션
            </p>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">B</div>
              <div className="w-9 h-9 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">Y</div>
              <div className="w-9 h-9 rounded-none bg-gray-50 border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-400 hover:bg-gray-100 hover:text-primary transition-colors cursor-pointer">I</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-20">
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">서비스</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">기능 소개</li>
                <li className="hover:text-primary cursor-pointer transition-colors">임상 효과</li>
                <li className="hover:text-primary cursor-pointer transition-colors">요금 안내</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">회사</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">팀 소개</li>
                <li className="hover:text-primary cursor-pointer transition-colors">연구소</li>
                <li className="hover:text-primary cursor-pointer transition-colors">채용</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4 text-sm">지원</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li className="hover:text-primary cursor-pointer transition-colors">공지사항</li>
                <li className="hover:text-primary cursor-pointer transition-colors">자주 묻는 질문</li>
                <li className="hover:text-primary cursor-pointer transition-colors">문의하기</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 font-medium">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center md:text-left">
            <span>사업자등록번호: 123-45-67890</span>
            <span>서울시 성북구 안암로 145 고려대학교</span>
            <span>Contact: support@dabom.care</span>
          </div>
          <p>© 2025 Dabom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;