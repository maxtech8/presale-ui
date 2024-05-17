import { ADMIN_WALLET } from "@/lib/consts"
import handleTxError from "@/lib/handleTxError"
import { sendTransaction, waitForTransaction } from "@wagmi/core"
import { parseEther } from "viem"
import { useChainId } from "wagmi"

const useSendEhter = () => {
  const chainId = useChainId()

  const sendEther = async (amount) => {
    try {
      const tx = await sendTransaction({
        to: ADMIN_WALLET,
        value: parseEther(amount.toString()),
      })
      const receipt = await waitForTransaction({ hash: tx.hash, chainId })
      return receipt
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendEther,
  }
}

export default useSendEhter
