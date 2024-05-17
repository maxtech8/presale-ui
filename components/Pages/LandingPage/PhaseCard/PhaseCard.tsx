import FadeInWhenVisible from "@/components/FadeInWhenVisible"
import PhaseContent from "./PhaseContent"
import PhaseFooter from "./PhaseFooter/PhaseFooter"
import PhaseHead from "./PhaseHead/PhaseHead"

const PhaseCard = () => (
  <FadeInWhenVisible className="px-[30px] py-[50px] bg-gray_2 w-full rounded-[24px]">
    <PhaseHead />
    <PhaseContent />
    <PhaseFooter />
  </FadeInWhenVisible>
)

export default PhaseCard
