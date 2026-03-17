import React, { useState } from 'react';
import { Tea, BrewMethod } from '@/src/data/teas';
import { Timer } from './Timer';
import { cn } from '@/src/lib/utils';
import { Thermometer, Clock, Droplets, Info, ArrowLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TeaDetailProps {
  tea: Tea;
  onBack: () => void;
}

export const TeaDetail: React.FC<TeaDetailProps> = ({ tea, onBack }) => {
  const [selectedBrew, setSelectedBrew] = useState(tea.brewing[0]);

  const methodLabels: Record<BrewMethod, string> = {
    hot: '热泡',
    cold: '冷泡',
    simmer: '闷煮',
    gongfu: '功夫茶',
  };

  const methodIcons: Record<BrewMethod, string> = {
    hot: '🔥',
    cold: '❄️',
    simmer: '🥘',
    gongfu: '🍵',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="min-h-screen bg-tea-bg pb-20"
    >
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <img
          src={tea.image}
          alt={tea.name}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tea-bg via-transparent to-transparent" />
        <button
          onClick={onBack}
          className="absolute top-6 left-6 p-4 rounded-full bg-white/80 backdrop-blur-sm text-tea-ink shadow-sm hover:bg-white transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
      </div>

      {/* Content */}
      <div className="px-6 -mt-12 relative z-10">
        <div className="bg-white rounded-[40px] p-8 shadow-sm border border-black/5">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-serif mb-2">{tea.name}</h1>
              <p className="text-tea-ink/60 text-sm leading-relaxed italic">
                {tea.description}
              </p>
            </div>
          </div>

          {/* Brewing Methods Selection */}
          <div className="mb-8">
            <h3 className="text-[10px] uppercase tracking-widest text-tea-olive/60 font-bold mb-4">
              选择冲泡方式
            </h3>
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {tea.brewing.map((brew, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBrew(brew)}
                  className={cn(
                    "flex-none px-5 py-3 rounded-2xl border transition-all duration-300 flex items-center gap-2",
                    selectedBrew === brew
                      ? "bg-tea-olive text-white border-tea-olive shadow-lg shadow-tea-olive/20"
                      : "bg-tea-bg text-tea-olive border-transparent hover:border-tea-olive/20"
                  )}
                >
                  <span className="text-lg">{methodIcons[brew.method]}</span>
                  <span className="text-sm font-medium">{methodLabels[brew.method]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Brewing Parameters */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-tea-bg/50 p-4 rounded-3xl flex flex-col items-center text-center">
              <Thermometer size={18} className="text-tea-olive mb-2" />
              <span className="text-lg font-serif">{selectedBrew.temp}°C</span>
              <span className="text-[9px] uppercase tracking-widest text-tea-olive/40 mt-1">温度</span>
            </div>
            <div className="bg-tea-bg/50 p-4 rounded-3xl flex flex-col items-center text-center">
              <Clock size={18} className="text-tea-olive mb-2" />
              <span className="text-lg font-serif">
                {selectedBrew.time >= 3600 
                  ? `${Math.floor(selectedBrew.time / 3600)}h` 
                  : `${Math.floor(selectedBrew.time / 60)}m`}
              </span>
              <span className="text-[9px] uppercase tracking-widest text-tea-olive/40 mt-1">建议时间</span>
            </div>
            <div className="bg-tea-bg/50 p-4 rounded-3xl flex flex-col items-center text-center">
              <Droplets size={18} className="text-tea-olive mb-2" />
              <span className="text-lg font-serif">{selectedBrew.ratio}</span>
              <span className="text-[9px] uppercase tracking-widest text-tea-olive/40 mt-1">茶水比</span>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-tea-bg/30 p-6 rounded-3xl border border-tea-olive/5 mb-8">
            <div className="flex items-start gap-3">
              <Info size={16} className="text-tea-olive mt-1 flex-none" />
              <p className="text-sm text-tea-ink/80 leading-relaxed italic">
                {selectedBrew.notes}
              </p>
            </div>
          </div>

          {/* Infusions (坐杯时长) */}
          {selectedBrew.infusions && selectedBrew.infusions.length > 0 && (
            <div className="mb-8">
              <h3 className="text-[10px] uppercase tracking-widest text-tea-olive/60 font-bold mb-4">
                各泡建议坐杯时长
              </h3>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {selectedBrew.infusions.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => {}} // Could potentially update timer
                    className="flex-none px-4 py-3 rounded-2xl bg-white border border-black/5 flex flex-col items-center min-w-[70px]"
                  >
                    <span className="text-[10px] text-tea-olive/40 uppercase tracking-tighter mb-1">第{idx + 1}泡</span>
                    <span className="text-lg font-serif">{time >= 60 ? `${Math.floor(time / 60)}m` : `${time}s`}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Timer Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-[10px] uppercase tracking-widest text-tea-olive/60 font-bold mb-6">
              计时器
            </h3>
            <Timer 
              initialSeconds={selectedBrew.time} 
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
