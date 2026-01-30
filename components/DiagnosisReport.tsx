
import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Activity, LineChart, Heart, ChevronLeft } from 'lucide-react';

const DiagnosisReport: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] via-90% to-transparent relative overflow-hidden" id="diagnosis-report">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-tight mb-4">
                        전문적인 <span className="text-accent">심리 진단</span>과 <span className="text-accent">데이터 리포트</span>
                    </h2>
                    <p className="text-primary text-lg">
                        한국심리학회 인증 도구로 측정하고, 개인의 변화에 집중한 리포트 제공
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Column 1: Verification Tools (Green Theme - Primary) */}
                    <motion.div
                        className="lg:col-span-3 flex flex-col gap-8"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-primary rounded-full p-1"><ClipboardCheck size={16} className="text-white" /></div>
                            <h3 className="font-bold text-primary-dark text-lg">표준화된 검증 도구</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Tool 1 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-green flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-neutral-green flex items-center justify-center text-primary font-black text-xs shrink-0">
                                    MHS:D
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark">한국형 우울장애 선별 도구</div>
                                    <div className="text-xs text-primary-light font-medium">Depression Scale</div>
                                </div>
                            </div>

                            {/* Tool 2 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-green flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-neutral-green flex items-center justify-center text-primary font-black text-xs shrink-0">
                                    MHS:A
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark">한국형 불안장애 선별 도구</div>
                                    <div className="text-xs text-primary-light font-medium">Anxiety Scale</div>
                                </div>
                            </div>

                            {/* Tool 3 */}
                            <div className="bg-white rounded-[20px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-neutral-green flex items-center gap-4 hover:-translate-y-1 transition-transform">
                                <div className="w-12 h-12 rounded-full bg-neutral-green flex items-center justify-center text-primary font-black text-xs shrink-0">
                                    CORE
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark">핵심 활동 지수 (활력)</div>
                                    <div className="text-xs text-primary-light font-medium">Core Vitality Index</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 items-start mt-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0"></div>
                            <p className="text-[13px] text-primary-light leading-relaxed">
                                한국심리학회 인증을 획득한 지표를 사용하여 서비스의 공신력을 보장합니다.
                            </p>
                        </div>
                    </motion.div>

                    {/* Column 2: Report Features (Orange Theme - Accent) */}
                    <motion.div
                        className="lg:col-span-4 flex flex-col gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="bg-accent rounded-full p-1"><LineChart size={16} className="text-white" /></div>
                            <h3 className="font-bold text-primary-dark text-lg">마음 컨디션 리포트</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Feature 1 */}
                            <div className="bg-white rounded-[24px] p-6 flex gap-4 border border-accent/20">
                                <div className="w-10 h-10 rounded-[12px] bg-neutral-cream flex items-center justify-center text-accent shrink-0">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark mb-1">예방적 진단 및 관리</div>
                                    <p className="text-sm text-primary-light leading-relaxed">예방적 차원에서 마음 상태를 진단하고 관리할 수 있는 리포트 제공</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="bg-white rounded-[24px] p-6 flex gap-4 border border-accent/20">
                                <div className="w-10 h-10 rounded-[12px] bg-neutral-cream flex items-center justify-center text-accent shrink-0">
                                    <Activity size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark mb-1">상태 변화 추이 차트</div>
                                    <p className="text-sm text-primary-light leading-relaxed">마음 건강 상태 변화 추이를 확인할 수 있는 차트 기능</p>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="bg-white rounded-[24px] p-6 flex gap-4 border border-accent/20">
                                <div className="w-10 h-10 rounded-[12px] bg-neutral-cream flex items-center justify-center text-accent shrink-0">
                                    <Heart size={20} />
                                </div>
                                <div>
                                    <div className="font-bold text-primary-dark mb-1">공감 중심 경험 설계</div>
                                    <p className="text-sm text-primary-light leading-relaxed">사회적 낙인에 대한 민감도를 고려하여 타인과의 비교가 아닌 개인의 상태 변화에 집중</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Column 3: Visuals (Phone) */}
                    <motion.div
                        className="lg:col-span-5 flex justify-center items-center relative"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Two Phones Container */}
                        <div className="relative w-full max-w-[600px] h-[500px] flex justify-center items-center mx-auto">
                            {/* Left Phone (Behind) */}
                            <motion.div
                                className="absolute left-[5%] sm:left-[10%] top-8 z-10 origin-bottom-left"
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <div className="w-[200px] sm:w-[240px] md:w-[260px] h-[448px] md:h-[508px] rounded-[36px] border-[6px] border-white bg-white shadow-[0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden">
                                    <img
                                        src="/diagnosis-phone-1.png"
                                        alt="Diagnosis Question UI"
                                        className="w-full h-full object-cover object-top block"
                                    />
                                </div>
                            </motion.div>

                            {/* Right Phone (Front) */}
                            <motion.div
                                className="absolute left-1/2 -translate-x-[40%] lg:-translate-x-[35%] top-0 z-20"
                                initial={{ y: -20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                <div className="w-[260px] md:w-[280px] h-[480px] md:h-[540px] rounded-[40px] border-[8px] border-white bg-white shadow-[0_30px_60px_rgba(228,98,29,0.15)] overflow-hidden">
                                    <img
                                        src="/diagnosis-phone-2.png"
                                        alt="Diagnosis Report UI"
                                        className="w-full h-full object-cover object-top block"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Transition to Brain Fitness */}
            <div className="relative z-10 mt-24 text-center pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.8 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center justify-center gap-6"
                >
                    <div className="w-px h-16 bg-gradient-to-b from-[#E4621D]/0 via-[#E4621D]/50 to-[#E4621D]/0"></div>
                    <motion.p
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.8 }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } }
                        }}
                        className="text-2xl md:text-3xl font-medium text-[#5D4037] leading-relaxed font-serif"
                    >
                        {Array.from("인지 기능 개선으로 ").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                        <span className="text-[#E4621D] font-bold">
                            {Array.from("마음 건강").map((char, index) => (
                                <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                            ))}
                        </span>
                        {Array.from("의 ").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                        <br className="md:hidden" />
                        {Array.from("마지막 퍼즐을 맞춥니다").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                    </motion.p>
                    <div className="w-px h-16 bg-gradient-to-b from-[#E4621D]/0 via-[#E4621D]/50 to-[#E4621D]/0 opacity-30"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default DiagnosisReport;
