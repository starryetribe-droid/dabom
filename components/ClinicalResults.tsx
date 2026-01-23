import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, ClipboardCheck, GraduationCap, ScrollText, CloudSun, ShieldCheck, MessageCircle, ArrowDown, ArrowUp } from 'lucide-react';

// Helper Component for Glassmorphism Icon
const GlassIcon = ({ icon: Icon }: { icon: any }) => {
    // Glassmorphism on the icon itself:
    // We use a clean look with a colored gloss shadow to simulate glass refraction.
    return (
        <div className="relative group/icon w-16 h-16 flex items-center justify-center">
            {/* 1. Soft colored glow behind the icon (Refraction) */}
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-60 scale-75 group-hover/icon:scale-110 transition-transform duration-500"></div>

            {/* 2. The Icon with Glassy Shadow */}
            <div className="relative z-10 filter drop-shadow-[0_4px_12px_rgba(228,98,29,0.2)]">
                <Icon
                    size={48}
                    strokeWidth={1.5}
                    className="text-[#E4621D] transition-all duration-300 group-hover/icon:stroke-[2] group-hover/icon:drop-shadow-[0_0_15px_rgba(228,98,29,0.4)]"
                />

                {/* 3. Subtle Highlight (Gloss) - Overlaying a transparent white gradient to mimic reflection */}
                {/* Note: Overlaying on stroke is hard, so we rely on the drop-shadow and color depth */}
            </div>
        </div>
    );
};

