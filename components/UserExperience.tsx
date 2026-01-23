import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Sprout, Flower, Droplets } from 'lucide-react';


const UserExperience: React.FC = () => {
   return (
      <div className="py-24 bg-transparent h-full flex flex-col justify-center border-b border-gray-200">
         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.3 }}
               transition={{ duration: 0.8 }}
               className="text-center mb-20"
            >
               <span className="inline-block py-1 px-3 border border-gray-200 text-sm font-bold text-gray-500 mb-4 bg-gray-50">
                  UX & GAMIFICATION
               </span>
               <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-tight">
                  세련된 경험과 지속 가능한 재미,<br />
                  <span className="text-accent">솔루션 완주율을 높이다</span>
               </h2>
            </motion.div>

            {/* Section 1: Ageless UX - Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 mb-24 shadow-sm">
               <div className="bg-gray-50 p-12 lg:p-16 flex flex-col justify-center">
                  <div className="inline-block border border-primary text-primary text-sm font-bold px-3 py-1 mb-6 self-start">Ageless UX</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">자존감을 지키는<br />'에이지리스 UX'</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                     시니어를 '노인'으로 규정하는 투박한 디자인을 지양합니다.<br />
                     글자 크기 경쟁 대신 <strong>명확한 계층 구조</strong>와 <strong>세련된 UI</strong>로 설계하여,
                     사용자 만족도와 자발적 참여율을 극대화합니다.
                  </p>
                  <ul className="space-y-4">
                     <li className="flex items-center gap-4 text-gray-700 font-bold border-b border-gray-200 pb-2">
                        <MousePointerClick size={20} className="text-primary" />
                        큰 터치 영역과 명확한 피드백
                     </li>
                     <li className="flex items-center gap-4 text-gray-700 font-bold border-b border-gray-200 pb-2">
                        <MousePointerClick size={20} className="text-primary" />
                        복잡한 메뉴를 제거한 직관적 흐름
                     </li>
                  </ul>
               </div>
               <div className="bg-white p-12 lg:p-16 flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gray-200">
                  {/* Abstract UI representation - Corporate Style */}
                  <div className="bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200 w-full max-w-sm">
                     <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-6">
                        <div className="w-12 h-12 bg-gray-100 flex items-center justify-center">
                           <div className="w-6 h-6 bg-gray-300"></div>
                        </div>
                        <div className="space-y-2 flex-1">
                           <div className="w-2/3 h-4 bg-gray-800"></div>
                           <div className="w-1/2 h-3 bg-gray-300"></div>
                        </div>
                     </div>
                     <div className="space-y-4">
                        <div className="h-14 bg-primary text-white w-full flex items-center justify-center font-bold text-lg hover:bg-primary-dark transition-colors cursor-pointer">
                           크고 명확한 버튼
                        </div>
                        <div className="h-14 bg-white border border-gray-300 w-full flex items-center justify-center text-gray-500 font-medium">
                           읽기 쉬운 텍스트
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Section 2: Gamification - Corporate Banner */}
            <div className="bg-[#1B270E] p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
               {/* Corporate Decor LInes */}
               <div className="absolute top-0 right-0 w-1/3 h-full border-l border-white/10"></div>
               <div className="absolute top-0 right-0 w-2/3 h-full border-l border-white/5"></div>

               <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                  <div className="order-2 lg:order-1">
                     {/* Growth Steps - Linear & Clean */}
                     <div className="flex justify-between items-end h-48 max-w-md mx-auto lg:mx-0 border-b border-white/20 pb-8 px-4">
                        {/* Stage 1: Seed */}
                        <div className="flex flex-col items-center gap-4 group">
                           <div className="w-16 h-16 border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white/5">
                              <Droplets className="text-blue-300" />
                           </div>
                           <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                              className="w-3 h-3 bg-amber-600 rounded-sm"
                           ></motion.div>
                           <span className="text-sm text-white/50 font-bold tracking-widest uppercase">Seed</span>
                        </div>

                        {/* Stage 2: Sprout */}
                        <div className="flex flex-col items-center gap-4 group">
                           <div className="w-16 h-16 border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white/5">
                              <Sprout className="text-green-300" />
                           </div>
                           <motion.div
                              animate={{ y: [0, -5, 0] }}
                              transition={{ repeat: Infinity, duration: 3 }}
                           >
                              <Sprout size={24} className="text-green-400" />
                           </motion.div>
                           <span className="text-sm text-white/50 font-bold tracking-widest uppercase">Sprout</span>
                        </div>

                        {/* Stage 3: Flower */}
                        <div className="flex flex-col items-center gap-4 group">
                           <div className="w-16 h-16 border border-white/20 flex items-center justify-center transition-colors group-hover:bg-white/5">
                              <Flower className="text-pink-300" />
                           </div>
                           <motion.div
                              animate={{ rotate: [0, 10, -10, 0] }}
                              transition={{ repeat: Infinity, duration: 4 }}
                           >
                              <Flower size={32} className="text-pink-400" />
                           </motion.div>
                           <span className="text-sm text-white/50 font-bold tracking-widest uppercase">Flower</span>
                        </div>
                     </div>
                  </div>

                  <div className="order-1 lg:order-2">
                     <div className="inline-block border border-accent text-accent text-sm font-bold px-3 py-1 mb-6">GAMIFICATION</div>
                     <h3 className="text-2xl md:text-4xl font-bold mb-6 leading-tigher">매일의 대화가<br />성장의 기록이 됩니다.</h3>
                     <p className="text-white/70 leading-relaxed text-lg font-light">
                        지루한 훈련 대신 <strong>'기억의 정원'</strong> 시스템을 적용했습니다.<br />
                        대화와 활동이 곧 성취로 이어지는 순환 구조를 통해<br />
                        지속적인 사용 동기를 부여합니다.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserExperience;