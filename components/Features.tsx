import React from 'react';
import { MessageCircle, FileText, BrainCircuit, ClipboardList, ArrowRight, Sprout, Image as ImageIcon, CheckCircle2, Droplets, Sun, Award } from 'lucide-react';
import { motion } from 'framer-motion';

// Separate component for the animated chatbot illustration
const ChatbotIllustration = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center px-8">
      {/* Message 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95, x: -20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-5 shadow-sm mb-4 self-start max-w-[85%] border border-gray-100 rounded-3xl rounded-tl-sm"
      >
        <p className="text-sm text-gray-700 font-medium leading-relaxed">어르신, 지난 봄에 꽃구경 가셨던 사진 기억나세요?</p>
      </motion.div>

      {/* Message 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95, x: 20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-[#2D4118] p-5 shadow-sm mb-4 self-end max-w-[85%] text-white rounded-3xl rounded-tr-sm"
      >
        <p className="text-sm font-medium leading-relaxed">그럼, 우리 손주랑 같이 갔었지. 진달래가 참 예뻤어.</p>
      </motion.div>

      {/* Message 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95, x: -20 }}
        whileInView={{ opacity: 1, y: 0, scale: 1, x: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-white p-5 shadow-sm self-start max-w-[85%] border border-gray-100 rounded-3xl rounded-tl-sm"
      >
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg">기억 구체성 분석</span>
        </div>
        <p className="text-sm text-gray-700 font-medium leading-relaxed">정말 좋으셨겠어요! 그때 기분이 어떠셨나요?</p>
      </motion.div>
    </div>
  );
};

const features = [
  {
    id: "chatbot",
    icon: MessageCircle,
    title: "다봄이와 기억 찾기",
    shortDesc: "대규모 자서전적 기억 데이터 기반 AI 챗봇",
    longDesc: "자서전적 기억 데이터 14만 건을 학습한 AI 챗봇 '다봄이'가 어르신의 추억을 이끌어냅니다. 단순한 말벗을 넘어 기억의 구체성을 평가하고 맞춤형 질문을 던져 인지 기능을 활성화합니다.",
    tags: ["회상 훈련", "AI 챗봇", "정서 교감"],
    color: "bg-green-50 text-green-600 border-green-100",
    iconColor: "text-green-600",
    visualColor: "from-green-50 to-green-100",
    illustration: <ChatbotIllustration />,
    decorColor: "#4ADE80" // Green
  },
  {
    id: "checkup",
    icon: ClipboardList,
    title: "마음 건강 검진",
    shortDesc: "과학적으로 검증된 국내 표준 도구 기반 평가",
    longDesc: "한국심리학회가 인증한 표준 도구(MHS:D, MHS:A)를 사용하여 우울, 불안 상태를 정밀하게 진단합니다. 병원에 가지 않고도 전문적인 자가 진단이 가능합니다.",
    tags: ["자가 진단", "우울/불안 척도", "학회 인증"],
    color: "bg-orange-50 text-orange-600 border-orange-100",
    iconColor: "text-orange-600",
    visualColor: "from-orange-50 to-orange-100",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white w-72 p-6 shadow-lg border border-gray-200"
        >
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-gray-900 text-lg">우울 척도 검사</span>
            <span className="text-sm bg-orange-100 text-orange-700 px-2 py-1 font-bold border border-orange-200">진행중</span>
          </div>
          <div className="space-y-5">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: -10, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="flex items-center gap-3"
              >
                <div className={`w-4 h-4 rounded-sm border flex-shrink-0 flex items-center justify-center ${i === 0 ? 'border-accent bg-accent' : 'border-gray-300'}`}>
                  {i === 0 && <CheckCircle2 size={10} className="text-white" />}
                </div>
                <div className="h-2 bg-gray-100 w-full"></div>
              </motion.div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-primary text-white text-sm font-bold hover:bg-primary-dark transition-colors shadow-sm">
            다음 문항
          </button>
        </motion.div>
      </div>
    ),
    decorColor: "#FB923C" // Orange
  },
  {
    id: "brain",
    icon: BrainCircuit,
    title: "두뇌 건강 운동",
    shortDesc: "난이도가 자동 조절되는 맞춤형 게임",
    longDesc: "결과 데이터 기반 맞춤형 두뇌 건강 운동 프로그램. 어르신의 인지 수준에 따라 난이도가 자동 조절되는 6종의 두뇌 게임을 제공합니다.",
    tags: ["인지 훈련", "맞춤 난이도", "게이미피케이션"],
    color: "bg-blue-50 text-blue-600 border-blue-100",
    iconColor: "text-blue-600",
    visualColor: "from-blue-50 to-blue-100",
    illustration: (
      <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm mx-auto">
        {[1, 2, 3, 4].map((item) => (
          <motion.div
            key={item}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: item * 0.1 }}
            whileHover={{ y: -5, borderColor: '#60A5FA' }}
            className="aspect-square bg-white shadow-sm border border-gray-200 flex flex-col items-center justify-center cursor-pointer transition-all"
          >
            <span className="text-4xl font-bold text-blue-600 mb-2">{item}</span>
            <div className="w-8 h-1 bg-blue-100"></div>
          </motion.div>
        ))}
      </div>
    ),
    decorColor: "#60A5FA" // Blue
  },
  {
    id: "report",
    icon: FileText,
    title: "마음 컨디션 리포트",
    shortDesc: "마음 건강 상태를 한눈에 보는 리포트",
    longDesc: "예방적 차원에서 마음 상태를 진단하고 관리할 수 있는 리포트를 제공합니다. 타인과의 비교가 아닌 개인의 상태 변화에 집중할 수 있는 공감 중심 경험을 설계했습니다.",
    tags: ["데이터 시각화", "보호자 공유", "변화 추이"],
    color: "bg-purple-50 text-purple-600 border-purple-100",
    iconColor: "text-purple-600",
    visualColor: "from-purple-50 to-purple-100",
    illustration: (
      <div className="w-full h-full flex items-center justify-center px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white w-full max-w-xs p-6 shadow-lg border border-gray-200"
        >
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-sm text-gray-500 font-bold mb-1">이번 주 마음 날씨</p>
              <h4 className="text-xl font-bold text-gray-800">매우 맑음 ☀️</h4>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-accent font-bold bg-accent/10 px-2 py-1 text-sm border border-accent/10"
            >
              +15%
            </motion.span>
          </div>
          <div className="flex items-end gap-2 h-32">
            {[40, 60, 45, 70, 85, 60, 90].map((h, i) => (
              <div key={i} className="flex-1 bg-purple-50 relative group overflow-hidden">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="absolute bottom-0 w-full bg-purple-500"
                ></motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    ),
    decorColor: "#C084FC" // Purple
  },
  {
    id: "garden",
    icon: Sprout,
    title: "기억의 정원",
    shortDesc: "동기 부여를 위한 캐릭터 성장과 리워드",
    longDesc: "다봄이와 기억 찾기, 마음 건강 검진 등 활동 시 물방울을 적립하여 캐릭터를 성장시킵니다. AI 정원 이미지 생성을 통해 재미 요소를 제공합니다.",
    tags: ["동기 부여", "캐릭터 성장", "보상 시스템"],
    color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    iconColor: "text-yellow-600",
    visualColor: "from-[#F7F9F4] to-[#E8F5E9]",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[240px] h-[400px] bg-white border border-gray-200 shadow-xl overflow-hidden"
        >
          <div className="w-full h-full bg-gradient-to-b from-[#E0F7FA] to-[#FFF3E0] relative flex flex-col">
            <div className="pt-8 px-4 flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className="w-12 h-6 bg-white flex items-center justify-center text-sm font-bold text-primary shadow-sm border border-gray-100">Lv.3</div>
              </div>
              <div className="flex items-center gap-1 bg-white/90 px-2 py-0.5 shadow-sm border border-white">
                <Droplets size={10} className="text-blue-500 fill-blue-500" />
                <span className="text-sm font-bold text-gray-800">1,240</span>
              </div>
            </div>
            <div className="flex-1 relative flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-6 right-6"
              >
                <Sun size={32} className="text-yellow-400 fill-yellow-400 drop-shadow-md" />
              </motion.div>
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="w-24 h-24 bg-[#8BC34A] rounded-full shadow-lg flex items-center justify-center relative border border-white/20"
                >
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="h-16 bg-white/90 backdrop-blur-md p-4 flex justify-around items-center border-t border-gray-100">
              <div className="p-2 bg-blue-50"><Droplets size={16} className="text-blue-600" /></div>
              <div className="p-2 bg-gray-50"><Sun size={16} className="text-gray-500" /></div>
              <div className="p-2 bg-gray-50"><Award size={16} className="text-gray-500" /></div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
    decorColor: "#FACC15" // Yellow
  },
  {
    id: "album",
    icon: ImageIcon,
    title: "사진첩",
    shortDesc: "떠올린 기억을 기록하고 리마인드",
    longDesc: "다봄이와 나눈 대화를 요약해 한 장의 이미지와 함께 저장합니다. 오늘의 이미지 PUSH 알림으로 재진입을 유도하고 삶의 기록을 다시 떠올리는 회상 훈련 효과를 제공합니다.",
    tags: ["기록 저장", "회상 요법", "푸시 알림"],
    color: "bg-pink-50 text-pink-600 border-pink-100",
    iconColor: "text-pink-600",
    visualColor: "from-pink-50 to-pink-100",
    illustration: (
      <div className="relative w-full h-full flex items-center justify-center">
        <motion.div
          initial={{ rotate: -10, x: -50, opacity: 0 }}
          whileInView={{ rotate: -3, x: -20, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-2 pb-6 shadow-md absolute border border-gray-200 w-40"
        >
          <div className="w-full h-28 bg-gray-200 mb-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1516733968668-dbdce39c4651?auto=format&fit=crop&q=80&w=300" alt="memory" className="w-full h-full object-cover opacity-90" />
          </div>
          <div className="h-1.5 w-20 bg-gray-100"></div>
        </motion.div>
        <motion.div
          initial={{ rotate: 10, x: 50, opacity: 0 }}
          whileInView={{ rotate: 3, x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white p-2 pb-6 shadow-lg z-20 relative border border-gray-200 w-40"
        >
          <div className="w-full h-28 bg-gray-200 mb-2 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1ef4d?auto=format&fit=crop&q=80&w=300" alt="memory" className="w-full h-full object-cover" />
          </div>
          <div className="h-1.5 w-24 bg-gray-100 mb-1"></div>
          <div className="h-1.5 w-16 bg-gray-100"></div>

          <div className="absolute -top-2 -right-2 bg-accent text-white text-sm font-bold px-2 py-0.5 shadow-sm">
            NEW
          </div>
        </motion.div>
      </div>
    ),
    decorColor: "#F472B6" // Pink
  }
];

const Features: React.FC = () => {
  return (
    <div className="py-24 bg-transparent relative overflow-hidden h-full flex flex-col justify-center" id="features">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 border border-gray-200 text-sm font-bold text-gray-500 mb-4 bg-gray-50">
            ALL-IN-ONE SOLUTION
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark leading-[1.3] mb-6">
            전문성에 재미를 더한<br />
            <span className="text-primary opacity-90 relative">
              올인원 멘탈케어 패키지
              <div className="absolute bottom-1 left-0 w-full h-3 bg-primary/10 -z-10"></div>
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            예방부터 진단, 관리, 그리고 즐거움까지.<br />
            시니어 멘탈케어에 필요한 모든 기능을 하나의 앱에 담았습니다.
          </p>
        </motion.div>

        {/* 1. Summary Grid Area (Corporate Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 bg-gray-50 mb-32">
          {features.map((feature, index) => (
            <motion.a
              key={index}
              href={`#${feature.id}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 border border-gray-100 hover:z-10 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col relative"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${feature.color} flex items-center justify-center transition-colors`}>
                  <feature.icon size={24} />
                </div>
                <ArrowRight size={20} className="text-gray-300 group-hover:text-primary transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-dark transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-500 text-sm font-medium leading-relaxed">
                {feature.shortDesc}
              </p>
            </motion.a>
          ))}
        </div>

        {/* 2. Detailed Explanation Area */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} id={feature.id} className="scroll-mt-32 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${feature.visualColor} overflow-hidden border border-gray-200 shadow-sm`}>
                    {feature.illustration}
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-bold mb-6 border ${feature.color.replace('bg-', 'bg-opacity-10 ').replace('text-', 'text-')}`}>
                    <feature.icon size={14} />
                    {feature.title}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                    {feature.shortDesc}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {feature.longDesc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white border border-gray-200 text-sm font-bold text-gray-500 cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Features;