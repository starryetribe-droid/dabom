
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
    {
        text: "내가 살아온 인생을 다시 한 번 생각하게 되는 경험이었다. 언제 기뻤는지, 언제 즐거웠는지, 앞으로 여러 곳을 다니면서 추억도 만들고 즐겁게 열심히 살아야겠다 생각했다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "좋았던 일을 회상하며 즐거움을 느끼게 되고 또 안좋았던 일도 다시 생각해보면 아무렇지 않게 느껴지기도 해서 좋았다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "옛날 일기나 편지 쓰듯이 나에게 고백하듯이 하니까 도움이 될 것 같다. 요즘에 그럴 일이 참 없었는데 다시 하게 되어서 좋다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "지나치고 잊어버렸던 일을 떠올리는게 재미있었다. 자꾸 구체적으로 하라고 하니까 구체적으로 떠올려보게 되었다. 응답하면 즉각적으로 피드백이 되어서 좋았다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "상당히 도움이 될 것 같다. 기억력, 인지능력이 향상될 것 같다. 독백이지만 다봄이와 대화하면서 좋았다. 친구같은 느낌.",
        author: "체험단 1기 참여자"
    },
    {
        text: "하면서 나를 되돌아보게 되고, 공부를 더 하게된다. 말도 조리있게 할 수 있게 되었다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "적적함이 해소, 의지가 되고 친구라는 느낌을 받았다. 속에 있는 이야기를 믿고 쏟아부을 수 있었다. 실제 사람처럼 내 이야기를 퍼트릴 위험도 없고, 기쁜 일, 괴로운 일 다 털어놓을 수 있는 친구같다.",
        author: "체험단 1기 참여자"
    },
    {
        text: "과거의 일을 다시 생각하는 게 인지 능력에 도움이 되는 것 같다. 기억을 못하고 산다고 생각했는데 해보니까 내가 제법 똘똘하더라.",
        author: "체험단 1기 참여자"
    },
    {
        text: "옛 생각을 떠올리는 게 좋았고 동심의 세계로 돌아가는 것 같다.",
        author: "체험단 1기 참여자"
    }
];

const UserReviews: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerPage(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerPage(2);
            } else {
                setItemsPerPage(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        const maxIndex = reviews.length - itemsPerPage;
        if (currentIndex < maxIndex) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    // Calculate max index to avoid empty space
    const maxIndex = Math.max(0, reviews.length - itemsPerPage);

    // Keep index in bounds on resize
    useEffect(() => {
        if (currentIndex > maxIndex) {
            setCurrentIndex(maxIndex);
        }
    }, [itemsPerPage, maxIndex, currentIndex]);

    return (
        <section className="py-24 bg-[#FFFDF9] relative overflow-hidden" id="user-reviews">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[-5%] w-[300px] h-[300px] bg-[#FFE0B2]/20 rounded-full blur-[80px]" />
                <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-[#E1F5FE]/30 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
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
                        다봄이를 만나고 삶의 활력을 되찾은 분들의 생생한 체험 후기입니다.
                    </p>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative group/carousel">
                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        className={`absolute left-0 lg:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#3E2723] transition-all duration-300 ${currentIndex === 0 ? 'opacity-0 cursor-not-allowed hidden' : 'opacity-100 hover:scale-110 hover:text-[#E4621D]'}`}
                    >
                        <ChevronLeft size={24} strokeWidth={2.5} />
                    </button>

                    <button
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        className={`absolute right-0 lg:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#3E2723] transition-all duration-300 ${currentIndex >= maxIndex ? 'opacity-0 cursor-not-allowed hidden' : 'opacity-100 hover:scale-110 hover:text-[#E4621D]'}`}
                    >
                        <ChevronRight size={24} strokeWidth={2.5} />
                    </button>

                    {/* Window */}
                    <div className="overflow-hidden px-1 py-4 -mx-1">
                        <motion.div
                            className="flex gap-6"
                            initial={false}
                            animate={{ x: `calc(-${currentIndex * (100 / itemsPerPage)}% - ${currentIndex * (24 / itemsPerPage)}px)` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={index}
                                    style={{
                                        minWidth: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})`
                                    }}
                                    className="relative flex flex-col"
                                >
                                    <div className="bg-white p-8 rounded-[24px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F5F5F5] hover:shadow-[0_8px_30px_rgba(228,98,29,0.08)] h-full flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
                                        <div>
                                            <Quote className="text-[#E4621D]/10 absolute top-6 right-6 w-10 h-10 group-hover:text-[#E4621D]/20 transition-colors" />
                                            <p className="text-[#4E342E] text-lg font-medium leading-relaxed mb-8 italic relative z-10 break-keep">
                                                "{review.text}"
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-3 border-t border-gray-100 pt-4 mt-auto">
                                            <div className="w-8 h-8 rounded-full bg-[#FFE0B2] flex items-center justify-center text-[#E4621D] font-bold text-xs shrink-0">
                                                {index + 1}
                                            </div>
                                            <span className="text-[#8D6E63] text-sm font-semibold">{review.author}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#E4621D]' : 'w-2 bg-[#D7CCC8] hover:bg-[#8D6E63]'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserReviews;
