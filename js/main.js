// ==========================================
// 🛠️ 1. UTILITÁRIOS
// ==========================================
function escapeHTML(str) {
    if (!str) return '';
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
}

// ==========================================
// 🚀 2. LÓGICA DO SISTEMA
// ==========================================
let allProducts = []; 

async function init() {
    try {
        // --- 🧹 FAXINA: REMOVE O NÚMERO FAKE 1.434 DA MEMÓRIA ---
        localStorage.removeItem('fake_visits'); 
        localStorage.removeItem('visited_v1');
        // ---------------------------------------------------------

        const response = await fetch('products.json'); 
        if (!response.ok) throw new Error("Erro ao carregar JSON");
        
        allProducts = await response.json();
        renderProducts(allProducts);
        
        // Chama a contagem REAL
        carregarVisitasReais();

        setupSearch('search-input');
        setupSearch('search-input-mobile');

    } catch (error) {
        console.error("Erro crítico:", error);
    }
}

// ==========================================
// 📊 3. SISTEMA DE VISITAS (100% REAL)
// ==========================================
async function carregarVisitasReais() {
    // O ID no seu HTML é 'total-visits', tem que ser igual aqui
    const el = document.getElementById('total-visits');
    if (!el) return;

    // Reseta para traço enquanto carrega (some com o 1.434 imediatamente)
    el.innerText = "--";

    // Chama sua API real
    try {
        // Adiciona timestamp para evitar cache do navegador
        const url = `/api/v1/visits?t=${new Date().getTime()}`;
        const res = await fetch(url);
        
        if (!res.ok) throw new Error('API Offline');
        
        const data = await res.json();
        
        // MOSTRA SOMENTE O DADO REAL DO SERVIDOR
        // Se o servidor disser 5, mostra 5.
        el.innerText = parseInt(data.visits || 0).toLocaleString('pt-BR');

    } catch(e) {
        console.warn("Contador indisponível, mantendo limpo:", e);
        el.innerText = "--"; // Se der erro, mostra traço, não mente.
    }
}

// ==========================================
// 📦 4. RENDERIZAÇÃO E BUSCA
// ==========================================
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;
    grid.innerHTML = ''; 

    if (items.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-20 text-gray-500">Nenhum produto encontrado.</div>';
        return;
    }

    items.forEach(p => {
        const store = (p.store || 'shopee').toLowerCase();
        let btnInfo = { class: "bg-orange-500 hover:bg-orange-600 text-white", text: "Ver na Shopee", icon: '<i class="fa-solid fa-cart-shopping"></i>' };

        if(store === 'amazon') btnInfo = { class: "bg-slate-900 hover:bg-black text-white", text: "Ver na Amazon", icon: '<i class="fa-brands fa-amazon"></i>' };
        else if (store === 'mercadolivre') btnInfo = { class: "bg-yellow-400 hover:bg-yellow-500 text-blue-900", text: "Ver no Mercado Livre", icon: '<i class="fa-solid fa-handshake"></i>' };

        const rating = parseFloat(p.rating) || 4.5;
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) starsHtml += (i <= rating) ? '<i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>' : '<i class="fa-regular fa-star text-gray-300 text-[10px]"></i>';

        const badge = (p.sales && (p.sales.includes('vendidos') || p.sales.includes('+'))) ? '<div class="absolute top-0 left-0 bg-accent text-brand font-bold text-[10px] px-2 py-1 z-10 shadow-sm uppercase tracking-wider">Mais Vendido</div>' : '';

        grid.innerHTML += `
        <div class="bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-xl hover:-translate-y-1 transition duration-300 group cursor-pointer flex flex-col justify-between h-full relative overflow-hidden">
            ${badge}
            <a href="${p.link}" target="_blank" class="block h-full flex flex-col justify-between">
                <div class="h-40 md:h-48 flex items-center justify-center mb-4 relative bg-white">
                    <img src="${p.image}" class="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition duration-500" alt="${escapeHTML(p.name)}" loading="lazy">
                </div>
                <div>
                    <h3 class="text-xs md:text-sm text-gray-700 font-medium leading-tight mb-2 line-clamp-2 group-hover:text-blue-700 group-hover:underline h-8 md:h-10">${escapeHTML(p.name)}</h3>
                    <div class="flex items-center gap-1 mb-2">
                        <div class="flex">${starsHtml}</div>
                        <span class="text-[10px] text-gray-400 hidden md:inline">(${p.reviews ? p.reviews.replace('reviews', '') : '10'})</span>
                    </div>
                    <div class="mb-3 price-container text-sm md:text-base">${p.price}</div>
                    <button class="w-full ${btnInfo.class} font-bold py-2 rounded text-xs md:text-sm transition shadow-sm mt-auto flex items-center justify-center gap-2">
                        ${btnInfo.text} ${btnInfo.icon}
                    </button>
                </div>
            </a>
        </div>`;
    });
}

function setupSearch(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.addEventListener('keyup', debounce((e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allProducts.filter(p => p.name.toLowerCase().includes(term) || p.id.includes(term));
        renderProducts(filtered);
    }, 300));
}

window.carregarProdutos = function(category) {
    category === 'todos' ? renderProducts(allProducts) : renderProducts(allProducts.filter(p => p.category === category));
};

document.addEventListener("DOMContentLoaded", init);