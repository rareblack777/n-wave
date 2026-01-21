import json
import os

# --- A CURADORIA SNIPER (TOP 50 VIRAIS 2026) ---
# Selecionados manualmente por potencial de viralização e venda.
curadoria_sniper = [
    # --- HOME HACKS ---
    {"id": "01", "name": "Mini Impressora Térmica Gatinho", "price": "R$ 116,35", "oldPrice": "R$ 179,00", "category": "tech", "sales": "+5mil vendidos"},
    {"id": "02", "name": "Mini MOP Esfregão Portátil", "price": "R$ 18,99", "oldPrice": "R$ 29,90", "category": "home", "sales": "+10mil vendidos"},
    {"id": "03", "name": "Escova de Limpeza Elétrica 5 em 1", "price": "R$ 39,90", "oldPrice": "R$ 89,90", "category": "home", "sales": "Viral TikTok"},
    {"id": "04", "name": "Luz LED com Sensor de Presença", "price": "R$ 14,90", "oldPrice": "R$ 35,00", "category": "home", "sales": "+2mil vendidos"},
    {"id": "05", "name": "Umidificador Anti-Gravidade", "price": "R$ 75,00", "oldPrice": "R$ 150,00", "category": "home", "sales": "Tendência"},
    {"id": "06", "name": "Mini Seladora de Embalagens", "price": "R$ 19,90", "oldPrice": "R$ 39,90", "category": "home", "sales": "+30mil vendidos"},
    {"id": "07", "name": "Tira Pelos Elétrico de Roupas", "price": "R$ 45,00", "oldPrice": "R$ 70,00", "category": "home", "sales": "+1mil vendidos"},
    {"id": "08", "name": "Dispensador Automático Pasta de Dente", "price": "R$ 29,90", "oldPrice": "R$ 59,90", "category": "home", "sales": "Utilidade"},
    {"id": "09", "name": "Rodo Mágico Limpa Vidros Magnético", "price": "R$ 55,00", "oldPrice": "R$ 120,00", "category": "home", "sales": "Alta Procura"},
    {"id": "10", "name": "Fita Nano Grip Dupla Face", "price": "R$ 12,90", "oldPrice": "R$ 25,00", "category": "home", "sales": "+50mil vendidos"},
    {"id": "11", "name": "Tapete Super Absorvente", "price": "R$ 29,90", "oldPrice": "R$ 60,00", "category": "home", "sales": "Secagem Rápida"},
    {"id": "12", "name": "Saco à Vácuo para Roupas", "price": "R$ 15,90", "oldPrice": "R$ 30,00", "category": "home", "sales": "Organização"},
    
    # --- COZINHA ---
    {"id": "13", "name": "Mini Processador de Alimentos USB", "price": "R$ 29,90", "oldPrice": "R$ 60,00", "category": "home", "sales": "+100mil vendidos"},
    {"id": "14", "name": "Liquidificador Portátil Fresh Juice", "price": "R$ 59,90", "oldPrice": "R$ 120,00", "category": "home", "sales": "Sucesso"},
    {"id": "15", "name": "Dispensador de Óleo Spray", "price": "R$ 19,90", "oldPrice": "R$ 40,00", "category": "home", "sales": "Essencial Airfryer"},
    {"id": "16", "name": "Copo Térmico com Medidor Digital", "price": "R$ 35,00", "oldPrice": "R$ 70,00", "category": "home", "sales": "Novidade"},
    {"id": "17", "name": "Afiador de Facas 3 Estágios", "price": "R$ 25,00", "oldPrice": "R$ 50,00", "category": "home", "sales": "+5mil vendidos"},
    {"id": "18", "name": "Máquina de Fazer Dumpling/Pastel", "price": "R$ 39,90", "oldPrice": "R$ 80,00", "category": "home", "sales": "Viral Cozinha"},
    {"id": "19", "name": "Forma de Gelo One Press", "price": "R$ 49,90", "oldPrice": "R$ 99,00", "category": "home", "sales": "Praticidade"},
    {"id": "20", "name": "Mini Balança Digital de Precisão", "price": "R$ 19,90", "oldPrice": "R$ 40,00", "category": "home", "sales": "+10mil vendidos"},
    {"id": "21", "name": "Cortador de Legumes Mandoline", "price": "R$ 45,00", "oldPrice": "R$ 90,00", "category": "home", "sales": "Masterchef"},
    {"id": "22", "name": "Tampas de Silicone Extensíveis", "price": "R$ 15,90", "oldPrice": "R$ 30,00", "category": "home", "sales": "Eco Friendly"},
    {"id": "23", "name": "Espremedor de Alho Inox Rocker", "price": "R$ 18,90", "oldPrice": "R$ 35,00", "category": "home", "sales": "Fácil Uso"},
    {"id": "24", "name": "Caneca Mixer Magnética Automática", "price": "R$ 45,00", "oldPrice": "R$ 90,00", "category": "home", "sales": "Café Tech"},

    # --- TECH & GAMER ---
    {"id": "25", "name": "Console Portátil R36S (+15k Jogos)", "price": "R$ 184,99", "oldPrice": "R$ 450,00", "category": "gamer", "sales": "Top 1 Gamer"},
    {"id": "26", "name": "Projetor Smart HY300 4K", "price": "R$ 280,00", "oldPrice": "R$ 600,00", "category": "tech", "sales": "Cinema em Casa"},
    {"id": "27", "name": "Fone Ear Clip (Brinco)", "price": "R$ 69,00", "oldPrice": "R$ 150,00", "category": "tech", "sales": "Futurista"},
    {"id": "28", "name": "Luminária G-Speaker RGB", "price": "R$ 55,00", "oldPrice": "R$ 120,00", "category": "tech", "sales": "Decoração"},
    {"id": "29", "name": "Teclado Mecânico Gamer K500", "price": "R$ 199,00", "oldPrice": "R$ 300,00", "category": "gamer", "sales": "Custo Benefício"},
    {"id": "30", "name": "Power Bank Transparente", "price": "R$ 89,00", "oldPrice": "R$ 180,00", "category": "tech", "sales": "Cyberpunk"},
    {"id": "31", "name": "Ventilador de Pescoço", "price": "R$ 39,90", "oldPrice": "R$ 80,00", "category": "tech", "sales": "Verão"},
    {"id": "32", "name": "Microfone de Lapela Wireless", "price": "R$ 49,90", "oldPrice": "R$ 100,00", "category": "tech", "sales": "Creators"},
    {"id": "33", "name": "Kit Limpeza de Teclado", "price": "R$ 25,00", "oldPrice": "R$ 50,00", "category": "tech", "sales": "Satisfatório"},
    {"id": "34", "name": "Mousepad Gamer RGB Extra Grande", "price": "R$ 59,90", "oldPrice": "R$ 120,00", "category": "gamer", "sales": "Setup"},
    {"id": "35", "name": "Suporte Celular Rastreamento Facial", "price": "R$ 79,90", "oldPrice": "R$ 160,00", "category": "tech", "sales": "Live"},
    {"id": "36", "name": "Adaptador Bluetooth Veicular", "price": "R$ 15,00", "oldPrice": "R$ 30,00", "category": "tech", "sales": "Carro Smart"},
    
    # --- LIFESTYLE ---
    {"id": "37", "name": "Massageador de Pescoço EMS", "price": "R$ 29,90", "oldPrice": "R$ 60,00", "category": "home", "sales": "Relax"},
    {"id": "38", "name": "Corretor Postural Inteligente", "price": "R$ 45,00", "oldPrice": "R$ 90,00", "category": "home", "sales": "Saúde"},
    {"id": "39", "name": "Sunset Lamp (Lâmpada Pôr do Sol)", "price": "R$ 25,00", "oldPrice": "R$ 50,00", "category": "home", "sales": "Fotos"},
    {"id": "40", "name": "Mini Barbeador Elétrico", "price": "R$ 35,00", "oldPrice": "R$ 70,00", "category": "tech", "sales": "Portátil"},
    {"id": "41", "name": "Depilador de Cristal", "price": "R$ 19,90", "oldPrice": "R$ 40,00", "category": "home", "sales": "Sem Dor"},
    {"id": "42", "name": "Espelho LED Maquiagem", "price": "R$ 39,90", "oldPrice": "R$ 80,00", "category": "home", "sales": "Beleza"},
    {"id": "43", "name": "Tapete Massageador de Pés", "price": "R$ 29,90", "oldPrice": "R$ 60,00", "category": "home", "sales": "Alívio"},
    
    # --- AUTO ---
    {"id": "44", "name": "Aspirador Portátil Carro", "price": "R$ 49,90", "oldPrice": "R$ 100,00", "category": "tech", "sales": "Potente"},
    {"id": "45", "name": "Suporte Celular Gravitacional", "price": "R$ 19,90", "oldPrice": "R$ 40,00", "category": "tech", "sales": "Carro"},
    {"id": "46", "name": "Lixeira Carro Impermeável", "price": "R$ 25,00", "oldPrice": "R$ 50,00", "category": "home", "sales": "Organização"},
    {"id": "47", "name": "Cristalizador de Vidros Spray", "price": "R$ 29,90", "oldPrice": "R$ 60,00", "category": "home", "sales": "Chuva"},
    {"id": "48", "name": "LED Neon Painel Carro", "price": "R$ 35,00", "oldPrice": "R$ 70,00", "category": "tech", "sales": "Tuning"},
    {"id": "49", "name": "Organizador Banco Traseiro", "price": "R$ 39,90", "oldPrice": "R$ 80,00", "category": "home", "sales": "Família"},
    {"id": "50", "name": "Som Automotivo Bluetooth", "price": "R$ 69,90", "oldPrice": "R$ 140,00", "category": "tech", "sales": "Básico"}
]

