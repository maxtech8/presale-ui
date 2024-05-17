/* eslint-disable no-console */
import axios from "axios"

const getCoinPrice = async (type: string) => {
  let response
  try {
    response = await axios.get(
      `https://min-api-v2.cryptocompare.com/data/price?fsym=${type}&tsyms=USD&api_key=${process.env.COINMARKETCAP_API_KEY}`,
    )
  } catch (ex) {
    response = { data: false }
  }
  return response
}

export default async function handler(req: any, res: any) {
  const { type } = req.query
  const { data } = await getCoinPrice(type)
  res.status(200).json(data)
}
