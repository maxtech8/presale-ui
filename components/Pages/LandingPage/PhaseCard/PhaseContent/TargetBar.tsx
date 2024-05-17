import Media from "@/shared/Media"

const TargetBar = () => (
  <div className="flex flex-col mt-[20px]">
    <div className="w-full">
      <Media
        type="image"
        link="/images/target_bar.svg"
        blurLink="/images/target_bar.png"
        containerClasses="w-full aspect-[500/12]"
      />
    </div>
    <div className="w-full flex justify-end">
      <span className="text-gray_4 font-poppins_medium mt-1 text-[10px]">Target: $3,000,000</span>
    </div>
  </div>
)

export default TargetBar
