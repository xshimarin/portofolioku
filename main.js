// ================= 1. MULTILINGUAL TRANSLATION DATA =================
let currentLang = 'id'; // 'id' atau 'en'

const translations = {
  id: {
    navAbout: "Tentang",
    navSkills: "Keahlian",
    navWorks: "Karya Proyek",
    navJourney: "Perjalanan",
    navCerts: "Sertifikat",
    navContact: "Kontak",
    btnChat: "Ngobrol",
    heroGreeting: "Halo! Aku",
    heroBadgeTech: "Mode Informatika: Siap membangun web & sistem!",
    heroBadgeCreative: "Mode Kreatif: Studio Desain & Eksplorasi Visual!",
    heroBioTech: "Mahasiswa Informatika yang merancang sistematis logika pemrograman, sekaligus menjelajah dunia grafis, UI/UX rapi, dan estetika fotografi.",
    heroBioCreative: "Koleksi eksplorasi karya grafis, poster bergaya komik/vektor, antarmuka kreatif, dan jepretan kamera bernuansa estetik.",
    btnHeroWa: "Ngobrol di WhatsApp",
    btnHeroWorks: "🚀 Buka Galeri Karya",
    statPillars: "Pilar Bidang",
    statLogic: "Fokus Logika",
    statIdeas: "Ide Visual",
    statCollab: "Siap Kolaborasi",
    aboutTag: "Bukan Sekadar Kode",
    aboutHeading: "Menyatukan Logika Komputasi dan Keindahan Seni",
    aboutP1: "Di bangku kuliah informatika, aku terlatih merumuskan alur algoritma, menyusun database, dan membangun logika pemrograman yang kokoh.",
    aboutP2: "Namun di luar itu, mataku selalu tertuju pada komposisi warna, hierarki visual, dan cerita di balik karya grafis maupun jepretan kamera. Keduanya saling melengkapi!",
    aboutStudentTitle: "Profil Mahasiswa",
    aboutStudentDesc: "Mempelajari ilmu komputer formal sambil memperdalam minat artistik di rancang antarmuka, layout grafis, serta fotografi jalanan.",
    skillsTitle: "Alat & Kemampuan Kerja",
    skillsSubtitle: "Tools yang sering dipakai untuk coding dan berkarya.",
    skillDescInfo: "Algoritma, struktur data, HTML, CSS, JavaScript, Tailwind, Git.",
    skillDescUI: "Figma, wireframing, alur prototipe, desain sistem antarmuka.",
    skillDescDesign: "Photoshop, Illustrator, tata letak poster, identitas brand.",
    skillDescPhoto: "Lightroom grading, komposisi street, framing natural.",
    portTag: "Koleksi Karya",
    portTitle: "Galeri Proyek Terpilih",
    filterAll: "Semua",
    filterDev: "Coding",
    filterUI: "UI/UX",
    filterDesign: "Desain",
    filterPhoto: "Foto",
    filterLogo: "Logo",
    lblDetail: "Detail &rarr;",
    proj1Desc: "Sistem informasi manajemen perkuliahan terstruktur dan cepat.",
    proj2Desc: "Desain antarmuka perbankan modern yang ramah pengguna.",
    proj3Desc: "Konsep poster, feed media sosial, dan tipografi festival.",
    proj4Desc: "Tangkap sudut kehidupan perkotaan dengan pencahayaan alami.",
    journeyTitle: "Perjalanan Kuliah & Kreasi",
    journeyDesc1: "Fokus mendalami algoritma komputasi, web frontend logic, basis data relasional, dan arsitektur kode terstruktur.",
    journeyDesc2: "Mengerjakan identitas poster acara, feeding konten carousel media sosial, dan prototipe antarmuka Figma untuk klien independen.",
    journeyDesc3: "Eksplorasi dokumentasi visual perkotaan, permainan bayangan dan kontras, serta proses color grading di Adobe Lightroom.",
    certTag: "Pencapaian & Kredensial",
    certTitle: "Sertifikat & Lisensi",
    certSubtitle: "Bukti dedikasi pembelajaran di bidang teknologi dan desain.",
    certDesc1: "Pemahaman standar arsitektur web modern, semantic HTML5, responsive CSS, dan dasar JavaScript.",
    certDesc2: "Perancangan user journey, sistem komponen fleksibel, autolayout tingkat lanjut, dan prototipe interaktif.",
    certDesc3: "Perancangan skema relasional, optimasi kueri data, dan manipulasi basis data terstruktur.",
    lblVerify: "Terverifikasi &check;",
    contactTag: "Kontak Langsung",
    contactTitle: "Mari Berkolaborasi!",
    contactDesc: "Mau bikin website, diskusi layout Figma, minta tolong poster desain, atau sekadar bertukar sapa? Pintu obrolan selalu terbuka.",
    contactWaTitle: "Respon Paling Cepat",
    contactWaDesc: "Langsung terhubung ke nomor WhatsApp pribadiku.",
    formTitle: "Kirim Pesan Instan",
    formLabelName: "Nama Kamu",
    formLabelTopic: "Kategori",
    formLabelContact: "Email / Kontak",
    formLabelMsg: "Pesan",
    btnSendWa: "Kirimkan Pesan ke WhatsApp",
    btnBackTop: "Kembali ke Atas &uarr;"
  },
  en: {
    navAbout: "About",
    navSkills: "Skills",
    navWorks: "Projects",
    navJourney: "Journey",
    navCerts: "Certificates",
    navContact: "Contact",
    btnChat: "Let's Talk",
    heroGreeting: "Hello! I am",
    heroBadgeTech: "Informatics Mode: Ready to build systems & web!",
    heroBadgeCreative: "Creative Mode: Visual Studio & Design Space!",
    heroBioTech: "Informatics student crafting clean software architecture and web logic, while exploring graphic design, UI/UX aesthetics, and urban photography.",
    heroBioCreative: "Showcase of graphic explorations, comic/vector style posters, creative interfaces, and authentic street photography moods.",
    btnHeroWa: "Chat on WhatsApp",
    btnHeroWorks: "🚀 Open Projects Gallery",
    statPillars: "Core Pillars",
    statLogic: "Logic Focus",
    statIdeas: "Visual Ideas",
    statCollab: "Ready to Build",
    aboutTag: "Beyond Just Code",
    aboutHeading: "Bridging Computational Logic and Visual Aesthetics",
    aboutP1: "In my informatics coursework, I practice algorithmic thinking, database structure, and modern clean programming foundations.",
    aboutP2: "Beyond code, my eye is constantly drawn to color schemes, visual hierarchy, typography, and authentic framing through the lens. Both sides empower each other!",
    aboutStudentTitle: "Student Profile",
    aboutStudentDesc: "Pursuing computer science fundamentals while expanding creative passions in UI/UX wireframes, branding, and street photography.",
    skillsTitle: "Tools & Skillset",
    skillsSubtitle: "Everyday tools used for coding and creative production.",
    skillDescInfo: "Algorithms, data structures, HTML, CSS, JavaScript, Tailwind, Git.",
    skillDescUI: "Figma, wireframing, prototyping workflows, design systems.",
    skillDescDesign: "Photoshop, Illustrator, poster layouts, brand identities.",
    skillDescPhoto: "Lightroom grading, street composition, natural lighting.",
    portTag: "Selected Works",
    portTitle: "Featured Projects Gallery",
    filterAll: "All",
    filterDev: "Coding",
    filterUI: "UI/UX",
    filterDesign: "Design",
    filterPhoto: "Photos",
    filterLogo: "Logo",
    lblDetail: "Detail &rarr;",
    proj1Desc: "High performance academic data management web portal.",
    proj2Desc: "User-friendly modern digital banking mobile concept.",
    proj3Desc: "Comprehensive festival poster identity and typography kit.",
    proj4Desc: "Capturing commuting rhythms with natural contrast and street lighting.",
    journeyTitle: "Academic & Creative Journey",
    journeyDesc1: "Diving deep into computer science fundamentals, frontend logic, relational databases, and modular architecture.",
    journeyDesc2: "Designing event branding assets, social media carousels, and Figma design mockups for independent collaborators.",
    journeyDesc3: "Urban landscape visual documentation, natural shadows, and color grading mastery in Adobe Lightroom.",
    certTag: "Credentials & Honors",
    certTitle: "Certificates & Licenses",
    certSubtitle: "Proof of dedicated continuous learning in technology and design.",
    certDesc1: "Modern web architecture standards, semantic HTML5, responsive CSS, and JavaScript core.",
    certDesc2: "User journey mapping, flexible component design systems, autolayout, and interactive prototypes.",
    certDesc3: "Relational database schema modeling, query optimization, and structured data handling.",
    lblVerify: "Verified &check;",
    contactTag: "Direct Connect",
    contactTitle: "Let's Collaborate!",
    contactDesc: "Looking to build a responsive website, discuss UI design, need branding materials, or just want to say hi? My inbox is always open.",
    contactWaTitle: "Fastest Response",
    contactWaDesc: "Connect directly to my personal WhatsApp.",
    formTitle: "Instant Inquiry",
    formLabelName: "Your Name",
    formLabelTopic: "Category",
    formLabelContact: "Email / Phone",
    formLabelMsg: "Message",
    btnSendWa: "Send via WhatsApp",
    btnBackTop: "Back to Top &uarr;"
  }
};

function updateLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.getElementById('langLabel').textContent = lang === 'id' ? 'EN' : 'ID';
  const mobileLabel = document.getElementById('mobileLangLabel');
  if (mobileLabel) mobileLabel.textContent = lang === 'id' ? 'EN' : 'ID';
}

const langSwitchBtn = document.getElementById('langSwitchBtn');
const mobileLangBtn = document.getElementById('mobileLangBtn');

if (langSwitchBtn) {
  langSwitchBtn.addEventListener('click', () => {
    updateLanguage(currentLang === 'id' ? 'en' : 'id');
  });
}
if (mobileLangBtn) {
  mobileLangBtn.addEventListener('click', () => {
    updateLanguage(currentLang === 'id' ? 'en' : 'id');
  });
}

// ================= 2. DUAL MODE SWITCHER LOGIC =================
const modeSwitchBtn = document.getElementById('modeSwitchBtn');
const mobileModeSwitchBtn = document.getElementById('mobileModeSwitchBtn');
const modeIcon = document.getElementById('modeIcon');
const mobileModeIcon = document.getElementById('mobileModeIcon');
const modeLabel = document.getElementById('modeLabel');

const navBrandName = document.getElementById('navBrandName');
const navBrandTagline = document.getElementById('navBrandTagline');

const techHeroVisual = document.getElementById('techHeroVisual');
const creativeHeroVisual = document.getElementById('creativeHeroVisual');
const heroBadgeText = document.getElementById('heroBadgeText');
const heroBioDesc = document.getElementById('heroBioDesc');

