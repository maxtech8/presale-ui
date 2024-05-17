import Link from "next/link"

const CTAList = () => (
  <div className="flex gap-[20px]">
    <Link href="/whitepapper">
      <div className="cursor-pointer font-poppins_medium text-[16px] text-gray_1">Whitepaper</div>
    </Link>
    <Link href="/tokennomics">
      <div className="cursor-pointer font-poppins_medium text-[16px] text-gray_1">Tokenomics</div>
    </Link>
    <Link href="/tobuy">
      <div className="cursor-pointer font-poppins_medium  text-[16px] text-gray_1">How to Buy</div>
    </Link>
  </div>
)

export default CTAList
