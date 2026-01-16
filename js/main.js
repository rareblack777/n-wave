// ==========================================
// 🛠️ 1. UTILITÁRIOS (SEGURANÇA E PERFORMANCE)
// ==========================================

function escapeHTML(str) {
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// 📦 2. DATABASE (CATÁLOGO VALIDADO)
// ==========================================

const products = [
    {
        id: "01",
        name: "Mini Impressora Térmica Gatinho...",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 179,00</span> R$ 116,35 <span class="text-[10px] text-green-400 ml-1">-35%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=01",
        sales: "405 Vendidos",
        rating: "4.8",
        reviews: "228 reviews" 
    },
    {
        id: "02",
        name: "MINI MOP Esfregão Portátil Dobrável Rodo Para Limpeza Branco",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 27,91</span> R$ 18,99 <span class="text-[10px] text-green-400 ml-1">-32%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98q-ll58giysdbme7c@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=02",
        sales: "14 Vendidos",
        rating: "4.8",
        reviews: "9 reviews"
    },
    {
        id: "03",
        name: "Luminária Rgb Caixa Som G Speaker Carregador Indução Relógio",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 56,88 - R$ 68,88</span> <br>R$ 52,33 - R$ 58,88 <span class="text-[10px] text-green-400 ml-1">-8%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lksfktuqgbjnd7@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=03",
        sales: "+10mil Vendidos",
        rating: "4.8",
        reviews: "7mil reviews"
    },
    {
        id: "04",
        name: "Mini Processador de Alimentos, Elétrico Portátil USB (250ml)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 40,00 - R$ 160,00</span> <br>R$ 19,50 - R$ 69,91 <span class="text-[10px] text-green-400 ml-1">-51%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m84m5543nwmpb9@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=04",
        sales: "+90mil Vendidos",
        rating: "4.6",
        reviews: "55,1mil reviews"
    },
    {
        id: "05",
        name: "Smart Projetor Portátil HY300 Android 11 (Suporte 4K)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 239,90 </span> R$ 215,91 <span class="text-[10px] text-green-400 ml-1">-10%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxb15ke21th236@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=05",
        sales: "+4mil Vendidos",
        rating: "4.8",
        reviews: "2,3mil reviews"
    },
    {
        id: "06",
        name: "Basike Power Bank Ultra Thin 10000mAh Indução Magsafe",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 180,00</span> R$ 110,00<span class="text-[10px] text-green-400 ml-1">-38%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8btvrd1ue4105@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=06",
        sales: "+2mil Vendidos", 
        rating: "4.9", 
        reviews: "1,1mil reviews"
    },
    {
        id: "07",
        name: "fone de ouvido sem fio (ear clip)bluetooth fon-13025",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 180,00</span> R$ 69,00<span class="text-[10px] text-green-400 ml-1">-61%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-8224y-mhg53ijwdukl75@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=07",
        sales: "210 Vendidos", 
        rating: "4.9", 
        reviews: "135 reviews"
    },
    {
        id: "08",
        name: "Watch X Smartwatch Relogio Serie 10 Amoled Nfc Chat GPT Original",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 292,49</span> <br> R$ 194,89 - R$ 224,89<span class="text-[10px] text-green-400 ml-1">-33%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd4v-lvrr7762c98ib1@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=08",
        sales: "à venda", 
        rating: "4.8", 
        reviews: "5,4mil reviews"
    },
    {
        id: "09",
        name: "Kit Escova De Limpeza 5 Em 1 Teclado Hagibis Fone De Ouvido",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 7,99 - R$ 29,99</span> <br> R$ 7,60 - R$ 29,99<span class="text-[10px] text-green-400 ml-1">-5%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rbk6-ln29kkao4kqf69@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=09",
        sales: "612 Vendidos", 
        rating: "4.8", 
        reviews: "226 reviews"
    },
    {
        id: "10",
        name: "Ventilador de Pescoço Portátil Silencioso (USB)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 38,99 - R$ 39,99</span> R$ 89,00<span class="text-[10px] text-green-400 ml-1">-56%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyirhwovryqd56@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=10",
        sales: "+1mil Vendidos", 
        rating: "4.6", 
        reviews: "578 reviews"
    },
    {
        id: "11",
        name: "Máquina de Cortar Cabelo Barbeiro Dragão Profissional Recarregável",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 80,00</span> R$ 20,99<span class="text-[10px] text-green-400 ml-1">-74%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-mcd0uzbv2j1cce@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=11",
        sales: "+500mil Vendidos", 
        rating: "4.7", 
        reviews: "271,1mil reviews"
    },
    {
        id: "12",
        name: "Câmera Externa WiFi Dual Lens 6MP 360° (PTZ), À Prova D'água-G1",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 300,00</span> R$ 117,99 <span class="text-[10px] text-green-400 ml-1">-61%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mglwc89rqd532f@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=12",
        sales: "à venda", 
        rating: "4.7", 
        reviews: "602 reviews"
    },
    {
        id: "13",
        name: "Liquidificador Portátil Mini, Original Fresh Juice Elétrico",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 217,83 - R$ 439,98</span> <br> R$ 115,64 - R$ 244,02<span class="text-[10px] text-green-400 ml-1">-61%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/661b2863f64b94ac187ce885b85ab6df@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=13",
        sales: "+5mil Vendidos", 
        rating: "4.7", 
        reviews: "1,7mil reviews"
    },
    {
        id: "14",
        name: "Organizador Multifuncional 4 em 1 (Dispenser & Suporte)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 231,02 - R$ 411,54</span> <br> R$ 106,27 - R$ 189,31 <span class="text-[10px] text-green-400 ml-1">-54%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/bbf751885ec283b073744b93c8bc80ee@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=14",
        sales: "+1mil Vendidos",
        rating: "4.8",
        reviews: "(555 reviews)"
    },
    {
        id: "15",
        name: "Umidificador Visual Anti-Gravidade + Relógio LED",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 200,00</span> R$ 75,04 <span class="text-[10px] text-green-400 ml-1">-62%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd4p-lu6sz2o5gbev37@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=15",
        sales: "+1mil Vendidos",
        rating: "4.7",
        reviews: "(879 reviews)"
    },
    {
        id: "16",
        name: "Mini Seladora Portátil USB 2 em 1 (Sela e Corta)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 39,99</span> R$ 21,90 <span class="text-[10px] text-green-400 ml-1">-45%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8hn0g4ohdrl49@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=16",
        sales: "+30mil Vendidos",
        rating: "4.6",
        reviews: "(14,9mil reviews)"
    },
    {
        id: "17",
        name: "Escova De Limpeza Multifuncional Elétrica Sem Fio 5 Em 1",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 89,90</span> R$ 33,27 <span class="text-[10px] text-green-400 ml-1">-63%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m527v5unmuth56@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=17",
        sales: "+70mil Vendidos",
        rating: "4.7",
        reviews: "(36,7mil reviews)"
    },
    {
        id: "18",
        name: "Kit 2 em 1 Tapete Tecnológico Super Absorvente (Secagem Instantânea)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 30,00 - R$ 68,88</span> <br> R$ 19,49 - R$ 39,99 <span class="text-[10px] text-green-400 ml-1">-35%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mghzj2nqic5g65@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=18",
        sales: "+4mil Vendidos",
        rating: "4.8",
        reviews: "(1,6mil reviews)"
    },
    {
        id: "19",
        name: "Kit Forma de Gelo \"One Press\" com Depósito e Pá",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"></span> R$ 99,00 <span class="text-[10px] text-green-400 ml-1"></span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7reou-m2cp36b64aqefd@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=19",
        sales: "306 Vendidos",
        rating: "4.5",
        reviews: "(112 reviews)"
    },
    {
        id: "20",
        name: "Barra LED Magnética Inteligente com Sensor de Presença",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 32,00 - R$ 128,00</span> <br> R$ 14,90 - R$ 57,90 <span class="text-[10px] text-green-400 ml-1">-53%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7repf-m22lehps5d6fda@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=20",
        sales: "+20mil Vendidos",
        rating: "4.8",
        reviews: "(12,9mil reviews)"
    },
    {
        id: "21",
        name: "Teclado Gamer K500-B61 Compacto 60% RGB",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">  </span> R$ 199,90 - R$ 299,90 <span class="text-[10px] text-green-400 ml-1"></span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lvgyx5b9avtsfa@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=21",
        sales: "409 Vendidos",
        rating: "5.0",
        reviews: "(195 reviews)"
    },
    {
        id: "22",
        name: "Mousepad Gamer RGB Extra Grande 80x30cm 7 cores (Speed)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 75,50 </span> <br> R$ 41,53 - R$ 75,50 <span class="text-[10px] text-green-400 ml-1">-45%</span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/72b0beb61729fad2c6c2e07f464cf4e0@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=22",
        sales: "406 Vendidos",
        rating: "4.9",
        reviews: "(229 reviews)"
    },
    {
        id: "23",
        name: "Kit Neon Smart Tuya RGB 12V",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 104,70 - R$ 209,80 </span> <br> R$ 73,29 - R$ 146,86 <span class="text-[10px] text-green-400 ml-1">-30%</span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/cn-11134207-7r98o-lyosy8s7dl7m45@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=23",
        sales: "42 Vendidos",
        rating: "4.9",
        reviews: "(8 reviews)"
    },
    {
        id: "24",
        name: "Suporte Rgb Para Fone De Ouvido Aikino Msy-9990",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">  </span> R$ 51,00 <span class="text-[10px] text-green-400 ml-1"></span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-8258u-mfvjlgyejw96f3@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=24",
        sales: "15 Vendidos",
        rating: "4.6",
        reviews: "(9 reviews)"
    },
    {
        id: "25",
        name: "Speaker Retro Smart Divoom Ditoo-Pro Pixel Art (Teclado Mecânico)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 750,00 </span> R$ 639,90 <span class="text-[10px] text-green-400 ml-1">-15%</span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rcdy-m6hv5zruwvihb3@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=25",
        sales: "à venda",
        rating: "5.0",
        reviews: "(8 reviews)"
    },
    {
        id: "26",
        name: "Console Portátil Retrô R36S 64GB (+15.000 Jogos)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 480,00 </span> <br> R$ 184,99 - R$ 195,99 <span class="text-[10px] text-green-400 ml-1">-61%</span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3azpdpp7bxxe2@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=26",
        sales: "+10mil Vendidos",
        rating: "4.7",
        reviews: "(5,9mil reviews)"
    },
    {
        id: "27",
        name: "Microfone Gamer Condensador USB RGB (Stream & Podcast)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 253,67 </span> R$ 98,79 <span class="text-[10px] text-green-400 ml-1"></span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/cn-11134207-820l4-mghbkepxd53i33@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=27",
        sales: "+1mil Vendidos",
        rating: "4.9",
        reviews: "(562 reviews)"
    },
    {
        id: "28",
        name: "Par de Luvas de Dedo Gamer Pro (Fibra de Prata)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 29,99 </span> R$ 19,99 <span class="text-[10px] text-green-400 ml-1">-33%</span>',
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3mgiwba32glbc@resize_w450_nl.webp",
        link: "/api/v1/redirect?id=28",
        sales: "514 Vendidos",
        rating: "4.9",
        reviews: "(232 reviews)"
    }
];

// ==========================================
// 🚀 3. LÓGICA DO SISTEMA (CORE)
// ==========================================

const grid = document.getElementById('product-grid');
const noResults = document.getElementById('no-results');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    initFakeSystem();

    const loader = document.getElementById('loader');
    setTimeout(() => {
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1500);
});

