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
        localStorage.removeItem('fake_visits'); 
        localStorage.removeItem('site_total_visits'); // Garantia extra

        ativarProtecaoSite();

        // 1. Carrega Produtos
        const response = await fetch('products.json'); 
        if (!response.ok) throw new Error("Erro ao carregar JSON");
        
        allProducts = await response.json();
        renderProducts(allProducts);
        
        // 2. Chama a contagem REAL (e limpa o texto antes)
        carregarVisitasReais();

        // 3. Configura busca
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
    const el = document.getElementById('total-visits');
    if (!el) return;

    // PASSO 1: Reseta visualmente para garantir que o 1.434 suma
    el.innerText = "--"; 

    // Lógica para contar visita nova apenas 1 vez por sessão
    const jaVisitou = sessionStorage.getItem('sessao_contabilizada');
    let url = '/api/v1/visits';
    
    if (!jaVisitou) {
        url += '?new=true';
    }

    try {
        // Adiciona timestamp para o navegador não usar cache antigo
        const res = await fetch(`${url}&t=${Date.now()}`);
        
        if (!res.ok) throw new Error('API Offline ou sem Redis configurado');
        
        const data = await res.json();
        
        if (!jaVisitou) {
            sessionStorage.setItem('sessao_contabilizada', 'true');
        }

        // PASSO 2: Mostra O QUE O SERVIDOR MANDAR.
        // Se o servidor (Redis) disser 0, mostra 0.
        // Se o servidor disser 1421, mostra 1421.
        el.innerText = parseInt(data.visits || 0).toLocaleString('pt-BR');

    } catch(e) {
        console.warn("API de visitas falhou (provavelmente sem Redis):", e);
        // Se der erro, mostra traço. É melhor que mentir.
        el.innerText = "--"; 
    }
}

// ==========================================
// 📦 4. RENDERIZAÇÃO
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

// ==========================================
// 🚫 4. PROTEÇÃO CONTRA CÓPIA (ANTI-KIBE)
// ==========================================
function ativarProtecaoSite() {
    // 1. Bloqueia Botão Direito do Mouse
    document.addEventListener('contextmenu', event => event.preventDefault());

    // 2. Bloqueia Arrastar Imagens (para não salvarem fácil)
    document.querySelectorAll('img').forEach(img => {
        img.setAttribute('draggable', 'false');
        img.addEventListener('dragstart', e => e.preventDefault());
    });

    // 3. Bloqueia Atalhos de Desenvolvedor (F12, Ctrl+U, etc)
    document.onkeydown = function(e) {
        if (e.keyCode == 123) return false; // F12
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; // Ctrl+Shift+I
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; // Ctrl+U (Ver Fonte)
        if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false; // Ctrl+S (Salvar)
        if (e.ctrlKey && e.keyCode == 'C'.charCodeAt(0)) return false; // Ctrl+C (Copiar Texto)
    };

    // 4. CSS Injetado para bloquear seleção de texto
    const style = document.createElement('style');
    style.innerHTML = `
        body { 
            -webkit-user-select: none; /* Safari */
            -moz-user-select: none; /* Firefox */
            -ms-user-select: none; /* IE10+/Edge */
            user-select: none; /* Padrão */
        }
        /* Permite digitar na busca, senão o site quebra */
        input, textarea { user-select: text !important; } 
    `;
    document.head.appendChild(style);

    console.log("🛡️ Proteção Ativada.");
}