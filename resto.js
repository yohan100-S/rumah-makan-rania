 // 1. DATA MENU RANIA
        const menuData = [
            { id: 1, cat: 'makanan', name: 'Ayam Bakar Potong', price: 'Rp 30.000', desc: 'Sajian ikonik Banyuwangi dengan sambal segar dan lauk lengkap.', img: 'https://thf.bing.com/th/id/OIP.tmkMxINmOqqMdncQ1D7NuAHaE8?o=7&cb=thfc1rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
            { id: 2, cat: 'makanan', name: 'Ayam Betutu Kampung', price: 'Rp 40.000', desc: 'Ayam Betutu Kampung disiram kuah santan pedas gurih.', img: 'https://images.genpi.co/uploads/data/images/2020/02/ayam%20betutu1.jpg' },
            { id: 3, cat: 'makanan', name: 'Bebek Bakar', price: 'Rp 45.000', desc: 'Bebek Bakar dengan bumbu manis, gurih, dan pedas.', img: 'https://panggangansosis.id/wp-content/uploads/2018/03/resep-bebek-bakar-1-768x512.jpg' },
            { id: 4, cat: 'makanan', name: 'Sop Iga', price: 'Rp 50.000', desc: 'Sop Iga dengan bumbu manis, gurih, dan pedas.', img: 'https://www.astronauts.id/blog/wp-content/uploads/2023/11/Resep-Sop-Iga-Sapi-Khas-Betawi-untuk-Makan-Siang-Keluarga-1.jpg' },
            { id: 5, cat: 'minuman', name: 'Jus Alpokad', price: 'Rp 15.000', desc: 'Kopi asli lereng Ijen dengan gula aren murni.', img: 'https://i.pinimg.com/1200x/6d/ee/e0/6deee00a4051d4634707486b5732d80f.jpg' },
            { id: 6, cat: 'minuman', name: 'Lemon Tea Ice', price: 'Rp 15.000', desc: 'Lemon segar dengan Teh asli.', img: 'https://i.pinimg.com/1200x/aa/8d/2d/aa8d2de36c7e1cace188932bb0d9a7e4.jpg' },
            { id: 7, cat: 'prasmanan', name: 'Prasmanan', price: 'Rp 25.000 - 60.000', desc: 'Menyajikan makanan pilihan dengan melimpah.', img: 'https://i.pinimg.com/1200x/34/0b/e4/340be45acb3a916e46ffe1d5870489cb.jpg' }
        ];

        // 2. PRELOADER & INITIALIZATION
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 600);
            displayMenuItems('all');
        });

        // 3. MOBILE MENU LOGIC
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        const navItems = document.querySelectorAll('.nav-links li a');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Tutup menu saat link diklik (untuk Mobile)
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.querySelector('i').classList.add('fa-bars');
                menuToggle.querySelector('i').classList.remove('fa-times');
            });
        });

        // 4. SCROLL EFFECTS
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('sticky', window.scrollY > 50);

            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        });

        // 5. MENU DISPLAY & FILTER
        const menuContainer = document.getElementById('menu-list');
        const filterBtns = document.querySelectorAll('.filter-btn');

        function displayMenuItems(category) {
            let filtered = category === 'all' ? menuData : menuData.filter(i => i.cat === category);
            
            menuContainer.innerHTML = filtered.map(item => `
                <div class="menu-card reveal active">
                    <div class="menu-img-wrapper">
                        <img src="${item.img}" alt="${item.name}" loading="lazy">
                    </div>
                    <div class="menu-body">
                        <div class="menu-title-row">
                            <span class="menu-name">${item.name}</span>
                            <span class="menu-price">${item.price}</span>
                        </div>
                        <p class="menu-desc">${item.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                displayMenuItems(btn.dataset.cat);
            });
        });

        // 6. THEME TOGGLE
        const modeBtn = document.getElementById('modeBtn');
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = modeBtn.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });

        // 7. FORM SUBMISSION
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            // Simulasi pengiriman data
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = "Mengirim...";
            btn.disabled = true;

            setTimeout(() => {
                alert(`Terima kasih Bapak/Ibu ${name}. Reservasi Anda telah diterima. Kami akan mengonfirmasi jadwal melalui Email/WA segera.`);
                btn.innerText = originalText;
                btn.disabled = false;
                e.target.reset();
            }, 1500);
        });
