import handleTxError from "@/lib/handleTxError"
import { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js"
import { ADMIN_SOLANA_WALLET } from "@/lib/consts"
import { useWallet, useConnection } from "@solana/wallet-adapter-react"

const useSendSOL = () => {
  const { publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()

  const sendSOL = async (amount) => {
    try {
      const birdByteSolanaAddress = new PublicKey(ADMIN_SOLANA_WALLET)
      const {
        context: { slot: minContextSlot },
        value: { blockhash, lastValidBlockHeight },
      } = await connection.getLatestBlockhashAndContext()

      const transaction = new Transaction({
        recentBlockhash: blockhash,
      }).add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: birdByteSolanaAddress,
          lamports: amount * LAMPORTS_PER_SOL,
        }),
      )

      const signature = await sendTransaction(transaction, connection, { minContextSlot })
      await connection.confirmTransaction({ blockhash, lastValidBlockHeight, signature })

      return signature
    } catch (error) {
      handleTxError(error)
      return { error }
    }
  }

  return {
    sendSOL,
  }
}

export default useSendSOL
