import { alertForBlocks } from "./alert";

const STARTING_BLOCK = 8036185;
const ENDING_BLOCK = 8036190;

const go = async () => {
  await alertForBlocks(STARTING_BLOCK, ENDING_BLOCK);
};

go().then(() => {
  process.exit();
});
