import { useAccount, useChainId } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import useSendEhter from "./useSendEhter"
import useSendUSDTorUSDC from "./useSendUSDTorUSDC"
import buyBIRDB from "@/lib/buyBIRDB"

const useBuyWithETH = () => {
  const { address } = useAccount()
  const [loading, setLoading] = useState(false)
  const { selectedChain, baseAmount } = usePhaseCard()
  const { sendEther } = useSendEhter()
  const { sendUSDTorUSDC } = useSendUSDTorUSDC()
  const { costAmount } = usePhaseCard()
  const chainId = useChainId()

  const buyNow = async () => {
    setLoading(true)
    try {
      let depositResponse = null
      const amount = parseFloat(baseAmount)
      if (amount === 0) {
        setLoading(false)
        toast.error("Empty amount!")
        return
      }
      switch (selectedChain.symbol) {
        case "ETH":
          depositResponse = await sendEther(amount)
          break
        case "USDT":
        case "USDC":
          depositResponse = await sendUSDTorUSDC(amount)
          break
        default:
          break
      }
      const { error } = depositResponse as any
      if (error) {
        setLoading(false)
        return
      }
      const response = await buyBIRDB(address, costAmount, chainId)
      const { buyError } = response as any
      if (buyError) {
        setLoading(false)
        return
      }
      setLoading(false)
      toast.success("Success!")
      return response
    } catch (error) {
      handleTxError(error)
      setLoading(false)
      return { error }
    }
  }
  return {
    loading,
    baseAmount,
    buyNow,
  }
}

export default useBuyWithETH
