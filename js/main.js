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
let allProducts = []; // Armazena os produtos carregados do JSON

// Função Principal de Inicialização
async function init() {
    try {
        // Carrega os dados do arquivo JSON
        const response = await fetch('products.json');
        if (!response.ok) throw new Error("Erro ao carregar JSON");
        
        allProducts = await response.json();
        
        // Renderiza todos os produtos inicialmente
        renderProducts(allProducts);
        
        // Inicia o contador de visitas
        initFakeSystem();

        // Configura a Busca (Desktop e Mobile)
        setupSearch('search-input');
        setupSearch('search-input-mobile');

    } catch (error) {
        console.error("Erro crítico:", error);
        const grid = document.getElementById('product-grid');
        if(grid) grid.innerHTML = '<div class="col-span-full text-center text-red-500 py-10">Erro ao carregar produtos. Tente recarregar a página.</div>';
    }
}

// Função de Renderização (Cria o HTML)
function renderProducts(items) {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = ''; 

    if (items.length === 0) {
        grid.innerHTML = '<div class="col-span-full text-center py-20 text-gray-500">Nenhum produto encontrado.</div>';
        return;
    }

    items.forEach(p => {
        // Lógica dos Botões (Shopee, Amazon, etc)
        const store = (p.store || 'shopee').toLowerCase();
        let btnClass = "bg-orange-500 hover:bg-orange-600 text-white";
        let btnText = "Ver na Shopee";
        let btnIcon = '<i class="fa-solid fa-cart-shopping"></i>';

        if(store === 'amazon') {
            btnClass = "bg-slate-900 hover:bg-black text-white";
            btnText = "Ver na Amazon";
            btnIcon = '<i class="fa-brands fa-amazon"></i>';
        } else if (store === 'mercadolivre') {
            btnClass = "bg-yellow-400 hover:bg-yellow-500 text-blue-900";
            btnText = "Ver no Mercado Livre";
            btnIcon = '<i class="fa-solid fa-handshake"></i>';
        }

        // Lógica das Estrelas
        const rating = parseFloat(p.rating) || 4.5;
        let starsHtml = '';
        for (let i = 1; i <= 5; i++) {
            starsHtml += (i <= rating) 
                ? '<i class="fa-solid fa-star text-yellow-400 text-[10px]"></i>' 
                : '<i class="fa-regular fa-star text-gray-300 text-[10px]"></i>';
        }

        // Tag de Destaque
        const badge = (p.sales && (p.sales.toLowerCase().includes('vendidos') || p.sales.includes('+'))) 
            ? '<div class="absolute top-0 left-0 bg-accent text-brand font-bold text-[10px] px-2 py-1 z-10 shadow-sm uppercase tracking-wider">Mais Vendido</div>' 
            : '';

        // Template do Card
        const card = `
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
                    <button class="w-full ${btnClass} font-bold py-2 rounded text-xs md:text-sm transition shadow-sm mt-auto flex items-center justify-center gap-2">
                        ${btnText} ${btnIcon}
                    </button>
                </div>
            </a>
        </div>`;
        
        grid.innerHTML += card;
    });
}

// Configuração da Busca
function setupSearch(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('keyup', debounce((e) => {
        const term = e.target.value.toLowerCase();
        const filtered = allProducts.filter(p => 
            p.name.toLowerCase().includes(term) || 
            p.id.includes(term)
        );
        renderProducts(filtered);
    }, 300));
}

// Filtro por Categoria (Chamado pelos botões do HTML)
window.carregarProdutos = function(category) {
    if (category === 'todos') {
        renderProducts(allProducts);
    } else {
        const filtered = allProducts.filter(p => p.category === category);
        renderProducts(filtered);
    }
};

// Contador de Visitas Falso (Melhor experiência visual)
function initFakeSystem() {
    const counter = document.getElementById('total-visits');
    if (counter) {
        // Tenta pegar do localStorage ou inicia com 14.502
        let visits = parseInt(localStorage.getItem('fake_visits')) || 14502;
        
        // Atualiza na tela
        counter.innerText = visits.toLocaleString('pt-BR');

        // Incrementa aleatoriamente a cada 5-10 segundos
        setInterval(() => {
            visits += Math.floor(Math.random() * 3) + 1;
            localStorage.setItem('fake_visits', visits);
            counter.innerText = visits.toLocaleString('pt-BR');
        }, 8000);
    }
}

// Inicia tudo quando a página carregar
document.addEventListener("DOMContentLoaded", init);