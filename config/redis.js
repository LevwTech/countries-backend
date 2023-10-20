const Redis = require('ioredis');
const { createClient } = require('redis');
let redis;
if (process.env.ENV === 'dev') {
  redis = new Redis(process.env.REDIS_URL);
} else {
  redis = createClient({
    password: process.env.REDIS_PW,
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  });
  (async () => {
    await redis.connect();
  })();
}

module.exports = redis;
