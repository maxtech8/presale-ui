const Prices = () => (
  <div className="grid grid-cols-2 gap-[20px] mt-[10px]">
    <div className="flex items-center justify-center w-full border-[1.2px] border-gray_5 rounded-[30px]">
      <p className="font-poppins_medium text-gray_5 py-2 px-3 text-center text-[10px]">
        Listing Price = $0.0700
        <span className="text-green_3">&nbsp; (+700.00%)</span>
      </p>
    </div>

    <div className="w-full border border-gray_5 rounded-[30px] border-[1.2px] border-gray_5 flex items-center justify-center">
      <p className="font-poppins_medium text-gray_5 py-2 px-3 text-center text-[10px]">
        Next Price = $0.0200
        <span className="text-green_3">&nbsp; (+100.00%)</span>
      </p>
    </div>
  </div>
)

export default Prices
