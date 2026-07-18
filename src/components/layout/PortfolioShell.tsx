import { About } from "@/components/about/About";
import { Achievements } from "@/components/achievements/Achievements";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { IntroGate } from "@/components/intro/IntroGate";
import { BackgroundShapes } from "@/components/layout/BackgroundShapes";
import { BackToTop } from "@/components/layout/BackToTop";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/navbar/Navbar";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";

type PortfolioShellProps = {
  shouldShowIntro: boolean;
};

export function PortfolioShell({ shouldShowIntro }: PortfolioShellProps) {
  return (
    <>
      <IntroGate shouldShow={shouldShowIntro} />
      <ScrollProgress />
      <BackgroundShapes />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
