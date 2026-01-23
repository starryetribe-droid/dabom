import React from 'react';
import { motion } from 'framer-motion';

// Typing Animation Component for Poetic Feel
const TypingLine = ({ text, delay = 0, className = "", highlight = false }: { text: string, delay?: number, className?: string, highlight?: boolean }) => {
    // Split text into characters
    const characters = Array.from(text);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03, // Faster typing speed
                delayChildren: delay,
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 5 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.span
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Re-trigger only once
            className={`inline-block ${className}`}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={childVariants}
                    className={`inline-block ${highlight && char !== ' ' ? "text-[#E4621D]" : ""}`}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
};

const BrandStory: React.FC = () => {
    return (
        <div className="h-screen bg-transparent relative overflow-hidden flex flex-col justify-center items-center" id="brand-story">

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] md:w-[800px] md:h-[800px] pointer-events-none opacity-40">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-[#FFE0B2] rounded-full blur-[100px]"
                />
            </div>

            <div className="max-w-[1200px] w-full px-6 relative z-10 flex flex-col items-center text-center">

                {/* 1. Header Section (Fade In first) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className="mb-8 md:mb-12"
                >
                    <img src="/brand-story-script.png" alt="Brand Story" className="max-w-[240px] md:max-w-[340px] mx-auto -mb-8 md:-mb-10 relative z-0 opacity-90" />
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#3E2723] leading-tight tracking-tight mb-2 relative z-10">
                        다시 온<br className="md:hidden" /> 나의 봄, 다봄
                    </h2>
                    <p className="text-[#8D6E63] text-lg md:text-2xl font-medium tracking-wide font-serif italic relative z-10">
                        "나의 두 번째 비상을 준비하며"
                    </p>
                </motion.div>

                {/* 2. Emotional Line Animation */}
                <div className="h-16 md:h-24 w-px relative mb-8 md:mb-12 overflow-hidden">
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
                        className="w-full bg-gradient-to-b from-[#E4621D]/0 via-[#E4621D] to-[#E4621D]/0 absolute top-0"
                    ></motion.div>
                </div>

                {/* 3. Story Narrative (Typing Effect Sequence) */}
                <div className="flex flex-col gap-3 md:gap-5 text-lg md:text-2xl leading-[1.6] md:leading-[1.8] font-medium text-[#5D4037] break-keep selection:bg-[#FFE0B2]">

                    {/* Stanza 1 */}
                    <div className="flex flex-col md:block">
                        <TypingLine text="바쁘게 달려온 시간들, 잠시 숨을 고르던 고요한 계절이 있었습니다." delay={1.5} />
                    </div>

                    {/* Stanza 2 - Highlighted */}
                    <div className="pt-2 md:pt-4">
                        <TypingLine text="이제 당신의 삶에 가장 아름다운 풍경," delay={3.2} /><br className="hidden md:block" />
                        <span className="inline-block mt-1 md:mt-2 scale-110 origin-center text-[#E4621D] font-bold text-xl md:text-3xl">
                            <TypingLine text="두 번째 봄이 찾아왔습니다." delay={4.2} highlight={true} />
                        </span>
                    </div>

                    {/* Stanza 3 */}
                    <div className="pt-4 md:pt-6 opacity-90 text-base md:text-xl">
                        <TypingLine text="다봄은 그 풍경을 밝히는 따뜻한 햇살이자," delay={5.5} className="block md:inline" /><br className="hidden md:block" />
                        <TypingLine text=" 메마른 마음에 다시 싹을 틔울 한 방울의 물입니다." delay={6.5} className="block md:inline" />
                    </div>

                    {/* Footer Stanza */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { delay: 8.5, duration: 1.5 }
                            }
                        }}
                        className="pt-8 md:pt-10 text-[#3E2723] font-bold text-xl md:text-3xl"
                    >
                        다봄과 함께 당신의 두 번째 봄은<br className="md:hidden" /> 가장 찬란하게 피어납니다.
                    </motion.div>

                </div>

                {/* Flowering Animation */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 9.5, duration: 1, type: "spring" }}
                    className="mt-12 md:mt-16 w-8 h-8 rounded-full border-2 border-[#E4621D]/20 bg-[#FFF3E0] flex items-center justify-center"
                >
                    <div className="w-2 h-2 rounded-full bg-[#E4621D]"></div>
                </motion.div>

            </div>
        </div>
    );
};

export default BrandStory;
