import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface TimerProps {
  initialSeconds: number;
  onComplete?: () => void;
  className?: string;
}

export function Timer({ initialSeconds, onComplete, className }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setSeconds(initialSeconds);
    setIsActive(false);
  }, [initialSeconds]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
      handleComplete();
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, seconds]);

  const handleComplete = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#5A5A40', '#f5f5f0', '#1a1a1a']
    });
    
    // Play a gentle sound if possible
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        // Browser might block audio without user interaction
      });
    }
    
    onComplete?.();
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  const formatTime = (s: number) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = ((initialSeconds - seconds) / initialSeconds) * 100;

  return (
    <div className={cn("flex flex-col items-center gap-6 p-8 rounded-3xl bg-white shadow-sm border border-black/5", className)}>
      <audio ref={audioRef} src="https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3" />
      
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            className="text-tea-bg"
          />
          <motion.circle
            cx="96"
            cy="96"
            r="88"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeDasharray={553}
            initial={{ strokeDashoffset: 553 }}
            animate={{ strokeDashoffset: 553 - (553 * progress) / 100 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="text-tea-olive"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-serif font-light tracking-tighter">
            {formatTime(seconds)}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-tea-olive/60 mt-1">
            Remaining
          </span>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={resetTimer}
          className="p-4 rounded-full bg-tea-bg text-tea-olive hover:bg-tea-olive hover:text-white transition-colors"
          aria-label="Reset"
        >
          <RotateCcw size={20} />
        </button>
        <button
          onClick={toggleTimer}
          className={cn(
            "p-4 rounded-full transition-all duration-300 flex items-center justify-center w-16 h-16",
            isActive 
              ? "bg-tea-ink text-white" 
              : "bg-tea-olive text-white shadow-lg shadow-tea-olive/20"
          )}
          aria-label={isActive ? "Pause" : "Start"}
        >
          {isActive ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
        </button>
        <div className="p-4 rounded-full bg-tea-bg text-tea-olive/40">
          <Bell size={20} />
        </div>
      </div>
    </div>
  );
}
