import BrandsSections from "@/components/references/BrandsSections"
import ReferencesBanner from "@/components/references/ReferencesBanner"
import StatsSection from "@/components/references/StatsSection"

function page() {
  return (
    <div>
        <ReferencesBanner />
        <StatsSection />
        <BrandsSections />
    </div>
  )
}

export default page