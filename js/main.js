// ==========================================
// 📦 DATABASE (SEUS PRODUTOS)
// ==========================================
const products = [
    {
        id: "01",
        name: "Mini Impressora Térmica Portátil (Sem Tinta)",
        price: "R$ 89,90",  // CONFIRA O PREÇO NO SITE HOJE
        category: "tech",
        // Cole o link da imagem que você copiou entre as aspas abaixo:
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lpmm0jzw37dn69@resize_w450_nl.webp",
        // Cole seu link de afiliado entre as aspas abaixo:
        link: "COLE_AQUI_SEU_LINK_DE_AFILIADO"
    },
    {
        id: "02",
        name: "Fone TWS Gamer Low Latency",
        price: "R$ 59,90",
        category: "gamer",
        image: "https://cf.shopee.com.br/file/br-11134207-7qukw-lh3j3j3j3j3j3j", 
        link: "LINK_FONE"
    },
    {
        id: "03",
        name: "Kit LED RGB Wi-Fi",
        price: "R$ 35,00",
        category: "home",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-led123", 
        link: "LINK_LED"
    }
];

// ==========================================
// 🚀 LÓGICA DO SISTEMA
// ==========================================

// 1. SISTEMA DE LOADING (Destrava a tela inicial)
document.addEventListener("DOMContentLoaded", () => {
    // Renderiza os produtos primeiro
    renderProducts(products);
    
    // Inicia os sistemas falsos (Toast e Contador)
    initFakeSystem();

    // Remove a tela de carregamento após 1.5s
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1500);
});

// 2. RENDERIZADOR DE PRODUTOS
const grid = document.getElementById('product-grid');
const noResults = document.getElementById('no-results');

function renderProducts(items) {
    grid.innerHTML = ''; // Limpa a grade
    
    // Se não tiver produtos, mostra mensagem de erro
    if (items.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } 
    noResults.classList.add('hidden');

    items.forEach(product => {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = "_blank";
        // Classes do Card (Tailwind)
        card.className = "product-card group relative bg-nwave-card border border-white/5 rounded-2xl overflow-hidden hover:border-nwave-cyan/50 transition-all duration-300 hover:-translate-y-1 block";
        
        // HTML DO CARD (Com as Estrelas Novas)
        card.innerHTML = `
            <div class="relative w-full aspect-square bg-gray-900 overflow-hidden">
                <span class="absolute top-2 left-2 z-10 bg-black/80 backdrop-blur-md text-nwave-cyan border border-white/10 text-[10px] font-bold px-2 py-1 rounded-md">#${product.id}</span>
                
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='https://placehold.co/400x400/111/FFF?text=N+WAVE'">
                
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div class="p-4 flex flex-col h-[125px] justify-between">
                <div>
                    <h3 class="text-sm text-gray-200 font-medium leading-snug line-clamp-2 group-hover:text-white transition-colors">${product.name}</h3>
                    
                    <div class="mt-2 flex items-center gap-1">
                        <div class="flex text-yellow-400 text-[10px] tracking-tighter">★★★★★</div>
                        <span class="text-[10px] text-gray-500 font-medium">(4.9)</span>
                    </div>
                </div>

                <div class="flex items-center justify-between mt-2">
                    <span class="text-base font-bold text-white">${product.price}</span>
                    <span class="w-8 h-8 rounded-full bg-nwave-cyan text-black flex items-center justify-center font-bold text-xs opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">➔</span>
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
// 4. SISTEMA DE PROVA SOCIAL (TURBINADO)
function initFakeSystem() {
    // A. Contador de Pessoas Online (Oscilação Natural)
    const counter = document.getElementById('live-counter');
    if (counter) {
        setInterval(() => {
            let current = parseInt(counter.innerText);
            // Oscila entre subir e descer para parecer tráfego real
            let change = Math.random() > 0.5 ? Math.floor(Math.random() * 4) : -Math.floor(Math.random() * 3);
            let result = current + change;
            if (result < 700) result = 750; // Nunca deixa cair muito
            counter.innerText = result;
        }, 5000); // Atualiza a cada 5 segundos
    }

    // B. Base de Dados Fake (Gigante para não repetir)
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

        // Escolhe dados aleatórios
        const rName = names[Math.floor(Math.random() * names.length)];
        const rCity = cities[Math.floor(Math.random() * cities.length)];
        const rTime = times[Math.floor(Math.random() * times.length)];
        
        // Escolhe um produto aleatório da sua lista real
        const rProd = products[Math.floor(Math.random() * products.length)];
        
        // Monta a mensagem: "Mariana de Campinas - SP"
        const nameEl = document.getElementById('toast-name');
        const prodEl = document.getElementById('toast-product');
        const imgEl = document.getElementById('toast-img');

        if (nameEl) nameEl.innerText = `${rName} de ${rCity} ${rTime}`;
        if (prodEl) prodEl.innerText = rProd.name.substring(0, 20) + "..."; // Corta nome longo
        
        // Avatar aleatório (opcional, para variar rostos)
        if (imgEl) imgEl.src = `https://ui-avatars.com/api/?name=${rName}&background=random&color=fff`;

        // Animação de Entrada
        toast.classList.remove('translate-y-[200%]');
        
        // Animação de Saída (Fica 5 segundos na tela)
        setTimeout(() => {
            toast.classList.add('translate-y-[200%]');
        }, 5000);
    }

    // Loop Inteligente (Intervalo variável entre 15s e 40s)
    // Para não ficar pipocando toda hora na cara do cliente
    (function loop() {
        const rand = Math.round(Math.random() * (40000 - 15000)) + 15000;
        setTimeout(() => {
            showToast();
            loop();
        }, rand);
    }());
}