# Função para gerar JSON compatível com o site
def gerar_products_json():
    lista_site = []
    
    for item in curadoria_sniper:
        # Link provisório de busca (Tapa-Buraco inteligente)
        busca_url = f"https://shopee.com.br/search?keyword={item['name'].replace(' ', '+')}"
        
        # Preço HTML formatado
        preco_html = f'<span class="text-[10px] text-gray-500 line-through mr-1">{item["oldPrice"]}</span> {item["price"]} <span class="text-[10px] text-green-400 ml-1">OFERTA</span>'
        
        # Imagem Genérica (Placeholders de alta qualidade por categoria)
        img_url = "https://placehold.co/400x400/png?text=FOTO+PRODUTO"
        if item['category'] == 'tech': img_url = "https://cdn-icons-png.flaticon.com/512/3067/3067260.png"
        if item['category'] == 'gamer': img_url = "https://cdn-icons-png.flaticon.com/512/3408/3408506.png"
        if item['category'] == 'home': img_url = "https://cdn-icons-png.flaticon.com/512/3081/3081840.png"
        
        produto_site = {
            "id": item["id"],
            "name": item["name"],
            "price": preco_html,
            "category": item["category"],
            "image": img_url,  # Você terá que trocar pelas fotos reais depois
            "link": busca_url, # Você terá que trocar pelo seu link de afiliado
            "sales": item["sales"],
            "rating": "4.8",
            "reviews": "100 reviews"
        }
        lista_site.append(produto_site)

    with open("products.json", "w", encoding="utf-8") as f:
        json.dump(lista_site, f, indent=4, ensure_ascii=False)
    print("✅ products.json gerado com 50 itens Sniper!")

