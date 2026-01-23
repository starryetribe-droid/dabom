import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Typing Effect Component
const TypingText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  const characters = Array.from(text);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Typing speed
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
      viewport={{ once: false, amount: 0.3 }}
      className={`inline-block ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={childVariants} className="inline-block relative">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Hero: React.FC = () => {
  return (
    // Outer Container: pt-24 creates a white area at the top, merging with the white Navbar
    <div className="bg-transparent w-full px-4 pb-12 pt-24 font-sans">

      {/* Main Hero Container */}
      <div className="max-w-[1920px] mx-auto bg-gradient-to-br from-[#E8F5E9] via-[#FFF3E0] to-[#FFE0B2] rounded-[48px] relative overflow-hidden min-h-[850px] lg:h-[900px] flex flex-col pt-16 md:pt-20 shadow-sm border border-[#FFE0B2]/50">

        {/* Background Gradients/Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-[#2D4118]/10 to-transparent rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-t from-[#E4621D]/15 to-transparent rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>

        {/* Top Tagline Line */}
        <div className="w-full flex justify-center items-center px-8 relative z-10">
          <div className="h-px bg-[#1B270E]/10 flex-1 max-w-[300px] hidden md:block"></div>
          <span className="text-[#8C4521] font-bold text-sm md:text-base px-6 tracking-wide uppercase">
            Vitality for Senior Life
          </span>
          <div className="h-px bg-[#1B270E]/10 flex-1 max-w-[300px] hidden md:block"></div>
        </div>

        {/* Middle Content Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto w-full px-6 lg:px-12 relative z-10 mt-10 md:mt-0">

          {/* Left Text Area */}
          <div className="flex-[1.3] text-center md:text-left md:pr-4 relative z-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1B270E] leading-[1.1] tracking-tighter mb-8"
            >
              <span className="whitespace-nowrap">AI-Powered Mental Care</span> <br />
              <span className="text-[#E4621D] relative inline-block">
                for Seniors
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-[#1B270E]/80 mb-12 leading-relaxed max-w-lg mx-auto md:mx-0 font-medium"
            >
              전문성과 과학적 연구를 바탕으로,<br />AI 챗봇 다봄이가 시니어 마음 건강을 케어합니다.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E4621D] text-white font-bold text-lg hover:bg-[#CC5500] hover:shadow-lg transition-all group shadow-md"
            >
              Dabom 무료 체험하기
              <div className="bg-white/20 rounded-full p-1">
                <ArrowRight className="text-white w-5 h-5" />
              </div>
            </motion.button>
          </div>

          {/* Right Visual Area (New Character + Animation) */}
          <div className="flex-1 relative w-full h-[400px] md:h-full flex items-center justify-center md:justify-end">

            {/* Dialogue Bubble - Moved HIGHER to avoid overlap, Triangle pointing DOWN-LEFT to character */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              // Adjusted Positioning: Top 5%, Right 0 (or slightly inset)
              className="absolute top-[2%] right-[5%] md:right-[0%] z-20 w-max max-w-[300px] md:max-w-md"
            >
              {/* Glassmorphism Style: Increased Padding and Text Size */}
              <div className="bg-white/50 backdrop-blur-xl rounded-[32px] rounded-bl-none p-8 shadow-xl border border-white/70 relative">
                <div className="text-[#1B270E] font-bold text-lg md:text-xl leading-relaxed drop-shadow-sm font-sans">
                  <p className="mb-1">
                    <TypingText text="혹시 기분이 조금 가라앉으셨나요?" delay={1.5} />
                  </p>
                  <p className="text-[#E4621D] font-extrabold text-xl md:text-2xl">
                    <TypingText text="저랑 대화하면 한결 나아지실거예요!" delay={3.5} />
                  </p>
                </div>

                {/* Bubble Triangle - Pointing towards character (Down-Left) */}
                <div className="absolute -bottom-4 left-[20px] w-8 h-8 bg-white/50 backdrop-blur-xl border-b border-r border-white/70 transform rotate-45 skew-x-12 -z-10 shadow-sm"></div>
              </div>
            </motion.div>

            {/* Floating Character - Pushed DOWN to create separation */}
            <motion.div
              animate={{
                y: [0, -20, 0], // Floating motion
                rotate: [0, 2, -2, 0] // Subtle rotation
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              // Added mt-32 to push character down significantly
              className="relative w-[500px] h-[500px] flex items-center justify-center p-10 md:mt-32 md:mr-10"
            >
              {/* Glow behind character */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E4621D]/20 to-[#81C784]/20 rounded-full blur-[80px] scale-75 animate-pulse-slow"></div>

              <img
                src="/dabom-character-final.png"
                alt="Dabom Floating Character"
                className="w-full h-full object-contain drop-shadow-2xl relative z-10"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Navigation Grid - No bottom padding in wrapper */}
        <div className="w-full px-4 md:px-12 pb-0 z-20">
          <div className="bg-white/60 backdrop-blur-xl rounded-t-[32px] rounded-b-none p-2 md:p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 border border-orange-100 border-b-0 shadow-sm">

            {[
              { title: "회상 대화 훈련", desc: "기억을 깨우는 AI 말벗", link: "#chatbot", iconBg: "bg-green-100", iconColor: "text-green-700" },
              { title: "마음 건강 검진", desc: "전문적인 우울/불안 척도", link: "#checkup", iconBg: "bg-orange-100", iconColor: "text-orange-700" },
              { title: "두뇌 건강 게임", desc: "재미있는 인지 훈련", link: "#brain", iconBg: "bg-blue-100", iconColor: "text-blue-700" },
              { title: "케어 리포트", desc: "데이터 기반 상태 분석", link: "#report", iconBg: "bg-purple-100", iconColor: "text-purple-700" }
            ].map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.8)', scale: 1.02 }}
                className="flex flex-col justify-center p-6 md:p-8 rounded-[24px] cursor-pointer transition-all group hover:shadow-md border border-transparent hover:border-orange-100"
              >
                <div className="flex justify-between items-start w-full mb-3">
                  <h3 className="text-lg md:text-xl font-bold text-[#1B270E] group-hover:text-[#E4621D] transition-colors font-sans">
                    {item.title}
                  </h3>
                  <div className={`p-2 rounded-full ${item.iconBg} ${item.iconColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <span className="text-sm text-[#8C4521] font-medium font-sans">
                  {item.desc}
                </span>
                <div className="w-full h-1.5 bg-[#FFE0B2]/30 mt-6 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#FFB74D] to-[#E4621D] w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.a>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
