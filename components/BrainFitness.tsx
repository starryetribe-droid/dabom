
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
                    <span className="text-[#3E2723]/60 font-bold tracking-wider text-[14px] mb-3 block uppercase">COMPLETENESS</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] leading-tight mb-4">
                        마음 건강의 빈틈을 채우는<br />
                        마지막 퍼즐, <span className="text-[#2962FF]">'Brain Fitness'</span>
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
                        className="bg-white rounded-[40px] p-10 shadow-sm border border-gray-100 relative flex flex-col items-center justify-center min-h-[500px]"
                    >
                        <div className="absolute top-6 right-6 bg-[#E3F2FD] text-[#1565C0] text-xs font-bold px-3 py-1.5 rounded-full">
                            Evidence: JAMA Network Open
                        </div>

                        <h3 className="text-xl font-bold text-[#3E2723] mb-12 absolute top-10">우울·인지 기능의 양방향 상관관계</h3>

                        {/* Diagram Container */}
                        <div className="relative w-full max-w-[360px] aspect-square">

                            {/* Dotted Circle Path */}
                            <svg className="absolute inset-0 w-full h-full rotate-45" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="48" fill="none" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 4" />
                            </svg>

                            {/* Top Node: Depression */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-48 bg-[#FFEBEE] rounded-[24px] p-6 flex flex-col items-center text-center z-10 shadow-sm">
                                <div className="w-10 h-10 bg-[#FFCDD2] rounded-full flex items-center justify-center mb-2 text-[#C62828]">
                                    <Frown size={24} />
                                </div>
                                <div className="font-bold text-[#3E2723] text-lg">우울 증상</div>
                                <div className="text-[12px] text-[#8D6E63]">Depressive Symptoms</div>
                            </div>

                            {/* Center Text */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[13px] text-[#8D6E63] leading-relaxed w-48">
                                우울하면 인지기능이 저하되고,<br />
                                인지기능이 저하되면<br />
                                더 우울해집니다.
                            </div>

                            {/* Bottom Node: Cognitive */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 w-48 bg-[#E3F2FD] rounded-[24px] p-6 flex flex-col items-center text-center z-10 shadow-sm">
                                <div className="w-10 h-10 bg-[#BBDEFB] rounded-full flex items-center justify-center mb-2 text-[#1565C0]">
                                    <Brain size={24} />
                                </div>
                                <div className="font-bold text-[#3E2723] text-lg">인지 기능</div>
                                <div className="text-[12px] text-[#8D6E63]">Cognitive Function</div>
                            </div>

                            {/* Arrows - Simplified visual representation */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 flex flex-col items-center gap-1">
                                <div className="h-20 w-[1px] bg-gray-300 relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 border-t border-l border-gray-400 rotate-45"></div>
                                </div>
                                <span className="text-xs text-gray-400 rotate-[-90deg]">개선</span>
                            </div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 flex flex-col items-center gap-1">
                                <span className="text-xs text-gray-400 rotate-[90deg]">영향</span>
                                <div className="h-20 w-[1px] bg-gray-300 relative">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1 w-2 h-2 border-r border-b border-gray-400 rotate-45"></div>
                                </div>
                            </div>

                        </div>

                        <div className="mt-16 bg-[#E3F2FD]/50 text-[#1565C0] px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-[#2962FF] flex items-center justify-center text-white text-[10px]">✓</div>
                            "우울 증상 개선 시, 인지 기능 훈련 병행 권장"
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
                        <h3 className="text-2xl font-bold text-[#3E2723] mb-10 text-center">맞춤형 두뇌 건강 운동 프로그램 6종</h3>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-6 mb-10">
                            {/* Item 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">기억력과 집중력</div>
                                <div className="w-16 h-16 rounded-[20px] bg-[#FF8A65] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[-5deg]">1</div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">숫자 순서대로<br />맞추기</div>
                            </div>

                            {/* Item 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">작업 기억력</div>
                                <div className="w-16 h-16 rounded-[20px] bg-[#FFB74D] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[5deg]">9</div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">숫자 거꾸로<br />맞추기</div>
                            </div>

                            {/* Item 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">언어 인식력</div>
                                <div className="w-16 h-16 rounded-full bg-[#AFB42B] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[-3deg]">A</div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어 바로<br />맞추기</div>
                            </div>

                            {/* Item 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">언어 회상력</div>
                                <div className="w-16 h-16 mask-hexagon bg-[#FF7043] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[3deg]">A</div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어<br />회상하기</div>
                            </div>

                            {/* Item 5 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">언어 분류력</div>
                                <div className="w-16 h-16 mask-hexagon bg-[#EF6C00] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[-5deg]">A</div>
                                <div className="text-[#3E2723] font-bold text-sm leading-tight">단어<br />분류하기</div>
                            </div>

                            {/* Item 6 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-3 text-[#BCAAA4] text-xs font-bold tracking-tight">논리 기억력</div>
                                <div className="w-16 h-16 rounded-[24px] bg-[#8BC34A] text-white text-3xl font-extrabold flex items-center justify-center shadow-md mb-3 rotate-[5deg]">
                                    <div className="w-8 h-8 opacity-90"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" /></svg></div>
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
