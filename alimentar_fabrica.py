import os
import re

# --- TOP 50 PRODUTOS VIRAIS (BASE N WAVE) ---
produtos = [
    {"id": "01", "name": "Mini Impressora Térmica Gatinho", "category": "tech"},
    {"id": "02", "name": "Mini MOP Esfregão Portátil", "category": "home"},
    {"id": "03", "name": "Escova de Limpeza Elétrica 5 em 1", "category": "home"},
    {"id": "04", "name": "Luz LED com Sensor de Presença", "category": "home"},
    {"id": "05", "name": "Umidificador Anti-Gravidade", "category": "home"},
    {"id": "06", "name": "Mini Seladora de Embalagens", "category": "home"},
    {"id": "07", "name": "Tira Pelos Elétrico de Roupas", "category": "home"},
    {"id": "08", "name": "Dispensador Automático Pasta de Dente", "category": "home"},
    {"id": "09", "name": "Rodo Mágico Limpa Vidros Magnético", "category": "home"},
    {"id": "10", "name": "Fita Nano Grip Dupla Face", "category": "home"},
    {"id": "11", "name": "Tapete Super Absorvente", "category": "home"},
    {"id": "12", "name": "Saco à Vácuo para Roupas", "category": "home"},
    {"id": "13", "name": "Mini Processador de Alimentos USB", "category": "home"},
    {"id": "14", "name": "Liquidificador Portátil Fresh Juice", "category": "home"},
    {"id": "15", "name": "Dispensador de Óleo Spray", "category": "home"},
    {"id": "16", "name": "Copo Térmico com Medidor Digital", "category": "home"},
    {"id": "17", "name": "Afiador de Facas 3 Estágios", "category": "home"},
    {"id": "18", "name": "Máquina de Fazer Dumpling/Pastel", "category": "home"},
    {"id": "19", "name": "Forma de Gelo One Press", "category": "home"},
    {"id": "20", "name": "Mini Balança Digital de Precisão", "category": "home"},
    {"id": "21", "name": "Cortador de Legumes Mandoline", "category": "home"},
    {"id": "22", "name": "Tampas de Silicone Extensíveis", "category": "home"},
    {"id": "23", "name": "Espremedor de Alho Inox Rocker", "category": "home"},
    {"id": "24", "name": "Caneca Mixer Magnética Automática", "category": "home"},
    {"id": "25", "name": "Console Portátil R36S (+15k Jogos)", "category": "gamer"},
    {"id": "26", "name": "Projetor Smart HY300 4K", "category": "tech"},
    {"id": "27", "name": "Fone Ear Clip (Brinco)", "category": "tech"},
    {"id": "28", "name": "Luminária G-Speaker RGB", "category": "tech"},
    {"id": "29", "name": "Teclado Mecânico Gamer K500", "category": "gamer"},
    {"id": "30", "name": "Power Bank Transparente", "category": "tech"},
    {"id": "31", "name": "Ventilador de Pescoço", "category": "tech"},
    {"id": "32", "name": "Microfone de Lapela Wireless", "category": "tech"},
    {"id": "33", "name": "Kit Limpeza de Teclado", "category": "tech"},
    {"id": "34", "name": "Mousepad Gamer RGB Extra Grande", "category": "gamer"},
    {"id": "35", "name": "Suporte Celular Rastreamento Facial", "category": "tech"},
    {"id": "36", "name": "Adaptador Bluetooth Veicular", "category": "tech"},
    {"id": "37", "name": "Massageador de Pescoço EMS", "category": "home"},
    {"id": "38", "name": "Corretor Postural Inteligente", "category": "home"},
    {"id": "39", "name": "Sunset Lamp (Lâmpada Pôr do Sol)", "category": "home"},
    {"id": "40", "name": "Mini Barbeador Elétrico", "category": "tech"},
    {"id": "41", "name": "Depilador de Cristal", "category": "home"},
    {"id": "42", "name": "Espelho LED Maquiagem", "category": "home"},
    {"id": "43", "name": "Tapete Massageador de Pés", "category": "home"},
    {"id": "44", "name": "Aspirador Portátil Carro", "category": "tech"},
    {"id": "45", "name": "Suporte Celular Gravitacional", "category": "tech"},
    {"id": "46", "name": "Lixeira Carro Impermeável", "category": "home"},
    {"id": "47", "name": "Cristalizador de Vidros Spray", "category": "home"},
    {"id": "48", "name": "LED Neon Painel Carro", "category": "tech"},
    {"id": "49", "name": "Organizador Banco Traseiro", "category": "home"},
    {"id": "50", "name": "Som Automotivo Bluetooth", "category": "tech"},
]

PASTA_INPUT = "input"

def limpar_nome_pasta(nome):
    nome = re.sub(r'[<>:"/\\|?*]', '', nome)
    return nome.replace(" ", "_").lower()

def criar_copywriting(produto):
    nome = produto['name']
    if produto['category'] == 'gamer':
        return f"""
Galera, esse {nome} é o sonho de consumo!
Quem curte jogar sabe que isso faz toda a diferença.
Ta todo mundo falando desse item no TikTok.
Não perde a chance de upar seu setup.
Link com desconto ta na bio, corre!
        """.strip()
        
    elif produto['category'] == 'home':
        return f"""
Gente, descobri esse {nome} e to chocada!
Facilita demais a vida em casa.
Não sei como eu vivi sem isso antes.
Corre pra garantir o seu antes que acabe.
O link oficial ta na bio!
        """.strip()
        
    else: 
        return f"""
Olha esse {nome} que achei na Shopee!
É muito útil e ta com um preço incrível.
A qualidade é surpreendente.
Clica no link da bio pra ver mais detalhes.
        """.strip()

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
