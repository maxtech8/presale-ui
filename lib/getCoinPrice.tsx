import axios from "axios"

const getCoinPrice = async (coinType: string) => {
  try {
    const response: any = await axios.get("/api/getCoinPrice", {
      params: {
        type: coinType,
      },
    })
    return response?.data?.USD
  } catch (err) {
    return 0
  }
}

export default getCoinPrice