# Função para gerar script da fábrica de vídeos
def gerar_alimentar_fabrica():
    conteudo = """import os
import re

# --- TOP 50 PRODUTOS VIRAIS (BASE N WAVE) ---
produtos = [
"""
    for item in curadoria_sniper:
        conteudo += f'    {{"id": "{item["id"]}", "name": "{item["name"]}", "category": "{item["category"]}"}},\n'

    conteudo += """]

PASTA_INPUT = "input"

def limpar_nome_pasta(nome):
    nome = re.sub(r'[<>:"/\\\\|?*]', '', nome)
    return nome.replace(" ", "_").lower()

def criar_copywriting(produto):
    nome = produto['name']
    if produto['category'] == 'gamer':
        return f\"\"\"
Galera, esse {nome} é o sonho de consumo!
Quem curte jogar sabe que isso faz toda a diferença.
Ta todo mundo falando desse item no TikTok.
Não perde a chance de upar seu setup.
Link com desconto ta na bio, corre!
        \"\"\".strip()
        
    elif produto['category'] == 'home':
        return f\"\"\"
Gente, descobri esse {nome} e to chocada!
Facilita demais a vida em casa.
Não sei como eu vivi sem isso antes.
Corre pra garantir o seu antes que acabe.
O link oficial ta na bio!
        \"\"\".strip()
        
    else: 
        return f\"\"\"
Olha esse {nome} que achei na Shopee!
É muito útil e ta com um preço incrível.
A qualidade é surpreendente.
Clica no link da bio pra ver mais detalhes.
        \"\"\".strip()

def main():
    if not os.path.exists(PASTA_INPUT):
        os.makedirs(PASTA_INPUT)
    print(f"🚀 Criando pastas para {len(produtos)} produtos...")

    for p in produtos:
        nome_pasta = f"{p['id']}_{limpar_nome_pasta(p['name'])}"
        caminho_pasta = os.path.join(PASTA_INPUT, nome_pasta)
        
        if not os.path.exists(caminho_pasta):
            os.makedirs(caminho_pasta)
        
        caminho_roteiro = os.path.join(caminho_pasta, "roteiro.txt")
        with open(caminho_roteiro, "w", encoding="utf-8") as f:
            f.write(criar_copywriting(p))
                
    print("✅ Pastas e Roteiros criados!")

if __name__ == "__main__":
    main()
"""
    with open("alimentar_fabrica.py", "w", encoding="utf-8") as f:
        f.write(conteudo)
    print("✅ alimentar_fabrica.py atualizado com os 50 itens!")

if __name__ == "__main__":
    gerar_products_json()
    gerar_alimentar_fabrica()