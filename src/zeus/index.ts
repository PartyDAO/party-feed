/* eslint-disable */

import { AllTypesProps, ReturnTypes } from "./const";
type ZEUS_INTERFACES = never;
type ZEUS_UNIONS = never;

export type ValueTypes = {
  /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
  ["Boolean_comparison_exp"]: {
    _eq?: boolean | null;
    _gt?: boolean | null;
    _gte?: boolean | null;
    _in?: boolean[];
    _is_null?: boolean | null;
    _lt?: boolean | null;
    _lte?: boolean | null;
    _neq?: boolean | null;
    _nin?: boolean[];
  };
  /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
  ["Int_comparison_exp"]: {
    _eq?: number | null;
    _gt?: number | null;
    _gte?: number | null;
    _in?: number[];
    _is_null?: boolean | null;
    _lt?: number | null;
    _lte?: number | null;
    _neq?: number | null;
    _nin?: number[];
  };
  /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
  ["String_comparison_exp"]: {
    _eq?: string | null;
    _gt?: string | null;
    _gte?: string | null;
    /** does the column match the given case-insensitive pattern */
    _ilike?: string | null;
    _in?: string[];
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: string | null;
    _is_null?: boolean | null;
    /** does the column match the given pattern */
    _like?: string | null;
    _lt?: string | null;
    _lte?: string | null;
    _neq?: string | null;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: string | null;
    _nin?: string[];
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: string | null;
    /** does the column NOT match the given pattern */
    _nlike?: string | null;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: string | null;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: string | null;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: string | null;
    /** does the column match the given SQL regular expression */
    _similar?: string | null;
  };
  /** columns and relationships of "bid" */
  ["bid"]: AliasType<{
    amount?: true;
    blockNumber?: true;
    id?: true;
    /** An object relationship */
    party?: ValueTypes["party"];
    partyAddress?: true;
    partyId?: true;
    runId?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
  ["bid_bool_exp"]: {
    _and?: ValueTypes["bid_bool_exp"][];
    _not?: ValueTypes["bid_bool_exp"] | null;
    _or?: ValueTypes["bid_bool_exp"][];
    amount?: ValueTypes["numeric_comparison_exp"] | null;
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    party?: ValueTypes["party_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyId?: ValueTypes["Int_comparison_exp"] | null;
    runId?: ValueTypes["Int_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "bid". */
  ["bid_order_by"]: {
    amount?: ValueTypes["order_by"] | null;
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    party?: ValueTypes["party_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "bid" */
  ["bid_select_column"]: bid_select_column;
  ["bigint"]: unknown;
  /** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
  ["bigint_comparison_exp"]: {
    _eq?: ValueTypes["bigint"] | null;
    _gt?: ValueTypes["bigint"] | null;
    _gte?: ValueTypes["bigint"] | null;
    _in?: ValueTypes["bigint"][];
    _is_null?: boolean | null;
    _lt?: ValueTypes["bigint"] | null;
    _lte?: ValueTypes["bigint"] | null;
    _neq?: ValueTypes["bigint"] | null;
    _nin?: ValueTypes["bigint"][];
  };
  /** columns and relationships of "block" */
  ["block"]: AliasType<{
    blockNumber?: true;
    blockTimestamp?: true;
    id?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
  ["block_bool_exp"]: {
    _and?: ValueTypes["block_bool_exp"][];
    _not?: ValueTypes["block_bool_exp"] | null;
    _or?: ValueTypes["block_bool_exp"][];
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    blockTimestamp?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "block". */
  ["block_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    blockTimestamp?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "block" */
  ["block_select_column"]: block_select_column;
  /** columns and relationships of "ens_lookup" */
  ["ens_lookup"]: AliasType<{
    address?: true;
    ensName?: true;
    fetchedAt?: true;
    found?: true;
    id?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "ens_lookup". All fields are combined with a logical 'AND'. */
  ["ens_lookup_bool_exp"]: {
    _and?: ValueTypes["ens_lookup_bool_exp"][];
    _not?: ValueTypes["ens_lookup_bool_exp"] | null;
    _or?: ValueTypes["ens_lookup_bool_exp"][];
    address?: ValueTypes["String_comparison_exp"] | null;
    ensName?: ValueTypes["String_comparison_exp"] | null;
    fetchedAt?: ValueTypes["numeric_comparison_exp"] | null;
    found?: ValueTypes["Boolean_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "ens_lookup". */
  ["ens_lookup_order_by"]: {
    address?: ValueTypes["order_by"] | null;
    ensName?: ValueTypes["order_by"] | null;
    fetchedAt?: ValueTypes["order_by"] | null;
    found?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "ens_lookup" */
  ["ens_lookup_select_column"]: ens_lookup_select_column;
  /** columns and relationships of "eth_price" */
  ["eth_price"]: AliasType<{
    fetchedAt?: true;
    id?: true;
    priceUsd?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "eth_price". All fields are combined with a logical 'AND'. */
  ["eth_price_bool_exp"]: {
    _and?: ValueTypes["eth_price_bool_exp"][];
    _not?: ValueTypes["eth_price_bool_exp"] | null;
    _or?: ValueTypes["eth_price_bool_exp"][];
    fetchedAt?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    priceUsd?: ValueTypes["numeric_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "eth_price". */
  ["eth_price_order_by"]: {
    fetchedAt?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    priceUsd?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "eth_price" */
  ["eth_price_select_column"]: eth_price_select_column;
  ["jsonb"]: unknown;
  /** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
  ["jsonb_comparison_exp"]: {
    /** is the column contained in the given json value */
    _contained_in?: ValueTypes["jsonb"] | null;
    /** does the column contain the given json value at the top level */
    _contains?: ValueTypes["jsonb"] | null;
    _eq?: ValueTypes["jsonb"] | null;
    _gt?: ValueTypes["jsonb"] | null;
    _gte?: ValueTypes["jsonb"] | null;
    /** does the string exist as a top-level key in the column */
    _has_key?: string | null;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: string[];
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: string[];
    _in?: ValueTypes["jsonb"][];
    _is_null?: boolean | null;
    _lt?: ValueTypes["jsonb"] | null;
    _lte?: ValueTypes["jsonb"] | null;
    _neq?: ValueTypes["jsonb"] | null;
    _nin?: ValueTypes["jsonb"][];
  };
  ["numeric"]: unknown;
  /** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
  ["numeric_comparison_exp"]: {
    _eq?: ValueTypes["numeric"] | null;
    _gt?: ValueTypes["numeric"] | null;
    _gte?: ValueTypes["numeric"] | null;
    _in?: ValueTypes["numeric"][];
    _is_null?: boolean | null;
    _lt?: ValueTypes["numeric"] | null;
    _lte?: ValueTypes["numeric"] | null;
    _neq?: ValueTypes["numeric"] | null;
    _nin?: ValueTypes["numeric"][];
  };
  /** columns and relationships of "open_sea_metadata" */
  ["open_sea_metadata"]: AliasType<{
    animationOriginalUrl?: true;
    animationUrl?: true;
    description?: true;
    externalLink?: true;
    id?: true;
    imageOriginalUrl?: true;
    imagePreviewUrl?: true;
    imageThumbnailUrl?: true;
    imageUrl?: true;
    name?: true;
    openSeaResponse?: [
      {
        /** JSON select path */ path?: string | null;
      },
      true
    ];
    tokenAddress?: true;
    tokenId?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "open_sea_metadata". All fields are combined with a logical 'AND'. */
  ["open_sea_metadata_bool_exp"]: {
    _and?: ValueTypes["open_sea_metadata_bool_exp"][];
    _not?: ValueTypes["open_sea_metadata_bool_exp"] | null;
    _or?: ValueTypes["open_sea_metadata_bool_exp"][];
    animationOriginalUrl?: ValueTypes["String_comparison_exp"] | null;
    animationUrl?: ValueTypes["String_comparison_exp"] | null;
    description?: ValueTypes["String_comparison_exp"] | null;
    externalLink?: ValueTypes["String_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    imageOriginalUrl?: ValueTypes["String_comparison_exp"] | null;
    imagePreviewUrl?: ValueTypes["String_comparison_exp"] | null;
    imageThumbnailUrl?: ValueTypes["String_comparison_exp"] | null;
    imageUrl?: ValueTypes["String_comparison_exp"] | null;
    name?: ValueTypes["String_comparison_exp"] | null;
    openSeaResponse?: ValueTypes["jsonb_comparison_exp"] | null;
    tokenAddress?: ValueTypes["String_comparison_exp"] | null;
    tokenId?: ValueTypes["numeric_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "open_sea_metadata". */
  ["open_sea_metadata_order_by"]: {
    animationOriginalUrl?: ValueTypes["order_by"] | null;
    animationUrl?: ValueTypes["order_by"] | null;
    description?: ValueTypes["order_by"] | null;
    externalLink?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    imageOriginalUrl?: ValueTypes["order_by"] | null;
    imagePreviewUrl?: ValueTypes["order_by"] | null;
    imageThumbnailUrl?: ValueTypes["order_by"] | null;
    imageUrl?: ValueTypes["order_by"] | null;
    name?: ValueTypes["order_by"] | null;
    openSeaResponse?: ValueTypes["order_by"] | null;
    tokenAddress?: ValueTypes["order_by"] | null;
    tokenId?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "open_sea_metadata" */
  ["open_sea_metadata_select_column"]: open_sea_metadata_select_column;
  /** column ordering options */
  ["order_by"]: order_by;
  /** columns and relationships of "party" */
  ["party"]: AliasType<{
    auctionId?: true;
    blockNumber?: true;
    createdBy?: true;
    gatedToken?: true;
    gatedTokenAmount?: true;
    id?: true;
    marketWrapperAddress?: true;
    name?: true;
    nftContractAddress?: true;
    nftTokenId?: true;
    /** An object relationship */
    open_sea_metadata?: ValueTypes["open_sea_metadata"];
    partyAddress?: true;
    partyType?: true;
    party_claims?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_claim_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_claim_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_claim_bool_exp"] | null;
      },
      ValueTypes["party_claim"]
    ];
    party_contributions?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution"]
    ];
    party_contributions_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution_aggregate"]
    ];
    party_createds?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_created_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_created_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_created_bool_exp"] | null;
      },
      ValueTypes["party_created"]
    ];
    party_finalizeds?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_finalized_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_finalized_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_finalized_bool_exp"] | null;
      },
      ValueTypes["party_finalized"]
    ];
    splitBasisPoints?: true;
    splitRecipient?: true;
    symbol?: true;
    transactionHash?: true;
    versionNumber?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "party". All fields are combined with a logical 'AND'. */
  ["party_bool_exp"]: {
    _and?: ValueTypes["party_bool_exp"][];
    _not?: ValueTypes["party_bool_exp"] | null;
    _or?: ValueTypes["party_bool_exp"][];
    auctionId?: ValueTypes["numeric_comparison_exp"] | null;
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    createdBy?: ValueTypes["String_comparison_exp"] | null;
    gatedToken?: ValueTypes["String_comparison_exp"] | null;
    gatedTokenAmount?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    marketWrapperAddress?: ValueTypes["String_comparison_exp"] | null;
    name?: ValueTypes["String_comparison_exp"] | null;
    nftContractAddress?: ValueTypes["String_comparison_exp"] | null;
    nftTokenId?: ValueTypes["numeric_comparison_exp"] | null;
    open_sea_metadata?: ValueTypes["open_sea_metadata_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyType?: ValueTypes["String_comparison_exp"] | null;
    party_claims?: ValueTypes["party_claim_bool_exp"] | null;
    party_contributions?: ValueTypes["party_contribution_bool_exp"] | null;
    party_createds?: ValueTypes["party_created_bool_exp"] | null;
    party_finalizeds?: ValueTypes["party_finalized_bool_exp"] | null;
    splitBasisPoints?: ValueTypes["bigint_comparison_exp"] | null;
    splitRecipient?: ValueTypes["String_comparison_exp"] | null;
    symbol?: ValueTypes["String_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
    versionNumber?: ValueTypes["Int_comparison_exp"] | null;
  };
  /** columns and relationships of "party_claim" */
  ["party_claim"]: AliasType<{
    blockNumber?: true;
    contributor?: true;
    id?: true;
    /** An object relationship */
    party?: ValueTypes["party"];
    partyAddress?: true;
    partyId?: true;
    /** An object relationship */
    run?: ValueTypes["run"];
    runId?: true;
    totalEthContributedWei?: true;
    totalEthReturnedWei?: true;
    totalTokensReceivedWei?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** order by aggregate values of table "party_claim" */
  ["party_claim_aggregate_order_by"]: {
    avg?: ValueTypes["party_claim_avg_order_by"] | null;
    count?: ValueTypes["order_by"] | null;
    max?: ValueTypes["party_claim_max_order_by"] | null;
    min?: ValueTypes["party_claim_min_order_by"] | null;
    stddev?: ValueTypes["party_claim_stddev_order_by"] | null;
    stddev_pop?: ValueTypes["party_claim_stddev_pop_order_by"] | null;
    stddev_samp?: ValueTypes["party_claim_stddev_samp_order_by"] | null;
    sum?: ValueTypes["party_claim_sum_order_by"] | null;
    var_pop?: ValueTypes["party_claim_var_pop_order_by"] | null;
    var_samp?: ValueTypes["party_claim_var_samp_order_by"] | null;
    variance?: ValueTypes["party_claim_variance_order_by"] | null;
  };
  /** order by avg() on columns of table "party_claim" */
  ["party_claim_avg_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** Boolean expression to filter rows from the table "party_claim". All fields are combined with a logical 'AND'. */
  ["party_claim_bool_exp"]: {
    _and?: ValueTypes["party_claim_bool_exp"][];
    _not?: ValueTypes["party_claim_bool_exp"] | null;
    _or?: ValueTypes["party_claim_bool_exp"][];
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    contributor?: ValueTypes["String_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    party?: ValueTypes["party_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyId?: ValueTypes["Int_comparison_exp"] | null;
    run?: ValueTypes["run_bool_exp"] | null;
    runId?: ValueTypes["Int_comparison_exp"] | null;
    totalEthContributedWei?: ValueTypes["numeric_comparison_exp"] | null;
    totalEthReturnedWei?: ValueTypes["numeric_comparison_exp"] | null;
    totalTokensReceivedWei?: ValueTypes["numeric_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
  };
  /** order by max() on columns of table "party_claim" */
  ["party_claim_max_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributor?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** order by min() on columns of table "party_claim" */
  ["party_claim_min_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributor?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** Ordering options when selecting data from "party_claim". */
  ["party_claim_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributor?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    party?: ValueTypes["party_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    run?: ValueTypes["run_order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "party_claim" */
  ["party_claim_select_column"]: party_claim_select_column;
  /** order by stddev() on columns of table "party_claim" */
  ["party_claim_stddev_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_pop() on columns of table "party_claim" */
  ["party_claim_stddev_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_samp() on columns of table "party_claim" */
  ["party_claim_stddev_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by sum() on columns of table "party_claim" */
  ["party_claim_sum_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by var_pop() on columns of table "party_claim" */
  ["party_claim_var_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by var_samp() on columns of table "party_claim" */
  ["party_claim_var_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** order by variance() on columns of table "party_claim" */
  ["party_claim_variance_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalEthContributedWei?: ValueTypes["order_by"] | null;
    totalEthReturnedWei?: ValueTypes["order_by"] | null;
    totalTokensReceivedWei?: ValueTypes["order_by"] | null;
  };
  /** columns and relationships of "party_contribution" */
  ["party_contribution"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    contributedBy?: true;
    id?: true;
    /** An object relationship */
    party?: ValueTypes["party"];
    partyAddress?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    /** An object relationship */
    run?: ValueTypes["run"];
    runId?: true;
    totalFromContributorWei?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** aggregated selection of "party_contribution" */
  ["party_contribution_aggregate"]: AliasType<{
    aggregate?: ValueTypes["party_contribution_aggregate_fields"];
    nodes?: ValueTypes["party_contribution"];
    __typename?: true;
  }>;
  /** aggregate fields of "party_contribution" */
  ["party_contribution_aggregate_fields"]: AliasType<{
    avg?: ValueTypes["party_contribution_avg_fields"];
    count?: [
      {
        columns?: ValueTypes["party_contribution_select_column"][];
        distinct?: boolean | null;
      },
      true
    ];
    max?: ValueTypes["party_contribution_max_fields"];
    min?: ValueTypes["party_contribution_min_fields"];
    stddev?: ValueTypes["party_contribution_stddev_fields"];
    stddev_pop?: ValueTypes["party_contribution_stddev_pop_fields"];
    stddev_samp?: ValueTypes["party_contribution_stddev_samp_fields"];
    sum?: ValueTypes["party_contribution_sum_fields"];
    var_pop?: ValueTypes["party_contribution_var_pop_fields"];
    var_samp?: ValueTypes["party_contribution_var_samp_fields"];
    variance?: ValueTypes["party_contribution_variance_fields"];
    __typename?: true;
  }>;
  /** order by aggregate values of table "party_contribution" */
  ["party_contribution_aggregate_order_by"]: {
    avg?: ValueTypes["party_contribution_avg_order_by"] | null;
    count?: ValueTypes["order_by"] | null;
    max?: ValueTypes["party_contribution_max_order_by"] | null;
    min?: ValueTypes["party_contribution_min_order_by"] | null;
    stddev?: ValueTypes["party_contribution_stddev_order_by"] | null;
    stddev_pop?: ValueTypes["party_contribution_stddev_pop_order_by"] | null;
    stddev_samp?: ValueTypes["party_contribution_stddev_samp_order_by"] | null;
    sum?: ValueTypes["party_contribution_sum_order_by"] | null;
    var_pop?: ValueTypes["party_contribution_var_pop_order_by"] | null;
    var_samp?: ValueTypes["party_contribution_var_samp_order_by"] | null;
    variance?: ValueTypes["party_contribution_variance_order_by"] | null;
  };
  /** aggregate avg on columns */
  ["party_contribution_avg_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by avg() on columns of table "party_contribution" */
  ["party_contribution_avg_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** Boolean expression to filter rows from the table "party_contribution". All fields are combined with a logical 'AND'. */
  ["party_contribution_bool_exp"]: {
    _and?: ValueTypes["party_contribution_bool_exp"][];
    _not?: ValueTypes["party_contribution_bool_exp"] | null;
    _or?: ValueTypes["party_contribution_bool_exp"][];
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    contributedAmountWei?: ValueTypes["numeric_comparison_exp"] | null;
    contributedBy?: ValueTypes["String_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    party?: ValueTypes["party_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyId?: ValueTypes["Int_comparison_exp"] | null;
    previousTotalContributedToPartyWei?:
      | ValueTypes["numeric_comparison_exp"]
      | null;
    run?: ValueTypes["run_bool_exp"] | null;
    runId?: ValueTypes["Int_comparison_exp"] | null;
    totalFromContributorWei?: ValueTypes["numeric_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
  };
  /** aggregate max on columns */
  ["party_contribution_max_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    contributedBy?: true;
    id?: true;
    partyAddress?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** order by max() on columns of table "party_contribution" */
  ["party_contribution_max_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    contributedBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** aggregate min on columns */
  ["party_contribution_min_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    contributedBy?: true;
    id?: true;
    partyAddress?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** order by min() on columns of table "party_contribution" */
  ["party_contribution_min_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    contributedBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** Ordering options when selecting data from "party_contribution". */
  ["party_contribution_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    contributedBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    party?: ValueTypes["party_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    run?: ValueTypes["run_order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "party_contribution" */
  ["party_contribution_select_column"]: party_contribution_select_column;
  /** aggregate stddev on columns */
  ["party_contribution_stddev_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by stddev() on columns of table "party_contribution" */
  ["party_contribution_stddev_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate stddev_pop on columns */
  ["party_contribution_stddev_pop_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by stddev_pop() on columns of table "party_contribution" */
  ["party_contribution_stddev_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate stddev_samp on columns */
  ["party_contribution_stddev_samp_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by stddev_samp() on columns of table "party_contribution" */
  ["party_contribution_stddev_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate sum on columns */
  ["party_contribution_sum_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by sum() on columns of table "party_contribution" */
  ["party_contribution_sum_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate var_pop on columns */
  ["party_contribution_var_pop_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by var_pop() on columns of table "party_contribution" */
  ["party_contribution_var_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate var_samp on columns */
  ["party_contribution_var_samp_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by var_samp() on columns of table "party_contribution" */
  ["party_contribution_var_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** aggregate variance on columns */
  ["party_contribution_variance_fields"]: AliasType<{
    blockNumber?: true;
    contributedAmountWei?: true;
    id?: true;
    partyId?: true;
    previousTotalContributedToPartyWei?: true;
    runId?: true;
    totalFromContributorWei?: true;
    __typename?: true;
  }>;
  /** order by variance() on columns of table "party_contribution" */
  ["party_contribution_variance_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    contributedAmountWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    previousTotalContributedToPartyWei?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalFromContributorWei?: ValueTypes["order_by"] | null;
  };
  /** columns and relationships of "party_created" */
  ["party_created"]: AliasType<{
    blockNumber?: true;
    createdBy?: true;
    id?: true;
    /** An object relationship */
    party?: ValueTypes["party"];
    partyAddress?: true;
    partyId?: true;
    /** An object relationship */
    run?: ValueTypes["run"];
    runId?: true;
    transactionHash?: true;
    __typename?: true;
  }>;
  /** order by aggregate values of table "party_created" */
  ["party_created_aggregate_order_by"]: {
    avg?: ValueTypes["party_created_avg_order_by"] | null;
    count?: ValueTypes["order_by"] | null;
    max?: ValueTypes["party_created_max_order_by"] | null;
    min?: ValueTypes["party_created_min_order_by"] | null;
    stddev?: ValueTypes["party_created_stddev_order_by"] | null;
    stddev_pop?: ValueTypes["party_created_stddev_pop_order_by"] | null;
    stddev_samp?: ValueTypes["party_created_stddev_samp_order_by"] | null;
    sum?: ValueTypes["party_created_sum_order_by"] | null;
    var_pop?: ValueTypes["party_created_var_pop_order_by"] | null;
    var_samp?: ValueTypes["party_created_var_samp_order_by"] | null;
    variance?: ValueTypes["party_created_variance_order_by"] | null;
  };
  /** order by avg() on columns of table "party_created" */
  ["party_created_avg_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** Boolean expression to filter rows from the table "party_created". All fields are combined with a logical 'AND'. */
  ["party_created_bool_exp"]: {
    _and?: ValueTypes["party_created_bool_exp"][];
    _not?: ValueTypes["party_created_bool_exp"] | null;
    _or?: ValueTypes["party_created_bool_exp"][];
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    createdBy?: ValueTypes["String_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    party?: ValueTypes["party_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyId?: ValueTypes["Int_comparison_exp"] | null;
    run?: ValueTypes["run_bool_exp"] | null;
    runId?: ValueTypes["Int_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
  };
  /** order by max() on columns of table "party_created" */
  ["party_created_max_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    createdBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** order by min() on columns of table "party_created" */
  ["party_created_min_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    createdBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** Ordering options when selecting data from "party_created". */
  ["party_created_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    createdBy?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    party?: ValueTypes["party_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    run?: ValueTypes["run_order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "party_created" */
  ["party_created_select_column"]: party_created_select_column;
  /** order by stddev() on columns of table "party_created" */
  ["party_created_stddev_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_pop() on columns of table "party_created" */
  ["party_created_stddev_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_samp() on columns of table "party_created" */
  ["party_created_stddev_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by sum() on columns of table "party_created" */
  ["party_created_sum_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by var_pop() on columns of table "party_created" */
  ["party_created_var_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by var_samp() on columns of table "party_created" */
  ["party_created_var_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** order by variance() on columns of table "party_created" */
  ["party_created_variance_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
  };
  /** columns and relationships of "party_finalized" */
  ["party_finalized"]: AliasType<{
    blockNumber?: true;
    feeWei?: true;
    id?: true;
    /** An object relationship */
    party?: ValueTypes["party"];
    partyAddress?: true;
    partyId?: true;
    result?: true;
    /** An object relationship */
    run?: ValueTypes["run"];
    runId?: true;
    tokenVault?: true;
    totalContributedWei?: true;
    totalSpentWei?: true;
    transactionHash?: true;
    versionNumber?: true;
    __typename?: true;
  }>;
  /** order by aggregate values of table "party_finalized" */
  ["party_finalized_aggregate_order_by"]: {
    avg?: ValueTypes["party_finalized_avg_order_by"] | null;
    count?: ValueTypes["order_by"] | null;
    max?: ValueTypes["party_finalized_max_order_by"] | null;
    min?: ValueTypes["party_finalized_min_order_by"] | null;
    stddev?: ValueTypes["party_finalized_stddev_order_by"] | null;
    stddev_pop?: ValueTypes["party_finalized_stddev_pop_order_by"] | null;
    stddev_samp?: ValueTypes["party_finalized_stddev_samp_order_by"] | null;
    sum?: ValueTypes["party_finalized_sum_order_by"] | null;
    var_pop?: ValueTypes["party_finalized_var_pop_order_by"] | null;
    var_samp?: ValueTypes["party_finalized_var_samp_order_by"] | null;
    variance?: ValueTypes["party_finalized_variance_order_by"] | null;
  };
  /** order by avg() on columns of table "party_finalized" */
  ["party_finalized_avg_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** Boolean expression to filter rows from the table "party_finalized". All fields are combined with a logical 'AND'. */
  ["party_finalized_bool_exp"]: {
    _and?: ValueTypes["party_finalized_bool_exp"][];
    _not?: ValueTypes["party_finalized_bool_exp"] | null;
    _or?: ValueTypes["party_finalized_bool_exp"][];
    blockNumber?: ValueTypes["numeric_comparison_exp"] | null;
    feeWei?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    party?: ValueTypes["party_bool_exp"] | null;
    partyAddress?: ValueTypes["String_comparison_exp"] | null;
    partyId?: ValueTypes["Int_comparison_exp"] | null;
    result?: ValueTypes["bigint_comparison_exp"] | null;
    run?: ValueTypes["run_bool_exp"] | null;
    runId?: ValueTypes["Int_comparison_exp"] | null;
    tokenVault?: ValueTypes["String_comparison_exp"] | null;
    totalContributedWei?: ValueTypes["numeric_comparison_exp"] | null;
    totalSpentWei?: ValueTypes["numeric_comparison_exp"] | null;
    transactionHash?: ValueTypes["String_comparison_exp"] | null;
    versionNumber?: ValueTypes["Int_comparison_exp"] | null;
  };
  /** order by max() on columns of table "party_finalized" */
  ["party_finalized_max_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    tokenVault?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by min() on columns of table "party_finalized" */
  ["party_finalized_min_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    tokenVault?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** Ordering options when selecting data from "party_finalized". */
  ["party_finalized_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    party?: ValueTypes["party_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    run?: ValueTypes["run_order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    tokenVault?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "party_finalized" */
  ["party_finalized_select_column"]: party_finalized_select_column;
  /** order by stddev() on columns of table "party_finalized" */
  ["party_finalized_stddev_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_pop() on columns of table "party_finalized" */
  ["party_finalized_stddev_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by stddev_samp() on columns of table "party_finalized" */
  ["party_finalized_stddev_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by sum() on columns of table "party_finalized" */
  ["party_finalized_sum_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by var_pop() on columns of table "party_finalized" */
  ["party_finalized_var_pop_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by var_samp() on columns of table "party_finalized" */
  ["party_finalized_var_samp_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** order by variance() on columns of table "party_finalized" */
  ["party_finalized_variance_order_by"]: {
    blockNumber?: ValueTypes["order_by"] | null;
    feeWei?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    partyId?: ValueTypes["order_by"] | null;
    result?: ValueTypes["order_by"] | null;
    runId?: ValueTypes["order_by"] | null;
    totalContributedWei?: ValueTypes["order_by"] | null;
    totalSpentWei?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** Ordering options when selecting data from "party". */
  ["party_order_by"]: {
    auctionId?: ValueTypes["order_by"] | null;
    blockNumber?: ValueTypes["order_by"] | null;
    createdBy?: ValueTypes["order_by"] | null;
    gatedToken?: ValueTypes["order_by"] | null;
    gatedTokenAmount?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    marketWrapperAddress?: ValueTypes["order_by"] | null;
    name?: ValueTypes["order_by"] | null;
    nftContractAddress?: ValueTypes["order_by"] | null;
    nftTokenId?: ValueTypes["order_by"] | null;
    open_sea_metadata?: ValueTypes["open_sea_metadata_order_by"] | null;
    partyAddress?: ValueTypes["order_by"] | null;
    partyType?: ValueTypes["order_by"] | null;
    party_claims_aggregate?:
      | ValueTypes["party_claim_aggregate_order_by"]
      | null;
    party_contributions_aggregate?:
      | ValueTypes["party_contribution_aggregate_order_by"]
      | null;
    party_createds_aggregate?:
      | ValueTypes["party_created_aggregate_order_by"]
      | null;
    party_finalizeds_aggregate?:
      | ValueTypes["party_finalized_aggregate_order_by"]
      | null;
    splitBasisPoints?: ValueTypes["order_by"] | null;
    splitRecipient?: ValueTypes["order_by"] | null;
    symbol?: ValueTypes["order_by"] | null;
    transactionHash?: ValueTypes["order_by"] | null;
    versionNumber?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "party" */
  ["party_select_column"]: party_select_column;
  ["query_root"]: AliasType<{
    bid?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["bid_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["bid_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["bid_bool_exp"] | null;
      },
      ValueTypes["bid"]
    ];
    bid_by_pk?: [{ id: number }, ValueTypes["bid"]];
    block?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["block_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["block_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["block_bool_exp"] | null;
      },
      ValueTypes["block"]
    ];
    block_by_pk?: [{ id: number }, ValueTypes["block"]];
    ens_lookup?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["ens_lookup_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["ens_lookup_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["ens_lookup_bool_exp"] | null;
      },
      ValueTypes["ens_lookup"]
    ];
    ens_lookup_by_pk?: [{ id: number }, ValueTypes["ens_lookup"]];
    eth_price?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["eth_price_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["eth_price_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["eth_price_bool_exp"] | null;
      },
      ValueTypes["eth_price"]
    ];
    eth_price_by_pk?: [{ id: number }, ValueTypes["eth_price"]];
    open_sea_metadata?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["open_sea_metadata_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["open_sea_metadata_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["open_sea_metadata_bool_exp"] | null;
      },
      ValueTypes["open_sea_metadata"]
    ];
    open_sea_metadata_by_pk?: [{ id: number }, ValueTypes["open_sea_metadata"]];
    party?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_bool_exp"] | null;
      },
      ValueTypes["party"]
    ];
    party_by_pk?: [{ id: number }, ValueTypes["party"]];
    party_claim?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_claim_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_claim_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_claim_bool_exp"] | null;
      },
      ValueTypes["party_claim"]
    ];
    party_claim_by_pk?: [{ id: number }, ValueTypes["party_claim"]];
    party_contribution?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution"]
    ];
    party_contribution_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution_aggregate"]
    ];
    party_contribution_by_pk?: [
      { id: number },
      ValueTypes["party_contribution"]
    ];
    party_created?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_created_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_created_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_created_bool_exp"] | null;
      },
      ValueTypes["party_created"]
    ];
    party_created_by_pk?: [{ id: number }, ValueTypes["party_created"]];
    party_finalized?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_finalized_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_finalized_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_finalized_bool_exp"] | null;
      },
      ValueTypes["party_finalized"]
    ];
    party_finalized_by_pk?: [{ id: number }, ValueTypes["party_finalized"]];
    run?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["run_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["run_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["run_bool_exp"] | null;
      },
      ValueTypes["run"]
    ];
    run_by_pk?: [{ id: number }, ValueTypes["run"]];
    __typename?: true;
  }>;
  /** columns and relationships of "run" */
  ["run"]: AliasType<{
    fromBlock?: true;
    id?: true;
    ranAt?: true;
    runTime?: true;
    status?: true;
    toBlock?: true;
    __typename?: true;
  }>;
  /** Boolean expression to filter rows from the table "run". All fields are combined with a logical 'AND'. */
  ["run_bool_exp"]: {
    _and?: ValueTypes["run_bool_exp"][];
    _not?: ValueTypes["run_bool_exp"] | null;
    _or?: ValueTypes["run_bool_exp"][];
    fromBlock?: ValueTypes["numeric_comparison_exp"] | null;
    id?: ValueTypes["Int_comparison_exp"] | null;
    ranAt?: ValueTypes["bigint_comparison_exp"] | null;
    runTime?: ValueTypes["numeric_comparison_exp"] | null;
    status?: ValueTypes["String_comparison_exp"] | null;
    toBlock?: ValueTypes["numeric_comparison_exp"] | null;
  };
  /** Ordering options when selecting data from "run". */
  ["run_order_by"]: {
    fromBlock?: ValueTypes["order_by"] | null;
    id?: ValueTypes["order_by"] | null;
    ranAt?: ValueTypes["order_by"] | null;
    runTime?: ValueTypes["order_by"] | null;
    status?: ValueTypes["order_by"] | null;
    toBlock?: ValueTypes["order_by"] | null;
  };
  /** select columns of table "run" */
  ["run_select_column"]: run_select_column;
  ["subscription_root"]: AliasType<{
    bid?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["bid_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["bid_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["bid_bool_exp"] | null;
      },
      ValueTypes["bid"]
    ];
    bid_by_pk?: [{ id: number }, ValueTypes["bid"]];
    block?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["block_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["block_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["block_bool_exp"] | null;
      },
      ValueTypes["block"]
    ];
    block_by_pk?: [{ id: number }, ValueTypes["block"]];
    ens_lookup?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["ens_lookup_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["ens_lookup_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["ens_lookup_bool_exp"] | null;
      },
      ValueTypes["ens_lookup"]
    ];
    ens_lookup_by_pk?: [{ id: number }, ValueTypes["ens_lookup"]];
    eth_price?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["eth_price_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["eth_price_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["eth_price_bool_exp"] | null;
      },
      ValueTypes["eth_price"]
    ];
    eth_price_by_pk?: [{ id: number }, ValueTypes["eth_price"]];
    open_sea_metadata?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["open_sea_metadata_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["open_sea_metadata_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["open_sea_metadata_bool_exp"] | null;
      },
      ValueTypes["open_sea_metadata"]
    ];
    open_sea_metadata_by_pk?: [{ id: number }, ValueTypes["open_sea_metadata"]];
    party?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_bool_exp"] | null;
      },
      ValueTypes["party"]
    ];
    party_by_pk?: [{ id: number }, ValueTypes["party"]];
    party_claim?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_claim_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_claim_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_claim_bool_exp"] | null;
      },
      ValueTypes["party_claim"]
    ];
    party_claim_by_pk?: [{ id: number }, ValueTypes["party_claim"]];
    party_contribution?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution"]
    ];
    party_contribution_aggregate?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_contribution_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_contribution_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_contribution_bool_exp"] | null;
      },
      ValueTypes["party_contribution_aggregate"]
    ];
    party_contribution_by_pk?: [
      { id: number },
      ValueTypes["party_contribution"]
    ];
    party_created?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_created_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_created_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_created_bool_exp"] | null;
      },
      ValueTypes["party_created"]
    ];
    party_created_by_pk?: [{ id: number }, ValueTypes["party_created"]];
    party_finalized?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["party_finalized_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["party_finalized_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["party_finalized_bool_exp"] | null;
      },
      ValueTypes["party_finalized"]
    ];
    party_finalized_by_pk?: [{ id: number }, ValueTypes["party_finalized"]];
    run?: [
      {
        /** distinct select on columns */
        distinct_on?: ValueTypes["run_select_column"][] /** limit the number of rows returned */;
        limit?:
          | number
          | null /** skip the first n rows. Use only with order_by */;
        offset?: number | null /** sort the rows by one or more columns */;
        order_by?: ValueTypes["run_order_by"][] /** filter the rows returned */;
        where?: ValueTypes["run_bool_exp"] | null;
      },
      ValueTypes["run"]
    ];
    run_by_pk?: [{ id: number }, ValueTypes["run"]];
    __typename?: true;
  }>;
};

export type ModelTypes = {
  /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
  ["Boolean_comparison_exp"]: GraphQLTypes["Boolean_comparison_exp"];
  /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
  ["Int_comparison_exp"]: GraphQLTypes["Int_comparison_exp"];
  /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
  ["String_comparison_exp"]: GraphQLTypes["String_comparison_exp"];
  /** columns and relationships of "bid" */
  ["bid"]: {
    amount: ModelTypes["numeric"];
    blockNumber: ModelTypes["numeric"];
    id: number;
    /** An object relationship */
    party?: ModelTypes["party"];
    partyAddress: string;
    partyId?: number;
    runId?: number;
    transactionHash: string;
  };
  /** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
  ["bid_bool_exp"]: GraphQLTypes["bid_bool_exp"];
  /** Ordering options when selecting data from "bid". */
  ["bid_order_by"]: GraphQLTypes["bid_order_by"];
  /** select columns of table "bid" */
  ["bid_select_column"]: GraphQLTypes["bid_select_column"];
  ["bigint"]: any;
  /** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
  ["bigint_comparison_exp"]: GraphQLTypes["bigint_comparison_exp"];
  /** columns and relationships of "block" */
  ["block"]: {
    blockNumber: ModelTypes["numeric"];
    blockTimestamp: ModelTypes["numeric"];
    id: number;
  };
  /** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
  ["block_bool_exp"]: GraphQLTypes["block_bool_exp"];
  /** Ordering options when selecting data from "block". */
  ["block_order_by"]: GraphQLTypes["block_order_by"];
  /** select columns of table "block" */
  ["block_select_column"]: GraphQLTypes["block_select_column"];
  /** columns and relationships of "ens_lookup" */
  ["ens_lookup"]: {
    address: string;
    ensName?: string;
    fetchedAt: ModelTypes["numeric"];
    found: boolean;
    id: number;
  };
  /** Boolean expression to filter rows from the table "ens_lookup". All fields are combined with a logical 'AND'. */
  ["ens_lookup_bool_exp"]: GraphQLTypes["ens_lookup_bool_exp"];
  /** Ordering options when selecting data from "ens_lookup". */
  ["ens_lookup_order_by"]: GraphQLTypes["ens_lookup_order_by"];
  /** select columns of table "ens_lookup" */
  ["ens_lookup_select_column"]: GraphQLTypes["ens_lookup_select_column"];
  /** columns and relationships of "eth_price" */
  ["eth_price"]: {
    fetchedAt: ModelTypes["numeric"];
    id: number;
    priceUsd: ModelTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "eth_price". All fields are combined with a logical 'AND'. */
  ["eth_price_bool_exp"]: GraphQLTypes["eth_price_bool_exp"];
  /** Ordering options when selecting data from "eth_price". */
  ["eth_price_order_by"]: GraphQLTypes["eth_price_order_by"];
  /** select columns of table "eth_price" */
  ["eth_price_select_column"]: GraphQLTypes["eth_price_select_column"];
  ["jsonb"]: any;
  /** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
  ["jsonb_comparison_exp"]: GraphQLTypes["jsonb_comparison_exp"];
  ["numeric"]: any;
  /** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
  ["numeric_comparison_exp"]: GraphQLTypes["numeric_comparison_exp"];
  /** columns and relationships of "open_sea_metadata" */
  ["open_sea_metadata"]: {
    animationOriginalUrl?: string;
    animationUrl?: string;
    description?: string;
    externalLink?: string;
    id: number;
    imageOriginalUrl?: string;
    imagePreviewUrl?: string;
    imageThumbnailUrl?: string;
    imageUrl?: string;
    name?: string;
    openSeaResponse?: ModelTypes["jsonb"];
    tokenAddress?: string;
    tokenId?: ModelTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "open_sea_metadata". All fields are combined with a logical 'AND'. */
  ["open_sea_metadata_bool_exp"]: GraphQLTypes["open_sea_metadata_bool_exp"];
  /** Ordering options when selecting data from "open_sea_metadata". */
  ["open_sea_metadata_order_by"]: GraphQLTypes["open_sea_metadata_order_by"];
  /** select columns of table "open_sea_metadata" */
  ["open_sea_metadata_select_column"]: GraphQLTypes["open_sea_metadata_select_column"];
  /** column ordering options */
  ["order_by"]: GraphQLTypes["order_by"];
  /** columns and relationships of "party" */
  ["party"]: {
    auctionId: ModelTypes["numeric"];
    blockNumber: ModelTypes["numeric"];
    createdBy: string;
    gatedToken?: string;
    gatedTokenAmount?: ModelTypes["numeric"];
    id: number;
    marketWrapperAddress: string;
    name: string;
    nftContractAddress: string;
    nftTokenId: ModelTypes["numeric"];
    /** An object relationship */
    open_sea_metadata?: ModelTypes["open_sea_metadata"];
    partyAddress: string;
    partyType: string;
    /** An array relationship */
    party_claims: ModelTypes["party_claim"][];
    /** An array relationship */
    party_contributions: ModelTypes["party_contribution"][];
    /** An aggregate relationship */
    party_contributions_aggregate: ModelTypes["party_contribution_aggregate"];
    /** An array relationship */
    party_createds: ModelTypes["party_created"][];
    /** An array relationship */
    party_finalizeds: ModelTypes["party_finalized"][];
    splitBasisPoints: ModelTypes["bigint"];
    splitRecipient: string;
    symbol: string;
    transactionHash: string;
    versionNumber: number;
  };
  /** Boolean expression to filter rows from the table "party". All fields are combined with a logical 'AND'. */
  ["party_bool_exp"]: GraphQLTypes["party_bool_exp"];
  /** columns and relationships of "party_claim" */
  ["party_claim"]: {
    blockNumber: ModelTypes["numeric"];
    contributor: string;
    id: number;
    /** An object relationship */
    party?: ModelTypes["party"];
    partyAddress: string;
    partyId?: number;
    /** An object relationship */
    run?: ModelTypes["run"];
    runId?: number;
    totalEthContributedWei: ModelTypes["numeric"];
    totalEthReturnedWei: ModelTypes["numeric"];
    totalTokensReceivedWei: ModelTypes["numeric"];
    transactionHash: string;
  };
  /** order by aggregate values of table "party_claim" */
  ["party_claim_aggregate_order_by"]: GraphQLTypes["party_claim_aggregate_order_by"];
  /** order by avg() on columns of table "party_claim" */
  ["party_claim_avg_order_by"]: GraphQLTypes["party_claim_avg_order_by"];
  /** Boolean expression to filter rows from the table "party_claim". All fields are combined with a logical 'AND'. */
  ["party_claim_bool_exp"]: GraphQLTypes["party_claim_bool_exp"];
  /** order by max() on columns of table "party_claim" */
  ["party_claim_max_order_by"]: GraphQLTypes["party_claim_max_order_by"];
  /** order by min() on columns of table "party_claim" */
  ["party_claim_min_order_by"]: GraphQLTypes["party_claim_min_order_by"];
  /** Ordering options when selecting data from "party_claim". */
  ["party_claim_order_by"]: GraphQLTypes["party_claim_order_by"];
  /** select columns of table "party_claim" */
  ["party_claim_select_column"]: GraphQLTypes["party_claim_select_column"];
  /** order by stddev() on columns of table "party_claim" */
  ["party_claim_stddev_order_by"]: GraphQLTypes["party_claim_stddev_order_by"];
  /** order by stddev_pop() on columns of table "party_claim" */
  ["party_claim_stddev_pop_order_by"]: GraphQLTypes["party_claim_stddev_pop_order_by"];
  /** order by stddev_samp() on columns of table "party_claim" */
  ["party_claim_stddev_samp_order_by"]: GraphQLTypes["party_claim_stddev_samp_order_by"];
  /** order by sum() on columns of table "party_claim" */
  ["party_claim_sum_order_by"]: GraphQLTypes["party_claim_sum_order_by"];
  /** order by var_pop() on columns of table "party_claim" */
  ["party_claim_var_pop_order_by"]: GraphQLTypes["party_claim_var_pop_order_by"];
  /** order by var_samp() on columns of table "party_claim" */
  ["party_claim_var_samp_order_by"]: GraphQLTypes["party_claim_var_samp_order_by"];
  /** order by variance() on columns of table "party_claim" */
  ["party_claim_variance_order_by"]: GraphQLTypes["party_claim_variance_order_by"];
  /** columns and relationships of "party_contribution" */
  ["party_contribution"]: {
    blockNumber: ModelTypes["numeric"];
    contributedAmountWei: ModelTypes["numeric"];
    contributedBy: string;
    id: number;
    /** An object relationship */
    party?: ModelTypes["party"];
    partyAddress: string;
    partyId?: number;
    previousTotalContributedToPartyWei: ModelTypes["numeric"];
    /** An object relationship */
    run?: ModelTypes["run"];
    runId?: number;
    totalFromContributorWei: ModelTypes["numeric"];
    transactionHash: string;
  };
  /** aggregated selection of "party_contribution" */
  ["party_contribution_aggregate"]: {
    aggregate?: ModelTypes["party_contribution_aggregate_fields"];
    nodes: ModelTypes["party_contribution"][];
  };
  /** aggregate fields of "party_contribution" */
  ["party_contribution_aggregate_fields"]: {
    avg?: ModelTypes["party_contribution_avg_fields"];
    count: number;
    max?: ModelTypes["party_contribution_max_fields"];
    min?: ModelTypes["party_contribution_min_fields"];
    stddev?: ModelTypes["party_contribution_stddev_fields"];
    stddev_pop?: ModelTypes["party_contribution_stddev_pop_fields"];
    stddev_samp?: ModelTypes["party_contribution_stddev_samp_fields"];
    sum?: ModelTypes["party_contribution_sum_fields"];
    var_pop?: ModelTypes["party_contribution_var_pop_fields"];
    var_samp?: ModelTypes["party_contribution_var_samp_fields"];
    variance?: ModelTypes["party_contribution_variance_fields"];
  };
  /** order by aggregate values of table "party_contribution" */
  ["party_contribution_aggregate_order_by"]: GraphQLTypes["party_contribution_aggregate_order_by"];
  /** aggregate avg on columns */
  ["party_contribution_avg_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by avg() on columns of table "party_contribution" */
  ["party_contribution_avg_order_by"]: GraphQLTypes["party_contribution_avg_order_by"];
  /** Boolean expression to filter rows from the table "party_contribution". All fields are combined with a logical 'AND'. */
  ["party_contribution_bool_exp"]: GraphQLTypes["party_contribution_bool_exp"];
  /** aggregate max on columns */
  ["party_contribution_max_fields"]: {
    blockNumber?: ModelTypes["numeric"];
    contributedAmountWei?: ModelTypes["numeric"];
    contributedBy?: string;
    id?: number;
    partyAddress?: string;
    partyId?: number;
    previousTotalContributedToPartyWei?: ModelTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: ModelTypes["numeric"];
    transactionHash?: string;
  };
  /** order by max() on columns of table "party_contribution" */
  ["party_contribution_max_order_by"]: GraphQLTypes["party_contribution_max_order_by"];
  /** aggregate min on columns */
  ["party_contribution_min_fields"]: {
    blockNumber?: ModelTypes["numeric"];
    contributedAmountWei?: ModelTypes["numeric"];
    contributedBy?: string;
    id?: number;
    partyAddress?: string;
    partyId?: number;
    previousTotalContributedToPartyWei?: ModelTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: ModelTypes["numeric"];
    transactionHash?: string;
  };
  /** order by min() on columns of table "party_contribution" */
  ["party_contribution_min_order_by"]: GraphQLTypes["party_contribution_min_order_by"];
  /** Ordering options when selecting data from "party_contribution". */
  ["party_contribution_order_by"]: GraphQLTypes["party_contribution_order_by"];
  /** select columns of table "party_contribution" */
  ["party_contribution_select_column"]: GraphQLTypes["party_contribution_select_column"];
  /** aggregate stddev on columns */
  ["party_contribution_stddev_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev() on columns of table "party_contribution" */
  ["party_contribution_stddev_order_by"]: GraphQLTypes["party_contribution_stddev_order_by"];
  /** aggregate stddev_pop on columns */
  ["party_contribution_stddev_pop_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev_pop() on columns of table "party_contribution" */
  ["party_contribution_stddev_pop_order_by"]: GraphQLTypes["party_contribution_stddev_pop_order_by"];
  /** aggregate stddev_samp on columns */
  ["party_contribution_stddev_samp_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev_samp() on columns of table "party_contribution" */
  ["party_contribution_stddev_samp_order_by"]: GraphQLTypes["party_contribution_stddev_samp_order_by"];
  /** aggregate sum on columns */
  ["party_contribution_sum_fields"]: {
    blockNumber?: ModelTypes["numeric"];
    contributedAmountWei?: ModelTypes["numeric"];
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: ModelTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: ModelTypes["numeric"];
  };
  /** order by sum() on columns of table "party_contribution" */
  ["party_contribution_sum_order_by"]: GraphQLTypes["party_contribution_sum_order_by"];
  /** aggregate var_pop on columns */
  ["party_contribution_var_pop_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by var_pop() on columns of table "party_contribution" */
  ["party_contribution_var_pop_order_by"]: GraphQLTypes["party_contribution_var_pop_order_by"];
  /** aggregate var_samp on columns */
  ["party_contribution_var_samp_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by var_samp() on columns of table "party_contribution" */
  ["party_contribution_var_samp_order_by"]: GraphQLTypes["party_contribution_var_samp_order_by"];
  /** aggregate variance on columns */
  ["party_contribution_variance_fields"]: {
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by variance() on columns of table "party_contribution" */
  ["party_contribution_variance_order_by"]: GraphQLTypes["party_contribution_variance_order_by"];
  /** columns and relationships of "party_created" */
  ["party_created"]: {
    blockNumber: ModelTypes["numeric"];
    createdBy: string;
    id: number;
    /** An object relationship */
    party?: ModelTypes["party"];
    partyAddress: string;
    partyId?: number;
    /** An object relationship */
    run?: ModelTypes["run"];
    runId?: number;
    transactionHash: string;
  };
  /** order by aggregate values of table "party_created" */
  ["party_created_aggregate_order_by"]: GraphQLTypes["party_created_aggregate_order_by"];
  /** order by avg() on columns of table "party_created" */
  ["party_created_avg_order_by"]: GraphQLTypes["party_created_avg_order_by"];
  /** Boolean expression to filter rows from the table "party_created". All fields are combined with a logical 'AND'. */
  ["party_created_bool_exp"]: GraphQLTypes["party_created_bool_exp"];
  /** order by max() on columns of table "party_created" */
  ["party_created_max_order_by"]: GraphQLTypes["party_created_max_order_by"];
  /** order by min() on columns of table "party_created" */
  ["party_created_min_order_by"]: GraphQLTypes["party_created_min_order_by"];
  /** Ordering options when selecting data from "party_created". */
  ["party_created_order_by"]: GraphQLTypes["party_created_order_by"];
  /** select columns of table "party_created" */
  ["party_created_select_column"]: GraphQLTypes["party_created_select_column"];
  /** order by stddev() on columns of table "party_created" */
  ["party_created_stddev_order_by"]: GraphQLTypes["party_created_stddev_order_by"];
  /** order by stddev_pop() on columns of table "party_created" */
  ["party_created_stddev_pop_order_by"]: GraphQLTypes["party_created_stddev_pop_order_by"];
  /** order by stddev_samp() on columns of table "party_created" */
  ["party_created_stddev_samp_order_by"]: GraphQLTypes["party_created_stddev_samp_order_by"];
  /** order by sum() on columns of table "party_created" */
  ["party_created_sum_order_by"]: GraphQLTypes["party_created_sum_order_by"];
  /** order by var_pop() on columns of table "party_created" */
  ["party_created_var_pop_order_by"]: GraphQLTypes["party_created_var_pop_order_by"];
  /** order by var_samp() on columns of table "party_created" */
  ["party_created_var_samp_order_by"]: GraphQLTypes["party_created_var_samp_order_by"];
  /** order by variance() on columns of table "party_created" */
  ["party_created_variance_order_by"]: GraphQLTypes["party_created_variance_order_by"];
  /** columns and relationships of "party_finalized" */
  ["party_finalized"]: {
    blockNumber: ModelTypes["numeric"];
    feeWei: ModelTypes["numeric"];
    id: number;
    /** An object relationship */
    party?: ModelTypes["party"];
    partyAddress: string;
    partyId?: number;
    result: ModelTypes["bigint"];
    /** An object relationship */
    run?: ModelTypes["run"];
    runId?: number;
    tokenVault: string;
    totalContributedWei: ModelTypes["numeric"];
    totalSpentWei: ModelTypes["numeric"];
    transactionHash: string;
    versionNumber: number;
  };
  /** order by aggregate values of table "party_finalized" */
  ["party_finalized_aggregate_order_by"]: GraphQLTypes["party_finalized_aggregate_order_by"];
  /** order by avg() on columns of table "party_finalized" */
  ["party_finalized_avg_order_by"]: GraphQLTypes["party_finalized_avg_order_by"];
  /** Boolean expression to filter rows from the table "party_finalized". All fields are combined with a logical 'AND'. */
  ["party_finalized_bool_exp"]: GraphQLTypes["party_finalized_bool_exp"];
  /** order by max() on columns of table "party_finalized" */
  ["party_finalized_max_order_by"]: GraphQLTypes["party_finalized_max_order_by"];
  /** order by min() on columns of table "party_finalized" */
  ["party_finalized_min_order_by"]: GraphQLTypes["party_finalized_min_order_by"];
  /** Ordering options when selecting data from "party_finalized". */
  ["party_finalized_order_by"]: GraphQLTypes["party_finalized_order_by"];
  /** select columns of table "party_finalized" */
  ["party_finalized_select_column"]: GraphQLTypes["party_finalized_select_column"];
  /** order by stddev() on columns of table "party_finalized" */
  ["party_finalized_stddev_order_by"]: GraphQLTypes["party_finalized_stddev_order_by"];
  /** order by stddev_pop() on columns of table "party_finalized" */
  ["party_finalized_stddev_pop_order_by"]: GraphQLTypes["party_finalized_stddev_pop_order_by"];
  /** order by stddev_samp() on columns of table "party_finalized" */
  ["party_finalized_stddev_samp_order_by"]: GraphQLTypes["party_finalized_stddev_samp_order_by"];
  /** order by sum() on columns of table "party_finalized" */
  ["party_finalized_sum_order_by"]: GraphQLTypes["party_finalized_sum_order_by"];
  /** order by var_pop() on columns of table "party_finalized" */
  ["party_finalized_var_pop_order_by"]: GraphQLTypes["party_finalized_var_pop_order_by"];
  /** order by var_samp() on columns of table "party_finalized" */
  ["party_finalized_var_samp_order_by"]: GraphQLTypes["party_finalized_var_samp_order_by"];
  /** order by variance() on columns of table "party_finalized" */
  ["party_finalized_variance_order_by"]: GraphQLTypes["party_finalized_variance_order_by"];
  /** Ordering options when selecting data from "party". */
  ["party_order_by"]: GraphQLTypes["party_order_by"];
  /** select columns of table "party" */
  ["party_select_column"]: GraphQLTypes["party_select_column"];
  ["query_root"]: {
    /** fetch data from the table: "bid" */
    bid: ModelTypes["bid"][];
    /** fetch data from the table: "bid" using primary key columns */
    bid_by_pk?: ModelTypes["bid"];
    /** fetch data from the table: "block" */
    block: ModelTypes["block"][];
    /** fetch data from the table: "block" using primary key columns */
    block_by_pk?: ModelTypes["block"];
    /** fetch data from the table: "ens_lookup" */
    ens_lookup: ModelTypes["ens_lookup"][];
    /** fetch data from the table: "ens_lookup" using primary key columns */
    ens_lookup_by_pk?: ModelTypes["ens_lookup"];
    /** fetch data from the table: "eth_price" */
    eth_price: ModelTypes["eth_price"][];
    /** fetch data from the table: "eth_price" using primary key columns */
    eth_price_by_pk?: ModelTypes["eth_price"];
    /** fetch data from the table: "open_sea_metadata" */
    open_sea_metadata: ModelTypes["open_sea_metadata"][];
    /** fetch data from the table: "open_sea_metadata" using primary key columns */
    open_sea_metadata_by_pk?: ModelTypes["open_sea_metadata"];
    /** fetch data from the table: "party" */
    party: ModelTypes["party"][];
    /** fetch data from the table: "party" using primary key columns */
    party_by_pk?: ModelTypes["party"];
    /** fetch data from the table: "party_claim" */
    party_claim: ModelTypes["party_claim"][];
    /** fetch data from the table: "party_claim" using primary key columns */
    party_claim_by_pk?: ModelTypes["party_claim"];
    /** fetch data from the table: "party_contribution" */
    party_contribution: ModelTypes["party_contribution"][];
    /** fetch aggregated fields from the table: "party_contribution" */
    party_contribution_aggregate: ModelTypes["party_contribution_aggregate"];
    /** fetch data from the table: "party_contribution" using primary key columns */
    party_contribution_by_pk?: ModelTypes["party_contribution"];
    /** fetch data from the table: "party_created" */
    party_created: ModelTypes["party_created"][];
    /** fetch data from the table: "party_created" using primary key columns */
    party_created_by_pk?: ModelTypes["party_created"];
    /** fetch data from the table: "party_finalized" */
    party_finalized: ModelTypes["party_finalized"][];
    /** fetch data from the table: "party_finalized" using primary key columns */
    party_finalized_by_pk?: ModelTypes["party_finalized"];
    /** fetch data from the table: "run" */
    run: ModelTypes["run"][];
    /** fetch data from the table: "run" using primary key columns */
    run_by_pk?: ModelTypes["run"];
  };
  /** columns and relationships of "run" */
  ["run"]: {
    fromBlock: ModelTypes["numeric"];
    id: number;
    ranAt: ModelTypes["bigint"];
    runTime: ModelTypes["numeric"];
    status: string;
    toBlock: ModelTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "run". All fields are combined with a logical 'AND'. */
  ["run_bool_exp"]: GraphQLTypes["run_bool_exp"];
  /** Ordering options when selecting data from "run". */
  ["run_order_by"]: GraphQLTypes["run_order_by"];
  /** select columns of table "run" */
  ["run_select_column"]: GraphQLTypes["run_select_column"];
  ["subscription_root"]: {
    /** fetch data from the table: "bid" */
    bid: ModelTypes["bid"][];
    /** fetch data from the table: "bid" using primary key columns */
    bid_by_pk?: ModelTypes["bid"];
    /** fetch data from the table: "block" */
    block: ModelTypes["block"][];
    /** fetch data from the table: "block" using primary key columns */
    block_by_pk?: ModelTypes["block"];
    /** fetch data from the table: "ens_lookup" */
    ens_lookup: ModelTypes["ens_lookup"][];
    /** fetch data from the table: "ens_lookup" using primary key columns */
    ens_lookup_by_pk?: ModelTypes["ens_lookup"];
    /** fetch data from the table: "eth_price" */
    eth_price: ModelTypes["eth_price"][];
    /** fetch data from the table: "eth_price" using primary key columns */
    eth_price_by_pk?: ModelTypes["eth_price"];
    /** fetch data from the table: "open_sea_metadata" */
    open_sea_metadata: ModelTypes["open_sea_metadata"][];
    /** fetch data from the table: "open_sea_metadata" using primary key columns */
    open_sea_metadata_by_pk?: ModelTypes["open_sea_metadata"];
    /** fetch data from the table: "party" */
    party: ModelTypes["party"][];
    /** fetch data from the table: "party" using primary key columns */
    party_by_pk?: ModelTypes["party"];
    /** fetch data from the table: "party_claim" */
    party_claim: ModelTypes["party_claim"][];
    /** fetch data from the table: "party_claim" using primary key columns */
    party_claim_by_pk?: ModelTypes["party_claim"];
    /** fetch data from the table: "party_contribution" */
    party_contribution: ModelTypes["party_contribution"][];
    /** fetch aggregated fields from the table: "party_contribution" */
    party_contribution_aggregate: ModelTypes["party_contribution_aggregate"];
    /** fetch data from the table: "party_contribution" using primary key columns */
    party_contribution_by_pk?: ModelTypes["party_contribution"];
    /** fetch data from the table: "party_created" */
    party_created: ModelTypes["party_created"][];
    /** fetch data from the table: "party_created" using primary key columns */
    party_created_by_pk?: ModelTypes["party_created"];
    /** fetch data from the table: "party_finalized" */
    party_finalized: ModelTypes["party_finalized"][];
    /** fetch data from the table: "party_finalized" using primary key columns */
    party_finalized_by_pk?: ModelTypes["party_finalized"];
    /** fetch data from the table: "run" */
    run: ModelTypes["run"][];
    /** fetch data from the table: "run" using primary key columns */
    run_by_pk?: ModelTypes["run"];
  };
};

export type GraphQLTypes = {
  /** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
  ["Boolean_comparison_exp"]: {
    _eq?: boolean;
    _gt?: boolean;
    _gte?: boolean;
    _in?: Array<boolean>;
    _is_null?: boolean;
    _lt?: boolean;
    _lte?: boolean;
    _neq?: boolean;
    _nin?: Array<boolean>;
  };
  /** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
  ["Int_comparison_exp"]: {
    _eq?: number;
    _gt?: number;
    _gte?: number;
    _in?: Array<number>;
    _is_null?: boolean;
    _lt?: number;
    _lte?: number;
    _neq?: number;
    _nin?: Array<number>;
  };
  /** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
  ["String_comparison_exp"]: {
    _eq?: string;
    _gt?: string;
    _gte?: string;
    /** does the column match the given case-insensitive pattern */
    _ilike?: string;
    _in?: Array<string>;
    /** does the column match the given POSIX regular expression, case insensitive */
    _iregex?: string;
    _is_null?: boolean;
    /** does the column match the given pattern */
    _like?: string;
    _lt?: string;
    _lte?: string;
    _neq?: string;
    /** does the column NOT match the given case-insensitive pattern */
    _nilike?: string;
    _nin?: Array<string>;
    /** does the column NOT match the given POSIX regular expression, case insensitive */
    _niregex?: string;
    /** does the column NOT match the given pattern */
    _nlike?: string;
    /** does the column NOT match the given POSIX regular expression, case sensitive */
    _nregex?: string;
    /** does the column NOT match the given SQL regular expression */
    _nsimilar?: string;
    /** does the column match the given POSIX regular expression, case sensitive */
    _regex?: string;
    /** does the column match the given SQL regular expression */
    _similar?: string;
  };
  /** columns and relationships of "bid" */
  ["bid"]: {
    __typename: "bid";
    amount: GraphQLTypes["numeric"];
    blockNumber: GraphQLTypes["numeric"];
    id: number;
    /** An object relationship */
    party?: GraphQLTypes["party"];
    partyAddress: string;
    partyId?: number;
    runId?: number;
    transactionHash: string;
  };
  /** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
  ["bid_bool_exp"]: {
    _and?: Array<GraphQLTypes["bid_bool_exp"]>;
    _not?: GraphQLTypes["bid_bool_exp"];
    _or?: Array<GraphQLTypes["bid_bool_exp"]>;
    amount?: GraphQLTypes["numeric_comparison_exp"];
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    party?: GraphQLTypes["party_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyId?: GraphQLTypes["Int_comparison_exp"];
    runId?: GraphQLTypes["Int_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
  };
  /** Ordering options when selecting data from "bid". */
  ["bid_order_by"]: {
    amount?: GraphQLTypes["order_by"];
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    party?: GraphQLTypes["party_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** select columns of table "bid" */
  ["bid_select_column"]: bid_select_column;
  ["bigint"]: any;
  /** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
  ["bigint_comparison_exp"]: {
    _eq?: GraphQLTypes["bigint"];
    _gt?: GraphQLTypes["bigint"];
    _gte?: GraphQLTypes["bigint"];
    _in?: Array<GraphQLTypes["bigint"]>;
    _is_null?: boolean;
    _lt?: GraphQLTypes["bigint"];
    _lte?: GraphQLTypes["bigint"];
    _neq?: GraphQLTypes["bigint"];
    _nin?: Array<GraphQLTypes["bigint"]>;
  };
  /** columns and relationships of "block" */
  ["block"]: {
    __typename: "block";
    blockNumber: GraphQLTypes["numeric"];
    blockTimestamp: GraphQLTypes["numeric"];
    id: number;
  };
  /** Boolean expression to filter rows from the table "block". All fields are combined with a logical 'AND'. */
  ["block_bool_exp"]: {
    _and?: Array<GraphQLTypes["block_bool_exp"]>;
    _not?: GraphQLTypes["block_bool_exp"];
    _or?: Array<GraphQLTypes["block_bool_exp"]>;
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    blockTimestamp?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
  };
  /** Ordering options when selecting data from "block". */
  ["block_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    blockTimestamp?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
  };
  /** select columns of table "block" */
  ["block_select_column"]: block_select_column;
  /** columns and relationships of "ens_lookup" */
  ["ens_lookup"]: {
    __typename: "ens_lookup";
    address: string;
    ensName?: string;
    fetchedAt: GraphQLTypes["numeric"];
    found: boolean;
    id: number;
  };
  /** Boolean expression to filter rows from the table "ens_lookup". All fields are combined with a logical 'AND'. */
  ["ens_lookup_bool_exp"]: {
    _and?: Array<GraphQLTypes["ens_lookup_bool_exp"]>;
    _not?: GraphQLTypes["ens_lookup_bool_exp"];
    _or?: Array<GraphQLTypes["ens_lookup_bool_exp"]>;
    address?: GraphQLTypes["String_comparison_exp"];
    ensName?: GraphQLTypes["String_comparison_exp"];
    fetchedAt?: GraphQLTypes["numeric_comparison_exp"];
    found?: GraphQLTypes["Boolean_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
  };
  /** Ordering options when selecting data from "ens_lookup". */
  ["ens_lookup_order_by"]: {
    address?: GraphQLTypes["order_by"];
    ensName?: GraphQLTypes["order_by"];
    fetchedAt?: GraphQLTypes["order_by"];
    found?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
  };
  /** select columns of table "ens_lookup" */
  ["ens_lookup_select_column"]: ens_lookup_select_column;
  /** columns and relationships of "eth_price" */
  ["eth_price"]: {
    __typename: "eth_price";
    fetchedAt: GraphQLTypes["numeric"];
    id: number;
    priceUsd: GraphQLTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "eth_price". All fields are combined with a logical 'AND'. */
  ["eth_price_bool_exp"]: {
    _and?: Array<GraphQLTypes["eth_price_bool_exp"]>;
    _not?: GraphQLTypes["eth_price_bool_exp"];
    _or?: Array<GraphQLTypes["eth_price_bool_exp"]>;
    fetchedAt?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    priceUsd?: GraphQLTypes["numeric_comparison_exp"];
  };
  /** Ordering options when selecting data from "eth_price". */
  ["eth_price_order_by"]: {
    fetchedAt?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    priceUsd?: GraphQLTypes["order_by"];
  };
  /** select columns of table "eth_price" */
  ["eth_price_select_column"]: eth_price_select_column;
  ["jsonb"]: any;
  /** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
  ["jsonb_comparison_exp"]: {
    /** is the column contained in the given json value */
    _contained_in?: GraphQLTypes["jsonb"];
    /** does the column contain the given json value at the top level */
    _contains?: GraphQLTypes["jsonb"];
    _eq?: GraphQLTypes["jsonb"];
    _gt?: GraphQLTypes["jsonb"];
    _gte?: GraphQLTypes["jsonb"];
    /** does the string exist as a top-level key in the column */
    _has_key?: string;
    /** do all of these strings exist as top-level keys in the column */
    _has_keys_all?: Array<string>;
    /** do any of these strings exist as top-level keys in the column */
    _has_keys_any?: Array<string>;
    _in?: Array<GraphQLTypes["jsonb"]>;
    _is_null?: boolean;
    _lt?: GraphQLTypes["jsonb"];
    _lte?: GraphQLTypes["jsonb"];
    _neq?: GraphQLTypes["jsonb"];
    _nin?: Array<GraphQLTypes["jsonb"]>;
  };
  ["numeric"]: any;
  /** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
  ["numeric_comparison_exp"]: {
    _eq?: GraphQLTypes["numeric"];
    _gt?: GraphQLTypes["numeric"];
    _gte?: GraphQLTypes["numeric"];
    _in?: Array<GraphQLTypes["numeric"]>;
    _is_null?: boolean;
    _lt?: GraphQLTypes["numeric"];
    _lte?: GraphQLTypes["numeric"];
    _neq?: GraphQLTypes["numeric"];
    _nin?: Array<GraphQLTypes["numeric"]>;
  };
  /** columns and relationships of "open_sea_metadata" */
  ["open_sea_metadata"]: {
    __typename: "open_sea_metadata";
    animationOriginalUrl?: string;
    animationUrl?: string;
    description?: string;
    externalLink?: string;
    id: number;
    imageOriginalUrl?: string;
    imagePreviewUrl?: string;
    imageThumbnailUrl?: string;
    imageUrl?: string;
    name?: string;
    openSeaResponse?: GraphQLTypes["jsonb"];
    tokenAddress?: string;
    tokenId?: GraphQLTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "open_sea_metadata". All fields are combined with a logical 'AND'. */
  ["open_sea_metadata_bool_exp"]: {
    _and?: Array<GraphQLTypes["open_sea_metadata_bool_exp"]>;
    _not?: GraphQLTypes["open_sea_metadata_bool_exp"];
    _or?: Array<GraphQLTypes["open_sea_metadata_bool_exp"]>;
    animationOriginalUrl?: GraphQLTypes["String_comparison_exp"];
    animationUrl?: GraphQLTypes["String_comparison_exp"];
    description?: GraphQLTypes["String_comparison_exp"];
    externalLink?: GraphQLTypes["String_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    imageOriginalUrl?: GraphQLTypes["String_comparison_exp"];
    imagePreviewUrl?: GraphQLTypes["String_comparison_exp"];
    imageThumbnailUrl?: GraphQLTypes["String_comparison_exp"];
    imageUrl?: GraphQLTypes["String_comparison_exp"];
    name?: GraphQLTypes["String_comparison_exp"];
    openSeaResponse?: GraphQLTypes["jsonb_comparison_exp"];
    tokenAddress?: GraphQLTypes["String_comparison_exp"];
    tokenId?: GraphQLTypes["numeric_comparison_exp"];
  };
  /** Ordering options when selecting data from "open_sea_metadata". */
  ["open_sea_metadata_order_by"]: {
    animationOriginalUrl?: GraphQLTypes["order_by"];
    animationUrl?: GraphQLTypes["order_by"];
    description?: GraphQLTypes["order_by"];
    externalLink?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    imageOriginalUrl?: GraphQLTypes["order_by"];
    imagePreviewUrl?: GraphQLTypes["order_by"];
    imageThumbnailUrl?: GraphQLTypes["order_by"];
    imageUrl?: GraphQLTypes["order_by"];
    name?: GraphQLTypes["order_by"];
    openSeaResponse?: GraphQLTypes["order_by"];
    tokenAddress?: GraphQLTypes["order_by"];
    tokenId?: GraphQLTypes["order_by"];
  };
  /** select columns of table "open_sea_metadata" */
  ["open_sea_metadata_select_column"]: open_sea_metadata_select_column;
  /** column ordering options */
  ["order_by"]: order_by;
  /** columns and relationships of "party" */
  ["party"]: {
    __typename: "party";
    auctionId: GraphQLTypes["numeric"];
    blockNumber: GraphQLTypes["numeric"];
    createdBy: string;
    gatedToken?: string;
    gatedTokenAmount?: GraphQLTypes["numeric"];
    id: number;
    marketWrapperAddress: string;
    name: string;
    nftContractAddress: string;
    nftTokenId: GraphQLTypes["numeric"];
    /** An object relationship */
    open_sea_metadata?: GraphQLTypes["open_sea_metadata"];
    partyAddress: string;
    partyType: string;
    /** An array relationship */
    party_claims: Array<GraphQLTypes["party_claim"]>;
    /** An array relationship */
    party_contributions: Array<GraphQLTypes["party_contribution"]>;
    /** An aggregate relationship */
    party_contributions_aggregate: GraphQLTypes["party_contribution_aggregate"];
    /** An array relationship */
    party_createds: Array<GraphQLTypes["party_created"]>;
    /** An array relationship */
    party_finalizeds: Array<GraphQLTypes["party_finalized"]>;
    splitBasisPoints: GraphQLTypes["bigint"];
    splitRecipient: string;
    symbol: string;
    transactionHash: string;
    versionNumber: number;
  };
  /** Boolean expression to filter rows from the table "party". All fields are combined with a logical 'AND'. */
  ["party_bool_exp"]: {
    _and?: Array<GraphQLTypes["party_bool_exp"]>;
    _not?: GraphQLTypes["party_bool_exp"];
    _or?: Array<GraphQLTypes["party_bool_exp"]>;
    auctionId?: GraphQLTypes["numeric_comparison_exp"];
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    createdBy?: GraphQLTypes["String_comparison_exp"];
    gatedToken?: GraphQLTypes["String_comparison_exp"];
    gatedTokenAmount?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    marketWrapperAddress?: GraphQLTypes["String_comparison_exp"];
    name?: GraphQLTypes["String_comparison_exp"];
    nftContractAddress?: GraphQLTypes["String_comparison_exp"];
    nftTokenId?: GraphQLTypes["numeric_comparison_exp"];
    open_sea_metadata?: GraphQLTypes["open_sea_metadata_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyType?: GraphQLTypes["String_comparison_exp"];
    party_claims?: GraphQLTypes["party_claim_bool_exp"];
    party_contributions?: GraphQLTypes["party_contribution_bool_exp"];
    party_createds?: GraphQLTypes["party_created_bool_exp"];
    party_finalizeds?: GraphQLTypes["party_finalized_bool_exp"];
    splitBasisPoints?: GraphQLTypes["bigint_comparison_exp"];
    splitRecipient?: GraphQLTypes["String_comparison_exp"];
    symbol?: GraphQLTypes["String_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
    versionNumber?: GraphQLTypes["Int_comparison_exp"];
  };
  /** columns and relationships of "party_claim" */
  ["party_claim"]: {
    __typename: "party_claim";
    blockNumber: GraphQLTypes["numeric"];
    contributor: string;
    id: number;
    /** An object relationship */
    party?: GraphQLTypes["party"];
    partyAddress: string;
    partyId?: number;
    /** An object relationship */
    run?: GraphQLTypes["run"];
    runId?: number;
    totalEthContributedWei: GraphQLTypes["numeric"];
    totalEthReturnedWei: GraphQLTypes["numeric"];
    totalTokensReceivedWei: GraphQLTypes["numeric"];
    transactionHash: string;
  };
  /** order by aggregate values of table "party_claim" */
  ["party_claim_aggregate_order_by"]: {
    avg?: GraphQLTypes["party_claim_avg_order_by"];
    count?: GraphQLTypes["order_by"];
    max?: GraphQLTypes["party_claim_max_order_by"];
    min?: GraphQLTypes["party_claim_min_order_by"];
    stddev?: GraphQLTypes["party_claim_stddev_order_by"];
    stddev_pop?: GraphQLTypes["party_claim_stddev_pop_order_by"];
    stddev_samp?: GraphQLTypes["party_claim_stddev_samp_order_by"];
    sum?: GraphQLTypes["party_claim_sum_order_by"];
    var_pop?: GraphQLTypes["party_claim_var_pop_order_by"];
    var_samp?: GraphQLTypes["party_claim_var_samp_order_by"];
    variance?: GraphQLTypes["party_claim_variance_order_by"];
  };
  /** order by avg() on columns of table "party_claim" */
  ["party_claim_avg_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "party_claim". All fields are combined with a logical 'AND'. */
  ["party_claim_bool_exp"]: {
    _and?: Array<GraphQLTypes["party_claim_bool_exp"]>;
    _not?: GraphQLTypes["party_claim_bool_exp"];
    _or?: Array<GraphQLTypes["party_claim_bool_exp"]>;
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    contributor?: GraphQLTypes["String_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    party?: GraphQLTypes["party_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyId?: GraphQLTypes["Int_comparison_exp"];
    run?: GraphQLTypes["run_bool_exp"];
    runId?: GraphQLTypes["Int_comparison_exp"];
    totalEthContributedWei?: GraphQLTypes["numeric_comparison_exp"];
    totalEthReturnedWei?: GraphQLTypes["numeric_comparison_exp"];
    totalTokensReceivedWei?: GraphQLTypes["numeric_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
  };
  /** order by max() on columns of table "party_claim" */
  ["party_claim_max_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributor?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** order by min() on columns of table "party_claim" */
  ["party_claim_min_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributor?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** Ordering options when selecting data from "party_claim". */
  ["party_claim_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributor?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    party?: GraphQLTypes["party_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    run?: GraphQLTypes["run_order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** select columns of table "party_claim" */
  ["party_claim_select_column"]: party_claim_select_column;
  /** order by stddev() on columns of table "party_claim" */
  ["party_claim_stddev_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by stddev_pop() on columns of table "party_claim" */
  ["party_claim_stddev_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by stddev_samp() on columns of table "party_claim" */
  ["party_claim_stddev_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by sum() on columns of table "party_claim" */
  ["party_claim_sum_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by var_pop() on columns of table "party_claim" */
  ["party_claim_var_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by var_samp() on columns of table "party_claim" */
  ["party_claim_var_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** order by variance() on columns of table "party_claim" */
  ["party_claim_variance_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalEthContributedWei?: GraphQLTypes["order_by"];
    totalEthReturnedWei?: GraphQLTypes["order_by"];
    totalTokensReceivedWei?: GraphQLTypes["order_by"];
  };
  /** columns and relationships of "party_contribution" */
  ["party_contribution"]: {
    __typename: "party_contribution";
    blockNumber: GraphQLTypes["numeric"];
    contributedAmountWei: GraphQLTypes["numeric"];
    contributedBy: string;
    id: number;
    /** An object relationship */
    party?: GraphQLTypes["party"];
    partyAddress: string;
    partyId?: number;
    previousTotalContributedToPartyWei: GraphQLTypes["numeric"];
    /** An object relationship */
    run?: GraphQLTypes["run"];
    runId?: number;
    totalFromContributorWei: GraphQLTypes["numeric"];
    transactionHash: string;
  };
  /** aggregated selection of "party_contribution" */
  ["party_contribution_aggregate"]: {
    __typename: "party_contribution_aggregate";
    aggregate?: GraphQLTypes["party_contribution_aggregate_fields"];
    nodes: Array<GraphQLTypes["party_contribution"]>;
  };
  /** aggregate fields of "party_contribution" */
  ["party_contribution_aggregate_fields"]: {
    __typename: "party_contribution_aggregate_fields";
    avg?: GraphQLTypes["party_contribution_avg_fields"];
    count: number;
    max?: GraphQLTypes["party_contribution_max_fields"];
    min?: GraphQLTypes["party_contribution_min_fields"];
    stddev?: GraphQLTypes["party_contribution_stddev_fields"];
    stddev_pop?: GraphQLTypes["party_contribution_stddev_pop_fields"];
    stddev_samp?: GraphQLTypes["party_contribution_stddev_samp_fields"];
    sum?: GraphQLTypes["party_contribution_sum_fields"];
    var_pop?: GraphQLTypes["party_contribution_var_pop_fields"];
    var_samp?: GraphQLTypes["party_contribution_var_samp_fields"];
    variance?: GraphQLTypes["party_contribution_variance_fields"];
  };
  /** order by aggregate values of table "party_contribution" */
  ["party_contribution_aggregate_order_by"]: {
    avg?: GraphQLTypes["party_contribution_avg_order_by"];
    count?: GraphQLTypes["order_by"];
    max?: GraphQLTypes["party_contribution_max_order_by"];
    min?: GraphQLTypes["party_contribution_min_order_by"];
    stddev?: GraphQLTypes["party_contribution_stddev_order_by"];
    stddev_pop?: GraphQLTypes["party_contribution_stddev_pop_order_by"];
    stddev_samp?: GraphQLTypes["party_contribution_stddev_samp_order_by"];
    sum?: GraphQLTypes["party_contribution_sum_order_by"];
    var_pop?: GraphQLTypes["party_contribution_var_pop_order_by"];
    var_samp?: GraphQLTypes["party_contribution_var_samp_order_by"];
    variance?: GraphQLTypes["party_contribution_variance_order_by"];
  };
  /** aggregate avg on columns */
  ["party_contribution_avg_fields"]: {
    __typename: "party_contribution_avg_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by avg() on columns of table "party_contribution" */
  ["party_contribution_avg_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "party_contribution". All fields are combined with a logical 'AND'. */
  ["party_contribution_bool_exp"]: {
    _and?: Array<GraphQLTypes["party_contribution_bool_exp"]>;
    _not?: GraphQLTypes["party_contribution_bool_exp"];
    _or?: Array<GraphQLTypes["party_contribution_bool_exp"]>;
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    contributedAmountWei?: GraphQLTypes["numeric_comparison_exp"];
    contributedBy?: GraphQLTypes["String_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    party?: GraphQLTypes["party_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyId?: GraphQLTypes["Int_comparison_exp"];
    previousTotalContributedToPartyWei?: GraphQLTypes["numeric_comparison_exp"];
    run?: GraphQLTypes["run_bool_exp"];
    runId?: GraphQLTypes["Int_comparison_exp"];
    totalFromContributorWei?: GraphQLTypes["numeric_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
  };
  /** aggregate max on columns */
  ["party_contribution_max_fields"]: {
    __typename: "party_contribution_max_fields";
    blockNumber?: GraphQLTypes["numeric"];
    contributedAmountWei?: GraphQLTypes["numeric"];
    contributedBy?: string;
    id?: number;
    partyAddress?: string;
    partyId?: number;
    previousTotalContributedToPartyWei?: GraphQLTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: GraphQLTypes["numeric"];
    transactionHash?: string;
  };
  /** order by max() on columns of table "party_contribution" */
  ["party_contribution_max_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    contributedBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** aggregate min on columns */
  ["party_contribution_min_fields"]: {
    __typename: "party_contribution_min_fields";
    blockNumber?: GraphQLTypes["numeric"];
    contributedAmountWei?: GraphQLTypes["numeric"];
    contributedBy?: string;
    id?: number;
    partyAddress?: string;
    partyId?: number;
    previousTotalContributedToPartyWei?: GraphQLTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: GraphQLTypes["numeric"];
    transactionHash?: string;
  };
  /** order by min() on columns of table "party_contribution" */
  ["party_contribution_min_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    contributedBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** Ordering options when selecting data from "party_contribution". */
  ["party_contribution_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    contributedBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    party?: GraphQLTypes["party_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    run?: GraphQLTypes["run_order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** select columns of table "party_contribution" */
  ["party_contribution_select_column"]: party_contribution_select_column;
  /** aggregate stddev on columns */
  ["party_contribution_stddev_fields"]: {
    __typename: "party_contribution_stddev_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev() on columns of table "party_contribution" */
  ["party_contribution_stddev_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate stddev_pop on columns */
  ["party_contribution_stddev_pop_fields"]: {
    __typename: "party_contribution_stddev_pop_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev_pop() on columns of table "party_contribution" */
  ["party_contribution_stddev_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate stddev_samp on columns */
  ["party_contribution_stddev_samp_fields"]: {
    __typename: "party_contribution_stddev_samp_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by stddev_samp() on columns of table "party_contribution" */
  ["party_contribution_stddev_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate sum on columns */
  ["party_contribution_sum_fields"]: {
    __typename: "party_contribution_sum_fields";
    blockNumber?: GraphQLTypes["numeric"];
    contributedAmountWei?: GraphQLTypes["numeric"];
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: GraphQLTypes["numeric"];
    runId?: number;
    totalFromContributorWei?: GraphQLTypes["numeric"];
  };
  /** order by sum() on columns of table "party_contribution" */
  ["party_contribution_sum_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate var_pop on columns */
  ["party_contribution_var_pop_fields"]: {
    __typename: "party_contribution_var_pop_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by var_pop() on columns of table "party_contribution" */
  ["party_contribution_var_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate var_samp on columns */
  ["party_contribution_var_samp_fields"]: {
    __typename: "party_contribution_var_samp_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by var_samp() on columns of table "party_contribution" */
  ["party_contribution_var_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** aggregate variance on columns */
  ["party_contribution_variance_fields"]: {
    __typename: "party_contribution_variance_fields";
    blockNumber?: number;
    contributedAmountWei?: number;
    id?: number;
    partyId?: number;
    previousTotalContributedToPartyWei?: number;
    runId?: number;
    totalFromContributorWei?: number;
  };
  /** order by variance() on columns of table "party_contribution" */
  ["party_contribution_variance_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    contributedAmountWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    previousTotalContributedToPartyWei?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalFromContributorWei?: GraphQLTypes["order_by"];
  };
  /** columns and relationships of "party_created" */
  ["party_created"]: {
    __typename: "party_created";
    blockNumber: GraphQLTypes["numeric"];
    createdBy: string;
    id: number;
    /** An object relationship */
    party?: GraphQLTypes["party"];
    partyAddress: string;
    partyId?: number;
    /** An object relationship */
    run?: GraphQLTypes["run"];
    runId?: number;
    transactionHash: string;
  };
  /** order by aggregate values of table "party_created" */
  ["party_created_aggregate_order_by"]: {
    avg?: GraphQLTypes["party_created_avg_order_by"];
    count?: GraphQLTypes["order_by"];
    max?: GraphQLTypes["party_created_max_order_by"];
    min?: GraphQLTypes["party_created_min_order_by"];
    stddev?: GraphQLTypes["party_created_stddev_order_by"];
    stddev_pop?: GraphQLTypes["party_created_stddev_pop_order_by"];
    stddev_samp?: GraphQLTypes["party_created_stddev_samp_order_by"];
    sum?: GraphQLTypes["party_created_sum_order_by"];
    var_pop?: GraphQLTypes["party_created_var_pop_order_by"];
    var_samp?: GraphQLTypes["party_created_var_samp_order_by"];
    variance?: GraphQLTypes["party_created_variance_order_by"];
  };
  /** order by avg() on columns of table "party_created" */
  ["party_created_avg_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "party_created". All fields are combined with a logical 'AND'. */
  ["party_created_bool_exp"]: {
    _and?: Array<GraphQLTypes["party_created_bool_exp"]>;
    _not?: GraphQLTypes["party_created_bool_exp"];
    _or?: Array<GraphQLTypes["party_created_bool_exp"]>;
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    createdBy?: GraphQLTypes["String_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    party?: GraphQLTypes["party_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyId?: GraphQLTypes["Int_comparison_exp"];
    run?: GraphQLTypes["run_bool_exp"];
    runId?: GraphQLTypes["Int_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
  };
  /** order by max() on columns of table "party_created" */
  ["party_created_max_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    createdBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** order by min() on columns of table "party_created" */
  ["party_created_min_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    createdBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** Ordering options when selecting data from "party_created". */
  ["party_created_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    createdBy?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    party?: GraphQLTypes["party_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    run?: GraphQLTypes["run_order_by"];
    runId?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
  };
  /** select columns of table "party_created" */
  ["party_created_select_column"]: party_created_select_column;
  /** order by stddev() on columns of table "party_created" */
  ["party_created_stddev_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by stddev_pop() on columns of table "party_created" */
  ["party_created_stddev_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by stddev_samp() on columns of table "party_created" */
  ["party_created_stddev_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by sum() on columns of table "party_created" */
  ["party_created_sum_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by var_pop() on columns of table "party_created" */
  ["party_created_var_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by var_samp() on columns of table "party_created" */
  ["party_created_var_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** order by variance() on columns of table "party_created" */
  ["party_created_variance_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
  };
  /** columns and relationships of "party_finalized" */
  ["party_finalized"]: {
    __typename: "party_finalized";
    blockNumber: GraphQLTypes["numeric"];
    feeWei: GraphQLTypes["numeric"];
    id: number;
    /** An object relationship */
    party?: GraphQLTypes["party"];
    partyAddress: string;
    partyId?: number;
    result: GraphQLTypes["bigint"];
    /** An object relationship */
    run?: GraphQLTypes["run"];
    runId?: number;
    tokenVault: string;
    totalContributedWei: GraphQLTypes["numeric"];
    totalSpentWei: GraphQLTypes["numeric"];
    transactionHash: string;
    versionNumber: number;
  };
  /** order by aggregate values of table "party_finalized" */
  ["party_finalized_aggregate_order_by"]: {
    avg?: GraphQLTypes["party_finalized_avg_order_by"];
    count?: GraphQLTypes["order_by"];
    max?: GraphQLTypes["party_finalized_max_order_by"];
    min?: GraphQLTypes["party_finalized_min_order_by"];
    stddev?: GraphQLTypes["party_finalized_stddev_order_by"];
    stddev_pop?: GraphQLTypes["party_finalized_stddev_pop_order_by"];
    stddev_samp?: GraphQLTypes["party_finalized_stddev_samp_order_by"];
    sum?: GraphQLTypes["party_finalized_sum_order_by"];
    var_pop?: GraphQLTypes["party_finalized_var_pop_order_by"];
    var_samp?: GraphQLTypes["party_finalized_var_samp_order_by"];
    variance?: GraphQLTypes["party_finalized_variance_order_by"];
  };
  /** order by avg() on columns of table "party_finalized" */
  ["party_finalized_avg_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** Boolean expression to filter rows from the table "party_finalized". All fields are combined with a logical 'AND'. */
  ["party_finalized_bool_exp"]: {
    _and?: Array<GraphQLTypes["party_finalized_bool_exp"]>;
    _not?: GraphQLTypes["party_finalized_bool_exp"];
    _or?: Array<GraphQLTypes["party_finalized_bool_exp"]>;
    blockNumber?: GraphQLTypes["numeric_comparison_exp"];
    feeWei?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    party?: GraphQLTypes["party_bool_exp"];
    partyAddress?: GraphQLTypes["String_comparison_exp"];
    partyId?: GraphQLTypes["Int_comparison_exp"];
    result?: GraphQLTypes["bigint_comparison_exp"];
    run?: GraphQLTypes["run_bool_exp"];
    runId?: GraphQLTypes["Int_comparison_exp"];
    tokenVault?: GraphQLTypes["String_comparison_exp"];
    totalContributedWei?: GraphQLTypes["numeric_comparison_exp"];
    totalSpentWei?: GraphQLTypes["numeric_comparison_exp"];
    transactionHash?: GraphQLTypes["String_comparison_exp"];
    versionNumber?: GraphQLTypes["Int_comparison_exp"];
  };
  /** order by max() on columns of table "party_finalized" */
  ["party_finalized_max_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    tokenVault?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by min() on columns of table "party_finalized" */
  ["party_finalized_min_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    tokenVault?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** Ordering options when selecting data from "party_finalized". */
  ["party_finalized_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    party?: GraphQLTypes["party_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    run?: GraphQLTypes["run_order_by"];
    runId?: GraphQLTypes["order_by"];
    tokenVault?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** select columns of table "party_finalized" */
  ["party_finalized_select_column"]: party_finalized_select_column;
  /** order by stddev() on columns of table "party_finalized" */
  ["party_finalized_stddev_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by stddev_pop() on columns of table "party_finalized" */
  ["party_finalized_stddev_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by stddev_samp() on columns of table "party_finalized" */
  ["party_finalized_stddev_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by sum() on columns of table "party_finalized" */
  ["party_finalized_sum_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by var_pop() on columns of table "party_finalized" */
  ["party_finalized_var_pop_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by var_samp() on columns of table "party_finalized" */
  ["party_finalized_var_samp_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** order by variance() on columns of table "party_finalized" */
  ["party_finalized_variance_order_by"]: {
    blockNumber?: GraphQLTypes["order_by"];
    feeWei?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    partyId?: GraphQLTypes["order_by"];
    result?: GraphQLTypes["order_by"];
    runId?: GraphQLTypes["order_by"];
    totalContributedWei?: GraphQLTypes["order_by"];
    totalSpentWei?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** Ordering options when selecting data from "party". */
  ["party_order_by"]: {
    auctionId?: GraphQLTypes["order_by"];
    blockNumber?: GraphQLTypes["order_by"];
    createdBy?: GraphQLTypes["order_by"];
    gatedToken?: GraphQLTypes["order_by"];
    gatedTokenAmount?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    marketWrapperAddress?: GraphQLTypes["order_by"];
    name?: GraphQLTypes["order_by"];
    nftContractAddress?: GraphQLTypes["order_by"];
    nftTokenId?: GraphQLTypes["order_by"];
    open_sea_metadata?: GraphQLTypes["open_sea_metadata_order_by"];
    partyAddress?: GraphQLTypes["order_by"];
    partyType?: GraphQLTypes["order_by"];
    party_claims_aggregate?: GraphQLTypes["party_claim_aggregate_order_by"];
    party_contributions_aggregate?: GraphQLTypes["party_contribution_aggregate_order_by"];
    party_createds_aggregate?: GraphQLTypes["party_created_aggregate_order_by"];
    party_finalizeds_aggregate?: GraphQLTypes["party_finalized_aggregate_order_by"];
    splitBasisPoints?: GraphQLTypes["order_by"];
    splitRecipient?: GraphQLTypes["order_by"];
    symbol?: GraphQLTypes["order_by"];
    transactionHash?: GraphQLTypes["order_by"];
    versionNumber?: GraphQLTypes["order_by"];
  };
  /** select columns of table "party" */
  ["party_select_column"]: party_select_column;
  ["query_root"]: {
    __typename: "query_root";
    /** fetch data from the table: "bid" */
    bid: Array<GraphQLTypes["bid"]>;
    /** fetch data from the table: "bid" using primary key columns */
    bid_by_pk?: GraphQLTypes["bid"];
    /** fetch data from the table: "block" */
    block: Array<GraphQLTypes["block"]>;
    /** fetch data from the table: "block" using primary key columns */
    block_by_pk?: GraphQLTypes["block"];
    /** fetch data from the table: "ens_lookup" */
    ens_lookup: Array<GraphQLTypes["ens_lookup"]>;
    /** fetch data from the table: "ens_lookup" using primary key columns */
    ens_lookup_by_pk?: GraphQLTypes["ens_lookup"];
    /** fetch data from the table: "eth_price" */
    eth_price: Array<GraphQLTypes["eth_price"]>;
    /** fetch data from the table: "eth_price" using primary key columns */
    eth_price_by_pk?: GraphQLTypes["eth_price"];
    /** fetch data from the table: "open_sea_metadata" */
    open_sea_metadata: Array<GraphQLTypes["open_sea_metadata"]>;
    /** fetch data from the table: "open_sea_metadata" using primary key columns */
    open_sea_metadata_by_pk?: GraphQLTypes["open_sea_metadata"];
    /** fetch data from the table: "party" */
    party: Array<GraphQLTypes["party"]>;
    /** fetch data from the table: "party" using primary key columns */
    party_by_pk?: GraphQLTypes["party"];
    /** fetch data from the table: "party_claim" */
    party_claim: Array<GraphQLTypes["party_claim"]>;
    /** fetch data from the table: "party_claim" using primary key columns */
    party_claim_by_pk?: GraphQLTypes["party_claim"];
    /** fetch data from the table: "party_contribution" */
    party_contribution: Array<GraphQLTypes["party_contribution"]>;
    /** fetch aggregated fields from the table: "party_contribution" */
    party_contribution_aggregate: GraphQLTypes["party_contribution_aggregate"];
    /** fetch data from the table: "party_contribution" using primary key columns */
    party_contribution_by_pk?: GraphQLTypes["party_contribution"];
    /** fetch data from the table: "party_created" */
    party_created: Array<GraphQLTypes["party_created"]>;
    /** fetch data from the table: "party_created" using primary key columns */
    party_created_by_pk?: GraphQLTypes["party_created"];
    /** fetch data from the table: "party_finalized" */
    party_finalized: Array<GraphQLTypes["party_finalized"]>;
    /** fetch data from the table: "party_finalized" using primary key columns */
    party_finalized_by_pk?: GraphQLTypes["party_finalized"];
    /** fetch data from the table: "run" */
    run: Array<GraphQLTypes["run"]>;
    /** fetch data from the table: "run" using primary key columns */
    run_by_pk?: GraphQLTypes["run"];
  };
  /** columns and relationships of "run" */
  ["run"]: {
    __typename: "run";
    fromBlock: GraphQLTypes["numeric"];
    id: number;
    ranAt: GraphQLTypes["bigint"];
    runTime: GraphQLTypes["numeric"];
    status: string;
    toBlock: GraphQLTypes["numeric"];
  };
  /** Boolean expression to filter rows from the table "run". All fields are combined with a logical 'AND'. */
  ["run_bool_exp"]: {
    _and?: Array<GraphQLTypes["run_bool_exp"]>;
    _not?: GraphQLTypes["run_bool_exp"];
    _or?: Array<GraphQLTypes["run_bool_exp"]>;
    fromBlock?: GraphQLTypes["numeric_comparison_exp"];
    id?: GraphQLTypes["Int_comparison_exp"];
    ranAt?: GraphQLTypes["bigint_comparison_exp"];
    runTime?: GraphQLTypes["numeric_comparison_exp"];
    status?: GraphQLTypes["String_comparison_exp"];
    toBlock?: GraphQLTypes["numeric_comparison_exp"];
  };
  /** Ordering options when selecting data from "run". */
  ["run_order_by"]: {
    fromBlock?: GraphQLTypes["order_by"];
    id?: GraphQLTypes["order_by"];
    ranAt?: GraphQLTypes["order_by"];
    runTime?: GraphQLTypes["order_by"];
    status?: GraphQLTypes["order_by"];
    toBlock?: GraphQLTypes["order_by"];
  };
  /** select columns of table "run" */
  ["run_select_column"]: run_select_column;
  ["subscription_root"]: {
    __typename: "subscription_root";
    /** fetch data from the table: "bid" */
    bid: Array<GraphQLTypes["bid"]>;
    /** fetch data from the table: "bid" using primary key columns */
    bid_by_pk?: GraphQLTypes["bid"];
    /** fetch data from the table: "block" */
    block: Array<GraphQLTypes["block"]>;
    /** fetch data from the table: "block" using primary key columns */
    block_by_pk?: GraphQLTypes["block"];
    /** fetch data from the table: "ens_lookup" */
    ens_lookup: Array<GraphQLTypes["ens_lookup"]>;
    /** fetch data from the table: "ens_lookup" using primary key columns */
    ens_lookup_by_pk?: GraphQLTypes["ens_lookup"];
    /** fetch data from the table: "eth_price" */
    eth_price: Array<GraphQLTypes["eth_price"]>;
    /** fetch data from the table: "eth_price" using primary key columns */
    eth_price_by_pk?: GraphQLTypes["eth_price"];
    /** fetch data from the table: "open_sea_metadata" */
    open_sea_metadata: Array<GraphQLTypes["open_sea_metadata"]>;
    /** fetch data from the table: "open_sea_metadata" using primary key columns */
    open_sea_metadata_by_pk?: GraphQLTypes["open_sea_metadata"];
    /** fetch data from the table: "party" */
    party: Array<GraphQLTypes["party"]>;
    /** fetch data from the table: "party" using primary key columns */
    party_by_pk?: GraphQLTypes["party"];
    /** fetch data from the table: "party_claim" */
    party_claim: Array<GraphQLTypes["party_claim"]>;
    /** fetch data from the table: "party_claim" using primary key columns */
    party_claim_by_pk?: GraphQLTypes["party_claim"];
    /** fetch data from the table: "party_contribution" */
    party_contribution: Array<GraphQLTypes["party_contribution"]>;
    /** fetch aggregated fields from the table: "party_contribution" */
    party_contribution_aggregate: GraphQLTypes["party_contribution_aggregate"];
    /** fetch data from the table: "party_contribution" using primary key columns */
    party_contribution_by_pk?: GraphQLTypes["party_contribution"];
    /** fetch data from the table: "party_created" */
    party_created: Array<GraphQLTypes["party_created"]>;
    /** fetch data from the table: "party_created" using primary key columns */
    party_created_by_pk?: GraphQLTypes["party_created"];
    /** fetch data from the table: "party_finalized" */
    party_finalized: Array<GraphQLTypes["party_finalized"]>;
    /** fetch data from the table: "party_finalized" using primary key columns */
    party_finalized_by_pk?: GraphQLTypes["party_finalized"];
    /** fetch data from the table: "run" */
    run: Array<GraphQLTypes["run"]>;
    /** fetch data from the table: "run" using primary key columns */
    run_by_pk?: GraphQLTypes["run"];
  };
};
/** select columns of table "bid" */
export enum bid_select_column {
  amount = "amount",
  blockNumber = "blockNumber",
  id = "id",
  partyAddress = "partyAddress",
  partyId = "partyId",
  runId = "runId",
  transactionHash = "transactionHash"
}
/** select columns of table "block" */
export enum block_select_column {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  id = "id"
}
/** select columns of table "ens_lookup" */
export enum ens_lookup_select_column {
  address = "address",
  ensName = "ensName",
  fetchedAt = "fetchedAt",
  found = "found",
  id = "id"
}
/** select columns of table "eth_price" */
export enum eth_price_select_column {
  fetchedAt = "fetchedAt",
  id = "id",
  priceUsd = "priceUsd"
}
/** select columns of table "open_sea_metadata" */
export enum open_sea_metadata_select_column {
  animationOriginalUrl = "animationOriginalUrl",
  animationUrl = "animationUrl",
  description = "description",
  externalLink = "externalLink",
  id = "id",
  imageOriginalUrl = "imageOriginalUrl",
  imagePreviewUrl = "imagePreviewUrl",
  imageThumbnailUrl = "imageThumbnailUrl",
  imageUrl = "imageUrl",
  name = "name",
  openSeaResponse = "openSeaResponse",
  tokenAddress = "tokenAddress",
  tokenId = "tokenId"
}
/** column ordering options */
export enum order_by {
  asc = "asc",
  asc_nulls_first = "asc_nulls_first",
  asc_nulls_last = "asc_nulls_last",
  desc = "desc",
  desc_nulls_first = "desc_nulls_first",
  desc_nulls_last = "desc_nulls_last"
}
/** select columns of table "party_claim" */
export enum party_claim_select_column {
  blockNumber = "blockNumber",
  contributor = "contributor",
  id = "id",
  partyAddress = "partyAddress",
  partyId = "partyId",
  runId = "runId",
  totalEthContributedWei = "totalEthContributedWei",
  totalEthReturnedWei = "totalEthReturnedWei",
  totalTokensReceivedWei = "totalTokensReceivedWei",
  transactionHash = "transactionHash"
}
/** select columns of table "party_contribution" */
export enum party_contribution_select_column {
  blockNumber = "blockNumber",
  contributedAmountWei = "contributedAmountWei",
  contributedBy = "contributedBy",
  id = "id",
  partyAddress = "partyAddress",
  partyId = "partyId",
  previousTotalContributedToPartyWei = "previousTotalContributedToPartyWei",
  runId = "runId",
  totalFromContributorWei = "totalFromContributorWei",
  transactionHash = "transactionHash"
}
/** select columns of table "party_created" */
export enum party_created_select_column {
  blockNumber = "blockNumber",
  createdBy = "createdBy",
  id = "id",
  partyAddress = "partyAddress",
  partyId = "partyId",
  runId = "runId",
  transactionHash = "transactionHash"
}
/** select columns of table "party_finalized" */
export enum party_finalized_select_column {
  blockNumber = "blockNumber",
  feeWei = "feeWei",
  id = "id",
  partyAddress = "partyAddress",
  partyId = "partyId",
  result = "result",
  runId = "runId",
  tokenVault = "tokenVault",
  totalContributedWei = "totalContributedWei",
  totalSpentWei = "totalSpentWei",
  transactionHash = "transactionHash",
  versionNumber = "versionNumber"
}
/** select columns of table "party" */
export enum party_select_column {
  auctionId = "auctionId",
  blockNumber = "blockNumber",
  createdBy = "createdBy",
  gatedToken = "gatedToken",
  gatedTokenAmount = "gatedTokenAmount",
  id = "id",
  marketWrapperAddress = "marketWrapperAddress",
  name = "name",
  nftContractAddress = "nftContractAddress",
  nftTokenId = "nftTokenId",
  partyAddress = "partyAddress",
  partyType = "partyType",
  splitBasisPoints = "splitBasisPoints",
  splitRecipient = "splitRecipient",
  symbol = "symbol",
  transactionHash = "transactionHash",
  versionNumber = "versionNumber"
}
/** select columns of table "run" */
export enum run_select_column {
  fromBlock = "fromBlock",
  id = "id",
  ranAt = "ranAt",
  runTime = "runTime",
  status = "status",
  toBlock = "toBlock"
}
export class GraphQLError extends Error {
  constructor(public response: GraphQLResponse) {
    super("");
    console.error(response);
  }
  toString() {
    return "GraphQL Response Error";
  }
}

export type UnwrapPromise<T> = T extends Promise<infer R> ? R : T;
export type ZeusState<T extends (...args: any[]) => Promise<any>> = NonNullable<
  UnwrapPromise<ReturnType<T>>
>;
export type ZeusHook<
  T extends (
    ...args: any[]
  ) => Record<string, (...args: any[]) => Promise<any>>,
  N extends keyof ReturnType<T>
> = ZeusState<ReturnType<T>[N]>;

type WithTypeNameValue<T> = T & {
  __typename?: true;
};
type AliasType<T> = WithTypeNameValue<T> & {
  __alias?: Record<string, WithTypeNameValue<T>>;
};
export interface GraphQLResponse {
  data?: Record<string, any>;
  errors?: Array<{
    message: string;
  }>;
}
type DeepAnify<T> = {
  [P in keyof T]?: any;
};
type IsPayLoad<T> = T extends [any, infer PayLoad] ? PayLoad : T;
type IsArray<T, U> = T extends Array<infer R>
  ? InputType<R, U>[]
  : InputType<T, U>;
type FlattenArray<T> = T extends Array<infer R> ? R : T;

type IsInterfaced<SRC extends DeepAnify<DST>, DST> = FlattenArray<SRC> extends
  | ZEUS_INTERFACES
  | ZEUS_UNIONS
  ? {
      [P in keyof SRC]: SRC[P] extends "__union" & infer R
        ? P extends keyof DST
          ? IsArray<
              R,
              "__typename" extends keyof DST
                ? DST[P] & { __typename: true }
                : DST[P]
            >
          : {}
        : never;
    }[keyof DST] & {
      [P in keyof Omit<
        Pick<
          SRC,
          {
            [P in keyof DST]: SRC[P] extends "__union" & infer R ? never : P;
          }[keyof DST]
        >,
        "__typename"
      >]: IsPayLoad<DST[P]> extends true ? SRC[P] : IsArray<SRC[P], DST[P]>;
    }
  : {
      [P in keyof Pick<SRC, keyof DST>]: IsPayLoad<DST[P]> extends true
        ? SRC[P]
        : IsArray<SRC[P], DST[P]>;
    };

export type MapType<SRC, DST> = SRC extends DeepAnify<DST>
  ? IsInterfaced<SRC, DST>
  : never;
export type InputType<SRC, DST> = IsPayLoad<DST> extends { __alias: infer R }
  ? {
      [P in keyof R]: MapType<SRC, R[P]>;
    } & MapType<SRC, Omit<IsPayLoad<DST>, "__alias">>
  : MapType<SRC, IsPayLoad<DST>>;
type Func<P extends any[], R> = (...args: P) => R;
type AnyFunc = Func<any, any>;
export type ArgsType<F extends AnyFunc> = F extends Func<infer P, any>
  ? P
  : never;
export type OperationOptions = {
  variables?: Record<string, any>;
  operationName?: string;
};
export type OperationToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions
) => Promise<InputType<T, Z>>;
export type SubscriptionToGraphQL<V, T> = <Z extends V>(
  o: Z | V,
  options?: OperationOptions
) => {
  ws: WebSocket;
  on: (fn: (args: InputType<T, Z>) => void) => void;
  off: (
    fn: (e: {
      data?: InputType<T, Z>;
      code?: number;
      reason?: string;
      message?: string;
    }) => void
  ) => void;
  error: (
    fn: (e: { data?: InputType<T, Z>; errors?: string[] }) => void
  ) => void;
  open: () => void;
};
export type SelectionFunction<V> = <T>(t: T | V) => T;
export type fetchOptions = ArgsType<typeof fetch>;
type websocketOptions = typeof WebSocket extends new (
  ...args: infer R
) => WebSocket
  ? R
  : never;
export type chainOptions =
  | [fetchOptions[0], fetchOptions[1] & { websocket?: websocketOptions }]
  | [fetchOptions[0]];
export type FetchFunction = (
  query: string,
  variables?: Record<string, any>
) => Promise<any>;
export type SubscriptionFunction = (query: string) => void;
type NotUndefined<T> = T extends undefined ? never : T;
export type ResolverType<F> = NotUndefined<
  F extends [infer ARGS, any] ? ARGS : undefined
>;

export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;

export const ScalarResolver = (scalar: string, value: any) => {
  switch (scalar) {
    case "String":
      return `${JSON.stringify(value)}`;
    case "Int":
      return `${value}`;
    case "Float":
      return `${value}`;
    case "Boolean":
      return `${value}`;
    case "ID":
      return `"${value}"`;
    case "enum":
      return `${value}`;
    case "scalar":
      return `${value}`;
    default:
      return false;
  }
};

export const TypesPropsResolver = ({
  value,
  type,
  name,
  key,
  blockArrays
}: {
  value: any;
  type: string;
  name: string;
  key?: string;
  blockArrays?: boolean;
}): string => {
  if (value === null) {
    return `null`;
  }
  let resolvedValue = AllTypesProps[type][name];
  if (key) {
    resolvedValue = resolvedValue[key];
  }
  if (!resolvedValue) {
    throw new Error(`Cannot resolve ${type} ${name}${key ? ` ${key}` : ""}`);
  }
  const typeResolved = resolvedValue.type;
  const isArray = resolvedValue.array;
  const isArrayRequired = resolvedValue.arrayRequired;
  if (typeof value === "string" && value.startsWith(`ZEUS_VAR$`)) {
    const isRequired = resolvedValue.required ? "!" : "";
    let t = `${typeResolved}`;
    if (isArray) {
      if (isRequired) {
        t = `${t}!`;
      }
      t = `[${t}]`;
      if (isArrayRequired) {
        t = `${t}!`;
      }
    } else {
      if (isRequired) {
        t = `${t}!`;
      }
    }
    return `\$${value.split(`ZEUS_VAR$`)[1]}__ZEUS_VAR__${t}`;
  }
  if (isArray && !blockArrays) {
    return `[${value
      .map((v: any) =>
        TypesPropsResolver({ value: v, type, name, key, blockArrays: true })
      )
      .join(",")}]`;
  }
  const reslovedScalar = ScalarResolver(typeResolved, value);
  if (!reslovedScalar) {
    const resolvedType = AllTypesProps[typeResolved];
    if (typeof resolvedType === "object") {
      const argsKeys = Object.keys(resolvedType);
      return `{${argsKeys
        .filter((ak) => value[ak] !== undefined)
        .map(
          (ak) =>
            `${ak}:${TypesPropsResolver({
              value: value[ak],
              type: typeResolved,
              name: ak
            })}`
        )}}`;
    }
    return ScalarResolver(AllTypesProps[typeResolved], value) as string;
  }
  return reslovedScalar;
};

const isArrayFunction = (parent: string[], a: any[]) => {
  const [values, r] = a;
  const [mainKey, key, ...keys] = parent;
  const keyValues = Object.keys(values).filter(
    (k) => typeof values[k] !== "undefined"
  );

  if (!keys.length) {
    return keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: mainKey,
                name: key,
                key: v
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  }

  const [typeResolverKey] = keys.splice(keys.length - 1, 1);
  let valueToResolve = ReturnTypes[mainKey][key];
  for (const k of keys) {
    valueToResolve = ReturnTypes[valueToResolve][k];
  }

  const argumentString =
    keyValues.length > 0
      ? `(${keyValues
          .map(
            (v) =>
              `${v}:${TypesPropsResolver({
                value: values[v],
                type: valueToResolve,
                name: typeResolverKey,
                key: v
              })}`
          )
          .join(",")})${r ? traverseToSeekArrays(parent, r) : ""}`
      : traverseToSeekArrays(parent, r);
  return argumentString;
};

const resolveKV = (
  k: string,
  v: boolean | string | { [x: string]: boolean | string }
) =>
  typeof v === "boolean"
    ? k
    : typeof v === "object"
    ? `${k}{${objectToTree(v)}}`
    : `${k}${v}`;

const objectToTree = (o: { [x: string]: boolean | string }): string =>
  `{${Object.keys(o)
    .map((k) => `${resolveKV(k, o[k])}`)
    .join(" ")}}`;

const traverseToSeekArrays = (parent: string[], a?: any): string => {
  if (!a) return "";
  if (Object.keys(a).length === 0) {
    return "";
  }
  let b: Record<string, any> = {};
  if (Array.isArray(a)) {
    return isArrayFunction([...parent], a);
  } else {
    if (typeof a === "object") {
      Object.keys(a)
        .filter((k) => typeof a[k] !== "undefined")
        .forEach((k) => {
          if (k === "__alias") {
            Object.keys(a[k]).forEach((aliasKey) => {
              const aliasOperations = a[k][aliasKey];
              const aliasOperationName = Object.keys(aliasOperations)[0];
              const aliasOperation = aliasOperations[aliasOperationName];
              b[
                `${aliasOperationName}__alias__${aliasKey}: ${aliasOperationName}`
              ] = traverseToSeekArrays(
                [...parent, aliasOperationName],
                aliasOperation
              );
            });
          } else {
            b[k] = traverseToSeekArrays([...parent, k], a[k]);
          }
        });
    } else {
      return "";
    }
  }
  return objectToTree(b);
};

const buildQuery = (type: string, a?: Record<any, any>) =>
  traverseToSeekArrays([type], a);

const inspectVariables = (query: string) => {
  const regex = /\$\b\w*__ZEUS_VAR__\[?[^!^\]^\s^,^\)^\}]*[!]?[\]]?[!]?/g;
  let result;
  const AllVariables: string[] = [];
  while ((result = regex.exec(query))) {
    if (AllVariables.includes(result[0])) {
      continue;
    }
    AllVariables.push(result[0]);
  }
  if (!AllVariables.length) {
    return query;
  }
  let filteredQuery = query;
  AllVariables.forEach((variable) => {
    while (filteredQuery.includes(variable)) {
      filteredQuery = filteredQuery.replace(
        variable,
        variable.split("__ZEUS_VAR__")[0]
      );
    }
  });
  return `(${AllVariables.map((a) => a.split("__ZEUS_VAR__"))
    .map(([variableName, variableType]) => `${variableName}:${variableType}`)
    .join(", ")})${filteredQuery}`;
};

export const queryConstruct =
  (
    t: "query" | "mutation" | "subscription",
    tName: string,
    operationName?: string
  ) =>
  (o: Record<any, any>) =>
    `${t.toLowerCase()}${
      operationName ? " " + operationName : ""
    }${inspectVariables(buildQuery(tName, o))}`;

const fullChainConstruct =
  (fn: FetchFunction) =>
  (t: "query" | "mutation" | "subscription", tName: string) =>
  (o: Record<any, any>, options?: OperationOptions) =>
    fn(
      queryConstruct(t, tName, options?.operationName)(o),
      options?.variables
    ).then((r: any) => {
      seekForAliases(r);
      return r;
    });

export const fullChainConstructor = <
  F extends FetchFunction,
  R extends keyof ValueTypes
>(
  fn: F,
  operation: "query" | "mutation" | "subscription",
  key: R
) =>
  ((o, options) =>
    fullChainConstruct(fn)(operation, key)(
      o as any,
      options
    )) as OperationToGraphQL<ValueTypes[R], GraphQLTypes[R]>;

const fullSubscriptionConstruct =
  (fn: SubscriptionFunction) =>
  (t: "query" | "mutation" | "subscription", tName: string) =>
  (o: Record<any, any>, options?: OperationOptions) =>
    fn(queryConstruct(t, tName, options?.operationName)(o));

export const fullSubscriptionConstructor = <
  F extends SubscriptionFunction,
  R extends keyof ValueTypes
>(
  fn: F,
  operation: "query" | "mutation" | "subscription",
  key: R
) =>
  ((o, options) =>
    fullSubscriptionConstruct(fn)(operation, key)(
      o as any,
      options
    )) as SubscriptionToGraphQL<ValueTypes[R], GraphQLTypes[R]>;

const seekForAliases = (response: any) => {
  const traverseAlias = (value: any) => {
    if (Array.isArray(value)) {
      value.forEach(seekForAliases);
    } else {
      if (typeof value === "object") {
        seekForAliases(value);
      }
    }
  };
  if (typeof response === "object" && response) {
    const keys = Object.keys(response);
    if (keys.length < 1) {
      return;
    }
    keys.forEach((k) => {
      const value = response[k];
      if (k.indexOf("__alias__") !== -1) {
        const [operation, alias] = k.split("__alias__");
        response[alias] = {
          [operation]: value
        };
        delete response[k];
      }
      traverseAlias(value);
    });
  }
};

export const $ = (t: TemplateStringsArray): any => `ZEUS_VAR$${t.join("")}`;

export const resolverFor = <
  T extends keyof ValueTypes,
  Z extends keyof ValueTypes[T],
  Y extends (
    args: Required<ValueTypes[T]>[Z] extends [infer Input, any] ? Input : any,
    source: any
  ) => Z extends keyof ModelTypes[T]
    ? ModelTypes[T][Z] | Promise<ModelTypes[T][Z]>
    : any
>(
  type: T,
  field: Z,
  fn: Y
) => fn as (args?: any, source?: any) => any;

const handleFetchResponse = (
  response: Parameters<
    Extract<Parameters<ReturnType<typeof fetch>["then"]>[0], Function>
  >[0]
): Promise<GraphQLResponse> => {
  if (!response.ok) {
    return new Promise((_, reject) => {
      response
        .text()
        .then((text) => {
          try {
            reject(JSON.parse(text));
          } catch (err) {
            reject(text);
          }
        })
        .catch(reject);
    });
  }
  return response.json();
};

export const apiFetch =
  (options: fetchOptions) =>
  (query: string, variables: Record<string, any> = {}) => {
    let fetchFunction = fetch;
    let queryString = query;
    let fetchOptions = options[1] || {};
    if (fetchOptions.method && fetchOptions.method === "GET") {
      queryString = encodeURIComponent(query);
      return fetchFunction(`${options[0]}?query=${queryString}`, fetchOptions)
        .then(handleFetchResponse)
        .then((response: GraphQLResponse) => {
          if (response.errors) {
            throw new GraphQLError(response);
          }
          return response.data;
        });
    }
    return fetchFunction(`${options[0]}`, {
      body: JSON.stringify({ query: queryString, variables }),
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      ...fetchOptions
    })
      .then(handleFetchResponse)
      .then((response: GraphQLResponse) => {
        if (response.errors) {
          throw new GraphQLError(response);
        }
        return response.data;
      });
  };

export const apiSubscription = (options: chainOptions) => (query: string) => {
  try {
    const queryString = options[0] + "?query=" + encodeURIComponent(query);
    const wsString = queryString.replace("http", "ws");
    const host = (options.length > 1 && options[1]?.websocket?.[0]) || wsString;
    const webSocketOptions = options[1]?.websocket || [host];
    const ws = new WebSocket(...webSocketOptions);
    return {
      ws,
      on: (e: (args: any) => void) => {
        ws.onmessage = (event: any) => {
          if (event.data) {
            const parsed = JSON.parse(event.data);
            const data = parsed.data;
            if (data) {
              seekForAliases(data);
            }
            return e(data);
          }
        };
      },
      off: (e: (args: any) => void) => {
        ws.onclose = e;
      },
      error: (e: (args: any) => void) => {
        ws.onerror = e;
      },
      open: (e: () => void) => {
        ws.onopen = e;
      }
    };
  } catch {
    throw new Error("No websockets implemented");
  }
};

export const Thunder = (
  fn: FetchFunction,
  subscriptionFn: SubscriptionFunction
) => ({
  query: fullChainConstructor(fn, "query", "query_root"),
  subscription: fullSubscriptionConstructor(
    subscriptionFn,
    "subscription",
    "subscription_root"
  )
});

export const Chain = (...options: chainOptions) => ({
  query: fullChainConstructor(apiFetch(options), "query", "query_root"),
  subscription: fullSubscriptionConstructor(
    apiSubscription(options),
    "subscription",
    "subscription_root"
  )
});
export const Zeus = {
  query: (o: ValueTypes["query_root"], operationName?: string) =>
    queryConstruct("query", "query_root", operationName)(o),
  subscription: (o: ValueTypes["subscription_root"], operationName?: string) =>
    queryConstruct("subscription", "subscription_root", operationName)(o)
};
export const Selectors = {
  query: ZeusSelect<ValueTypes["query_root"]>(),
  subscription: ZeusSelect<ValueTypes["subscription_root"]>()
};

export const Gql = Chain("https://party-api.hasura.app/v1/graphql");
