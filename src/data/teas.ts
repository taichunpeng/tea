export type BrewMethod = 'hot' | 'cold' | 'simmer' | 'gongfu';

export interface Tea {
  id: string;
  name: string;
  category: 'green' | 'black' | 'oolong' | 'white' | 'dark' | 'herbal' | 'scented';
  description: string;
  brewing: {
    method: BrewMethod;
    temp: number; // Celsius
    time: number; // Seconds (Initial or default)
    ratio: string; // e.g., "1:50"
    notes: string;
    infusions?: number[]; // Seconds for each steep (1st, 2nd, 3rd...)
  }[];
  image: string;
}

export const teas: Tea[] = [
  {
    id: 'longjing',
    name: '西湖龙井',
    category: 'green',
    description: '中国十大名茶之首，色绿、香郁、味甘、形美。',
    brewing: [
      { 
        method: 'hot', 
        temp: 85, 
        time: 180, 
        ratio: '1:50', 
        notes: '建议使用玻璃杯，中投法。',
        infusions: [180, 240, 300]
      },
      { method: 'cold', temp: 4, time: 21600, ratio: '1:100', notes: '冷藏6小时以上，鲜爽甘甜。' },
      { method: 'simmer', temp: 90, time: 300, ratio: '1:75', notes: '不建议高温久煮，可尝试稍高温快冲。' }
    ],
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80&w=800' // Green tea leaves
  },
  {
    id: 'biluochun',
    name: '碧螺春',
    category: 'green',
    description: '产于江苏吴县太湖洞庭山，条索紧结，蜷曲似螺。',
    brewing: [
      { 
        method: 'hot', 
        temp: 80, 
        time: 120, 
        ratio: '1:50', 
        notes: '建议上投法，先倒水后放茶。',
        infusions: [120, 180, 240]
      },
      { method: 'cold', temp: 4, time: 14400, ratio: '1:100', notes: '冷泡可减少苦涩感。' },
      { method: 'simmer', temp: 85, time: 240, ratio: '1:75', notes: '轻微闷泡即可，避免熟汤味。' }
    ],
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?auto=format&fit=crop&q=80&w=800' // Green tea
  },
  {
    id: 'tieguanyin',
    name: '铁观音',
    category: 'oolong',
    description: '闽南乌龙茶的代表，具有独特的“音韵”。',
    brewing: [
      { 
        method: 'gongfu', 
        temp: 100, 
        time: 15, 
        ratio: '1:20', 
        notes: '首泡15秒，后续每泡增加5-10秒。',
        infusions: [15, 20, 30, 45, 60, 90]
      },
      { method: 'hot', temp: 95, time: 300, ratio: '1:50', notes: '大壶冲泡，香气浓郁。' },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷泡铁观音兰花香气清新。' },
      { method: 'simmer', temp: 100, time: 600, ratio: '1:100', notes: '陈年铁观音适合煮饮。' }
    ],
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&q=80&w=800' // Oolong tea
  },
  {
    id: 'dahongpao',
    name: '大红袍',
    category: 'oolong',
    description: '武夷岩茶之王，岩韵明显，香气浓郁。',
    brewing: [
      { 
        method: 'gongfu', 
        temp: 100, 
        time: 20, 
        ratio: '1:15', 
        notes: '沸水高冲，激发岩韵。',
        infusions: [20, 25, 35, 50, 70, 100]
      },
      { method: 'hot', temp: 95, time: 300, ratio: '1:50', notes: '岩韵深厚。' },
      { method: 'cold', temp: 4, time: 36000, ratio: '1:100', notes: '冷泡岩茶别有一番风味。' },
      { method: 'simmer', temp: 100, time: 900, ratio: '1:150', notes: '适合煮饮，茶汤更醇厚。' }
    ],
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800' // Dark tea/Oolong
  },
  {
    id: 'puer-raw',
    name: '普洱生茶',
    category: 'dark',
    description: '未经人工发酵，口感清爽，回甘强烈。',
    brewing: [
      { 
        method: 'gongfu', 
        temp: 95, 
        time: 10, 
        ratio: '1:20', 
        notes: '洗茶一次，出汤要快。',
        infusions: [10, 15, 20, 30, 45, 60, 90, 120]
      },
      { method: 'hot', temp: 90, time: 300, ratio: '1:50', notes: '回甘生津。' },
      { method: 'cold', temp: 4, time: 43200, ratio: '1:100', notes: '冷泡生普非常消暑。' },
      { method: 'simmer', temp: 100, time: 1200, ratio: '1:200', notes: '老生普煮着喝更甜润。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Puer tea cake
  },
  {
    id: 'puer-ripe',
    name: '普洱熟茶',
    category: 'dark',
    description: '经渥堆发酵，色泽红褐，滋味醇厚。',
    brewing: [
      { 
        method: 'gongfu', 
        temp: 100, 
        time: 15, 
        ratio: '1:20', 
        notes: '洗茶两次，陈香显著。',
        infusions: [15, 20, 30, 45, 60, 90, 120]
      },
      { method: 'simmer', temp: 100, time: 600, ratio: '1:100', notes: '适合煮饮，口感更绵滑。' },
      { method: 'hot', temp: 100, time: 300, ratio: '1:50', notes: '温润如玉。' },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷泡熟普口感独特。' }
    ],
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=800' // Ripe puer
  },
  {
    id: 'yinzhen',
    name: '白毫银针',
    category: 'white',
    description: '白茶中的极品，全是披满白毫的嫩芽。',
    brewing: [
      { 
        method: 'hot', 
        temp: 85, 
        time: 300, 
        ratio: '1:50', 
        notes: '不宜用沸水，以免烫伤嫩芽。',
        infusions: [300, 360, 420]
      },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷藏8小时，清甜无比。' },
      { method: 'simmer', temp: 90, time: 600, ratio: '1:100', notes: '老银针可尝试轻煮。' }
    ],
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b21643e12?auto=format&fit=crop&q=80&w=800' // White tea
  },
  {
    id: 'baimudan',
    name: '白牡丹',
    category: 'white',
    description: '一芽一二叶，形似花朵，滋味清甜。',
    brewing: [
      { 
        method: 'hot', 
        temp: 90, 
        time: 240, 
        ratio: '1:50', 
        notes: '口感比银针更浓郁。',
        infusions: [240, 300, 360]
      },
      { method: 'cold', temp: 4, time: 21600, ratio: '1:100', notes: '冷泡花香明显。' },
      { method: 'simmer', temp: 100, time: 900, ratio: '1:150', notes: '三年以上白牡丹适合煮饮。' }
    ],
    image: 'https://images.unsplash.com/photo-1544787210-228394c3d3e0?auto=format&fit=crop&q=80&w=800' // White tea leaves
  },
  {
    id: 'qimen',
    name: '祁门红茶',
    category: 'black',
    description: '世界三大高香红茶之一，具有“祁门香”。',
    brewing: [
      { 
        method: 'hot', 
        temp: 90, 
        time: 180, 
        ratio: '1:50', 
        notes: '香气持久，似果香又似兰花香。',
        infusions: [180, 240, 300]
      },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷泡红茶口感丝滑。' },
      { method: 'simmer', temp: 95, time: 300, ratio: '1:100', notes: '闷泡可使汤色更红艳。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Black tea
  },
  {
    id: 'zhengshan',
    name: '正山小种',
    category: 'black',
    description: '世界上最早的红茶，带有独特的松烟香。',
    brewing: [
      { 
        method: 'hot', 
        temp: 95, 
        time: 120, 
        ratio: '1:50', 
        notes: '烟熏风味独特。',
        infusions: [120, 180, 240]
      },
      { method: 'cold', temp: 4, time: 21600, ratio: '1:100', notes: '冷泡松烟香更清幽。' },
      { method: 'simmer', temp: 100, time: 420, ratio: '1:100', notes: '适合闷煮，口感更醇。' }
    ],
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&q=80&w=800' // Black tea
  },
  {
    id: 'jasmine',
    name: '茉莉花茶',
    category: 'scented',
    description: '将绿茶与茉莉鲜花窨制而成，花香浓郁。',
    brewing: [
      { 
        method: 'hot', 
        temp: 85, 
        time: 180, 
        ratio: '1:50', 
        notes: '闻香是享受。',
        infusions: [180, 240, 300]
      },
      { method: 'cold', temp: 4, time: 14400, ratio: '1:100', notes: '冷泡茉莉花茶香气清新。' },
      { method: 'simmer', temp: 90, time: 300, ratio: '1:75', notes: '轻微闷泡即可。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Jasmine tea
  },
  {
    id: 'matcha',
    name: '抹茶',
    category: 'green',
    description: '覆盖栽培的绿茶经蒸青、干燥、磨粉而成。',
    brewing: [
      { method: 'hot', temp: 80, time: 60, ratio: '2g:60ml', notes: '使用茶筅点茶，直至出现细腻泡沫。' },
      { method: 'cold', temp: 10, time: 120, ratio: '2g:100ml', notes: '可做成冰抹茶。' },
      { method: 'simmer', temp: 85, time: 180, ratio: '2g:150ml', notes: '不建议煮，可尝试浓茶法。' }
    ],
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=800' // Matcha
  },
  {
    id: 'sencha',
    name: '煎茶',
    category: 'green',
    description: '日本最受欢迎的茶叶，色泽翠绿，口感清爽。',
    brewing: [
      { 
        method: 'hot', 
        temp: 75, 
        time: 60, 
        ratio: '1:50', 
        notes: '注意控制水温，避免苦涩。',
        infusions: [60, 90, 120]
      },
      { method: 'cold', temp: 4, time: 10800, ratio: '1:100', notes: '冷泡煎茶色泽极绿。' },
      { method: 'simmer', temp: 80, time: 180, ratio: '1:75', notes: '轻微闷泡。' }
    ],
    image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?auto=format&fit=crop&q=80&w=800' // Sencha
  },
  {
    id: 'earlgrey',
    name: '伯爵红茶',
    category: 'black',
    description: '红茶中加入佛手柑油，香气清新。',
    brewing: [
      { 
        method: 'hot', 
        temp: 100, 
        time: 240, 
        ratio: '1:50', 
        notes: '适合搭配下午茶。',
        infusions: [240, 300, 360]
      },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷泡伯爵茶非常清爽。' },
      { method: 'simmer', temp: 100, time: 420, ratio: '1:100', notes: '适合加奶煮成奶茶。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Earl grey
  },
  {
    id: 'darjeeling',
    name: '大吉岭',
    category: 'black',
    description: '产于印度大吉岭，被称为“红茶中的香槟”。',
    brewing: [
      { 
        method: 'hot', 
        temp: 95, 
        time: 180, 
        ratio: '1:50', 
        notes: '带有独特的麝香葡萄味。',
        infusions: [180, 240, 300]
      },
      { method: 'cold', temp: 4, time: 21600, ratio: '1:100', notes: '冷泡保留更多花果香。' },
      { method: 'simmer', temp: 100, time: 300, ratio: '1:100', notes: '闷泡时间不宜过长。' }
    ],
    image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?auto=format&fit=crop&q=80&w=800' // Darjeeling
  },
  {
    id: 'chrysanthemum',
    name: '菊花茶',
    category: 'herbal',
    description: '清热解毒，明目清肝。',
    brewing: [
      { 
        method: 'hot', 
        temp: 100, 
        time: 300, 
        ratio: '5朵:200ml', 
        notes: '可加入冰糖或枸杞。',
        infusions: [300, 360, 420]
      },
      { method: 'cold', temp: 4, time: 14400, ratio: '1:100', notes: '冷泡菊花茶清凉解暑。' },
      { method: 'simmer', temp: 100, time: 600, ratio: '1:150', notes: '煮饮药效更佳。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Chrysanthemum
  },
  {
    id: 'hibiscus',
    name: '洛神花茶',
    category: 'herbal',
    description: '色泽红艳，口感酸甜，富含维生素C。',
    brewing: [
      { 
        method: 'hot', 
        temp: 100, 
        time: 300, 
        ratio: '1:50', 
        notes: '酸度较高，建议加蜂蜜。',
        infusions: [300, 360, 420]
      },
      { method: 'cold', temp: 4, time: 14400, ratio: '1:100', notes: '冷泡颜色极美。' },
      { method: 'simmer', temp: 100, time: 600, ratio: '1:100', notes: '煮出浓郁红汤。' }
    ],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800' // Hibiscus
  },
  {
    id: 'peppermint',
    name: '薄荷茶',
    category: 'herbal',
    description: '清爽提神，助消化。',
    brewing: [
      { 
        method: 'hot', 
        temp: 100, 
        time: 300, 
        ratio: '1:50', 
        notes: '冷热皆宜。',
        infusions: [300, 360, 420]
      },
      { method: 'cold', temp: 4, time: 7200, ratio: '1:100', notes: '冷泡薄荷极其凉爽。' },
      { method: 'simmer', temp: 100, time: 420, ratio: '1:100', notes: '闷泡出味更快。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Peppermint
  },
  {
    id: 'rooibos',
    name: '路易波士',
    category: 'herbal',
    description: '产于南非，不含咖啡因，富含矿物质。',
    brewing: [
      { 
        method: 'hot', 
        temp: 100, 
        time: 420, 
        ratio: '1:50', 
        notes: '久泡不涩。',
        infusions: [420, 480, 540]
      },
      { method: 'cold', temp: 4, time: 28800, ratio: '1:100', notes: '冷泡口感顺滑。' },
      { method: 'simmer', temp: 100, time: 900, ratio: '1:100', notes: '煮饮味道更醇厚。' }
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&q=80&w=800' // Rooibos
  },
  {
    id: 'liubao',
    name: '六堡茶',
    category: 'dark',
    description: '产于广西苍梧县六堡镇，具有“红、浓、陈、醇”的特点。',
    brewing: [
      { 
        method: 'gongfu', 
        temp: 100, 
        time: 15, 
        ratio: '1:20', 
        notes: '适合长期存放，越陈越香。',
        infusions: [15, 20, 30, 45, 60, 90, 120]
      },
      { method: 'simmer', temp: 100, time: 900, ratio: '1:100', notes: '煮饮更佳。' },
      { 
        method: 'hot', 
        temp: 100, 
        time: 300, 
        ratio: '1:50', 
        notes: '陈香显著。',
        infusions: [300, 360, 420]
      },
      { method: 'cold', temp: 4, time: 43200, ratio: '1:100', notes: '冷泡六堡茶别有风味。' }
    ],
    image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=800' // Dark tea
  }
];
