import axios from "axios"
import handleTxError from "./handleTxError"

const buyBIRDB = async (claimer, amount, chainId) => {
  try {
    const response = await axios.get("/api/whitelist/create", {
      params: {
        claimer,
        amount,
        chainId,
      },
    })

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default buyBIRDB
