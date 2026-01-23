import React, { useEffect, useState } from 'react';
import { ChevronRight, Mic, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceFeature: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState<number>(0);
    const [startChat, setStartChat] = useState<boolean>(false);

    useEffect(() => {
        if (!startChat) return;

        const sequence = async () => {
            // Reset
            setVisibleItems(0);

            // Item 1: Notice
            await new Promise(r => setTimeout(r, 500));
            setVisibleItems(prev => Math.max(prev, 1));

            // Item 2: Date
            await new Promise(r => setTimeout(r, 400));
            setVisibleItems(prev => Math.max(prev, 2));

            // Item 3: Bot Message 1
            await new Promise(r => setTimeout(r, 600));
            setVisibleItems(prev => Math.max(prev, 3));

            // Item 4: User Message
            await new Promise(r => setTimeout(r, 1200));
            setVisibleItems(prev => Math.max(prev, 4));

            // Item 5: Bot Message 2
            await new Promise(r => setTimeout(r, 1000));
            setVisibleItems(prev => Math.max(prev, 5));
        };

        sequence();
    }, [startChat]);

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <div className="py-24 bg-transparent relative z-20" id="service-feature">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

                    {/* Left Column: Content Description */}
                    <div className="flex-1 text-left">
                        {/* Character & Bubble Animation */}
                        <div className="relative -mb-4 z-10">
                            <motion.div
                                initial={{ opacity: 0, y: -200 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.3 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 70,
                                    damping: 10,
                                    mass: 1.5,
                                    delay: 0.2
                                }}
                                className="relative inline-block"
                            >
                                <motion.img
                                    src="/dabom-character-pop.png"
                                    alt="Dabom Character"
                                    className="w-24 h-24 object-contain relative z-10 origin-bottom"
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />

                                <motion.div
                                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                                    className="absolute left-full top-0 ml-4 bg-white rounded-2xl rounded-tl-sm px-5 py-3 shadow-xl whitespace-nowrap z-20"
                                >
                                    <p className="text-[#3E2723] font-bold text-[15px] leading-none">
                                        저랑 대화하면 <span className="text-[#E4621D]">정서·인지 개선 효과</span>가 있어요!
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            onAnimationComplete={() => setStartChat(true)}
                        >
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 flex flex-col gap-3 leading-tight">
                                <span>다봄이와 기억 찾기,</span>
                                <span><span className="text-[#E4621D]">대화로 깨우는</span> 소중한 기억</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                다봄이는 단순한 대화가 아닌, <span className="font-bold text-gray-900">자서전적 기억</span>을 구체적으로 떠올리도록 설계되었습니다.<br /><br />
                                일상적인 대화 속에서 자연스럽게 과거의 기억을 회상하고,<br />
                                구체적인 질문을 통해 기억을 선명하게 되살리는 과정은<br />
                                <span className="font-bold text-gray-900">정서적 안정</span>과 <span className="font-bold text-gray-900">인지 기능 개선</span>에 탁월한 효과가 있습니다.
                            </p>

                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <span className="text-2xl">🗣️</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">맞춤형 회상 대화</h4>
                                        <p className="text-base text-gray-600">사용자의 답변에 따라 실시간으로 생성되는 맞춤형 질문으로 깊이 있는 회상을 유도합니다.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                    <span className="text-2xl">💪</span>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">정서·인지 개선 효과</h4>
                                        <p className="text-base text-gray-600">기억을 구체적으로 떠올리는 과정을 통해 우울·불안감 및 인지 기능이 개선됩니다.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Phone Prototype (CSS Implementation) */}
                    <div className="relative flex justify-center lg:justify-end items-center">
                        <div className="w-[360px] md:w-[400px] h-auto aspect-[320/640] bg-[#FFFDF9] rounded-[48px] border-[8px] border-gray-100 shadow-2xl relative overflow-hidden z-10 flex flex-col font-sans">
                            {/* Status Bar */}
                            <div className="h-12 flex justify-between items-center px-6 relative z-10">
                                <span className="text-[15px] font-semibold text-gray-900">9:41</span>
                                <div className="flex gap-1.5 items-center">
                                    <div className="w-[17px] h-[10.7px] bg-gray-900 rounded-[2.7px] relative">
                                        <div className="absolute right-[-2px] top-[3px] w-[1.3px] h-[4px] bg-gray-900 rounded-[1px]"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Header */}
                            <div className="px-4 pb-2 flex items-center gap-3 relative z-10">
                                <ChevronRight className="rotate-180 text-gray-900" size={28} strokeWidth={2.5} />
                                <span className="font-bold text-xl text-gray-900">다봄이와 기억 찾기</span>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-1 overflow-y-auto px-5 pt-4 pb-32 flex flex-col">
                                {/* Notice */}
                                <motion.div
                                    className="flex justify-center mb-6"
                                    initial="hidden"
                                    animate={visibleItems >= 1 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className="bg-[#4D4846] text-white/90 text-[15px] px-4 py-2.5 rounded-full flex items-center gap-2 tracking-tight">
                                        <div className="w-3.5 h-3.5 border border-orange-400 rounded-full flex items-center justify-center text-orange-400 text-[10px] font-bold">!</div>
                                        다봄이와의 대화는 안전하게 보호되고 있어요
                                    </div>
                                </motion.div>

                                {/* Date */}
                                <motion.div
                                    className="text-center text-[#555555] text-[15px] mb-6"
                                    initial="hidden"
                                    animate={visibleItems >= 2 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    2025-12-22 (월)
                                </motion.div>

                                {/* Bot Message 1 */}
                                <motion.div
                                    className="flex gap-3 mb-6"
                                    initial="hidden"
                                    animate={visibleItems >= 3 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1">
                                        <img src="/dabom-character-final.png" alt="Dabom" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="bg-white p-4 rounded-[20px] rounded-tl-none shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-base text-[#333333] leading-relaxed max-w-[240px]">
                                        반가워요! 다시 만나서 정말 기뻐요. 오늘은 키워드로 기억을 떠올려 볼게요.<br /><br />
                                        '여행'이라는 단어를 듣고 떠오르는 기억을 구체적으로 말씀해 주세요.
                                        <div className="flex justify-end mt-1 text-[11px] text-gray-400">19:55</div>
                                    </div>
                                </motion.div>

                                {/* User Message */}
                                <motion.div
                                    className="flex justify-end mb-6"
                                    initial="hidden"
                                    animate={visibleItems >= 4 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className="flex items-end gap-1.5">
                                        <div className="text-[11px] text-gray-400 mb-1">19:55</div>
                                        <div className="bg-[#668B29] px-4 py-3 rounded-[18px] rounded-tr-none text-base text-white font-medium leading-relaxed">
                                            부산 여행이 떠올라
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Bot Message 2 */}
                                <motion.div
                                    className="flex gap-3 mb-4"
                                    initial="hidden"
                                    animate={visibleItems >= 5 ? "visible" : "hidden"}
                                    variants={itemVariants}
                                >
                                    <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1">
                                        <img src="/dabom-character-final.png" alt="Dabom" className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <div className="bg-white p-4 rounded-[20px] rounded-tl-none shadow-[0_2px_10px_rgba(0,0,0,0.05)] text-base text-[#333333] leading-relaxed max-w-[240px]">
                                            부산여행이라니!<br />
                                            멋진 기억이 떠오르셨네요!<br />
                                            그 때 부산에서 구체적으로 무엇을 하셨는지 기억나시나요?
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Voice Input Overlay - Floating Button */}
                                <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 w-max shadow-none">
                                    <div className="bg-transparent p-0 transition-transform hover:scale-105 cursor-pointer">
                                        <img src="/voice-input-btn.png" alt="음성으로 답변 입력" className="w-[200px] drop-shadow-xl" />
                                    </div>
                                </div>
                                <div className="flex justify-end mt-1 text-[11px] text-gray-400 pr-12">19:55</div>
                            </div>

                            {/* Input Area */}
                            <div className="absolute bottom-0 w-full bg-[#FFFDF9] p-4 pb-8 z-20">
                                <div className="bg-white rounded-[24px] px-5 py-3.5 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-gray-100">
                                    <span className="text-gray-400 text-base">답변 입력</span>
                                    <Send size={20} className="text-gray-800 rotate-45 -ml-1 mt-1" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ServiceFeature;
