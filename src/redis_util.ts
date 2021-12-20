import { config } from "./config";
import * as redis from "redis";
import { promisify } from "util";

const redisClient = redis.createClient({ url: config.redisUri });

const getAsyncRaw = promisify(redisClient.get);
export const getRedisAsync = getAsyncRaw.bind(
  redisClient
) as typeof getAsyncRaw;
const setAsyncRaw = promisify(redisClient.set);
export const setRedisAsync = setAsyncRaw.bind(
  redisClient
) as typeof setAsyncRaw;