// ==========================================
// 📦 4. RENDERIZADOR E BUSCA
// ==========================================

function renderProducts(items) {
    if (!grid) return;
    grid.innerHTML = ''; 
    
    if (items.length === 0) {
        if (noResults) noResults.classList.remove('hidden');
        return;
    } 
    if (noResults) noResults.classList.add('hidden');

    items.forEach(product => {
        const safeName = escapeHTML(product.name); 
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.className = "product-card group relative bg-nwave-card border border-white/5 rounded-2xl overflow-hidden hover:border-nwave-cyan/50 transition-all duration-300 hover:-translate-y-1 block";
        
        const salesText = product.sales || "+100 Vendidos";
        const ratingText = product.rating || "5.0";
        const reviewsText = product.reviews || "10 reviews";

        card.innerHTML = `
            <div class="relative w-full aspect-square bg-gray-900 overflow-hidden">
                <span class="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold px-2 py-0.5 rounded-md">#${product.id}</span>
                <span class="absolute bottom-2 right-2 z-10 bg-nwave-cyan/90 text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(0,243,255,0.4)]">🔥 ${salesText}</span>
                <img src="${product.image}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='https://placehold.co/400x400/111/FFF?text=N+WAVE'">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>
            <div class="p-3 flex flex-col gap-3">
                <div>
                    <h3 class="text-xs text-gray-200 font-medium leading-snug line-clamp-2 h-8 group-hover:text-nwave-cyan transition-colors" title="${safeName}">${safeName}</h3>
                    <div class="mt-1 flex items-center gap-1">
                        <div class="flex text-yellow-400 text-[10px] tracking-tighter">★★★★★</div>
                        <span class="text-[9px] text-gray-500">(${ratingText} • ${reviewsText})</span>
                    </div>
                </div>
                <div>
                    <div class="text-sm font-bold text-white mb-2">${product.price}</div>
                    <button class="w-full bg-white/5 hover:bg-nwave-cyan hover:text-black border border-white/10 hover:border-nwave-cyan text-gray-300 text-[10px] font-bold uppercase py-2.5 rounded-lg text-center transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                        Ver Oferta <span>➔</span>
                    </button>
                </div>
            </div>
            <div class="card-glow absolute inset-0 bg-nwave-cyan/5 opacity-0 pointer-events-none transition-opacity duration-300"></div>
        `;
        grid.appendChild(card);
    });
}

