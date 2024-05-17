import { WalletModalButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import BuyWithSOLButton from "../BuyWithSOLButton"

const SOLANAButton = () => {
  const { connected, publicKey } = useWallet()

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{publicKey && connected ? <BuyWithSOLButton /> : <WalletModalButton />}</>
}

export default SOLANAButton
