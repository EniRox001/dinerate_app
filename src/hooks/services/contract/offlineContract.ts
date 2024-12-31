import RPC from "@/lib/rpc-list"
import { defaultChainId } from "@/lib/services/chain-config"
import { Contract, ethers, isAddress, JsonRpcSigner, Provider, ZeroAddress } from "ethers"
import { useEffect, useState } from "react"

const GetActiveProvider = (): any => {
  const [activeURL, setActiveURL] = useState<string>("")

  useEffect(() => {
    retrieveActiveURL()
  }, [])

  const retrieveActiveURL = async () => {
    for (const rpcURL of RPC[defaultChainId]) {
      let provider = new ethers.JsonRpcProvider(rpcURL, undefined, { staticNetwork: ethers.Network.from(defaultChainId) });
      
      try {
        await provider._detectNetwork();
        setActiveURL(rpcURL);
        break;
      } catch (err) {
      }
    }
  };

  return activeURL
}

const getProviderOrSigner = (): JsonRpcSigner | Provider => {
  const rpcURL = GetActiveProvider();
  
  return new ethers.JsonRpcProvider(rpcURL, undefined, { staticNetwork: ethers.Network.from(defaultChainId) }) || ethers.getDefaultProvider(rpcURL);
}

export const getOfflineContract = (contractAddress: string, contractABI: any): Contract => {
  if (!isAddress(contractAddress) || contractAddress === ZeroAddress) throw Error(`Invalid 'address' parameter '${contractAddress}'.`)
  
  return new ethers.Contract(contractAddress, contractABI, getProviderOrSigner())
}