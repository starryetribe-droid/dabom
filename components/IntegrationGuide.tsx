import React from 'react';
import { motion } from 'framer-motion';
import { LockKeyholeOpen, Smartphone, Hexagon, ArrowRight, Database, Repeat, CheckCircle2, Server, Link2, Activity, BrainCircuit, Heart, Sprout, Blocks } from 'lucide-react';

const IntegrationGuide: React.FC = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="integration-guide">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex flex-col justify-center">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-tight mb-4">
                        <span className="text-primary">모듈 단위 API 연동</span>으로 <br />
                        유연하고 효율적으로 탑재하세요
                    </h2>
                </motion.div>

                {/* Main Grid Layout: 3 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">

                    {/* 1. Left: Seamless Integration (진입 장벽 제거) */}
                    <motion.div
                        className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm flex flex-col hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary-dark mb-2">회원가입 없는<br />즉시 실행 (SSO)</h3>
                        </div>

                        {/* Visual: Pipeline Diagram */}
                        <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-8 relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#e5e7eb_50%,transparent_51%)]"></div>

                            <div className="relative z-10 flex gap-4 items-center w-full justify-between">
                                {/* Partner App */}
                                <div className="bg-white border border-gray-200 p-3 rounded-xl shadow-sm text-center w-28">
                                    <Smartphone className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                                    <span className="text-[15px] font-bold text-gray-500 block">파트너 앱</span>
                                </div>

                                {/* Connection Line with Unlocked Icon */}
                                <div className="flex-1 flex justify-center relative">
                                    <div className="h-1 bg-accent w-full absolute top-1/2 -translate-y-1/2 rounded-full"></div>
                                    <div className="bg-white border-2 border-accent rounded-full w-10 h-10 flex items-center justify-center relative z-10 shadow-sm">
                                        <LockKeyholeOpen className="w-5 h-5 text-accent" />
                                    </div>
                                    <div className="absolute -bottom-7 text-[15px] font-bold text-accent whitespace-nowrap">가입절차 생략</div>
                                </div>

                                {/* Dabom */}
                                <div className="bg-primary text-white p-3 rounded-xl shadow-sm text-center w-28">
                                    <Activity className="w-6 h-6 text-white mx-auto mb-1" />
                                    <span className="text-[15px] font-bold text-white block">다봄 기능</span>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="font-bold text-primary-dark w-24 shrink-0">No Sign-up</span>
                                <span>파트너사 계정 연동(SSO)으로 별도 가입 절차 생략</span>
                            </li>
                            <li className="flex gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="font-bold text-primary-dark w-24 shrink-0">In-App Exp</span>
                                <span>웹뷰(WebView) 또는 SDK 방식으로 앱 이탈 없이<br />즉시 실행</span>
                            </li>
                            <li className="bg-neutral-green/30 p-4 rounded-xl text-primary-dark font-bold text-[16px] text-center mt-2">
                                파트너 앱의 체류 시간을 해치지 않고<br />기능만 확장합니다
                            </li>
                        </ul>
                    </motion.div>


                    {/* 2. Center: Flexible Modularity (기능의 유연성) */}
                    <motion.div
                        className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm flex flex-col hover:border-primary/30 transition-colors relative overflow-hidden"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                        <div className="mb-8 relative z-10">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">필요한 기능만 골라 쓰는<br />모듈형 도입</h3>
                        </div>

                        {/* Text Content (List) */}
                        <div className="flex flex-col gap-3 relative z-10 mb-8 px-2">
                            {[
                                { label: "다봄이와 기억 찾기", desc: "자서전적 기억 훈련 알고리즘 AI 챗봇" },
                                { label: "두뇌 건강 운동", desc: "심리전문가가 설계한 인지 훈련 게임 6종" },
                                { label: "마음 검진 및 리포트", desc: "우울/불안/활력 지수 측정 및 리포트" },
                                { label: "기억의 정원", desc: "리텐션을 높이는 식물 성장 게이미피케이션" },
                                { label: "사진첩", desc: "떠올린 기억을 다시 추억할 수 있는 저장소" }
                            ].map((item, idx) => (
                                <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100 hover:border-accent/30 hover:bg-accent/5 transition-all group flex items-center gap-4">
                                    {/* Custom 5-Piece Lego Icon */}
                                    <div className="shrink-0">
                                        <svg width="60" height="48" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            {/* Top Row: 2 blocks */}
                                            <rect x="10" y="2" width="12" height="12" rx="3" fill={idx === 0 ? "#E4621D" : "#C0C0C0"} />
                                            <rect x="24" y="2" width="12" height="12" rx="3" fill={idx === 1 ? "#E4621D" : "#C0C0C0"} />

                                            {/* Bottom Row: 3 blocks */}
                                            <rect x="3" y="16" width="12" height="12" rx="3" fill={idx === 2 ? "#E4621D" : "#C0C0C0"} />
                                            <rect x="17" y="16" width="12" height="12" rx="3" fill={idx === 3 ? "#E4621D" : "#C0C0C0"} />
                                            <rect x="31" y="16" width="12" height="12" rx="3" fill={idx === 4 ? "#E4621D" : "#C0C0C0"} />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-bold text-gray-900 text-[16px] mb-1 group-hover:text-accent transition-colors">{item.label}</div>
                                        <div className="text-[15px] text-gray-500 font-medium group-hover:text-gray-700">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gray-100 p-6 rounded-2xl text-gray-800 font-bold text-[16px] text-center mt-auto">
                            전체 도입이 무겁다면,<br />핵심 기능만 탑재해 보세요
                        </div>
                    </motion.div>


                    {/* 3. Right: Data Value Loop (가치 회수) */}
                    <motion.div
                        className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-sm flex flex-col hover:border-primary/30 transition-colors"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-primary-dark mb-2">활동 데이터<br />실시간 자산화</h3>
                        </div>

                        {/* Visual: Data Loop Flow */}
                        <div className="flex-1 bg-gray-50 rounded-2xl p-6 mb-8 relative flex flex-col items-center justify-center px-10">
                            {/* Flow Arrows BG - Loop */}
                            <div className="absolute inset-4 border-2 border-dashed border-gray-200 rounded-[32px] pointer-events-none opacity-60"></div>

                            <div className="w-full flex justify-between items-center relative z-10 gap-4">
                                {/* Nodes */}
                                <div className="flex flex-col items-center gap-2 p-2 bg-gray-50">
                                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105">
                                        <Activity size={24} />
                                    </div>
                                    <span className="text-[15px] font-bold text-gray-500">다봄 Data</span>
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <ArrowRight className="text-accent animate-pulse mb-1" />
                                </div>

                                <div className="flex flex-col items-center gap-2 p-2 bg-gray-50">
                                    <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 shadow-md transition-transform group-hover:scale-105">
                                        <Database size={24} />
                                    </div>
                                    <span className="text-[15px] font-bold text-gray-500">파트너 DB</span>
                                </div>
                            </div>

                            {/* Chip positioned below the arrow, centered */}
                            <div className="absolute top-[62%] left-1/2 -translate-x-1/2 z-20 text-[13px] text-accent font-bold bg-white px-3 py-1 rounded-full border border-accent/20 shadow-sm whitespace-nowrap transition-all duration-300">
                                실시간 전송
                            </div>
                        </div>

                        {/* Text Content */}
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="font-bold text-primary-dark w-24 shrink-0">Real-time</span>
                                <span>사용자의 우울 점수, 인지 레벨, 대화 내용,<br />활동 내역 실시간 전송</span>
                            </li>
                            <li className="flex gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="font-bold text-primary-dark w-24 shrink-0">Signal</span>
                                <span>인지 기능 저하/우울 고위험군 탐지 시그널 제공</span>
                            </li>
                            <li className="flex gap-3 text-[16px] text-gray-600 leading-relaxed">
                                <span className="font-bold text-primary-dark w-24 shrink-0">Marketing</span>
                                <span>대화 데이터를 활용한 타겟 마케팅</span>
                            </li>
                            <li className="bg-neutral-green/30 p-4 rounded-xl text-primary-dark font-bold text-[16px] text-center mt-2">
                                사용자의 마음 상태와 대화 데이터를<br />자산화할 수 있습니다
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Verification Banner */}
                <motion.div
                    className="flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    <div className="bg-white border border-secondary border-primary/20 rounded-full px-10 py-5 shadow-sm flex items-center gap-6">
                        <div className="flex items-center gap-3 border-r border-gray-200 pr-6">
                            {/* Evidence Badge (Korea Univ) */}
                            <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-[11px] font-bold font-serif leading-none text-center">
                                KU<br />MED
                            </div>
                            <span className="text-[14px] font-bold text-gray-500 uppercase tracking-wider">Clinical<br />Verification</span>
                        </div>
                        <p className="text-primary-dark font-bold text-lg md:text-xl">
                            고려대학교 연구진이 검증한 임상 효과, 이제 귀사의 고객에게 제공하세요.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default IntegrationGuide;
