import React, { useState, useMemo } from 'react';
import { teas, Tea } from './data/teas';
import { TeaCard } from './components/TeaCard';
import { TeaDetail } from './components/TeaDetail';
import { Search, Filter, Leaf, Coffee, Moon, Sun, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

export default function App() {
  const [selectedTea, setSelectedTea] = useState<Tea | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { id: 'green', name: '绿茶', icon: <Leaf size={14} /> },
    { id: 'black', name: '红茶', icon: <Coffee size={14} /> },
    { id: 'oolong', name: '乌龙茶', icon: <Coffee size={14} /> },
    { id: 'white', name: '白茶', icon: <Leaf size={14} /> },
    { id: 'dark', name: '黑茶', icon: <Coffee size={14} /> },
    { id: 'herbal', name: '草本茶', icon: <Leaf size={14} /> },
    { id: 'scented', name: '花茶', icon: <Leaf size={14} /> },
  ];

  const filteredTeas = useMemo(() => {
    return teas.filter((tea) => {
      const matchesSearch = tea.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tea.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || tea.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-tea-bg text-tea-ink selection:bg-tea-olive/20">
      <AnimatePresence mode="wait">
        {!selectedTea ? (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="px-6 py-12 max-w-2xl mx-auto"
          >
            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-tea-olive flex items-center justify-center text-white shadow-lg shadow-tea-olive/20">
                  <Leaf size={20} />
                </div>
                <h1 className="text-4xl font-serif tracking-tight">TeaBrew</h1>
              </div>
              <p className="text-tea-ink/60 text-sm leading-relaxed max-w-md italic">
                “茶者，南方之嘉木也。” 发现二十余种名茶的冲泡秘籍，开启一段静谧的寻味之旅。
              </p>
            </header>

            {/* Search and Filter */}
            <div className="space-y-6 mb-12">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-tea-olive/40 group-focus-within:text-tea-olive transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="搜索茶叶名称或描述..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-5 rounded-[28px] bg-white border border-black/5 shadow-sm focus:outline-none focus:ring-2 focus:ring-tea-olive/10 focus:border-tea-olive/20 transition-all text-sm"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-6 px-6">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={cn(
                    "flex-none px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300",
                    !selectedCategory 
                      ? "bg-tea-olive text-white shadow-md shadow-tea-olive/10" 
                      : "bg-white text-tea-olive/60 border border-black/5 hover:bg-tea-bg"
                  )}
                >
                  全部
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={cn(
                      "flex-none px-5 py-2.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2",
                      selectedCategory === cat.id 
                        ? "bg-tea-olive text-white shadow-md shadow-tea-olive/10" 
                        : "bg-white text-tea-olive/60 border border-black/5 hover:bg-tea-bg"
                    )}
                  >
                    {cat.icon}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tea Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredTeas.length > 0 ? (
                filteredTeas.map((tea) => (
                  <TeaCard
                    key={tea.id}
                    tea={tea}
                    onClick={() => setSelectedTea(tea)}
                  />
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-tea-bg mx-auto flex items-center justify-center text-tea-olive/20 mb-4">
                    <Search size={32} />
                  </div>
                  <p className="text-tea-ink/40 text-sm italic">未找到相关茶叶</p>
                </div>
              )}
            </div>

            {/* Footer Info */}
            <footer className="mt-20 pt-12 border-t border-black/5 text-center">
              <div className="flex items-center justify-center gap-2 text-tea-olive/40 mb-4">
                <Info size={14} />
                <span className="text-[10px] uppercase tracking-widest font-bold">小贴士</span>
              </div>
              <p className="text-xs text-tea-ink/40 leading-relaxed italic max-w-xs mx-auto">
                冲泡水温与时间仅供参考，可根据个人口味及茶叶品质微调。
              </p>
            </footer>
          </motion.div>
        ) : (
          <TeaDetail
            key="detail"
            tea={selectedTea}
            onBack={() => setSelectedTea(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
