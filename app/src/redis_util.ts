import * as redis from 'redis';
import { promisify } from 'util';

const redisClient = redis.createClient({
    host: process.env.REDIS_HOST || 'redis',
    port: 6379,
});

const getAsyncRaw = promisify(redisClient.get);
export const getRedisAsync = getAsyncRaw.bind(redisClient) as typeof getAsyncRaw;
const setAsyncRaw = promisify(redisClient.set);
export const setRedisAsync = setAsyncRaw.bind(redisClient) as typeof setAsyncRaw;
