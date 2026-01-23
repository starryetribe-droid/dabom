import React from 'react';
import { Sprout, CloudRain, Sun, Award, Droplets } from 'lucide-react';

const Garden: React.FC = () => {
   return (
      <section className="py-24 bg-[#1B270E] text-white relative overflow-hidden">
         {/* Dynamic particles background */}
         <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-40 right-40 w-3 h-3 bg-accent/30 rounded-full animate-float"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1B270E]/90 z-10 pointer-events-none"></div>
         </div>

         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

               <div className="order-2 lg:order-1">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-accent-light font-bold text-sm mb-6 border border-white/10 backdrop-blur-sm">
                     Gamification System
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                     매일 조금씩 자라나는<br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400">기억의 정원</span>
                  </h2>
                  <p className="text-white/70 text-lg mb-10 leading-relaxed max-w-lg">
                     어르신이 대화를 나누고 두뇌 운동을 할 때마다 '물방울'이 모입니다.
                     성취감을 주는 즉각적인 보상으로 앱 사용을 즐거운 습관으로 만들어드립니다.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                     <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                           <Droplets className="text-blue-300" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">물방울 적립</h4>
                        <p className="text-sm text-white/50">활동 완료 시 획득</p>
                     </div>
                     <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                           <Sprout className="text-green-300" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">캐릭터 성장</h4>
                        <p className="text-sm text-white/50">씨앗에서 꽃까지</p>
                     </div>
                     <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors cursor-pointer group">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                           <Award className="text-yellow-300" />
                        </div>
                        <h4 className="font-bold text-lg mb-1">리워드</h4>
                        <p className="text-sm text-white/50">나만의 정원 꾸미기</p>
                     </div>
                  </div>
               </div>

               {/* Visual Representation */}
               <div className="order-1 lg:order-2 relative flex justify-center">
                  {/* Glow Effect */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-accent/20 rounded-full blur-[80px]"></div>

                  {/* Phone Mockup */}
                  <div className="relative w-[320px] h-[640px] bg-[#111] rounded-[50px] border-8 border-[#333] shadow-2xl overflow-hidden ring-1 ring-white/20">
                     {/* Dynamic Island */}
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-xl z-30"></div>

                     {/* Screen Content */}
                     <div className="w-full h-full bg-gradient-to-b from-[#E0F7FA] to-[#FFF3E0] relative flex flex-col">
                        {/* Top Bar */}
                        <div className="pt-12 px-6 flex justify-between items-center">
                           <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-sm font-bold text-primary">Lv.3</div>
                              <span className="text-sm font-bold text-gray-700">김철수님</span>
                           </div>
                           <div className="flex items-center gap-1 bg-white/80 px-3 py-1 rounded-full">
                              <Droplets size={14} className="text-blue-500 fill-blue-500" />
                              <span className="text-sm font-bold text-gray-800">1,240</span>
                           </div>
                        </div>

                        {/* Main Game Area */}
                        <div className="flex-1 relative flex items-center justify-center">
                           {/* Sun */}
                           <div className="absolute top-10 right-10 animate-spin-slow">
                              <Sun size={48} className="text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                           </div>

                           {/* Clouds */}
                           <div className="absolute top-20 left-10 w-16 h-8 bg-white rounded-full opacity-80 blur-sm animate-float"></div>

                           {/* Character */}
                           <div className="relative z-10 transform scale-125 translate-y-10">
                              {/* Simple CSS 3D Plant Character */}
                              <div className="w-32 h-32 bg-[#8BC34A] rounded-full shadow-inner flex items-center justify-center relative animate-bounce" style={{ animationDuration: '3s' }}>
                                 {/* Face */}
                                 <div className="flex gap-4">
                                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                                    <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                                 </div>
                                 <div className="absolute top-20 w-4 h-2 bg-pink-300 rounded-full opacity-50"></div>
                                 {/* Leaves Hair */}
                                 <div className="absolute -top-6 w-10 h-16 bg-[#7CB342] rounded-full rotate-[-15deg] border-l-4 border-white/10"></div>
                                 <div className="absolute -top-4 left-16 w-8 h-12 bg-[#9CCC65] rounded-full rotate-[15deg] border-r-4 border-white/10"></div>
                              </div>
                              <div className="w-24 h-6 bg-black/10 rounded-full mx-auto mt-4 blur-sm"></div>
                           </div>
                        </div>

                        {/* Bottom UI */}
                        <div className="h-24 bg-white/90 backdrop-blur-md rounded-t-[30px] p-6 flex justify-around items-center shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                           <div className="flex flex-col items-center gap-1 text-primary cursor-pointer hover:scale-110 transition-transform">
                              <div className="p-3 bg-blue-100 rounded-full">
                                 <Droplets size={20} className="text-blue-600" />
                              </div>
                              <span className="text-sm font-bold">물주기</span>
                           </div>
                           <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:scale-110 transition-transform">
                              <div className="p-3 bg-gray-100 rounded-full">
                                 <Sun size={20} className="text-gray-500" />
                              </div>
                              <span className="text-sm font-bold">햇볕</span>
                           </div>
                           <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:scale-110 transition-transform">
                              <div className="p-3 bg-gray-100 rounded-full">
                                 <Award size={20} className="text-gray-500" />
                              </div>
                              <span className="text-sm font-bold">보관함</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
};

export default Garden;