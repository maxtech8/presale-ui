/* eslint-disable @next/next/no-img-element */
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { FC } from "react"

interface WalletConnectButtonProps {
  children?: React.ReactNode
}
const WalletConnectButton: FC<WalletConnectButtonProps> = ({ children }) => (
  <ConnectButton.Custom>
    {({ account, chain, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
      const ready = mounted && authenticationStatus !== "loading"
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === "authenticated")

      return (
        <div
          {...(!ready && {
            "aria-hidden": true,
            style: {
              opacity: 0,
              pointerEvents: "none",
              userSelect: "none",
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <button onClick={openConnectModal} type="button" className="w-full">
                  {children ?? "Connect Wallet"}
                </button>
              )
            }
            if (chain.unsupported) {
              return (
                <button onClick={openChainModal} type="button">
                  Wrong network
                </button>
              )
            }
            return <div>{children}</div>
          })()}
        </div>
      )
    }}
  </ConnectButton.Custom>
)

export default WalletConnectButton
