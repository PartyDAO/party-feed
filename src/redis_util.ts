import * as redis from "redis";
import { promisify } from "util";

console.log("infura", process.env.INFURA_ID);
console.log("host", process.env.REDIS_HOST);
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || "redis",
  port: 6379,
});

const getAsyncRaw = promisify(redisClient.get);
export const getRedisAsync = getAsyncRaw.bind(
  redisClient
) as typeof getAsyncRaw;
const setAsyncRaw = promisify(redisClient.set);
export const setRedisAsync = setAsyncRaw.bind(
  redisClient
) as typeof setAsyncRaw;
