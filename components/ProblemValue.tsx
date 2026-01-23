import React from 'react';
import { UserX, AlertCircle, Home, TrendingUp, Users, ArrowDown, ShieldCheck, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';


// Data for Problem 1: Concerns (PDF p.6)
const dataConcerns = [
  { name: '치료 기록', value: 31.9, label: '기록으로 인한 불이익' },
  { name: '상담 비용', value: 38.7, label: '비용에 대한 부담감' },
  { name: '주변 시선', value: 44.7, label: '주변의 부정적인 시선' }, // Highlight this
];

// Data for Problem 2: Doctors per 1k (PDF p.6)
const dataDoctors = [
  { name: '한국', value: 0.8, color: '#EF4444' }, // Red for problem
  { name: 'OECD 평균', value: 1.8, color: '#3B82F6' }, // Blue for standard
  { name: '주요 선진국', value: 2.3, color: '#9CA3AF' }, // Gray for reference
];

const ProblemValue: React.FC = () => {
  return (
    <div className="py-24 bg-transparent relative overflow-hidden h-full flex flex-col justify-center" id="problem-value">

      {/* Background Decor Removed for Global Wallpaper */}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-primary"></span>
            <span className="text-sm font-bold text-gray-500 tracking-wider uppercase">Market Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-primary-dark leading-tight mb-6">
            시니어 멘탈케어의 <br />
            <span className="text-accent underline decoration-4 decoration-accent/20 underline-offset-4">현실적인 장벽</span>을 해결합니다.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-normal">
            사회적 낙인으로 인한 심리적 거부감과 전문 인력 부족.<br />
            기존의 방식으로는 해결하기 힘든 문제를 새로운 접근법으로 풀어냅니다.
          </p>
        </motion.div>

        {/* Problems Grid - Modern Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

          {/* Problem 1: Stigma & Accessibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group bg-white rounded-[32px] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(228,98,29,0.15)] transition-all duration-500 relative overflow-hidden border border-gray-100/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex-1 pr-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-orange-50 border border-orange-100 text-sm font-bold text-orange-600 mb-4 shadow-sm">
                  PROBLEM 01
                </span>
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">정신건강 케어<br />접근성 부족</h3>
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl text-orange-500 flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-300">
                <AlertCircle size={32} strokeWidth={2} />
              </div>
            </div>

            {/* User Voice Box - Glass Effect */}
            <div className="mb-10 p-6 rounded-2xl bg-gray-50 border border-gray-100 relative z-10 group-hover:bg-white/80 group-hover:border-orange-100 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="shrink-0 w-1 bg-gray-300 rounded-full h-auto group-hover:bg-orange-300 transition-colors"></div>
                <div>
                  <p className="text-gray-600 leading-relaxed font-medium italic text-lg mb-2">
                    "혹시나 기록이 남아서 자식들에게 피해가 갈까 봐 병원 가기가 꺼려집니다."
                  </p>
                  <span className="text-sm text-gray-400 font-bold block">- 미충족 의료 경험률 1위 요인</span>
                </div>
              </div>
            </div>

            {/* Graph 1: Concerns */}
            <div className="mt-auto relative z-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-end mb-6">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  Survey Data
                </p>
                <span className="text-sm font-bold text-white bg-accent px-3 py-1.5 rounded-lg shadow-md shadow-accent/20">주변 시선 1위</span>
              </div>
              <div className="h-[140px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart layout="vertical" data={dataConcerns} margin={{ top: 0, right: 30, left: 40, bottom: 0 }} barSize={16}>
                    <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 14, fill: '#4B5563', fontWeight: 700 }} axisLine={false} tickLine={false} />
                    <Tooltip
                      cursor={{ fill: '#F9FAFB' }}
                      contentStyle={{ borderRadius: '12px', fontSize: '14px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                      {dataConcerns.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 2 ? '#E4621D' : '#E5E7EB'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

          {/* Problem 2: Workforce Shortage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="group bg-white rounded-[32px] p-10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(239,68,68,0.15)] transition-all duration-500 relative overflow-hidden border border-gray-100/50"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex-1 pr-4">
                <span className="inline-block py-1.5 px-4 rounded-full bg-red-50 border border-red-100 text-sm font-bold text-red-600 mb-4 shadow-sm">
                  PROBLEM 02
                </span>
                <h3 className="text-3xl font-bold text-gray-900 leading-tight">상담 인력 부족과<br />높은 비용</h3>
              </div>
              <div className="w-16 h-16 bg-white rounded-2xl text-red-500 flex items-center justify-center shadow-[0_8px_20px_-5px_rgba(0,0,0,0.1)] group-hover:scale-110 transition-transform duration-300">
                <TrendingUp size={32} strokeWidth={2} />
              </div>
            </div>

            {/* User Voice Box */}
            <div className="mb-10 p-6 rounded-2xl bg-gray-50 border border-gray-100 relative z-10 group-hover:bg-white/80 group-hover:border-red-100 transition-colors duration-300">
              <div className="flex gap-4">
                <div className="shrink-0 w-1 bg-gray-300 rounded-full h-auto group-hover:bg-red-300 transition-colors"></div>
                <div>
                  <p className="text-gray-600 leading-relaxed font-medium italic text-lg mb-2">
                    "예약 잡기도 힘들고 비용도 부담돼요. 꾸준히 다니기가 현실적으로 어렵습니다."
                  </p>
                  <span className="text-sm text-gray-400 font-bold block">- OECD 정신보건 현황 보고서</span>
                </div>
              </div>
            </div>

            {/* Graph 2: Doctor Count */}
            <div className="mt-auto relative z-10 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="flex justify-between items-end mb-6">
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  OECD STATISTICS
                </p>
                <span className="text-sm font-bold text-white bg-red-500 px-3 py-1.5 rounded-lg shadow-md shadow-red-500/20">OECD 최하위 수준</span>
              </div>
              <div className="h-[140px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataDoctors} margin={{ top: 10, right: 10, left: 10, bottom: 0 }} barSize={40}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="name" tick={{ fontSize: 14, fill: '#4B5563', fontWeight: 700 }} axisLine={false} tickLine={false} dy={10} />
                    <YAxis hide />
                    <Tooltip
                      cursor={{ fill: '#F9FAFB' }}
                      contentStyle={{ borderRadius: '12px', fontSize: '14px', border: 'none', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                      {dataDoctors.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Visual Connector: Problem -> Solution */}
        <div className="flex justify-center -mt-12 mb-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="bg-white text-primary w-14 h-14 rounded-full flex items-center justify-center border-[6px] border-[#F9FAFB] shadow-lg"
          >
            <ArrowDown strokeWidth={3} size={24} />
          </motion.div>
        </div>

        {/* Unified Solution - Clean Corporate Banner (Light Version) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative bg-white p-10 md:p-14 flex flex-col items-center text-center overflow-hidden shadow-xl rounded-[40px] border border-gray-100 max-w-5xl mx-auto"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 bg-[#F5F5F0]/30 pointer-events-none"></div>

          <div className="relative z-10 w-full">
            <div className="inline-block border border-accent/20 text-accent px-5 py-2 text-sm font-bold mb-6 tracking-widest uppercase bg-accent/5 rounded-full">
              Dabom Solution
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-10 leading-snug text-primary-dark tracking-tight">
              집에서 만나는 편안한 <br /><span className="text-primary">비대면 AI 멘탈케어</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col gap-3 bg-gray-50/80 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <span className="text-primary-dark font-bold text-xl flex items-center justify-center gap-2">
                  <ShieldCheck size={24} className="text-primary" />
                  심리적 장벽 해소
                </span>
                <span className="text-gray-600 text-base leading-relaxed">타인의 시선 걱정 없는<br />프라이빗 1:1 케어 서비스</span>
              </div>
              <div className="flex flex-col gap-3 bg-gray-50/80 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <span className="text-primary-dark font-bold text-xl flex items-center justify-center gap-2">
                  <Check size={24} className="text-primary" />
                  효율적 운영 관리
                </span>
                <span className="text-gray-600 text-base leading-relaxed">AI 자동화를 통한<br />비용 절감 및 접근성 확대</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ProblemValue;