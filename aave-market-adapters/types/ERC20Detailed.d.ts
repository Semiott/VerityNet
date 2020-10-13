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

interface ERC20DetailedInterface extends Interface {
  functions: {
    allowance: TypedFunctionDescription<{
      encode([owner, spender]: [string, string]): string;
    }>;

    approve: TypedFunctionDescription<{
      encode([spender, amount]: [string, BigNumberish]): string;
    }>;

    balanceOf: TypedFunctionDescription<{
      encode([account]: [string]): string;
    }>;

    decimals: TypedFunctionDescription<{ encode([]: []): string }>;

    name: TypedFunctionDescription<{ encode([]: []): string }>;

    symbol: TypedFunctionDescription<{ encode([]: []): string }>;

    totalSupply: TypedFunctionDescription<{ encode([]: []): string }>;

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([sender, recipient, amount]: [
        string,
        string,
        BigNumberish
      ]): string;
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

export class ERC20Detailed extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC20Detailed;
  attach(addressOrName: string): ERC20Detailed;
  deployed(): Promise<ERC20Detailed>;

  on(event: EventFilter | string, listener: Listener): ERC20Detailed;
  once(event: EventFilter | string, listener: Listener): ERC20Detailed;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): ERC20Detailed;
  removeAllListeners(eventName: EventFilter | string): ERC20Detailed;
  removeListener(eventName: any, listener: Listener): ERC20Detailed;

  interface: ERC20DetailedInterface;

  functions: {
    allowance(owner: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    balanceOf(account: string): Promise<BigNumber>;

    decimals(): Promise<number>;

    name(): Promise<string>;

    symbol(): Promise<string>;

    totalSupply(): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  allowance(owner: string, spender: string): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  balanceOf(account: string): Promise<BigNumber>;

  decimals(): Promise<number>;

  name(): Promise<string>;

  symbol(): Promise<string>;

  totalSupply(): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
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

    approve(spender: string, amount: BigNumberish): Promise<BigNumber>;

    balanceOf(account: string): Promise<BigNumber>;

    decimals(): Promise<BigNumber>;

    name(): Promise<BigNumber>;

    symbol(): Promise<BigNumber>;

    totalSupply(): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
