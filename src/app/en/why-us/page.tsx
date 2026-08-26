import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { WhyUsExperience } from "@/components/WhyUsExperience";

export const metadata: Metadata = { title:"Why us? | IntegroLink", description:"Discover IntegroLink's approach to technology integration." };
export default function WhyUsPage(){ return <><Navbar/><PageIntro eyebrow="Why us?" title="Every project is designed to meet your needs, today and in the future." description="We create value through integrated, tailored solutions that are ready to evolve — always keeping simplicity at the heart of the experience."><WhyUsExperience locale="en"/></PageIntro></>; }
