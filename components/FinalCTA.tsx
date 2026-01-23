import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
   return (
      <div className="py-24 bg-transparent h-full flex flex-col justify-center">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.3 }}
               transition={{ duration: 0.8 }}
               className="relative rounded-[48px] bg-primary-dark overflow-hidden text-white px-8 py-16 md:p-20 text-center md:text-left"
            >
               {/* Background Image Overlay */}
               <div className="absolute inset-0 z-0 opacity-20">
                  <img
                     src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200"
                     alt="Senior using app happy"
                     className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary-dark mix-blend-multiply"></div>
               </div>

               <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                  <div className="max-w-xl">
                     <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                        AI 기반 맞춤형 멘탈케어 다봄으로<br />
                        <span className="text-accent">기업의 성장을 이끌어보세요.</span>
                     </h2>
                     <p className="text-white/70 text-lg mb-8">
                        검증된 효과와 차별화된 경험, 지금 바로 확인하실 수 있습니다.
                     </p>

                     <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 rounded-xl bg-white text-primary-dark font-bold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                           <Download size={20} />
                           서비스 소개서 다운로드
                        </button>
                        <button className="px-8 py-4 rounded-xl bg-accent text-white font-bold hover:bg-accent-dark transition-colors flex items-center justify-center gap-2">
                           앱 무료 체험하기
                           <ArrowRight size={20} />
                        </button>
                     </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 w-full max-w-sm">
                     <h3 className="font-bold text-xl mb-2">도입 문의</h3>
                     <p className="text-white/70 text-sm mb-6">전문 컨설턴트가 최적의 솔루션을 안내해드립니다.</p>
                     <a href="#contact" className="w-full py-3 rounded-lg bg-white text-primary-dark font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
                        <MessageCircle size={18} />
                        서비스 제휴 문의
                     </a>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
   );
};

export default FinalCTA;