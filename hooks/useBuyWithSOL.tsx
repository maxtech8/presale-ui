import { useChainId } from "wagmi"
import { useState } from "react"
import handleTxError from "@/lib/handleTxError"
import { usePhaseCard } from "@/providers/PhaseCardProvder"
import { toast } from "react-toastify"
import useSendSOL from "./useSendSOL"
import buyBIRDB from "@/lib/buyBIRDB"
import isEVMAddress from "@/lib/isEVMAddress"

const useBuyWithSOL = () => {
  const [loading, setLoading] = useState(false)
  const { baseAmount, evmAddress } = usePhaseCard()
  const { sendSOL } = useSendSOL()
  const { costAmount } = usePhaseCard()
  const chainId = useChainId()

  const buyNow = async () => {
    setLoading(true)
    try {
      if (!isEVMAddress(evmAddress)) {
        toast.error("Invalid EVM address!")
        setLoading(false)
        return
      }
      if (parseFloat(baseAmount) === 0) {
        setLoading(false)
        toast.error("Empty amount!")
        return
      }
      const depositResponse = await sendSOL(baseAmount)
      const { error } = depositResponse as any
      if (error) {
        setLoading(false)
        return
      }
      const response = await buyBIRDB(evmAddress, costAmount, chainId)
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

export default useBuyWithSOL