const ClinicalResults: React.FC = () => {
    return (
        <div className="pt-24 pb-0 bg-transparent relative overflow-hidden flex flex-col justify-center" id="clinical-results">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] leading-tight mb-6">
                        다봄이와 기억 찾기<br />
                        <span className="text-[#E4621D]">임상 결과로 증명된</span> 정서 개선 효과
                    </h2>
                    <p className="text-[#5D4037] text-lg max-w-2xl mx-auto">
                        14만 건의 대규모 데이터 학습과 고려대학교 심리학부 교수진의 설계로 검증된 솔루션입니다.<br className="hidden md:block" />
                    </p>
                </motion.div>

                <div className="flex flex-col gap-8">
                    {/* Top Row: Tech & Stats Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                        {/* Card 1: Dabom Hybrid AI */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/40 backdrop-blur-md rounded-[32px] p-10 border border-white/60 shadow-sm flex flex-col h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-6 mb-8 relative z-10">
                                <GlassIcon icon={BrainCircuit} />
                                <h3 className="text-2xl font-bold text-[#3E2723]">다봄 하이브리드 AI</h3>
                            </div>

                            <div className="inline-block bg-[#FFF3E0]/70 border border-[#FFE0B2] backdrop-blur-sm text-[#E65100] px-4 py-2 rounded-lg text-[15px] font-semibold mb-6 w-fit relative z-10">
                                📚 140,000건 데이터 학습
                            </div>

                            <p className="text-[#5D4037] mb-10 text-[17px] leading-relaxed flex-1 relative z-10">
                                자체 개발 모델과 상용 LLM의 하이브리드 구조로<br />
                                <span className="font-bold text-[#3E2723]">기억의 구체성</span>을 평가하고 정서적 피드백을 생성합니다.
                            </p>

                            <div className="space-y-4 relative z-10">
                                <div className="flex items-center gap-5 p-5 bg-white/50 rounded-2xl border border-white/60 hover:bg-white/80 transition-colors shadow-sm">
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E4621D] font-bold shrink-0 text-[15px] shadow-sm border border-[#FFE0B2]">1</div>
                                    <span className="text-[#4E342E] font-bold text-[16px]">자체 모델: 기억 구체성 평가</span>
                                </div>
                                <div className="flex items-center gap-5 p-5 bg-white/50 rounded-2xl border border-white/60 hover:bg-white/80 transition-colors shadow-sm">
                                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#E4621D] font-bold shrink-0 text-[15px] shadow-sm border border-[#FFE0B2]">2</div>
                                    <span className="text-[#4E342E] font-bold text-[16px]">LLM: 파인튜닝 피드백 생성</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Clinical Test Results */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white/60 backdrop-blur-md rounded-[32px] p-10 border border-white/60 shadow-sm flex flex-col h-full relative overflow-hidden group hover:shadow-xl transition-all duration-500"
                        >
                            <div className="flex items-center gap-6 mb-10 relative z-10">
                                <GlassIcon icon={ClipboardCheck} />
                                <h3 className="text-2xl font-bold text-[#3E2723]">임상 테스트 결과</h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 relative z-10">
                                {/* Stat 1: Depression */}
                                <div className="flex flex-col group/stat p-4 rounded-2xl hover:bg-white/40 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CloudSun size={20} className="text-[#8D6E63] group-hover/stat:text-[#E4621D] transition-colors" />
                                        <p className="text-[#3E2723] text-xl font-bold">우울 증상</p>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-5xl font-extrabold text-[#E4621D]">40%</span>
                                        <ArrowDownIcon className="text-[#E4621D] w-6 h-6 translate-y-1 opacity-80" />
                                    </div>
                                </div>

                                {/* Stat 2: Anxiety */}
                                <div className="flex flex-col group/stat p-4 rounded-2xl hover:bg-white/40 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <ShieldCheck size={20} className="text-[#8D6E63] group-hover/stat:text-[#E4621D] transition-colors" />
                                        <p className="text-[#3E2723] text-xl font-bold">불안 증상</p>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-5xl font-extrabold text-[#E4621D]">34%</span>
                                        <ArrowDownIcon className="text-[#E4621D] w-6 h-6 translate-y-1 opacity-80" />
                                    </div>
                                </div>

                                {/* Stat 3: Cognitive */}
                                <div className="flex flex-col group/stat p-4 rounded-2xl hover:bg-white/40 transition-colors">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MessageCircle size={20} className="text-[#8D6E63] group-hover/stat:text-[#E4621D] transition-colors" />
                                        <p className="text-[#3E2723] text-xl font-bold">언어 기억</p>
                                    </div>
                                    <div className="flex items-baseline gap-2 mb-2">
                                        <span className="text-5xl font-extrabold text-[#E4621D]">16%</span>
                                        <ArrowUpIcon className="text-[#E4621D] w-6 h-6 translate-y-1 opacity-80" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/40 rounded-2xl p-6 border border-white/50 mt-auto relative z-10 shadow-sm">
                                <p className="text-[#5D4037] text-[16px] leading-relaxed text-center">
                                    "대조군(기존 인지 훈련) 대비 <span className="font-bold text-[#3E2723]">모든 증상에서 유의미한 개선</span>을<br className="hidden md:block" /> 확인할 수 있었습니다."
                                </p>
                            </div>

                            <div className="mt-6 text-[13px] text-[#A1887F] text-right relative z-10">
                                Total N=30, Pre-Post차이 기준 (p &lt; .05)
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-md rounded-[32px] p-8 border border-white/60 flex flex-col md:flex-row items-center justify-around gap-8 shadow-sm group hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <GlassIcon icon={GraduationCap} />
                            <div>
                                <div className="font-bold text-[#3E2723] text-xl mb-1">고려대 심리학부 교수진 설계</div>
                                <div className="text-[15px] text-[#8D6E63]">전문성과 과학적 신뢰도 확보</div>
                            </div>
                        </div>

                        <div className="w-full md:w-px h-px md:h-12 bg-[#D7CCC8]/50"></div>

                        <div className="flex items-center gap-6">
                            <GlassIcon icon={ScrollText} />
                            <div>
                                <div className="font-bold text-[#3E2723] text-xl mb-1">학술 논문 출판 및 효능 입증</div>
                                <div className="text-[15px] text-[#8D6E63]">자서전적 기억 훈련의 효과 검증</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
};

// Helper Icons
const ArrowDownIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 4V20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ArrowUpIcon = ({ className }: { className?: string }) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M12 20V4M12 4L18 10M12 4L6 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);


export default ClinicalResults;
