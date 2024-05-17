import { useEthersSigner } from "@/hooks/useEthersSigner"
import { useAccount } from "wagmi"

const ConnectButton = () => {
  const { address } = useAccount()
  const signer = useEthersSigner()

  return (
    <div
      className="w-full flex justify-center items-center 
    rounded-[30px] p-2 border border-black_2 
    mt-4 transition duration-[300ms] hover:scale-[1.1]"
    >
      <div
        className="w-full bg-pink_1 py-2 px-6 
      text-white rounded-[20px] font-poppins text-center"
      >
        {signer ? address : "Connect"}
      </div>
    </div>
  )
}

export default ConnectButton
