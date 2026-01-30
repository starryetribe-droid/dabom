
import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, BarChart3, Frown, Brain } from 'lucide-react';

const BrainFitness: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="brain-fitness">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] leading-tight mb-4">
                        마음 건강의 빈틈을 채우는<br />
                        마지막 퍼즐, <span className="text-[#E4621D]">'Brain Fitness'</span>
                    </h2>
                    <p className="text-[#5D4037] text-lg">
                        우울감 완화가 인지 기능 유지에 기여하고, 인지 훈련이 다시 우울감 개선을 돕는<br className="hidden md:block" />
                        <span className="font-bold border-b border-[#3E2723]/30">'상호보완적 선순환'</span>을 완성합니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">

                    {/* Left: Cycle Diagram */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 relative flex flex-col items-center min-h-[600px]"
                    >
                        <h3 className="text-2xl font-bold text-[#3E2723] mb-12 w-full text-center">우울·인지 기능의 양방향 상관관계</h3>

                        {/* Diagram Container - Increased size for better spacing */}
                        {/* Diagram Container - Redesigned to match illustration */}
                        <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center my-auto">

                            {/* Rotating Dotted Circle Path */}
                            <svg className="absolute inset-0 w-full h-full animate-spin-slow opacity-60 pointer-events-none" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="42" fill="none" stroke="#cfd8dc" strokeWidth="1.5" strokeDasharray="4 4" strokeLinecap="round" />
                            </svg>

                            {/* Top Node: Depression (Red Theme) */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-56">
                                <div className="bg-white rounded-[32px] px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-red-50 flex flex-col items-center text-center w-full transition-transform hover:-translate-y-1 duration-300">
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-3 text-red-500 shadow-sm">
                                        <Frown size={24} strokeWidth={2.5} />
                                    </div>
                                    <div className="font-bold text-[#263238] text-lg leading-tight mb-1">우울 증상</div>
                                    <div className="text-[13px] text-[#90A4AE] font-medium tracking-tight">Depressive Symptoms</div>
                                </div>
                            </div>

                            {/* Center Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full px-8 pointer-events-none">
                                <div className="text-[15px] text-[#546E7A] font-bold leading-relaxed whitespace-nowrap">
                                    우울하면 인지기능이 저하되고,<br />
                                    인지기능이 저하되면<br />
                                    더 우울해집니다.
                                </div>
                            </div>

                            {/* Bottom Node: Cognitive (Blue Theme) */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-56">
                                <div className="bg-white rounded-[32px] px-6 py-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-blue-50 flex flex-col items-center text-center w-full transition-transform hover:-translate-y-1 duration-300">
                                    <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-3 text-blue-600 shadow-sm">
                                        <Brain size={24} strokeWidth={2.5} />
                                    </div>
                                    <div className="font-bold text-[#263238] text-lg leading-tight mb-1">인지 기능</div>
                                    <div className="text-[13px] text-[#90A4AE] font-medium tracking-tight">Cognitive Function</div>
                                </div>
                            </div>

                            {/* Left Arrow: Improvement (Up) */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center pointer-events-none opacity-80">
                                <span className="absolute left-[-15px] top-1/2 -translate-y-1/2 -rotate-90 text-sm font-bold text-black whitespace-nowrap origin-center tracking-tight">개선</span>
                                <svg width="24" height="60" viewBox="0 0 24 60" fill="none" className="text-gray-400 ml-2">
                                    <path d="M12 5L12 55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                            {/* Right Arrow: Influence (Down) */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-center h-full justify-center pointer-events-none opacity-80">
                                <span className="absolute right-[-15px] top-1/2 -translate-y-1/2 rotate-90 text-sm font-bold text-black whitespace-nowrap origin-center tracking-tight">영향</span>
                                <svg width="24" height="60" viewBox="0 0 24 60" fill="none" className="text-gray-400 mr-2">
                                    <path d="M12 55L12 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                                    <path d="M5 48L12 55L19 48" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>

                        </div>

                        <div className="mt-auto mb-6 bg-[#E3F2FD]/50 text-[#1565C0] px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#2962FF] flex items-center justify-center text-white text-[10px]">✓</div>
                            "우울 증상 개선 시, 인지 기능 훈련 병행 권장"
                        </div>

                        <div className="absolute bottom-4 right-8 text-xs font-medium text-gray-400">
                            Evidence: JAMA Network Open
                        </div>
                    </motion.div>


                    {/* Right: Exercises Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-[#3E2723] mb-12 text-center">맞춤형 두뇌 건강 운동 프로그램 6종</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 mb-10">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">기억력과 집중력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-1.png" alt="기억력과 집중력" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">숫자 순서대로<br />맞추기</div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">작업 기억력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-2.png" alt="작업 기억력" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">숫자 거꾸로<br />맞추기</div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">언어 인식력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-3.png" alt="언어 인식력" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어 바로<br />맞추기</div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">언어 회상력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-4.png" alt="언어 회상력" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어<br />회상하기</div>
                            </div>

                            {/* Item 5 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">언어 분류력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-5.png" alt="언어 분류력" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어<br />분류하기</div>
                            </div>

                            {/* Item 6 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 bg-[#EFEBE9] text-[#5D4037] px-3 py-1 rounded-full text-xs font-bold tracking-tight inline-block">논리 기억력</div>
                                <div className="w-16 h-16 mb-3 flex items-center justify-center filter drop-shadow-md">
                                    <img src="/brain-fitness-icon-6.png" alt="이야기 기억하기" className="w-full h-full object-contain" />
                                </div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">이야기<br />기억하기</div>
                            </div>
                        </div>

                        {/* Bottom Note */}
                        <div className="mt-auto bg-[#F5F5F5] rounded-2xl p-6 flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#E3F2FD] text-[#2962FF] flex items-center justify-center shrink-0">
                                <BarChart3 size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-[#3E2723] text-base mb-1">결과 데이터 기반 난이도 자동 조정</div>
                                <p className="text-[#5D4037] text-sm leading-relaxed">
                                    매회 훈련 결과를 분석하여 <span className="text-[#2962FF] font-bold">개인별 인지 수준</span>에 맞는<br />
                                    최적의 난이도로 자동 상향/하향 조정됩니다.
                                </p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>

            <style>{`
                .mask-hexagon {
                    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }
            `}</style>
        </section>
    );
};

export default BrainFitness;
