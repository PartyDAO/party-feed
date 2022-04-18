export const getHaveAlertedAboutNewPartyCacheKey = (
  partyAddress: string
): string => `new_party_with_contribution_${partyAddress}`;

export const getHaveAlertedAboutPartyHalfwayCacheKey = (
  partyAddress: string
): string => `party_halfway_contribution_${partyAddress}`;

export const getEtherscanVerifyContractGuidKey = (
  partyAddress: string
): string => `etherscan_verify_contract_guid_${partyAddress}`;

export const getEtherscanVerifyProxyContractGuidKey = (
  partyAddress: string
): string => `etherscan_verify_proxy_contract_guid_${partyAddress}`;