// BUSCA E FILTROS UNIFICADOS
if (searchInput) {
    searchInput.addEventListener('keyup', debounce((e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.id.includes(query)
        );
        renderProducts(filtered);
        filterBtns.forEach(btn => updateBtnStyle(btn, false));
    }, 300));
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const cat = btn.dataset.cat;
        filterBtns.forEach(b => updateBtnStyle(b, false));
        updateBtnStyle(btn, true);

        if (cat === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === cat);
            renderProducts(filtered);
        }
    });
});

function updateBtnStyle(btn, isActive) {
    if (isActive) {
        btn.classList.add('active', 'border-nwave-cyan', 'bg-nwave-cyan/10', 'text-nwave-cyan');
        btn.classList.remove('border-white/10', 'text-gray-400');
    } else {
        btn.classList.remove('active', 'border-nwave-cyan', 'bg-nwave-cyan/10', 'text-nwave-cyan');
        btn.classList.add('border-white/10', 'text-gray-400');
    }
}

// ==========================================
// 🔔 5. SISTEMA DE MONITORAMENTO (REALISTA)
// ==========================================

function initFakeSystem() {
    const counter = document.getElementById('live-counter');
    
    if (counter) {
        // 1. Definimos uma base real (você pode ajustar conforme seu Analytics)
        let visitantesBase = 142; 

        setInterval(() => {
            // 2. Criamos uma oscilação natural (sobe ou desce 1 ou 2 pessoas)
            const oscilacao = Math.floor(Math.random() * 5) - 2; 
            visitantesBase += oscilacao;

            // 3. Segurança para o número nunca ser baixo demais
            if (visitantesBase < 130) visitantesBase = 140;
            
            // 4. Atualiza o texto no seu site
            counter.innerText = visitantesBase;
        }, 8000); // Atualiza a cada 8 segundos para parecer natural
    }

    // O restante do código (Names e Cities) você pode apagar 
    // se quiser remover os balões de "Comprador de SP comprou agora"
    // para manter o site 100% honesto.
}