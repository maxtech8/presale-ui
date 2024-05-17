import { useEthPrice } from "@/providers/EthPriceProvider"
import { useMemo } from "react"

const useCostAmount = (baseAmount) => {
  const { coinPrice } = useEthPrice()

  const costAmount = useMemo(() => {
    const amount = (baseAmount * coinPrice) / 0.01
    return parseFloat(amount.toFixed(2))
  }, [baseAmount, coinPrice])

  return {
    costAmount,
  }
}

export default useCostAmount
