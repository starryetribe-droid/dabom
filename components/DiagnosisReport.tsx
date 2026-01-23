
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Activity, LineChart, Heart, FileText, ChevronLeft } from 'lucide-react';

const DiagnosisReport: React.FC = () => {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="diagnosis-report">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <span className="text-[#2962FF] font-bold tracking-wider text-[14px] mb-3 block uppercase">STANDARDIZED DIAGNOSIS & REPORTING</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] leading-tight mb-4">
                        전문적인 <span className="text-[#2962FF]">심리 진단</span>과 <span className="text-[#2962FF]">데이터 리포트</span>
                    </h2>
                    <p className="text-[#5D4037] text-lg">
                        한국심리학회 인증 도구로 측정하고, 개인의 변화에 집중한 리포트 제공
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Column 1: Verification Tools */}
                    <motion.div
                        className="lg:col-span-3 flex flex-col gap-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-[#2962FF] rounded-full p-1"><ClipboardCheck size={16} className="text-white" /></div>
                            <h3 className="font-bold text-[#3E2723] text-lg">표준화된 검증 도구</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Tool 1 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#2962FF] font-black text-xs shrink-0">
                                    MHS:D
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723]">한국형 우울장애 선별 도구</div>
                                    <div className="text-xs text-[#8D6E63] font-medium">Depression Scale</div>
                                </div>
                            </div>

                            {/* Tool 2 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-[#FFEBEE] flex items-center justify-center text-[#FF5252] font-black text-xs shrink-0">
                                    MHS:A
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723]">한국형 불안장애 선별 도구</div>
                                    <div className="text-xs text-[#8D6E63] font-medium">Anxiety Scale</div>
                                </div>
                            </div>

                            {/* Tool 3 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-[#FF9800] font-black text-xs shrink-0">
                                    CORE
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723]">핵심 활동 지수 (활력)</div>
                                    <div className="text-xs text-[#8D6E63] font-medium">Core Vitality Index</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 items-start mt-2">
                            <div className="w-2 h-2 rounded-full bg-[#4CAF50] mt-1.5 shrink-0"></div>
                            <p className="text-[13px] text-[#8D6E63] leading-relaxed">
                                한국심리학회 공식 인증을 획득한 지표를 사용하여 서비스의 공신력을 보장합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 2: Report Features */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-[#3E2723] rounded-full p-1"><LineChart size={16} className="text-white" /></div>
                            <h3 className="font-bold text-[#3E2723] text-lg">마음 컨디션 리포트</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Feature 1 */}
                            <div className="bg-[#F8F9FA] rounded-[24px] p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-[12px] bg-[#E3F2FD] flex items-center justify-center text-[#2962FF] shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723] mb-1">예방적 진단 및 관리</div>
                                    <p className="text-sm text-[#5D4037] leading-relaxed">예방적 차원에서 마음 상태를 진단하고 관리할 수 있는 리포트 제공</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-[#F8F9FA] rounded-[24px] p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-[12px] bg-[#F3E5F5] flex items-center justify-center text-[#9C27B0] shrink-0">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723] mb-1">상태 변화 추이 차트</div>
                                    <p className="text-sm text-[#5D4037] leading-relaxed">마음 건강 상태 변화 추이를 확인할 수 있는 차트 기능</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-[#F8F9FA] rounded-[24px] p-6 flex gap-4">
                                <div className="w-10 h-10 rounded-[12px] bg-[#E8F5E9] flex items-center justify-center text-[#4CAF50] shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-[#3E2723] mb-1">공감 중심 경험 설계</div>
                                    <p className="text-sm text-[#5D4037] leading-relaxed">사회적 낙인에 대한 민감도를 고려하여 타인과의 비교가 아닌 개인의 상태 변화에 집중</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3: Visuals (Phone) */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center items-end"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Phone UI Container - Simulating the UI from image */}
                        <div className="relative w-[300px] h-auto bg-white rounded-[40px] border-[8px] border-[#F5F5F5] shadow-2xl overflow-hidden font-sans">
                            {/* Status Bar */}
                            <div className="h-8 flex justify-between items-center px-6 pt-2">
                                <span className="text-[10px] font-bold text-gray-900">9:41</span>
                                <div className="flex gap-1">
                                    <div className="w-4 h-2.5 bg-gray-900 rounded-[2px]" />
                                </div>
                            </div>

                            {/* App Header */}
                            <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-50">
                                <ChevronLeft size={20} className="text-gray-800" />
                                <span className="font-bold text-gray-900 text-[15px]">마음 컨디션 리포트</span>
                            </div>

                            {/* Tab Bar */}
                            <div className="flex border-b border-gray-100">
                                <div className="flex-1 text-center py-3 text-[13px] font-bold text-gray-900 border-b-2 border-gray-900">결과</div>
                                <div className="flex-1 text-center py-3 text-[13px] text-gray-400">변화 차트</div>
                            </div>

                            {/* Content */}
                            <div className="p-5 bg-gray-50 min-h-[400px]">
                                {/* Greeting Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm mb-4 flex items-center justify-between">
                                    <div>
                                        <div className="text-[11px] text-[#E4621D] font-bold mb-1">이드라이브님,</div>
                                        <div className="text-[14px] font-bold text-[#3E2723] leading-tight">
                                            마음을 돌보시려는<br />노력이 정말 소중해요
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-[#FFF3E0] flex items-center justify-center text-2xl">😊</div>
                                </div>

                                {/* Condition Card */}
                                <div className="bg-white rounded-2xl p-4 shadow-sm">
                                    <div className="flex justify-between items-end mb-4">
                                        <h4 className="font-bold text-[#3E2723] text-[13px]">내 마음 컨디션</h4>
                                        <span className="text-[10px] text-gray-400">2026-01-24</span>
                                    </div>

                                    {/* 3 Spheres */}
                                    <div className="flex justify-between gap-2 mb-6">
                                        <div className="flex-1 bg-[#F5F5F5] rounded-xl py-3 flex flex-col items-center border-2 border-[#E4621D]">
                                            <div className="w-8 h-8 rounded-full bg-[#E3F2FD] mb-1 flex items-center justify-center text-sm">🌧️</div>
                                            <span className="text-[11px] font-bold text-[#3E2723]">우울</span>
                                        </div>
                                        <div className="flex-1 bg-[#FAFAFA] rounded-xl py-3 flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-[#F3E5F5] mb-1 flex items-center justify-center text-sm">😶</div>
                                            <span className="text-[11px] text-gray-400">불안</span>
                                        </div>
                                        <div className="flex-1 bg-[#FAFAFA] rounded-xl py-3 flex flex-col items-center">
                                            <div className="w-8 h-8 rounded-full bg-[#FFF3E0] mb-1 flex items-center justify-center text-sm">⚡</div>
                                            <span className="text-[11px] text-gray-400">활력</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <div className="text-[12px] text-[#3E2723] mb-2">
                                            나의 우울 지수는<br />
                                            <span className="text-[#E4621D] font-bold">조금 나쁨 상태예요</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-[#E4621D] w-[65%] rounded-full"></div>
                                        </div>
                                        <div className="mt-2 flex gap-1 items-center">
                                            <div className="w-3 h-3 rounded-full bg-[#E4621D] flex items-center justify-center text-white text-[8px] font-bold">!</div>
                                            <div className="text-[9px] text-gray-400">수치가 낮을수록 마음이 건강해요</div>
                                        </div>
                                    </div>

                                    <div className="bg-[#F9F9F9] rounded-xl p-3 text-[11px] text-[#5D4037] leading-relaxed">
                                        어르신께서는 가벼운 수준의 우울감을 보이고 있어요.<br /><br />
                                        이러한 기분은 누구나 일상에서 경험할 수 있는 자연스러운 마음의 변화일 수 있어요.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DiagnosisReport;
