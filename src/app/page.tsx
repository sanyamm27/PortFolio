import { TheBlueprint } from "@/components/TheBlueprint";
import { TechnicalDNA } from "@/components/TechnicalDNA";
import { CaseStudies } from "@/components/CaseStudies";
import { TheLab } from "@/components/TheLab";
import { NextSteps } from "@/components/NextSteps";
import { ScrollNarrativeWrapper } from "@/components/ScrollNarrativeWrapper";

export default function Home() {
  return (
    <ScrollNarrativeWrapper>
      <main className="max-w-7xl mx-auto flex flex-col items-center pb-20 overflow-hidden w-full">
        <TheBlueprint />
        <TechnicalDNA />
        <CaseStudies />
        <TheLab />
        <NextSteps />
      </main>
    </ScrollNarrativeWrapper>
  );
}
