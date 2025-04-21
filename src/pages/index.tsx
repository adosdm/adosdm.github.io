import Head from "next/head";
import MainVisualSection from "@/sections/MainVisualSection";
import OverviewSection from "@/sections/OverviewSection";
import LaptopSection from "@/sections/LaptopSection";
import SolutionSection from "@/sections/SolutionSection";
import OverviewGridSection from "@/sections/OverviewGridSection";
import BannerSection from "@/sections/BannerSection";
import ReviewSlideSection from "@/sections/ReviewSlideSection";
import GrowthSlideSection from "@/sections/GrowthSlideSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frankit</title>
      </Head>
      <MainVisualSection />
      <OverviewSection />
      <LaptopSection />
      <SolutionSection />
      <OverviewGridSection />
      <BannerSection />
      <ReviewSlideSection />
      <GrowthSlideSection />
      <ContactSection />
    </>
  );
}
