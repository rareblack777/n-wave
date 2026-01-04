// ==========================================
// 📦 DATABASE (SEUS PRODUTOS)
// ==========================================
const products = [
    {
        id: "01",
        name: "Mini Impressora Térmica Gatinho...",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 179,00</span> R$ 116,35 <span class="text-[10px] text-green-400 ml-1">-35%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "https://s.shopee.com.br/6falKJRE1N?share_channel_code=1",
        
        
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
        link: "https://s.shopee.com.br/8pfFwpm1Jv?share_channel_code=1",
    
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
        link: "https://s.shopee.com.br/4q97Bg9bDo?share_channel_code=1",
        
        
        sales: "+10mil Vendidos",
        rating: "4.8",
        reviews: "7mil reviews"
    },
    {
        id: "04",
        name: "Mini Processador Triturador De Alho e Alimentos Elétrico Sem Fio USB (250ml)",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ R$ 40,00 - R$ 160,00</span> <br>R$ 19,50 - R$ 69,91 <span class="text-[10px] text-green-400 ml-1">-51%</span>',
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m84m5543nwmpb9@resize_w450_nl.webp",
        link: " https://s.shopee.com.br/6puBaDoyJC?share_channel_code=1",

        
        sales: "+90mil Vendidos",
        rating: "4.6",
        reviews: "55,1mil reviews"
    },
    {
        id: "05",
        name: "Projetor HY300 Portátil Smart Android 11 4K Ultra HD Wifi Bluetooth Alto Falante Embutido",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1"> R$ 239,90 </span> R$ 215,91 <span class="text-[10px] text-green-400 ml-1">-10%</span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lxb15ke21th236@resize_w450_nl.webp",
        link: "https://s.shopee.com.br/8APZCWqEqR?share_channel_code=1",

        sales: "+4mil Vendidos",
        rating: "4.8",
        reviews: "2,3mil reviews"
    },
    {
        id: "06",
        name: "Basike Power Bank Ultra Thin 10000mAh Indução Magsafe",
        price: '<span class="text-[10px] text-gray-500 line-through mr-1">R$ 180,00</span> R$ 110,00<span class="text-[10px] text-green-400 ml-1"></span>',
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8btvrd1ue4105@resize_w450_nl.webp",
        link: "https://s.shopee.com.br/9UuwmDdkY1?share_channel_code=1",

        // PREENCHA AQUI OS DADOS REAIS DO G-SPEAKER
        sales: "+2mil Vendidos", 
        rating: "4.9", 
        reviews: "1,1mil reviews"
    },
    {
        id: "07",
        name: "fone de ouvido sem fio (ear clip)bluetooth fon-13025",
        price: "R$ 65,00",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-8224y-mhg53ijwdukl75@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "08",
        name: "Watch X Smartwatch Relogio Serie 10 Amoled Nfc Chat GPT Original",
        price: "R$ 204,89",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rd4v-lvrr7762c98ib1@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "09",
        name: "Kit Escova De Limpeza 5 em 1",
        price: "R$ 11,00",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/sg-11134201-7rbk6-ln29kkao4kqf69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "10",
        name: "Ventilador de pescoço sem ruído Ventilador leve USB ultra longa duração",
        price: "R$ 39,99",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lyirhwovryqd56@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "11",
        name: "Máquina de Cortar Cabelo Dragon (Dourada)",
        price: "R$ 18,79",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-ljsv195bwena57@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "12",
        name: "Câmera de Segurança Lâmpada 1080p wi-fi 360°",
        price: "R$ 58,99",
        category: "tech",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m3qd2s11ls63fe@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "13",
        name: "Liquidificador Portátil Mini, Original Fresh Juice Elétrico ",
        price: "R$ 115,64",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/661b2863f64b94ac187ce885b85ab6df@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "14",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "15",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "16",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "17",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "18",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "19",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "20",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "21",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "22",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "23",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "24",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "25",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "26",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "27",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    },
    {
        id: "28",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",
        category: "gamer",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO",
    }
];

// ==========================================
// 🚀 LÓGICA DO SISTEMA (CORE)
// ==========================================

// 1. SISTEMA DE LOADING
document.addEventListener("DOMContentLoaded", () => {
    renderProducts(products);
    initFakeSystem();

    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1500);
});

// 2. RENDERIZADOR DE PRODUTOS (100% MANUAL E REAL)
const grid = document.getElementById('product-grid');
const noResults = document.getElementById('no-results');

