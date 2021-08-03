import { ethersProvider } from './ethereum';
import {getRedisAsync, setRedisAsync} from './redis_util';

const KEY_NAME = 'last_block';

export const getLastBlockAlerted = async (): Promise<number | undefined> => {
    const foundVal = await getRedisAsync(KEY_NAME);
    if (!foundVal) {
        return undefined;
    }
    return parseInt(foundVal);
}

export const setLastBlockAlerted = async (blockNumber: number) => {
    await setRedisAsync(KEY_NAME, blockNumber.toString());
}

export const getAppropriateEndingBlock = async (): Promise<number> => {
    const mostRecentBlock = await ethersProvider.getBlock('latest');
    const mostRecentBlockNumber = mostRecentBlock.number;
    const lastBlockAlerted = await getLastBlockAlerted();
    if (!lastBlockAlerted) {
        throw new Error(`No last block alerted`);
    }
    
    const numBlocksAhead = mostRecentBlockNumber - lastBlockAlerted;
    
    if (numBlocksAhead > 300) {
        // at most fetch 300 blocks ahed
        const res = lastBlockAlerted + 300;
        console.warn(`Only advancing 300 blocks`, {res, numBlocksAhead, lastBlockAlerted, mostRecentBlockNumber});
        return res;
    } else {
        console.info(`Advancing to ${mostRecentBlockNumber}`);
        return mostRecentBlockNumber;
    }
}