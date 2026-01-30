import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartHandshake, Landmark, ArrowRight } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: "찾아가는 디지털 교육형",
    target: "노인복지관, 치매안심센터, 보건소",
    desc: "디지털 기기 교육(키오스크/앱)과 멘탈케어를 결합한 프로그램 운영. 단순 교육을 넘어 집에서도 스스로 마음 건강을 챙기는 습관을 형성합니다.",
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "hover:border-emerald-200",
    shadowColor: "hover:shadow-emerald-100"
  },
  {
    icon: HeartHandshake,
    title: "고객 로열티 케어형",
    target: "보험사, 상조회사, 실버타운",
    desc: "자사 상품(치매/간병 보험, 입주 서비스) 가입 고객에게 제공하는 프리미엄 헬스케어 부가 서비스. 고객 활력지수 데이터 기반의 맞춤형 상품 제안이 가능합니다.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-200",
    shadowColor: "hover:shadow-orange-100"
  },
  {
    icon: Landmark,
    title: "국내 정신건강 사업 연계",
    target: "보건복지부, 지자체, 정신건강복지센터",
    desc: "정부 바우처 및 취약계층 지원 사업을 위한 비대면 심리 상담 솔루션. 의료 접근성이 낮은 취약계층에게 전문 케어를 제공하여 사각지대를 해소합니다.",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-200",
    shadowColor: "hover:shadow-blue-100"
  }
];

const B2BSolutions: React.FC = () => {
  return (
    <div className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-gray-50/80 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-[#E4621D] text-sm font-bold mb-6">
            B2B Solution
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#3E2723] mb-6 leading-tight">
            시니어 멘탈케어,<br />
            <span className="text-[#E4621D]">다봄으로 시작하세요</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            기업/기관의 특성과 운영 목적에 부합하는 최적의 도입 모델을 제안하며,<br className="hidden md:block" />
            기존 시스템과의 유연한 API 연동으로 운영 효율성을 극대화합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group bg-white rounded-[32px] p-8 md:p-10 border border-gray-100 shadow-lg shadow-gray-200/40 
                ${item.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.shadowColor} flex flex-col h-full`}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon size={28} />
                </div>
                {/* Arrow Icon for interactiveness hint */}
                <div className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ${item.iconColor}`}>
                  <ArrowRight size={16} />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#E4621D] transition-colors duration-300">
                {item.title}
              </h3>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 group-hover:bg-white group-hover:border-transparent group-hover:shadow-sm transition-all duration-300">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Target</span>
                  <div className="w-px h-3 bg-gray-300"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    {item.target}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-[16px] mt-auto">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default B2BSolutions;