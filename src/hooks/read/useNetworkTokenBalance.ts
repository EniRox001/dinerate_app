import { useEffect, useState } from "react";
import { useWeb3React } from '@web3-react/core'
import { convertToDecimalValue } from "@/functions/misc-functions";

export default function useNetworkTokenBalance() {
  const { account, provider } = useWeb3React();
  const [networkTokenBalance, setNetworkTokenBalance] = useState<number>(0)
  const tokenSymbol = 'FLOW'

  useEffect(() => {
    async function getTokenSymbol() {
      if (account) {
        try {
          const userBalance = await provider?.getBalance(account)
          let convertedBalance = convertToDecimalValue(userBalance?.toString(), 18) || 0
          setNetworkTokenBalance(convertedBalance)
        } catch (error) {
        }
      }
    }

    getTokenSymbol()
  }, [account, provider])

  return {tokenSymbol, networkTokenBalance};
}