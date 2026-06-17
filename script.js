const themeToggle = document.getElementById('themeToggle');
const langToggle = document.getElementById('langToggle');
const body = document.body;
const contentMap = {
  zh: {
    heroTag: '創作 x 科技 x 品牌故事',
    heroTitle: '你好，我是 Jenny Hsiao',
    heroDescription: '專注於打造具未來感的視覺體驗與動態品牌概念，將影像、產品策略與使用者感受結合成沉浸式電子名片。',
    heroAction1: '深入了解',
    heroAction2: '聯絡我',
    aboutTag: 'ABOUT',
    aboutTitle: '關於我',
    aboutSubtitle1: '跨領域故事設計師',
    aboutText1: '我以影像與品牌為核心，擅長將抽象概念轉化為沉浸式企劃，曾協助科技、藝術與時尚品牌打造爆款宣傳與產品發表。',
    aboutSubtitle2: '專案亮點',
    aboutList1: '虛擬新品發表會：累積 180k 觀看次數',
    aboutList2: '品牌視覺改造：提升社群互動 73%',
    aboutList3: '沉浸式展覽企劃：博物館與科技融合體驗',
    workTag: 'FEATURED',
    workTitle: '創作與成果',
    projectLabel1: '品牌旅程',
    projectTitle1: 'LUNA 未來夢想館',
    projectText1: '打造品牌故事節奏與動態視覺語言，讓展覽與產品發表成為一場情緒共鳴。',
    projectLabel2: '數位體驗',
    projectTitle2: 'Stellar 智慧裝置',
    projectText2: '設計高質感互動影片與社群短片，結合數據分析提升粉絲黏著度。',
    projectLabel3: '藝術合作',
    projectTitle3: '極光動態裝置',
    projectText3: '結合投影、聲音與視覺演算法，打造科技美學跨界展演。',
    contactTag: 'CONTACT',
    contactTitle: '聯絡我',
    contactLabel1: 'Email',
    contactLabel2: '辦公室',
    contactLabel3: '社群',
    contactAddress: '台北市信義區光復南路 389 號 18 樓',
    footerText: '2026 © Jenny Hsiao. 這是一個純 HTML/CSS/JS 的電子名片展示頁面。'
  },
  en: {
    heroTag: 'Creative x Tech x Story',
    heroTitle: 'Hi, I’m Jenny Hsiao',
    heroDescription: 'I create future-driven visual experiences and dynamic brand concepts, turning motion, product strategy, and engagement into an immersive digital card.',
    heroAction1: 'Explore More',
    heroAction2: 'Contact Me',
    aboutTag: 'ABOUT',
    aboutTitle: 'About Me',
    aboutSubtitle1: 'Cross-disciplinary Story Designer',
    aboutText1: 'I merge motion, brand, and technology to shape immersive campaigns and product showcases for tech, art, and fashion brands.',
    aboutSubtitle2: 'Project Highlights',
    aboutList1: 'Virtual launch event: 180k views',
    aboutList2: 'Brand refresh: +73% social engagement',
    aboutList3: 'Immersive exhibition design with museum-tech fusion',
    workTag: 'FEATURED',
    workTitle: 'Creative Work',
    projectLabel1: 'Brand Journey',
    projectTitle1: 'LUNA Future Dome',
    projectText1: 'Designed a cinematic story narrative and motion language for a launch experience with emotional impact.',
    projectLabel2: 'Digital Experience',
    projectTitle2: 'Stellar Interface',
    projectText2: 'Created premium interactive videos and social clips that amplified audience retention and response.',
    projectLabel3: 'Art Collaboration',
    projectTitle3: 'Aurora Motion Lab',
    projectText3: 'Built a cross-disciplinary installation blending projection, sound, and real-time visuals.',
    contactTag: 'CONTACT',
    contactTitle: 'Get in Touch',
    contactLabel1: 'Email',
    contactLabel2: 'Office',
    contactLabel3: 'Social',
    contactAddress: '18F, No. 389, Guangfu S. Rd, Xinyi Dist, Taipei',
    footerText: '2026 © Jenny Hsiao. This page is a pure HTML/CSS/JS digital card showcase.'
  }
};

let currentLang = 'zh';

function updateLanguage(lang) {
  currentLang = lang;
  const textNodes = document.querySelectorAll('[data-key]');
  textNodes.forEach((node) => {
    const key = node.dataset.key;
    if (contentMap[lang][key]) {
      node.textContent = contentMap[lang][key];
    }
  });
}

function toggleTheme() {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', () => {
  toggleTheme();
});

langToggle.addEventListener('click', () => {
  const nextLang = currentLang === 'zh' ? 'en' : 'zh';
  updateLanguage(nextLang);
});

window.addEventListener('load', () => {
  updateLanguage(currentLang);

  const heroItems = document.querySelectorAll('.hero-copy > *');
  const sections = document.querySelectorAll('.segment');

  gsap.from(heroItems, {
    opacity: 0,
    y: 28,
    duration: 1.1,
    ease: 'power3.out',
    stagger: 0.12,
  });

  gsap.from('.hero-visual', {
    opacity: 0,
    scale: 0.94,
    duration: 1.4,
    ease: 'power3.out',
    delay: 0.4,
  });

  sections.forEach((section, index) => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
      },
      opacity: 0,
      y: 24,
      duration: 1,
      ease: 'power3.out',
      delay: index * 0.08,
    });
  });
});

if (typeof gsap !== 'undefined' && typeof ScrollTrigger === 'undefined') {
  const script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
  script.onload = () => {
    gsap.registerPlugin(ScrollTrigger);
  };
  document.head.appendChild(script);
} else if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
