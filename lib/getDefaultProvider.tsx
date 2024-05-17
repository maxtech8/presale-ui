import { ethers } from "ethers"
import { bsc, bscTestnet } from "@wagmi/core/chains"
import getAlchemyBaseUrl from "./getAlchemyBaseUrl"

const BSC = "https://rpc.ankr.com/bsc"
const BSC_TESTNET = "https://bsc-testnet-rpc.publicnode.com"

const getDefaultProvider = (chainId: number) => {
  const base = getAlchemyBaseUrl(chainId)
  if (chainId === bsc.id) {
    return ethers.getDefaultProvider(BSC)
  }
  if (chainId === bscTestnet.id) {
    return ethers.getDefaultProvider(BSC_TESTNET)
  }
  const rpc = `${base}v2/${process.env.NEXT_PUBLIC_ALCHEMY_API_KEY}`
  return ethers.getDefaultProvider(rpc)
}

export default getDefaultProvider
