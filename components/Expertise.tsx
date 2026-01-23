import React from 'react';
import { motion } from 'framer-motion';
import { Award, FileCheck } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <div className="py-24 bg-transparent h-full flex flex-col justify-center" id="expertise">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4 leading-[1.3]">
            고려대학교 심리학부 교수진이 설계한<br />
            <span className="text-primary">전문·과학적 멘탈케어</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            심리전문가가 설계하고 검증하여 신뢰할 수 있습니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Professor 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[32px] bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200 mx-auto md:mx-0">
              <img src="/professor-choi.png" alt="최기홍 교수" className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
            </div>
            <div className="text-center md:text-left flex-1 w-full">
              <div className="mb-4 flex flex-col md:flex-row items-center md:items-baseline gap-2 justify-center md:justify-start">
                <h3 className="text-2xl font-bold text-gray-900">최기홍 교수</h3>
                <span className="px-2 py-0.5 rounded bg-accent/10 text-accent text-sm font-bold border border-accent/10">설계 총괄</span>
              </div>
              <p className="text-gray-700 font-bold text-sm mb-5 border-b border-gray-100 pb-4">고려대학교 심리학부 교수 · KU마음건강연구소 소장</p>
              <ul className="text-sm text-gray-600 space-y-2.5">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 현) 한국심리학회 부회장
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 2023 보건복지부 장관 표창
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 임상심리전문가 (한국심리학회 공인)
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Professor 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[32px] bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 shrink-0 border border-gray-200 mx-auto md:mx-0">
              <img src="/professor-park.png" alt="박용천 교수" className="w-full h-full object-cover hover:scale-110 transition-all duration-500" />
            </div>
            <div className="text-center md:text-left flex-1 w-full">
              <div className="mb-4 flex flex-col md:flex-row items-center md:items-baseline gap-2 justify-center md:justify-start">
                <h3 className="text-2xl font-bold text-gray-900">박용천 교수</h3>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-sm font-bold border border-blue-100">연구 개발</span>
              </div>
              <p className="text-gray-700 font-bold text-sm mb-5 border-b border-gray-100 pb-4">KU마음건강연구소 CTO</p>
              <ul className="text-sm text-gray-600 space-y-2.5">
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 고려대학교 임상심리학 박사
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 전) 삼성서울병원 임상연구원
                </li>
                <li className="flex items-center gap-2 justify-center md:justify-start">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div> 임상심리전문가 (한국심리학회 공인)
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Patents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-accent" size={24} />
            <h3 className="text-2xl font-bold text-gray-900">학술 연구 및 특허 자산</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                title: "우울한 노인을 대상으로 한 어플리케이션 기반 자서전적 기억 훈련의 효과",
                badge: "출판",
                type: "thesis",
                img: "/expertise-thesis.png"
              },
              {
                title: "문항 반응 이론 알고리즘 기반 전산화된 우울 불안 평가 시스템",
                badge: "등록",
                type: "patent",
                img: "/expertise-patent-1.png"
              },
              {
                title: "활력 지수 획득 장치 및 방법",
                badge: "등록",
                type: "patent",
                img: "/expertise-patent-2.png"
              },
              {
                title: "자서전적 기억을 이용한 인지기능 및 정신건강 수준 예측 장치 및 방법",
                badge: "출원",
                type: "patent",
                img: "/expertise-patent-3.png"
              },
              {
                title: "노년기 마음돌봄 서비스 제공 장치 및 방법",
                badge: "출원",
                type: "patent",
                img: "/expertise-patent-4.png"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="group flex flex-col gap-3"
              >
                {/* Document Image Card */}
                <div className="aspect-[1/1.4] w-full rounded-xl border border-gray-200 shadow-sm overflow-hidden relative bg-gray-50 group-hover:shadow-md transition-all duration-300">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay for hover effect */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="text-center px-1">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-2 border ${item.badge === "출판"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : item.badge === "등록"
                      ? "bg-blue-50 text-blue-600 border-blue-100"
                      : "bg-gray-100 text-gray-600 border-gray-200"
                    }`}>
                    {item.badge}
                  </span>
                  <h4 className="text-sm font-bold text-gray-800 leading-snug break-keep">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Expertise;