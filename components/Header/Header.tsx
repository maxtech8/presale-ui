import { ConnectButton } from "@rainbow-me/rainbowkit"
import CTASection from "./CTASection"
import Container from "../Container"

const Header = () => (
  <Container
    containerClassName="flex items-center justify-between"
    contentClassName="w-full grid grid-cols-10 gap-[10px]"
  >
    <div className="col-span-6">
      <CTASection />
    </div>
    <div className="flex items-center col-span-4 justify-center px-[10px] py-[10px] rounded-[20px]">
      <ConnectButton />
    </div>
  </Container>
)

export default Header
