
    // 1. Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.toggle('hidden');
      if (isHidden) {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      } else {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
      }
    });

    // Close mobile menu on clicking nav items
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
      });
    });

    // 2. Filter Portfolio Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Style switch
        filterBtns.forEach(b => {
          b.classList.remove('bg-cyan-500', 'text-brand-dark', 'active-filter');
          b.classList.add('glass-card', 'text-slate-300');
        });
        btn.classList.add('bg-cyan-500', 'text-brand-dark', 'active-filter');
        btn.classList.remove('glass-card', 'text-slate-300');

        const category = btn.getAttribute('data-category');

        // Filter projects
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

    // 3. Project Modal Data & Handlers
    const projectData = {
      '1': {
        title: 'Smart Academic System Portal',
        category: 'Informatics & Engineering',
        badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        desc: 'Sistem portal data akademik yang dirancang untuk mengelola penjadwalan kuliah, kartu rencana studi, dan validasi data secara instan. Mengutamakan kode yang modular, efisiensi kueri database, serta responsivitas tinggi pada peramban ponsel.',
        tags: ['JavaScript', 'HTML5/Tailwind', 'Database Management', 'Git', 'Clean Architecture'],
        visualType: 'code'
      },
      '2': {
        title: 'Fintech Mobile App Redesign',
        category: 'UI/UX Design',
        badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
        desc: 'Proyek desain ulang antarmuka mobile banking yang mengedepankan kemudahan navigasi transfer cepat, analisis pengeluaran berbasis diagram visual, dan palet warna modern dengan kontras tinggi yang ramah aksesibilitas.',
        tags: ['Figma', 'Wireframing', 'Prototyping', 'User Flow', 'Design System'],
        visualType: 'ui'
      },
      '3': {
        title: 'Visual Branding & Event Identity: Nexus 26',
        category: 'Graphic Design',
        badgeClass: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
        desc: 'Eksplorasi grafis holistik untuk festival teknologi tahunan. Mencakup desain poster utama bertema futuristik neo-brutalisme, asset visual panggung, lanyard peserta, hingga template feed Instagram resmi.',
        tags: ['Adobe Photoshop', 'Adobe Illustrator', 'Brand Guide', 'Social Media Kit'],
        visualType: 'brand'
      },
      '4': {
        title: 'Street & Urban Stories Photography',
        category: 'Photography',
        badgeClass: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
        desc: 'Dokumentasi fotografi jalanan yang menangkap ritme kehidupan komuter, arsitektur perkotaan modern, serta permainan cahaya dan bayangan (chiaroscuro). Melalui proses color grading teliti untuk membangun mood atmosferik yang kuat.',
        tags: ['Sony Alpha', 'Adobe Lightroom', 'Color Grading', 'Street Composition'],
        visualType: 'photo'
      },
      '5': {
        title: 'Analytics Web Dashboard Kit',
        category: 'UI/UX Design',
        badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
        desc: 'Kit dashboard modular untuk SaaS analytics. Menggabungkan komponen visual interaktif seperti grafik tren metrik, tabel transaksi dengan penyaringan data, dan mode gelap bawaan.',
        tags: ['Figma', 'Dashboard UX', 'Component Library', 'Design Tokens'],
        visualType: 'ui'
      },
      '6': {
        title: 'Social Media Creative Campaign',
        category: 'Graphic Design',
        badgeClass: 'bg-violet-500/20 text-violet-300 border-violet-500/30',
        desc: 'Paket konten carousel edukasi seputar tips teknologi dan programming. Didesain dengan tata letak visual berurutan (swipeable) untuk memaksimalkan retensi dan pemahaman audiens.',
        tags: ['Illustrator', 'Carousel Layout', 'Typography', 'Content Strategy'],
        visualType: 'brand'
      }
    };

    function openProjectModal(id) {
      const data = projectData[id];
      if (!data) return;

      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalCategoryBadge').textContent = data.category;
      document.getElementById('modalDescription').textContent = data.desc;

      // Tags
      const tagsContainer = document.getElementById('modalTags');
      tagsContainer.innerHTML = '';
      data.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'text-xs font-mono px-3 py-1 rounded-md bg-white/5 border border-white/10 text-cyan-300';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
      });

      // WhatsApp Dynamic Link for this project
      const waBtn = document.getElementById('modalWaChatBtn');
      const waMessage = encodeURIComponent(`Halo Ramadhani, saya melihat karya "${data.title}" di portofoliomu dan ingin berdiskusi terkait ini.`);
      waBtn.href = `https://wa.me/6281234567890?text=${waMessage}`;

      // Visual box presentation
      const previewBox = document.getElementById('modalPreviewBox');
      if (data.visualType === 'code') {
        previewBox.innerHTML = `
          <div class="text-left font-mono text-xs text-cyan-300 p-6 bg-black/60 rounded-xl border border-white/10 w-4/5">
            <span class="text-violet-400">class</span> <span class="text-yellow-300">PortfolioSystem</span> {<br>
            &nbsp;&nbsp;<span class="text-emerald-400">executeFeature</span>() {<br>
            &nbsp;&nbsp;&nbsp;&nbsp;return <span class="text-pink-400">"Built with robust informatics foundations."</span>;<br>
            &nbsp;&nbsp;}<br>
            }
          </div>
        `;
      } else if (data.visualType === 'ui') {
        previewBox.innerHTML = `
          <div class="text-center p-6">
            <i class="fa-solid fa-bezier-curve text-4xl text-blue-400 mb-2"></i>
            <p class="text-xs text-slate-300 font-medium">Interactive Figma Wireframe &amp; Layout Simulation</p>
          </div>
        `;
      } else if (data.visualType === 'brand') {
        previewBox.innerHTML = `
          <div class="text-center p-6">
            <i class="fa-solid fa-palette text-4xl text-violet-400 mb-2"></i>
            <p class="text-xs text-slate-300 font-medium">High Resolution Vector &amp; Typography Identity</p>
          </div>
        `;
      } else {
        previewBox.innerHTML = `
          <div class="text-center p-6">
            <i class="fa-solid fa-camera-retro text-4xl text-pink-400 mb-2"></i>
            <p class="text-xs text-slate-300 font-medium">Fine Art High-Res Capture &amp; Natural Composition</p>
          </div>
        `;
      }

      document.getElementById('projectModal').classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
    }

    function closeProjectModal() {
      document.getElementById('projectModal').classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    }

    // Close on outside modal click
    document.getElementById('projectModal').addEventListener('click', (e) => {
      if (e.target.id === 'projectModal') {
        closeProjectModal();
      }
    });

    // 4. Contact Form Submission (Redirects smoothly to WhatsApp with prefilled message)
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('senderName').value.trim();
      const category = document.getElementById('senderCategory').value;
      const contact = document.getElementById('senderEmail').value.trim();
      const message = document.getElementById('senderMessage').value.trim();

      const waText = `Halo Ramadhani, saya *${name}* (%0AEmail/Kontak: ${contact}%0AKategori: *${category}*)%0A%0APesan:%0A"${message}"`;
      
      const feedback = document.getElementById('formFeedback');
      feedback.classList.remove('hidden');

      setTimeout(() => {
        window.open(`https://wa.me/6281234567890?text=${waText}`, '_blank');
        contactForm.reset();
        setTimeout(() => feedback.classList.add('hidden'), 4000);
      }, 700);
    });

    // 5. Current Year
    document.getElementById('currentYear').textContent = new Date().getFullYear();