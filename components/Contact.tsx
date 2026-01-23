import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <div className="py-24 bg-transparent h-full flex flex-col justify-center" id="contact">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="rounded-[40px] bg-white p-8 md:p-16 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative overflow-hidden"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div className="flex flex-col justify-center">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-gray-200 text-sm font-bold text-accent mb-4 shadow-sm w-fit">
                PARTNERSHIP
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-[1.3] mb-6">
                우리 기관의 경쟁력,<br />
                <span className="text-primary">다봄</span>으로 높이세요
              </h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                요양병원, 주야간보호센터, 지자체 복지관 등<br />
                어르신 케어가 필요한 곳이라면 어디든 함께합니다.
              </p>

              <div className="space-y-4 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                {[
                  "어르신 맞춤형 인지/정서 케어 프로그램 확보",
                  "데이터 기반의 객관적 보호자 상담 리포트",
                  "관리 인력의 업무 효율성 증대",
                  "차별화된 기관 홍보 포인트"
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-800 font-bold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="bg-white p-8 md:p-10 rounded-[32px] border border-gray-200 shadow-sm"
            >
              <div className="mb-8 pb-8 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">도입 문의 / 데모 신청</h3>
                <p className="text-gray-500 text-sm">담당자가 24시간 이내에 연락드립니다.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-1.5 uppercase tracking-wide">기관/기업명</label>
                  <input type="text" className="w-full px-4 py-3.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium text-sm" placeholder="기관명을 입력해주세요" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-1.5 uppercase tracking-wide">담당자 연락처</label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium text-sm" placeholder="010-0000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-500 mb-1.5 uppercase tracking-wide">문의 내용</label>
                  <textarea className="w-full px-4 py-3.5 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-gray-400 font-medium text-sm h-32 resize-none" placeholder="궁금하신 점이나 데모 신청 여부를 적어주세요."></textarea>
                </div>
                <button className="w-full bg-primary-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-primary transition-all shadow-md flex items-center justify-center gap-2 group mt-4">
                  무료 상담 신청하기
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Contact;