import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge',
};

const redis = Redis.fromEnv();

export default async function handler(req) {
  const url = new URL(req.url);
  const isNew = url.searchParams.get('new') === 'true';

  // Se for visita nova (não tem pulseirinha), incrementa +1
  if (isNew) {
    await redis.incr('site_total_visits');
  }

  // Pega o total atual
  let total = await redis.get('site_total_visits');
  
  // Se não tiver nada, começa com a base histórica de 1420
  if (!total) {
      total = 1420;
      await redis.set('site_total_visits', total);
  }

  return new Response(JSON.stringify({ visits: total }), {
    status: 200,
    headers: { 
        'content-type': 'application/json',
        'Cache-Control': 'no-store' 
    },
  });
}