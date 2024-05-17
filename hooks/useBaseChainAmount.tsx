import { useState } from "react"
export const chainsData = [
  { link: "/images/ETH.svg", symbol: "ETH", address: "" },
  {
    link: "/images/usdt.svg",
    symbol: "USDT",
    address: {
      "11155111": "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0",
      "84532": "0x8ba3e15C01BFEb9708f909Ee14d9D54B2523fE71",
      "97": "0x29D827A5a08D50bD6f64bA135bCFE2C5d1108711",
    },
  },
  {
    link: "/images/usdc.svg",
    symbol: "USDC",
    address: {
      "11155111": "0xf08A50178dfcDe18524640EA6618a1f965821715",
      "84532": "0xf7C041f1223fd7Ac1Dcd3d3Ce0fb98d05980399D",
      "97": "0xf794755207423cECE77FDc4cf2Ed9e935cEA2d12",
    },
  },
  { link: "/images/Sol.svg", symbol: "SOL" },
]

const useBaseChainAmount = () => {
  const [baseAmount, setBaseAmount] = useState(0)
  const [selectedChain, setSelectedChain] = useState(chainsData[0])

  const onChangeBaseAmount = (e) => {
    setBaseAmount(e.target.value)
  }
  return {
    baseAmount,
    setBaseAmount,
    onChangeBaseAmount,
    selectedChain,
    setSelectedChain,
  }
}

export default useBaseChainAmount
