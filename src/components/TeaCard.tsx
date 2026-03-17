import React from 'react';
import { Tea, BrewMethod } from '@/src/data/teas';
import { cn } from '@/src/lib/utils';
import { Thermometer, Clock, Droplets, Info } from 'lucide-react';
import { motion } from 'motion/react';

interface TeaCardProps {
  tea: Tea;
  onClick: () => void;
}

export const TeaCard: React.FC<TeaCardProps> = ({ tea, onClick }) => {
  const categoryColors = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    black: 'bg-orange-50 text-orange-700 border-orange-100',
    oolong: 'bg-amber-50 text-amber-700 border-amber-100',
    white: 'bg-slate-50 text-slate-700 border-slate-100',
    dark: 'bg-stone-50 text-stone-700 border-stone-100',
    herbal: 'bg-rose-50 text-rose-700 border-rose-100',
    scented: 'bg-pink-50 text-pink-700 border-pink-100',
  };

  const categoryLabels = {
    green: '绿茶',
    black: '红茶',
    oolong: '乌龙茶',
    white: '白茶',
    dark: '黑茶',
    herbal: '草本茶',
    scented: '花茶',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tea.image}
          alt={tea.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={cn(
            "px-3 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border",
            categoryColors[tea.category]
          )}>
            {categoryLabels[tea.category]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-2xl font-serif mb-2">{tea.name}</h3>
        <p className="text-xs text-tea-ink/60 line-clamp-2 leading-relaxed mb-4">
          {tea.description}
        </p>
        <div className="flex items-center gap-4 text-[10px] text-tea-olive/70 font-medium uppercase tracking-wider">
          <div className="flex items-center gap-1">
            <Thermometer size={12} />
            {tea.brewing[0].temp}°C
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            {Math.floor(tea.brewing[0].time / 60)}m
          </div>
          <div className="flex items-center gap-1">
            <Droplets size={12} />
            {tea.brewing[0].ratio}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
