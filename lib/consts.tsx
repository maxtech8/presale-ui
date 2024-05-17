import { mainnet, sepolia } from "wagmi"

export const SEO_TITLE = "Presale"
export const SEO_DESCRIPTION = "Presale UI"
export const SEO_IMAGE = "/SEO_LOGO_ICON.png"
export const CHAIN = process.env.NEXT_PUBLIC_TESTNET ? sepolia : mainnet
export const CHAIN_ID = CHAIN.id
export const PRESALE_MAIN_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_MAIN_ADDRESS
export const PRESALE_BASE_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_BASE_ADDRESS
export const PRESALE_BSC_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_BSC_ADDRESS
export const ADMIN_WALLET = process.env.NEXT_PUBLIC_ADMIN_WALLET
export const ADMIN_SOLANA_WALLET = process.env.NEXT_PUBLIC_ADMIN_SOLANA_ADDRESS
