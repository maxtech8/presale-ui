import useBuyWithSOL from "@/hooks/useBuyWithSOL"

const BuyWithSOLButton = () => {
  const { buyNow, loading } = useBuyWithSOL()

  return (
    <button
      className="w-full flex justify-center items-center 
                    rounded-[30px] p-2 border border-black_2 
                    mt-4 transition duration-[300ms] hover:scale-[1.1]"
      type="button"
      onClick={buyNow}
      disabled={loading}
    >
      <div
        className="w-full bg-pink_1 py-2 px-6 
                    text-white rounded-[20px] font-poppins text-center"
      >
        {loading ? "Pending..." : "Buy Now"}
      </div>
    </button>
  )
}

export default BuyWithSOLButton