function renderProducts(items) {
    grid.innerHTML = ''; 
    
    if (items.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } 
    noResults.classList.add('hidden');

    items.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        card.className = "product-card group relative bg-nwave-card border border-white/5 rounded-2xl overflow-hidden hover:border-nwave-cyan/50 transition-all duration-300 hover:-translate-y-1 block";
        
        // Se você esquecer de preencher algum dado, o sistema usa um padrão para não quebrar
        const salesText = product.sales || "+100 Vendidos";
        const ratingText = product.rating || "5.0";
        const reviewsText = product.reviews || "10 reviews";

        card.innerHTML = `
            <div class="relative w-full aspect-square bg-gray-900 overflow-hidden">
                <span class="absolute top-2 left-2 z-10 bg-black/60 backdrop-blur-md text-white border border-white/10 text-[10px] font-bold px-2 py-0.5 rounded-md">#${product.id}</span>
                
                <span class="absolute bottom-2 right-2 z-10 bg-nwave-cyan/90 text-black text-[9px] font-bold px-2 py-0.5 rounded-full shadow-[0_0_10px_rgba(0,243,255,0.4)]">🔥 ${salesText}</span>

                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='https://placehold.co/400x400/111/FFF?text=N+WAVE'">
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
            </div>

            <div class="p-3 flex flex-col gap-3">
                <div>
                    <h3 class="text-xs text-gray-200 font-medium leading-snug line-clamp-2 h-8 group-hover:text-nwave-cyan transition-colors" title="${product.name}">${product.name}</h3>
                    
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

// 3. BUSCA E FILTROS
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(p => 
            p.name.toLowerCase().includes(query) || 
            p.id.includes(query)
        );
        renderProducts(filtered);
        filterBtns.forEach(btn => updateBtnStyle(btn, false));
    });
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
        btn.className = "filter-btn active px-5 py-2 rounded-full text-xs font-bold border border-nwave-cyan bg-nwave-cyan/10 text-nwave-cyan transition-all";
    } else {
        btn.className = "filter-btn px-5 py-2 rounded-full text-xs font-bold border border-white/10 text-gray-400 hover:border-white/30 transition-all";
    }
}

// 4. SISTEMA FAKE (CONTADOR + NOTIFICAÇÕES)
function initFakeSystem() {
    // A. Contador de Pessoas Online
    const counter = document.getElementById('live-counter');
    if (counter) {
        setInterval(() => {
            let current = parseInt(counter.innerText);
            let change = Math.random() > 0.5 ? Math.floor(Math.random() * 4) : -Math.floor(Math.random() * 3);
            let result = current + change;
            if (result < 700) result = 750;
            counter.innerText = result;
        }, 5000);
    }

    // B. Base de Dados Fake
    const names = [
        "Beatriz", "Lucas", "Mariana", "João", "Rafael", "Camila", 
        "Pedro", "Juliana", "Felipe", "Larissa", "Gustavo", "Amanda", 
        "Thiago", "Fernanda", "Rodrigo", "Patrícia", "Bruno", "Leticia"
    ];
    
    const cities = [
        "São Paulo - SP", "Rio de Janeiro - RJ", "Belo Horizonte - MG", 
        "Curitiba - PR", "Salvador - BA", "Brasília - DF", "Fortaleza - CE",
        "Campinas - SP", "Niterói - RJ", "Porto Alegre - RS", "Recife - PE",
        "Goiânia - GO", "Florianópolis - SC", "Vitória - ES", "Manaus - AM",
        "Santos - SP", "Ribeirão Preto - SP", "Balneário Camboriú - SC"
    ];

    const times = ["• AGORA", "• há 2 min", "• há 4 min", "• há 1 min"];

    // C. Lógica de Notificação
    const toast = document.getElementById('toast');
    
    function showToast() {
        if (!toast) return;

        const rName = names[Math.floor(Math.random() * names.length)];
        const rCity = cities[Math.floor(Math.random() * cities.length)];
        const rTime = times[Math.floor(Math.random() * times.length)];
        const rProd = products[Math.floor(Math.random() * products.length)];
        
        const nameEl = document.getElementById('toast-name');
        const prodEl = document.getElementById('toast-product');
        const imgEl = document.getElementById('toast-img');

        if (nameEl) nameEl.innerText = `${rName} de ${rCity} ${rTime}`;
        if (prodEl) prodEl.innerText = rProd.name.substring(0, 20) + "...";
        
        if (imgEl) imgEl.src = `https://ui-avatars.com/api/?name=${rName}&background=random&color=fff`;

        toast.classList.remove('translate-y-[200%]');
        
        setTimeout(() => {
            toast.classList.add('translate-y-[200%]');
        }, 5000);
    }

    (function loop() {
        const rand = Math.round(Math.random() * (40000 - 15000)) + 15000;
        setTimeout(() => {
            showToast();
            loop();
        }, rand);
    }());
}