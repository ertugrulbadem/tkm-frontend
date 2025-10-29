import AutoScrollProjects from "@/components/home/AutoScrollProjects";
import Banner from "@/components/home/Banner";
import HeroSlider from "@/components/home/HeroSlider";
import ProjectsSection from "@/components/home/ProjectsSection";
import Services from "@/components/home/Services";
import StatsGrid from "@/components/home/StatsGrid";
import WorldBussines from "@/components/home/WorldBussines";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <HeroSlider /> */}
      <Services />
      <StatsGrid />
      {/* <AutoScrollProjects /> */}
      <WorldBussines />
      <ProjectsSection />
    </div>
  );
}
