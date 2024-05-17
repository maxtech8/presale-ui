import { baseSepolia, bscTestnet } from "viem/chains"
import { sepolia } from "wagmi"
import { PRESALE_BASE_ADDRESS, PRESALE_BSC_ADDRESS, PRESALE_MAIN_ADDRESS } from "./consts"

const getPresaleAddress = (chainId) => {
  if (chainId === sepolia.id) return PRESALE_MAIN_ADDRESS
  if (chainId === baseSepolia.id) return PRESALE_BASE_ADDRESS
  if (chainId === bscTestnet.id) return PRESALE_BSC_ADDRESS
  return null
}

export default getPresaleAddress
