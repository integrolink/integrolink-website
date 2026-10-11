import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";
import { ContactExperience } from "@/components/ContactExperience";

export const metadata: Metadata = { title:"Contact | IntegroLink", description:"Contact IntegroLink to discuss your automation, security or Smart Occupancy project.", alternates:{canonical:"/en/contact",languages:{"pt-PT":"/contactos",en:"/en/contact"}} };
export default function ContactPage(){ return <><Navbar/><PageIntro eyebrow="Contact" title="The first step towards an integrated solution begins with a conversation." description="Tell us what you would like to improve. We will help turn that need into a simple, integrated solution that is ready to evolve."><ContactExperience locale="en"/></PageIntro></>; }
