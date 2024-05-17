import Media from "@/shared/Media"

const ChainButton = ({ data, onClick = () => {} }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex gap-2 items-center w-full text-white justify-start text-white font-poppins_medium"
  >
    <Media
      type="image"
      link={data.link}
      blurLink={data.link}
      containerClasses="w-[20px] aspect-[1/1]"
    />
    {data.symbol}
  </button>
)

export default ChainButton
