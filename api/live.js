import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge', // Roda na borda (muito mais rápido)
};

// Conecta automaticamente usando as chaves do seu .env.local
const redis = Redis.fromEnv();

export default async function handler(req) {
  // 1. Identifica o usuário pelo IP
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
  
  // 2. Registra presença: "Este IP está online". Expira em 30 segundos.
  // Se o usuário sair, em 30s o Redis apaga ele da contagem.
  await redis.set(`user:${ip}`, 'on', { ex: 30 });

  // 3. Pergunta ao banco: "Quantas chaves 'user:*' existem agora?"
  const keys = await redis.keys('user:*');
  const count = keys.length;

  // 4. Retorna o número real
  return new Response(JSON.stringify({ online: count }), {
    status: 200,
    headers: { 'content-type': 'application/json' },
  });
}