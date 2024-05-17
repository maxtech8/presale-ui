import { Wallet } from "ethers"
import presaleAbi from "@/lib/abi/presale-abi.json"
import getDefaultProvider from "@/lib/getDefaultProvider"
import { parseEther } from "viem"
import { Interface } from "ethers/lib/utils"
import getPresaleAddress from "@/lib/getPresaleAddress"

const createWhitelist = async (claimer: string, amount: string, chainId: string) => {
  const provider = getDefaultProvider(parseInt(chainId, 10))
  const ADMIN_WALLET_PRIVATE_KEY = process.env.ADMIN_PRIVATE_KEY
  const ADMIN_WALLET_ADDRESS = process.env.NEXT_PUBLIC_ADMIN_WALLET
  const wallet = new Wallet(ADMIN_WALLET_PRIVATE_KEY, provider)
  const ethAmount = parseEther(parseFloat(amount).toString())
  const gasPrice = await provider.getGasPrice()
  const gasLimit = 500000
  const nonce = await provider.getTransactionCount(ADMIN_WALLET_ADDRESS, "latest")
  const presaleAddress = getPresaleAddress(parseInt(chainId, 10))

  console.log("ziad", presaleAddress)
  
  const signedTx = {
    to: presaleAddress,
    chainId: parseInt(chainId, 10),
    nonce,
    data: new Interface(presaleAbi).encodeFunctionData("presale", [claimer, ethAmount]),
    gasPrice,
    gasLimit,
  }

  const signed = await wallet.signTransaction(signedTx)
  const tx = await provider.sendTransaction(signed)
  const receipt = await tx.wait()
  return receipt
}

export default async function handler(req: any, res: any) {
  const { amount, claimer, chainId } = req.query
  const response = await createWhitelist(claimer, amount, chainId)
  res.status(200).json(response)
}
