/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IERC20UniswapInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, value]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{ encode([who]: [string]): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([to, value]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([from, to, value]: [string, string, BigNumberish]): string;
    }>;
  };

  events: {
    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;
  };
}

export class IERC20Uniswap extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IERC20Uniswap;
  attach(addressOrName: string): IERC20Uniswap;
  deployed(): Promise<IERC20Uniswap>;

  on(event: EventFilter | string, listener: Listener): IERC20Uniswap;
  once(event: EventFilter | string, listener: Listener): IERC20Uniswap;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): IERC20Uniswap;
  removeAllListeners(eventName: EventFilter | string): IERC20Uniswap;
  removeListener(eventName: any, listener: Listener): IERC20Uniswap;

  interface: IERC20UniswapInterface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(who: string): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(who: string): Promise<BigNumber>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  filters: {
    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

    Transfer(from: string | null, to: string | null, value: null): EventFilter;
  };

  estimate: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    balanceOf(who: string): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(to: string, value: BigNumberish): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish
    ): Promise<BigNumber>;
  };
}