let isCreativeMode = false;

// Kumpulan kata Typewriter (Bilingual)
const wordsData = {
  tech: {
    id: ["Informatics Engineer 💻", "Frontend & Web Logic ⚡", "Algorithm Explorer 🛠️"],
    en: ["Informatics Engineer 💻", "Frontend & Web Developer ⚡", "Algorithms Explorer 🛠️"]
  },
  creative: {
    id: ["Graphic & Comic Artist 🎨", "Visual Storyteller 📸", "UI/UX Experience Crafter ✨"],
    en: ["Graphic & Visual Artist 🎨", "Street Storyteller 📸", "UI/UX Designer ✨"]
  }
};

function togglePortfolioMode() {
  isCreativeMode = !isCreativeMode;

  if (isCreativeMode) {
    document.body.classList.add('mode-creative');
    modeIcon.textContent = '🎨';
    if (mobileModeIcon) mobileModeIcon.textContent = '🎨';
    modeLabel.textContent = 'Creative';

    if (navBrandName) navBrandName.textContent = "Ramadhani Studio ✨";
    if (navBrandTagline) navBrandTagline.innerHTML = "Visual &bull; Poster &bull; Shutter";

    techHeroVisual.classList.add('hidden');
    creativeHeroVisual.classList.remove('hidden');

    heroBadgeText.setAttribute('data-i18n', 'heroBadgeCreative');
    heroBioDesc.setAttribute('data-i18n', 'heroBioCreative');
    heroBadgeText.innerHTML = translations[currentLang].heroBadgeCreative;
    heroBioDesc.innerHTML = translations[currentLang].heroBioCreative;

    const graphicFilterBtn = document.querySelector('[data-category="graphic"]');
    if (graphicFilterBtn) graphicFilterBtn.click();

  } else {
    document.body.classList.remove('mode-creative');
    modeIcon.textContent = '💻';
    if (mobileModeIcon) mobileModeIcon.textContent = '💻';
    modeLabel.textContent = 'Tech';

    if (navBrandName) navBrandName.textContent = "Ramadhani Hidayat";
    if (navBrandTagline) navBrandTagline.innerHTML = "Tech &bull; Design &bull; Cam";

    creativeHeroVisual.classList.add('hidden');
    techHeroVisual.classList.remove('hidden');

    heroBadgeText.setAttribute('data-i18n', 'heroBadgeTech');
    heroBioDesc.setAttribute('data-i18n', 'heroBioTech');
    heroBadgeText.innerHTML = translations[currentLang].heroBadgeTech;
    heroBioDesc.innerHTML = translations[currentLang].heroBioTech;

    const allFilterBtn = document.querySelector('[data-category="all"]');
    if (allFilterBtn) allFilterBtn.click();
  }

  charIndex = 0;
  isDeleting = false;
}

