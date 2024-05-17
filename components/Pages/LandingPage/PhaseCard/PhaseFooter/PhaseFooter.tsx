import Link from "next/link"

const PhaseFooter = () => (
  <div className="flex flex-col mt-6">
    <div className="w-full flex justify-center gap-[30px]">
      <Link href="/howtobuy">
        <div className="cursor-pointer text-pink_2 font-poppins_medium text-[10px]">
          How to buy?
        </div>
      </Link>
      <Link href="/help">
        <div className="cursor-pointer text-pink_2 font-poppins_medium text-[10px]">Get Help</div>
      </Link>
      <Link href="/exchange">
        <div className="cursor-pointer text-pink_2 font-poppins_medium text-[10px]">
          Exchange tokens
        </div>
      </Link>
    </div>
    <p className="text-gray_4 text-[8px] text-center mt-2 font-poppins_medium">
      © 2024 Copyright birdbyte. All Rights Reserved.
    </p>
  </div>
)

export default PhaseFooter
