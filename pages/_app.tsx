import "../styles/globals.css"
import "@rainbow-me/rainbowkit/styles.css"
import "react-toastify/dist/ReactToastify.css"
import "@solana/wallet-adapter-react-ui/styles.css"

import type { AppProps } from "next/app"
import { RainbowKitProvider, getDefaultWallets, connectorsForWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig, WagmiConfig } from "wagmi"
import { base, baseSepolia, bsc, bscTestnet, mainnet, sepolia } from "@wagmi/core/chains"
import { ToastContainer } from "react-toastify"
import { useMemo } from "react"
import { alchemyProvider } from "wagmi/providers/alchemy"
import { publicProvider } from "wagmi/providers/public"
import { ThemeProvider } from "@/providers/ThemeProvider"

import { WalletAdapterNetwork } from "@solana/wallet-adapter-base"
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui"
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets"
import { clusterApiUrl } from "@solana/web3.js"
import { EthPriceProvider } from "@/providers/EthPriceProvider"

const myChains = process.env.NEXT_PUBLIC_TESTNET
  ? [sepolia, baseSepolia, bscTestnet]
  : [mainnet, base, bsc]
const { chains, publicClient, webSocketPublicClient } = configureChains(myChains as any, [
  alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY }),
  publicProvider(),
])

const { wallets } = getDefaultWallets({
  appName: "PRESALE-UI",
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string,
  chains,
})

const connectors = connectorsForWallets(wallets)
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

function MyApp({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const anchorWallets = useMemo(
    () => [new PhantomWalletAdapter()],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network],
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={anchorWallets} autoConnect>
        <WalletModalProvider>
          <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider modalSize="compact" chains={chains}>
              <EthPriceProvider>
                <ThemeProvider>
                  <Component {...pageProps} />
                  <ToastContainer />
                </ThemeProvider>
              </EthPriceProvider>
            </RainbowKitProvider>
          </WagmiConfig>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
export default MyApp