if (modeSwitchBtn) modeSwitchBtn.addEventListener('click', togglePortfolioMode);
if (mobileModeSwitchBtn) mobileModeSwitchBtn.addEventListener('click', togglePortfolioMode);

// ================= 3. TYPEWRITER ANIMATION =================
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById('typewriterText');

function type() {
  if (!typewriterEl) return;
  const modeKey = isCreativeMode ? 'creative' : 'tech';
  const activeList = wordsData[modeKey][currentLang];
  const currentWord = activeList[wordIndex % activeList.length];
  
  if (isDeleting) {
    typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 30 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1600;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % activeList.length;
    typeSpeed = 350;
  }

  setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);

// ================= 4. MOBILE MENU =================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

mobileMenuBtn.addEventListener('click', () => {
  const isHidden = mobileMenu.classList.toggle('hidden');
  menuIcon.className = isHidden ? 'fa-solid fa-bars' : 'fa-solid fa-xmark';
});

document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuIcon.className = 'fa-solid fa-bars';
  });
});

// ================= 5. FILTER PORTFOLIO =================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('bg-cyan-400', 'text-black', 'active-filter');
      b.classList.add('bg-slate-800', 'text-white');
    });
    btn.classList.add('bg-cyan-400', 'text-black', 'active-filter');
    btn.classList.remove('bg-slate-800', 'text-white');

    const category = btn.getAttribute('data-category');

    projectCards.forEach(card => {
      const itemCat = card.getAttribute('data-category');
      if (category === 'all' || itemCat === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ================= 6. MODAL DATA =================
const projectData = {
  '1': {
    title: 'Academic Portal System',
    category: 'Informatics & Engineering',
    desc: 'Sistem portal data akademik yang dirancang untuk mengelola KRS, penjadwalan, dan pencatatan nilai mahasiswa secara terstruktur.',
    tags: ['JavaScript', 'HTML5', 'Tailwind', 'Database SQL'],
    visualType: 'code'
  },
  '2': {
    title: 'Fintech Mobile UI',
    category: 'UI/UX Design',
    desc: 'Konsep desain aplikasi keuangan dengan kemudahan navigasi transfer instan serta visual dashboard pengeluaran.',
    tags: ['Figma', 'Wireframing', 'Prototyping'],
    visualType: 'ui'
  },
  '3': {
    title: 'Event Visual Identity',
    category: 'Graphic Design',
    desc: 'Paket desain poster festival, tipografi neo-brutalisme, dan aset grafis media sosial.',
    tags: ['Adobe Photoshop', 'Illustrator', 'Poster Art'],
    visualType: 'brand'
  },
  '4': {
    title: 'Street Photography Collection',
    category: 'Photography',
    desc: 'Kumpulan foto jalanan yang menangkap ritme kehidupan komuter perkotaan serta permainan bayangan natural.',
    tags: ['Adobe Lightroom', 'Color Tuning', 'Composition'],
    visualType: 'photo'
  },
  '5': {
    title: 'Brand Identity & Logo Design',
    category: 'Logo & Branding',
    desc: 'Eksplorasi pembuatan logo mulai dari sketsa konsep, rasio geometri/golden ratio, pemilihan tipografi, hingga panduan warna brand (brand guideline).',
    tags: ['Adobe Illustrator', 'Logo Philosophy', 'Vector Crafting', 'Brand Guidelines'],
    visualType: 'brand'
  }
};

function openProjectModal(id) {
  const data = projectData[id];
  if (!data) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalCategoryBadge').textContent = data.category;
  document.getElementById('modalDescription').textContent = data.desc;

  const tagsContainer = document.getElementById('modalTags');
  tagsContainer.innerHTML = '';
  data.tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.className = 'comic-btn px-2.5 py-0.5 rounded text-[10px] font-bold bg-white text-black';
    tagEl.textContent = tag;
    tagsContainer.appendChild(tagEl);
  });

  const waBtn = document.getElementById('modalWaChatBtn');
  const waMessage = encodeURIComponent(`Halo Ramadhani, aku tertarik sama karya "${data.title}" di portofoliomu!`);
  waBtn.href = `https://wa.me/6289508313321?text=${waMessage}`;

  const previewBox = document.getElementById('modalPreviewBox');
  if (data.visualType === 'code') {
    previewBox.innerHTML = `&lt;Code /&gt; Clean Architecture &amp; Logic Simulation`;
  } else if (data.visualType === 'ui') {
    previewBox.innerHTML = `📱 Figma Interactive UI Mockup`;
  } else if (data.visualType === 'brand') {
    previewBox.innerHTML = `🎨 Vector Asset &amp; Poster Composition`;
  } else {
    previewBox.innerHTML = `📸 Fine Art &amp; Natural Composition`;
  }

  document.getElementById('projectModal').classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

document.getElementById('projectModal').addEventListener('click', (e) => {
  if (e.target.id === 'projectModal') closeProjectModal();
});

// ================= 7. FORM WHATSAPP SUBMIT =================
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('senderName').value.trim();
  const category = document.getElementById('senderCategory').value;
  const contact = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('senderMessage').value.trim();

  const waText = `Halo Ramadhani, aku *${name}* (%0AEmail/Kontak: ${contact}%0ATopik: *${category}*)%0A%0APesan:%0A"${message}"`;
  
  const feedback = document.getElementById('formFeedback');
  feedback.classList.remove('hidden');

  setTimeout(() => {
    window.open(`https://wa.me/6289508313321?text=${waText}`, '_blank');
    contactForm.reset();
    setTimeout(() => feedback.classList.add('hidden'), 4000);
  }, 600);
});

// ================= 8. FOOTER YEAR =================
document.getElementById('currentYear').textContent = new Date().getFullYear();