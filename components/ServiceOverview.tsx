import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileBarChart, MessageCircle, Image, BrainCircuit, Trophy, ArrowRight } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "마음 건강 검진 & 리포트",
    desc: "학회 인증 도구로 진단하고\n한눈에 보는 리포트",
    icon1: ClipboardList,
    icon2: FileBarChart,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    step: 2,
    title: "다봄이와 기억 찾기",
    desc: "AI와 대화하며 회상하고\n사진첩으로 추억 기록",
    icon1: MessageCircle,
    icon2: Image,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    step: 3,
    title: "두뇌 건강 운동",
    desc: "맞춤형 게임으로\n즐겁게 인지 훈련",
    icon1: BrainCircuit,
    icon2: Trophy,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  }
];

const ServiceOverview: React.FC = () => {
  return (
    <div className="py-24 bg-white h-full flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-4 shadow-sm">
            SERVICE OVERVIEW
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-tight">
            진단부터 훈련, 기록까지<br />
            <span className="text-primary">올인원 멘탈케어 프로세스</span>
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 -translate-y-1/2"></div>

          {steps.map((item, idx) => (
            <React.Fragment key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl shadow-gray-100/50 flex-1 w-full relative group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="absolute top-6 right-6 text-6xl font-black text-gray-50 opacity-50 z-0">{item.step}</div>

                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                    <item.icon1 size={24} />
                  </div>
                  <ArrowRight size={16} className="text-gray-300" />
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                    <item.icon2 size={24} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-gray-500 text-sm whitespace-pre-line leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>

              {/* Arrow for Mobile/Desktop */}
              {idx < steps.length - 1 && (
                <div className="md:hidden text-gray-300">
                  <ArrowRight size={24} className="rotate-90 md:rotate-0" />
                </div>
              )}
              {idx < steps.length - 1 && (
                <div className="hidden md:block text-gray-300">
                  <ArrowRight size={32} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceOverview;