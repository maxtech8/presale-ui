import { usePhaseCard } from "@/providers/PhaseCardProvder"
import Media from "@/shared/Media"

const Cost = () => {
  const { costAmount } = usePhaseCard()

  return (
    <div className="flex flex-col items-start justify-content-center bg-black_3 p-[15px] rounded-[10px]">
      <div className="w-full flex justify-between items-start">
        <p className="text-gray_5 text-[10px] font-poppins_medium">YOU WILL GET</p>
        <div className="flex flex-col items-end text-gray_5 text-[10px] font-poppins_medium">
          <span className="">USD COST</span>
          <span className="font-poppins_medium text-gray_6 text-[10px]">$0.00</span>
        </div>
      </div>
      <div className="w-full flex justify-between items-center mt-[20px]">
        <Media
          type="image"
          link="/images/birdbyte.svg"
          blurLink="/images/birdbyte.png"
          containerClasses="w-[97px] aspect-[90/15]"
        />
        <div className="relative">
          <div
            className="flex w-full gap-2 items-center justify-between
                pr-2 rounded-[10px] p-[5px]"
          >
            <div
              className="w-full bg-black_4 flex justify-between items-center gap-2 
            text-white px-2 py-1.5 rounded-[10px]"
            >
              <Media
                type="image"
                link="/images/SvgjsG1022.svg"
                blurLink="/images/SvgjsG1022.svg"
                containerClasses="w-[20px] aspect-[1/1]"
              />
              <input
                type="text"
                value={costAmount}
                className="bg-black_4 !outline-none !border-none
                                !text-right text-white !font-poppins_medium"
                placeholder="Enter amount"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cost
