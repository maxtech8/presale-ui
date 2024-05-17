import { usePhaseCard } from "@/providers/PhaseCardProvder"
import TargetBar from "./TargetBar"
import Prices from "./Prices"
import BaseChains from "../BaseChains"
import Amount from "../Amount"
import Cost from "../Cost"
import ETHButton from "./ETHButton"
import SOLANAButton from "./SOLANAButton"

const PhaseContent = () => {
  const { selectedChain, evmAddress, setEvmAddress } = usePhaseCard()
  const shouldBuyOnSolana = selectedChain?.symbol === "SOL"

  return (
    <>
      <TargetBar />
      <Prices />
      <div className="grid grid-cols-2 gap-x-[20px] gap-y-[10px] mt-[10px]">
        {shouldBuyOnSolana && (
          <div className="flex flex-col items-end col-span-2">
            <p className="text-gray_4 font-poppins_medium mt-1 text-[10px] pb-1">EVM Address</p>
            <input
              type="text"
              value={evmAddress}
              className="bg-black_3 rounded-[10px]
            px-4 py-3 w-full
            !outline-none !border-none text-[16px]
            !text-right text-white !font-poppins_medium"
              placeholder="Enter EVM address"
              onChange={(e) => setEvmAddress(e.target.value)}
            />
          </div>
        )}
        <BaseChains />
        <Amount />
        <div className="col-span-2">
          <Cost />
        </div>
      </div>
      {shouldBuyOnSolana ? <SOLANAButton /> : <ETHButton />}
    </>
  )
}

export default PhaseContent
