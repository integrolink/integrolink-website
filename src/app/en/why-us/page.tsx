import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { WhyUsExperience } from "@/components/WhyUsExperience";
import { ContextImageStrip } from "@/components/ContextImageStrip";

export const metadata: Metadata = { title:"Why us? | IntegroLink", description:"Discover IntegroLink's approach to integrated, independent and future-ready technology.", alternates:{canonical:"/en/why-us",languages:{"pt-PT":"/porque-nos",en:"/en/why-us"}} };
export default function WhyUsPage(){ return <><Navbar/><PageIntro eyebrow="Why us?" title="Every project is designed to meet your needs, today and in the future." description="We create value through integrated, tailored solutions that are ready to evolve — always keeping simplicity at the heart of the experience."><ContextImageStrip items={[{src:"/fotos/foto11.png",alt:"Integrated energy and equipment management",caption:"Systems designed as a whole"},{src:"/fotos/foto12.png",alt:"Integrated security sensors and control",caption:"Discreet technology in the space"},{src:"/fotos/foto4.jpeg",alt:"IntegroLink control interface",caption:"Hidden complexity, simple operation",contain:true}]}/><WhyUsExperience locale="en"/></PageIntro></>; }
