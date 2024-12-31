
export const defaultChainId = 545

type ChainInfo = {
  explorer: string
  label: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: 18
  }
  rpcUrl: string
}

export const CHAIN_INFO: { [key: number]: ChainInfo } = {
  545: {
    explorer: "https://evm-testnet.flowscan.io",
    label: "EVM on Flow Testnet",
    nativeCurrency: { name: "FLOW", symbol: "FLOW", decimals: 18 },
    rpcUrl: "https://testnet.evm.nodes.onflow.org",
  },
}

// URLs
export const METAMASK_URL = 'https://metamask.io/download/'