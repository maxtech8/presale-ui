import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import { useAccount } from "wagmi"
import truncateEthAddress from "@/lib/truncateAddress"
import WalletConnectButton from "@/components/WalletConnectButton"
import PhaseButton from "./PhaseButton"

const PhaseFeature = () => {
  const { address, isConnected } = useAccount()
  return (
    <FadeInWhenVisible className="bg-gray_2 w-full h-full rounded-[24px] overflow-hidden">
      <div
        className="w-full h-full px-[30px] py-[50px]
        flex flex-col justify-between
        bg-[url('/images/Rectangle.png')] bg-center bg-cover"
      >
        <div className="flex flex-col">
          <div className="text-[20px] font-poppins_semibold text-white">
            Invest in the Future of AI
            <br />
            birdbyte $BIRDB the Presale
            <br />
            of the Year.
          </div>
          <div className="flex items-center justify-between mt-2">
            <PhaseButton>ETH</PhaseButton>
            <PhaseButton>BASE CHAIN</PhaseButton>
            <PhaseButton>SOL</PhaseButton>
            <PhaseButton>BSC</PhaseButton>
          </div>
        </div>
        <WalletConnectButton>
          <div className="transition duration-[300ms] hover:scale-[1.1] p-2 bg-gray_2 rounded-[30px] active:scale-[1.1]">
            <button
              type="button"
              className={`bg-pink_2 flex justify-center items-center 
                 text-white text-[16px] w-full px-4 py-2 rounded-[20px] font-poppins 
                ${!isConnected ? "normal-case" : "lowercase"}`}
            >
              {!isConnected ? `Connect` : truncateEthAddress(address)}
            </button>
          </div>
        </WalletConnectButton>
      </div>
    </FadeInWhenVisible>
  )
}

export default PhaseFeature
