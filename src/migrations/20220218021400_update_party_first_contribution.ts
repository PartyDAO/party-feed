import { getAllPartyAddressesWithContributions } from "../fetchers";
import { getHaveAlertedAboutNewPartyCacheKey } from "../redis_key_util";
import { setRedisAsync } from "../redis_util";
import { setHaveAlertedAboutNewParty } from "../party_events";

/**
 * forward migration - set redis to "true" for all parties that have a contribution from
 * someone that is not the party creator
 */
export const up = async () => {
  console.log("starting up migration - set new party with contribution");
  const partyAddressWithContributions = await getAllPartyAddressesWithContributions();

  for (let i = 0; i < partyAddressWithContributions.length; i++) {
    const partyAddress = partyAddressWithContributions[i];
    console.info(`setting new party with contribution ${partyAddress} to true`);
    await setHaveAlertedAboutNewParty(partyAddress);
  }

  console.log("finished up migration");
};

/**
 * opposite of up - set redis to "false" for all parties that have a contribution from
 * someone that is not the party creator
 */
export const down = async () => {
  console.log("starting down migration - unset new party with contribution");
  const partyAddressWithContributions = await getAllPartyAddressesWithContributions();

  for (let i = 0; i < partyAddressWithContributions.length; i++) {
    const partyAddress = partyAddressWithContributions[i];
    const key = getHaveAlertedAboutNewPartyCacheKey(partyAddress);
    console.info(
      `setting new party with contribution ${partyAddress} to false`
    );
    await setRedisAsync(key, "false");
  }

  console.log("finished down migration");
};
