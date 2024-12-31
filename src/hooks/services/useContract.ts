import { Contract } from '@ethersproject/contracts';
import ERC20_TOKEN_ABI from '@/constants/abis/token.json';
import APP_ABI from "@/constants/abis/app-contract.json"
import { APP_CONTRACT } from '@/constants/addresses/app-contract'
import { Contract as StandardEthersContract } from 'ethers';
import { ZeroAddress } from 'ethers';
import { useWeb3React } from '@web3-react/core';
import { getContract } from './contract/contracts';
import { useMemo } from 'react';
import { getOfflineContract } from './contract/offlineContract';

export const useWeb3ReactContract = (contractAddress: string, contractABI: any): Contract | null => {
  const { account, provider } = useWeb3React();
  const contract = useMemo(() => {
    if (!contractAddress || contractAddress === ZeroAddress || !contractABI || !provider) return null;

    return getContract(contractAddress, contractABI, provider, account);
  }, [contractAddress, contractABI, provider, account]);

  return contract;
};

// USES STANDARD ETHERS PROVIDER FOR WHEN web3-react DOESN'T HAVE A PROVIDER TO RELY ON
// USED ONLY WHEN window.ethereum IS UNDEFINED (NO WALLET CONNECTION)
export const useStandardEthersContract = (contractAddress: string, contractABI: any): StandardEthersContract | null => {
  if (!contractAddress || contractAddress === ZeroAddress || !contractABI) return null;

  return getOfflineContract(contractAddress, contractABI);
};

export const useContract = (contractAddress: string, contractABI: any): Contract | StandardEthersContract | null => {
  const web3ReactContract = useWeb3ReactContract(contractAddress, contractABI);
  const standardEthersContract = useStandardEthersContract(contractAddress, contractABI);

  if (web3ReactContract) {
    return web3ReactContract;
  }

  return standardEthersContract;
};

export const useTokenContract = (tokenAddress: string): Contract | StandardEthersContract | null => {
  return useContract(tokenAddress, ERC20_TOKEN_ABI);
};

export const useAppContract = (): Contract | StandardEthersContract | null => {
  return useContract(APP_CONTRACT, APP_ABI);
};
