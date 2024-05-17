import useBaseChainAmount from "@/hooks/useBaseChainAmount"
import useCostAmount from "@/hooks/useCostAmount"
import { createContext, useMemo, useContext, useState, useEffect } from "react"
import { useAccount } from "wagmi"

const PhaseCardContext = createContext(null)

const PhaseCardProvider = ({ children }) => {
  const baseChainData = useBaseChainAmount()
  const costData = useCostAmount(baseChainData.baseAmount)
  const [evmAddress, setEvmAddress] = useState("")
  const { address } = useAccount()

  useEffect(() => {
    setEvmAddress(address)
  }, [address])

  const value = useMemo(
    () => ({
      evmAddress,
      setEvmAddress,
      ...baseChainData,
      ...costData,
    }),
    [baseChainData, costData, evmAddress, setEvmAddress],
  )

  return <PhaseCardContext.Provider value={value}>{children}</PhaseCardContext.Provider>
}

export const usePhaseCard = () => {
  const context = useContext(PhaseCardContext)
  if (!context) {
    throw new Error("usePhaseCard must be used within a PhaseCardProvider")
  }
  return context
}

export default PhaseCardProvider
