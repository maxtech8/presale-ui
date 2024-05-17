import Header from "../Header"
import SeoHead from "../SeoHead"
import { ILayout } from "./types"

const BaseLayout = ({ children }: ILayout) => (
  <div className="w-screen">
    <div
      className="w-full top-0 left-0 z-[10]
                bg-[url('/images/screen_bg.png')] bg-cover bg-no-repeat"
    >
      <SeoHead title="Presale" description="Presale UI" image="/SEO_LOGO_ICON.png" />
      <Header />
      {children}
    </div>
  </div>
)

export default BaseLayout
