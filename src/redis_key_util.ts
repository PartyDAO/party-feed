export const getHaveAlertedAboutNewPartyCacheKey = (
  partyAddress: string
): string => `new_party_with_contribution_${partyAddress}`;

export const getHaveAlertedAboutPartyHalfwayCacheKey = (
  partyAddress: string
): string => `party_halfway_contribution_${partyAddress}`;
