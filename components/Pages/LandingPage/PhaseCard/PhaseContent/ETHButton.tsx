import { useEthersSigner } from "@/hooks/useEthersSigner"
import WalletConnectButton from "@/components/WalletConnectButton"
import ConnectButton from "../ConnectButton"
import BuyWithETHButton from "../BuyWithETHButton"

const ETHButton = () => {
  const signer = useEthersSigner()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {signer ? (
        <BuyWithETHButton />
      ) : (
        <WalletConnectButton>
          <ConnectButton />
        </WalletConnectButton>
      )}
    </>
  )
}

export default ETHButton
