import React from 'react';
import { motion } from 'framer-motion';
import { Building2, HeartHandshake, Landmark } from 'lucide-react';

const solutions = [
  {
    icon: Building2,
    title: "찾아가는 디지털 교육형",
    target: "노인복지관, 치매안심센터, 보건소",
    desc: "디지털 기기 교육(키오스크/앱)과 멘탈케어를 결합한 프로그램 운영. 단순 교육을 넘어 집에서도 스스로 마음 건강을 챙기는 습관 형성.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: HeartHandshake,
    title: "고객 로열티 케어형",
    target: "보험사, 상조회사, 실버타운",
    desc: "자사 상품(치매/간병 보험, 입주 서비스) 가입 고객에게 제공하는 프리미엄 헬스케어 부가 서비스. 고객 활력지수 데이터 기반 맞춤형 상품 제안 가능.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Landmark,
    title: "국내 정신건강 사업 연계",
    target: "보건복지부, 지자체, 정신건강복지센터",
    desc: "정부 바우처 및 취약계층 지원 사업을 위한 비대면 심리 상담 솔루션. 의료 접근성이 낮은 취약계층에게 전문 케어를 제공하여 사각지대 해소.",
    color: "bg-green-50 text-green-600"
  }
];

const B2BSolutions: React.FC = () => {
  return (
    <div className="py-24 bg-transparent h-full flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-gray-500 mb-4 shadow-sm">
            B2B / B2G SOLUTIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-tight">
            우리 기관에 가장 필요한 시니어 케어,<br />
            <span className="text-accent">다봄으로 시작하세요</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            기업/기관의 특성과 운영 목적에 부합하는 최적의 도입 모델을 제안하며,<br className="hidden md:block" />
            기존 시스템과의 유연한 API 연동으로 효율성이 높습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-[32px] p-8 border border-gray-100 shadow-lg hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wide">{item.target}</p>
              <p className="text-gray-600 leading-relaxed text-sm">
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