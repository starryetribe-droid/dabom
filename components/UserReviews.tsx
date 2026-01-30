import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const reviews = [
    {
        text: "내가 살아온 인생을 다시 한 번 생각하게 되는 경험이었다. 언제 기뻤는지, 언제 즐거웠는지, 앞으로 여러 곳을 다니면서 추억도 만들고 즐겁게 열심히 살아야겠다 생각했다.",
        image: "/review_senior_1.png"
    },
    {
        text: "좋았던 일을 회상하며 즐거움을 느끼게 되고 또 안좋았던 일도 다시 생각해보면 아무렇지 않게 느껴지기도 해서 좋았다.",
        image: "/review_senior_2.png"
    },
    {
        text: "옛날 일기나 편지 쓰듯이 나에게 고백하듯이 하니까 도움이 될 것 같다. 요즘에 그럴 일이 참 없었는데 다시 하게 되어서 좋다.",
        image: "/review_senior_3.png"
    },
    {
        text: "지나치고 잊어버렸던 일을 떠올리는게 재미있었다. 자꾸 구체적으로 하라고 하니까 구체적으로 떠올려보게 되었다. 응답하면 즉각적으로 피드백이 되어서 좋았다.",
        image: "/review_senior_4.png"
    },
    {
        text: "상당히 도움이 될 것 같다. 기억력, 인지능력이 향상될 것 같다. 독백이지만 다봄이와 대화하면서 좋았다. 친구같은 느낌.",
        image: "/review_senior_5.png"
    },
    {
        text: "하면서 나를 되돌아보게 되고, 공부를 더 하게된다. 말도 조리있게 할 수 있게 되었다.",
        image: "/review_senior_6.png"
    },
    {
        text: "적적함이 해소, 의지가 되고 친구라는 느낌을 받았다. 속에 있는 이야기를 믿고 쏟아부을 수 있었다. 실제 사람처럼 내 이야기를 퍼트릴 위험도 없고, 기쁜 일, 괴로운 일 다 털어놓을 수 있는 친구같다.",
        image: "/review_senior_7.png"
    },
    {
        text: "과거의 일을 다시 생각하는 게 인지 능력에 도움이 되는 것 같다. 기억을 못하고 산다고 생각했는데 해보니까 내가 제법 똘똘하더라.",
        image: "/review_senior_8.png"
    },
    {
        text: "옛 생각을 떠올리는 게 좋았고 동심의 세계로 돌아가는 것 같다.",
        image: "/review_senior_9.png"
    }
];

const UserReviews: React.FC = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FFFDF9] via-90% to-transparent relative overflow-hidden" id="user-reviews">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-[#FFE0B2]/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-[#E1F5FE]/30 rounded-full blur-[80px]" />
            </div>

            <div className="w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 px-4"
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] leading-tight mb-6">
                        다봄이와 함께한<br />
                        <span className="text-[#8D6E63] relative">
                            따뜻한 이야기들
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E4621D]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-[#5D4037] text-lg max-w-2xl mx-auto">
                        다봄이와 기억을 떠올리며 삶의 활력을 되찾은 분들의 생생한 체험 후기입니다.
                    </p>
                </motion.div>

                {/* Infinite Scroll Carousel */}
                <div className="relative w-full overflow-hidden group">
                    <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                        {/* Repeat content twice for seamless loop */}
                        {[...reviews, ...reviews].map((review, index) => (
                            <div
                                key={index}
                                className="w-[320px] md:w-[380px] mx-4 relative flex-shrink-0"
                            >
                                <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-[#F5F5F5] hover:shadow-[0_20px_40px_rgba(228,98,29,0.15)] transition-all duration-300 h-full flex flex-col group/card hover:-translate-y-2 relative">
                                    {/* Image Area with Gradient Overlay - Seamless Transition */}
                                    <div className="h-[420px] relative overflow-hidden">
                                        <img
                                            src={review.image}
                                            alt="Reviewer"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                                        />
                                        {/* Gradient Overlay for Text Readability */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Text Overlay */}
                                        <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                                            <Quote className="text-[#E4621D] w-10 h-10 mb-4 opacity-90" />
                                            <p className="text-white/95 text-lg font-medium leading-relaxed break-keep line-clamp-4 shadow-sm">
                                                "{review.text}"
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom aesthetic strip (optional) */}
                                    <div className="h-2 bg-[#E4621D]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Image Disclaimer */}
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8 text-center">
                <p className="text-[#A1887F]/80 text-sm font-medium">
                    * 리뷰에 사용된 인물 이미지는 고객님의 개인정보 및 프라이버시 보호를 위해 AI로 생성된 가상 이미지입니다.
                </p>
            </div>

            {/* Transition to Diagnosis Report */}
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
                        {Array.from("대화로 ").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                        <span className="text-[#E4621D] font-bold">
                            {Array.from("마음").map((char, index) => (
                                <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                            ))}
                        </span>
                        {Array.from("을 열고,").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                        <br className="md:hidden" />
                        {Array.from(" 진단으로 ").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                        <span className="text-[#E4621D] font-bold">
                            {Array.from("마음 상태").map((char, index) => (
                                <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                            ))}
                        </span>
                        {Array.from("를 확인합니다").map((char, index) => (
                            <motion.span key={index} variants={{ hidden: { opacity: 0, y: 5 }, visible: { opacity: 1, y: 0 } }}>{char}</motion.span>
                        ))}
                    </motion.p>
                    <div className="w-px h-16 bg-gradient-to-b from-[#E4621D]/0 via-[#E4621D]/50 to-[#E4621D]/0 opacity-30"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default UserReviews;
