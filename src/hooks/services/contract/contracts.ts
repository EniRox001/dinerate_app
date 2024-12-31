import { ZeroAddress } from 'ethers'
import { Contract } from '@ethersproject/contracts'
import { Web3Provider, JsonRpcSigner } from '@ethersproject/providers'
import { isAddress } from '@/functions/validate';

export const getSigner = (provider: Web3Provider, account: string): JsonRpcSigner => {
  return provider.getSigner(account).connectUnchecked();
}

export const getProviderOrSigner = (provider: Web3Provider, account?: string): Web3Provider | JsonRpcSigner => {
  return account ? getSigner(provider, account) : provider
}

export const getContract = (contractAddress: string, contractABI: any, provider: Web3Provider, account?: string): Contract => {
  if (!isAddress(contractAddress) || contractAddress === ZeroAddress) throw Error(`Invalid 'address' parameter '${contractAddress}'.`)
  
  return new Contract(contractAddress, contractABI, getProviderOrSigner(provider, account))
}