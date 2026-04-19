 // 1. DATA MENU RANIA
        const menuData = [
            { id: 1, cat: 'makanan', name: 'Nasi Tempong Rania', price: 'Rp 45.000', desc: 'Sajian ikonik Banyuwangi dengan sambal segar dan lauk lengkap.', img: 'https://images.unsplash.com/photo-1546241072-48010ad28c2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { id: 2, cat: 'makanan', name: 'Pindang Koyong', price: 'Rp 55.000', desc: 'Ikan tenggiri masak bumbu kuning yang asam dan pedas.', img: 'https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { id: 3, cat: 'makanan', name: 'Ayam Pedas Rania', price: 'Rp 48.000', desc: 'Ayam kampung bakar disiram kuah santan pedas gurih.', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { id: 4, cat: 'minuman', name: 'Es Kopi Ijen', price: 'Rp 28.000', desc: 'Kopi asli lereng Ijen dengan gula aren murni.', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { id: 5, cat: 'minuman', name: 'Es Degan Madu', price: 'Rp 25.000', desc: 'Kelapa muda segar dengan madu hutan asli.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
            { id: 6, cat: 'dessert', name: 'Pisang Goreng Keju', price: 'Rp 22.000', desc: 'Pisang kepok pilihan dengan taburan keju melimpah.', img: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' }
        ];

        // 2. PRELOADER
        window.addEventListener('load', () => {
            const preloader = document.getElementById('preloader');
            preloader.style.transition = 'opacity 0.8s ease';
            preloader.style.opacity = '0';
            setTimeout(() => preloader.style.display = 'none', 800);
            displayMenuItems('all');
        });

        // 3. STICKY NAV & SCROLL REVEAL
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            navbar.classList.toggle('sticky', window.scrollY > 50);

            // Scroll Reveal Logic
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const revealTop = el.getBoundingClientRect().top;
                if (revealTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        });

        // 4. DISPLAY & FILTER MENU
        const menuContainer = document.getElementById('menu-list');
        const filterBtns = document.querySelectorAll('.filter-btn');

        function displayMenuItems(category) {
            let filtered = category === 'all' ? menuData : menuData.filter(i => i.cat === category);
            
            menuContainer.innerHTML = filtered.map(item => `
                <div class="menu-card reveal active">
                    <div class="menu-img-wrapper">
                        <img src="${item.img}" alt="${item.name}">
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

        // 5. THEME TOGGLE
        const modeBtn = document.getElementById('modeBtn');
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const icon = modeBtn.querySelector('i');
            icon.classList.toggle('fa-moon');
            icon.classList.toggle('fa-sun');
        });

        // 6. FORM SUBMISSION
        document.getElementById('bookingForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Selamat ${name}, Reservasi Anda di Rumah Makan Rania telah berhasil dikirim! Kami akan menghubungi Anda segera.`);
            e.target.reset();
        });
